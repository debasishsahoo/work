import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  Cpu,
  Wrench,
  Users,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import StartupCard from "../components/StartupCard";
import FacilityCard from "../components/FacilityCard";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import EnrollCourse from "@/components/Modals/EnrollCourse";

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


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(()=> {
    window.scrollTo(0,0);
  } ,[])
  // Sample data for featured content
  const featuredStartups = [
    {
      name: "EcoTech Solutions",
      description:
        "Developing sustainable technology solutions for environmental challenges using AI and IoT.",
      category: "GreenTech",
      stage: "Growth",
      founded: "2023",
      teamSize: 8,
      isStudent: true,
    },
    {
      name: "HealthAI Pro",
      description:
        "AI-powered healthcare diagnostics platform for early disease detection and prevention.",
      category: "HealthTech",
      stage: "MVP",
      founded: "2024",
      teamSize: 5,
      isStudent: false,
    },
    {
      name: "EduVerse",
      description:
        "Virtual reality platform for immersive educational experiences and remote learning.",
      category: "EdTech",
      stage: "Ideation",
      founded: "2024",
      teamSize: 4,
      isStudent: true,
    },
  ];

  const featuredFacilities = [
    {
      name: "AI Research Lab",
      description:
        "State-of-the-art artificial intelligence research facility with high-performance computing resources.",
      capacity: 25,
      operatingHours: "24/7",
      location: "Building A, Floor 3",
      amenities: [
        "GPU Clusters",
        "Deep Learning Frameworks",
        "Research Workstations",
        "Collaboration Spaces",
      ],
      bookingRequired: true,
      pricePerHour: 500,
    },
    {
      name: "Fabrication Lab",
      description:
        "Modern digital fabrication workshop equipped with 3D printers, laser cutters, and electronics prototyping tools.",
      capacity: 15,
      operatingHours: "9 AM - 9 PM",
      location: "Building B, Ground Floor",
      amenities: [
        "3D Printers",
        "Laser Cutters",
        "Arduino/Raspberry Pi",
        "Soldering Stations",
      ],
      bookingRequired: true,
      pricePerHour: 300,
    },
  ];

  const featuredCourses = [
    {
      title: "AI & Machine Learning Bootcamp",
      description:
        "Comprehensive program covering machine learning fundamentals, deep learning, and practical AI applications.",
      category: "AI & Technology",
      duration: "12 weeks",
      level: "Intermediate" as const,
      price: 25000,
      instructor: "Dr. Priya Sharma",
      rating: 4.8,
      studentsEnrolled: 89,
      startDate: "March 15",
      features: [
        "Hands-on Projects",
        "Industry Mentorship",
        "Job Placement Support",
      ],
    },
    {
      title: "Entrepreneurship Development Program",
      description:
        "Learn the fundamentals of starting and scaling a successful business from ideation to funding.",
      category: "Entrepreneurship",
      duration: "8 weeks",
      level: "Beginner" as const,
      price: 15000,
      instructor: "Rajesh Kumar",
      rating: 4.9,
      studentsEnrolled: 124,
      startDate: "March 1",
      features: [
        "Business Plan Development",
        "Investor Pitch Training",
        "Networking Events",
      ],
    },
  ];

    const handleEnroll = (course: Course) => {
    setIsOpen(true);
    setSelectedCourse(course);
  }

  return (
    <div className="min-h-screen bg-kipm-white">
      {isOpen && <EnrollCourse isOpen={isOpen} onClose={()=> setIsOpen(false)} course={selectedCourse} />}
      <Navbar />
      <Hero />

      {/* Featured Startups Section */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-mokoto text-gray-900 mb-4">
              Featured Startups
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mokoto">
              Discover innovative startups that are transforming industries and
              solving real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredStartups.map((startup, index) => (
              <StartupCard key={index} {...startup} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/startups"
              className="inline-flex items-center bg-kipm-crimson hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold font-mokoto text-lg transition-all duration-200 group"
            >
              View All Startups
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-mokoto text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mokoto">
              Access cutting-edge labs and workspaces designed to bring your
              innovations to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredFacilities.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>

          {/* Quick Access to Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link
              to="/ai-lab"
              className="bg-gradient-to-br from-kipm-navy to-blue-800 text-white p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <Cpu className="h-12 w-12 mx-auto mb-4 text-kipm-yellow" />
              <h3 className="text-lg font-semibold font-mokoto mb-2">AI Lab</h3>
              <p className="text-gray-300 text-sm font-mokoto">
                Advanced AI research facility
              </p>
            </Link>
            <Link
              to="/fabrication-lab"
              className="bg-gradient-to-br from-kipm-orange to-yellow-500 text-white p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <Wrench className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold font-mokoto mb-2">
                Fabrication Lab
              </h3>
              <p className="text-gray-100 text-sm font-mokoto">
                Digital fabrication workshop
              </p>
            </Link>
            <Link
              to="/coworking-space"
              className="bg-gradient-to-br from-kipm-crimson to-red-600 text-white p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <Users className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold font-mokoto mb-2">
                Coworking Space
              </h3>
              <p className="text-gray-100 text-sm font-mokoto">
                Collaborative work environment
              </p>
            </Link>
            <Link
              to="/amenities"
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold font-mokoto mb-2">
                Amenities
              </h3>
              <p className="text-gray-100 text-sm font-mokoto">
                Complete support facilities
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-mokoto text-gray-900 mb-4">
              Skill Development Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mokoto">
              Enhance your skills with our comprehensive courses designed by
              industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} onEnroll={handleEnroll} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses"
              className="inline-flex items-center bg-kipm-orange hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold font-mokoto text-lg transition-all duration-200 group"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-mokoto mb-4">
            Ready to Start Your Innovation Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-mokoto">
            Join KIPM Innovators Foundation and transform your ideas into
            successful ventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-kipm-crimson hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold font-mokoto text-lg transition-all duration-200 flex items-center justify-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-kipm-navy px-8 py-4 rounded-lg font-semibold font-mokoto text-lg transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
