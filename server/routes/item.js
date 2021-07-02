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


router.get("/course/:slug", read);


module.exports = router;
