import { axiosInstance } from "../../axiosInstance";
import { apiErrorHandler } from "../apiErrorHandling";

export const contactUs = async (
  name: string, email: string, phone: string, message: string, subject: string
) => {
  try {
    const response = await axiosInstance.post("/contactus", {
      name, email, phone, message, subject
    });
    return response.data;
  } catch (err: any) {
    return apiErrorHandler(err);
  }
};