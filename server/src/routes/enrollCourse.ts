import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message, course } = req.body;

    if (!name || !email || !phone || !message || !course) {
      res
        .status(400)
        .json({ success: false, message: "All fields are required" });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 📩 Format the email in HTML
    const htmlBody = `
  <h2>📚 New Course Enrollment</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Message:</strong> ${message || "No message provided."}</p>

  <h3>📝 Course Details:</h3>
  <ul>
    <li><strong>Title:</strong> ${course.title}</li>
    <li><strong>Description:</strong> ${course.description}</li>
    <li><strong>Category:</strong> ${course.category}</li>
    <li><strong>Level:</strong> ${course.level}</li>
    <li><strong>Instructor:</strong> ${course.instructor}</li>
    <li><strong>Start Date:</strong> ${course.startDate}</li>
    <li><strong>Duration:</strong> ${course.duration}</li>
    <li><strong>Price:</strong> ₹${course.price}</li>
    <li><strong>Rating:</strong> ${course.rating}/5</li>
    <li><strong>Students Enrolled:</strong> ${course.studentsEnrolled}</li>
  </ul>

  <h4>🔍 Course Features:</h4>
  <ul>
    ${course.features.map((feature: string) => `<li>${feature}</li>`).join("")}
  </ul>

  <p style="margin-top: 20px; font-size: 0.9em;">Sent automatically from the course enrollment form.</p>
`;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Enrollment: ${course.title}`,
      html: htmlBody,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Internal server error: ", error);
    res.status(500).json({ success: false, message: "Internal server Error" });
  }
});

export { router };
