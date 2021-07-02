import mongoose from "mongoose";
const moment = require('moment');

const { ObjectId } = mongoose.Schema;


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
      required:true
    },
    instructor: {
      type: ObjectId,
      ref: "User",
      required: true,
    },

    category: {
      type:String,
      required:true
    },
    subCategory:{
      type:String,
      required:true
    },
    quality:{
      type:String,
      required:true
    },
    item:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    street:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    phone:{
      type:Number,
      required:true
    },

    sold:false,
    
    images: {
        type: Array,
      },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
