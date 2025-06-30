import express from "express";
import { router as enrollCourseRoute } from "../routes/enrollCourse";
import { router as contactUsRoute } from "../routes/contactUs";

const mainRouter = express.Router();

// Middleware to log requests
mainRouter.use("/enrollcourse", enrollCourseRoute);
mainRouter.use("/contactus", contactUsRoute);


export { mainRouter };
