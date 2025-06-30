import { axiosInstance } from "../../axiosInstance";
import { apiErrorHandler } from "../apiErrorHandling";

export const enrollCourse = async (
  name: string, email: string, phone: string, message: string, course: any
) => {
  try {
    const response = await axiosInstance.post("/enrollcourse", {
      name, email, phone, message, course
    });
    return response.data;
  } catch (err: any) {
    return apiErrorHandler(err);
  }
};