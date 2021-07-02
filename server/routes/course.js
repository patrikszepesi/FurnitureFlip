import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin, isInstructor, isEnrolled } from "../middlewares";

// controllers
import {
  uploadImage,
  removeImage,
  create,
  read,

  update,
  updateLesson,
  publishCourse,
  unpublishCourse,
  courses,
  checkEnrollment,
  paidEnrollment,
  stripeSuccess,
  userCourses,
  listCompleted,
  search,
  ratings,
  invoice
} from "../controllers/course";



router.get("/courses", courses);
// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);
// course
router.post("/course", requireSignin, isInstructor, create);
router.put("/course/:slug", requireSignin, update);
router.get("/course/:slug", read);


// publish unpublish
router.put("/course/publish/:courseId", requireSignin, publishCourse);
router.put("/course/unpublish/:courseId", requireSignin, unpublishCourse);

// `/api/course/lesson/${slug}/${course.instructor._id}`,
router.post("/ratings/:courseId", requireSignin, ratings);

router.put("/course/lesson/:slug/:instructorId", requireSignin, updateLesson);

router.get("/check-enrollment/:courseId", requireSignin, checkEnrollment);
router.get("/course/invoice/:userId", requireSignin, invoice);

// enrollment
router.post("/paid-enrollment/:itemId", requireSignin, paidEnrollment);
router.get("/stripe-success/:courseId", requireSignin, stripeSuccess);

router.get("/user-courses", requireSignin, userCourses);
router.get("/user/course/:slug", requireSignin, read);

// mark completed
router.post("/list-completed", requireSignin, listCompleted);
router.post("/search/filters", search);



module.exports = router;
