import mongoose from "mongoose";
const moment = require('moment');

const { ObjectId } = mongoose.Schema;

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    content: {
      type: {},
      minlength: 200,
    },
    video: {},
    free_preview: {
      type: Boolean,
      default: false,
    },


  },
  { timestamps: true }
);

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: {},
      minlength: 200,
      required: true,
    },
    price: {
      type: Number,
      default: 9.99,
    },
    image: {},
    category: String,
    difficulty: String,
    published: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: true,
    },
    star:Number,
    instructor: {
      type: ObjectId,
      ref: "User",
      required: true,
    },

    ratings: [
      {
        star:{type:Number,required:true},
        text:{type:String,required:true},
        name:{type:String,required:true},
        disable:[String],
        date:{type:Date,default:moment()},
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
    lessons: [lessonSchema],
    disable:[String]

  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
