import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Course {
  title: string;
  description: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  instructor: string;
  rating: number;
  studentsEnrolled: number;
  startDate: string;
  image?: string;
  features: string[];
}

const EnrollCourse: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  course: Course;
}> = ({ isOpen, onClose, course }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enrolled with data:", formData, "for course:", course.title);
    onClose();
  };

  return (
    <div
      className={`flex fixed inset-0 bg-black/20 backdrop-blur-md z-50 items-center justify-center`}
    >
      <div className="relative bg-white rounded-xl laptop-lg:rounded-3xl w-[90vw] md:w-[70vw] lg:w-[60vw] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-kipm-navy px-4 py-3 rounded-t-xl flex justify-between items-center">
          <h2 className="font-semibold text-white">
            Enroll in: {course.title}
          </h2>
          <X
            className="text-white text-xl cursor-pointer hover:scale-105 transition-transform"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80svh] overflow-y-auto">
          {/* Course Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-kipm-navy">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{course.description}</p>
            <div className="text-xs text-gray-500">
              <span className="mr-3">
                Instructor: <strong>{course.instructor}</strong>
              </span>
              <span>
                Starts on: <strong>{course.startDate}</strong>
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kipm-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kipm-navy"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kipm-navy"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kipm-navy resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-kipm-crimson hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold text-sm transition-all duration-200 flex"
              >
                Confirm Enrollment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
