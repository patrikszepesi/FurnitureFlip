import AWS from "aws-sdk";
import { nanoid } from "nanoid";
import Course from "../models/course";
import Completed from "../models/completed";
import slugify from "slugify";
import { readFileSync } from "fs";
import User from "../models/user";
const stripe = require("stripe")(process.env.STRIPE_SECRET);



const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);
const SES = new AWS.SES(awsConfig);

export const uploadImage = async (req, res) => {
  // console.log(req.body);
  try {
    const { image } = req.body;
    if (!image) return res.status(400).send("No image");

    // prepare the image
    const base64Data = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const type = image.split(";")[0].split("/")[1];

    // image params
    const params = {
      Bucket: "vidz-online",
      Key: `${nanoid()}.${type}`,
      Body: base64Data,
      ACL: "public-read",
      ContentEncoding: "base64",
      ContentType: `image/${type}`,
    };

    // upload to s3
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeImage = async (req, res) => {
  try {
    const { image } = req.body;

    // image params
    const params = {
      Bucket: image.Bucket,
      Key: image.Key,
    };

    // send remove request to s3
    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      res.send({ ok: true });
    });
  } catch (err) {
    console.log(err);
  }
};

export const create = async (req, res) => {
  // console.log("CREATE COURSE", req.body);
  // return;
  try {
    const alreadyExist = await Course.findOne({
      slug: slugify(req.body.name.toLowerCase()),
    });
    if (alreadyExist) return res.status(400).send("Title is taken");

    const course = await new Course({
      slug: slugify(req.body.name),
      instructor: req.user._id,
      ...req.body,
    }).save();

    res.json(course);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Course create failed. Try again.");
  }
};

export const read = async (req, res) => {
  console.log("READ WAS HIT, THIS IS WHAT YOU WANT")
  try {
    const course = await Course.findOne({ _id: req.params.slug })
      .populate("instructor", "_id name")
      .exec();
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};


//

export const update = async (req, res) => {
  console.log("mi a szar")
  console.log(req.params)
  try {
    const { slug } = req.params;
    // console.log(slug);
    const course = await Course.findOne({ _id:slug }).exec();
     console.log("COURSE FOUND => ", course);
    if (req.user._id != course.instructor) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.findOneAndUpdate({ _id:slug }, req.body, {
      new: true,
    }).exec();
    console.log(updated)

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
};



export const updateLesson = async (req, res) => {
  try {
    // console.log("UPDATE LESSON", req.body);
    const { slug } = req.params;
    const { _id, title, content, video, free_preview,chapter,counter } = req.body;
    console.log(req.body)
    const course = await Course.findOne({ slug }).select("instructor").exec();

    if (course.instructor._id != req.user._id) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.updateOne(
      { "lessons._id": _id },
      {
        $set: {
          "lessons.$.chapter":chapter,
          "lessons.$.counter":counter,
          "lessons.$.title": title,
          "lessons.$.content": content,
          "lessons.$.video": video,
          "lessons.$.free_preview": free_preview,
        },
      },
      { new: true }
    ).exec();
    // console.log("updated", updated);
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Update lesson failed");
  }
};

export const publishCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).select("instructor").exec();

    if (course.instructor._id != req.user._id) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.findByIdAndUpdate(
      courseId,
      { published: true },
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Publish course failed");
  }
};

export const unpublishCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).select("instructor").exec();

    if (course.instructor._id != req.user._id) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.findByIdAndUpdate(
      courseId,
      { published: false },
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unpublish course failed");
  }
};

export const courses = async (req, res) => {
  const all = await Course.find({ published: true })
    .populate("instructor", "_id name")
    .exec();
  res.json(all);
};

export const invoice = async (req, res) => {
  console.log("hi fuck fuck fuckt")
  console.log(req.params.userId)
  console.log("yellow")

  // let courseIds=req.params.courses.split(',')

  try{
     var foo= await User.findOne({_id:req.params.userId}).select('purchases -_id')

   }catch(err){
     console.log(err)
   }
  //console.log(req.params.userId)
  // var classes=[];
  // for(let i=0;i<courseIds.length;i++){
  //   try{
  //     var foo= await Course.find({_id:courseIds[i]})
  //     classes.push(foo)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  console.log(foo)
  res.json(foo)
};

export const checkEnrollment = async (req, res) => {
  const { courseId } = req.params;
  // find courses of the currently logged in user
  const user = await User.findById(req.user._id).exec();
  // check if course id is found in user courses array
  let ids = [];
  let length = user.courses && user.courses.length;
  for (let i = 0; i < length; i++) {
    ids.push(user.courses[i].toString());
  }
  res.json({
    status: ids.includes(courseId),
    course: await Course.findById(courseId).exec(),
  });
};



export const paidEnrollment = async (req, res) => {

  try {
    // check if course is free or paid
    const course = await Course.findById(req.params.itemId)
      .populate("instructor")
      .exec();

    // if (!course.paid) return;
    // application fee 30%
    const fee = (course.price * 30) / 100;
    // create stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // purchase details
      line_items: [
        {
          name: course.name,
          amount: Math.round(course.price.toFixed(2) * 100),
          currency: "usd",
          quantity: 1,
        },
      ],
      // charge buyer and transfer remaining balance to seller (after fee)
      payment_intent_data: {
        application_fee_amount: Math.round(fee.toFixed(2) * 100),
        transfer_data: {
          destination: course.instructor.stripe_account_id,
        },
      },
      // redirect url after successful payment
      success_url: `${process.env.STRIPE_SUCCESS_URL}/${course._id}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });
    console.log("SESSION ID => ", session);

    await User.findByIdAndUpdate(req.user._id, {
      stripeSession: session,
    }).exec();
    res.send(session.id);
  } catch (err) {
    console.log("PAID ENROLLMENT ERR", err);
    return res.status(400).send("Enrollment create failed");
  }
};
//
export const stripeSuccess = async (req, res) => {
  try {
    // find course
    const course = await Course.findById(req.params.courseId).exec();
    // get user from db to get stripe session id
    const user = await User.findById(req.user._id).exec();
    // if no stripe session return
    if (!user.stripeSession.id) return res.sendStatus(400);
    // retrieve stripe session
    const session = await stripe.checkout.sessions.retrieve(
      user.stripeSession.id
    );
    console.log("STRIPE SUCCESS", session.customer_details.email);
    // if session payment status is paid, push course to user's course
    if (session.payment_status === "paid") {
      await User.findByIdAndUpdate(user._id, {
        $push: {purchases: {time:Date.now(), courseId: course._id, course:course } },
        $addToSet: { courses: course._id },//add purchase date and course id
        $set: { stripeSession: {} },
      }).exec();
    }
    try {

      // console.log(email);

      // prepare for email
      const params = {
        Source: process.env.EMAIL_FROM,
        Destination: {
          ToAddresses: [session.customer_details.email],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `
                  <html>
                    <h1>Vásárlás megerősítése</h1>
                    <p>User this code to reset your password</p>

                    <h2 style="color:red;">${course.email}</h2>
                    <h2 style="color:red;">${course.phone}</h2>
                    <i>edemy.com</i>
                  </html>
                `,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Vásárlás",
          },
        },
      };

      const params2 = {
        Source: process.env.EMAIL_FROM,
        Destination: {
          ToAddresses: [course.email],
        },
        Message: {
          Body: {
            Html: {
              Charset: "UTF-8",
              Data: `
                  <html>
                    <h1>Valaki akar tőled venni</h1>
                    <p>User this code to reset your password</p>

                    <h2 style="color:red;">${course.name}</h2>
                    <h2 style="color:red;">${course.item}</h2>
                    <i>edemy.com</i>
                  </html>
                `,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: "Vásárlás",
          },
        },
      };

      const emailSent = SES.sendEmail(params).promise();
      emailSent
        .then((data) => {
          console.log("success");
          //res.json({ ok: true });
        })
        .catch((err) => {
          console.log(err);
        });

        const emailSentToSeller = SES.sendEmail(params2).promise();
        emailSentToSeller
          .then((data) => {
            console.log("success");
            //res.json({ ok: true });
          })
          .catch((err) => {
            console.log(err);
          });

    } catch (err) {
      console.log(err);
    }



    res.json({ success: true, course });
  } catch (err) {
    console.log("STRIPE SUCCESS ERR", err);
    res.json({ success: false });
  }
};

export const userCourses = async (req, res) => {
  const user = await User.findById(req.user._id).exec();
  const courses = await Course.find({ _id: { $in: user.courses } })
    .populate("instructor", "_id name")
    .exec();
  res.json(courses);
};



export const listCompleted = async (req, res) => {
  try {
    const list = await Completed.findOne({
      user: req.user._id,
      course: req.body.courseId,
    }).exec();
    list && res.json(list.lessons);
  } catch (err) {
    console.log(err);
  }
};





export const ratings = async (req, res) => {
  const { star,text,userToRate,name,average } = req.body.toSend;
  console.log(req.body.toSend)

  const course = await Course.findById(req.params.courseId).exec();

  const user = await User.findOne({ email: userToRate.email }).exec();

  let existingRatingObject = course.ratings.find(
  (ele) => ele.postedBy.toString() === user._id.toString()
);

if (existingRatingObject === undefined) {

  let disabled = await Course.findByIdAndUpdate(
    course._id,
    {
      $push: {disable: user._id },
    }).exec()

    let ratingAdded = await Course.findByIdAndUpdate(
      course._id,
      {
        $push: {ratings: {name,text, star, postedBy: user._id , disable:user._id} },

        $set:{star:average},

      },
      { new: true }
    ).exec();
    console.log("ratingAdded", ratingAdded);
    res.json(ratingAdded);
  } else {
    // if user has already left rating, update it
    const ratingUpdated = await Course.updateOne(
      {
        ratings: { $elemMatch: existingRatingObject },
      },
      { $set: { "ratings.$.star": star, "ratings.$.text":text, "ratings.$.name":name } },
      { new: true }
    ).exec();
    console.log("ratingUpdated", ratingUpdated);
    res.json(ratingUpdated);
  }

};


export const search = async (req, res) => {
  const {
    toSend
  } = req.body;
  console.log(req.body)

let {subcategory, item, category,price,quality,city}=toSend

console.log(req.body.toSend)
const handleSearch=async(queryObject)=>{
  console.log("hit")
 try {
   let courses = await Course.find(queryObject)
     .populate("instructor", "_id name")
     .exec();
console.log(courses)
   return res.json(courses,);
    } catch (err) {
   console.log(err);
    }
 }

   let queryObject={};
  if(req.body.toSend){
    if(subcategory.length>0){
    queryObject = {...queryObject, subcategory}
    }
    if( category!=undefined && category.length>0){
      queryObject={...queryObject,category}
    }
    if(item.length>0){
      queryObject={...queryObject,item}
    }
    if(quality.length>0){
      queryObject={...queryObject,quality}
    }
    if(city.length>0){
      queryObject={...queryObject,city}
    }

    console.log(queryObject)
  }
   handleSearch(queryObject)

};
