import { useEffect, useState } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Users,
  Clock,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const categories = [
    "All",
    "AI & Technology",
    "Entrepreneurship",
    "Technical Upskilling",
    "Placement & Employability",
    "Management Training",
  ];

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const durations = [
    "All",
    "Short (1-4 weeks)",
    "Medium (1-3 months)",
    "Long (3+ months)",
  ];

  const courses = [
    {
      title: "AI & Machine Learning Bootcamp",
      description:
        "Comprehensive program covering machine learning fundamentals, deep learning, neural networks, and practical AI applications in industry.",
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
        "Certificate of Completion",
      ],
    },
    {
      title: "Entrepreneurship Development Program",
      description:
        "Learn the fundamentals of starting and scaling a successful business from ideation to funding, including business plan development and investor pitching.",
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
        "Mentorship Program",
      ],
    },
    {
      title: "Full Stack Web Development",
      description:
        "Master both frontend and backend development with React, Node.js, databases, and deployment strategies for modern web applications.",
      category: "Technical Upskilling",
      duration: "16 weeks",
      level: "Intermediate" as const,
      price: 30000,
      instructor: "Amit Singh",
      rating: 4.7,
      studentsEnrolled: 156,
      startDate: "February 20",
      features: [
        "Live Projects",
        "Portfolio Development",
        "Industry Tools",
        "Placement Assistance",
      ],
    },
    {
      title: "Data Science & Analytics",
      description:
        "Comprehensive data science program covering Python, statistics, machine learning, data visualization, and real-world analytics projects.",
      category: "AI & Technology",
      duration: "14 weeks",
      level: "Intermediate" as const,
      price: 28000,
      instructor: "Dr. Meera Patel",
      rating: 4.6,
      studentsEnrolled: 98,
      startDate: "March 10",
      features: [
        "Real Data Projects",
        "Industry Case Studies",
        "Python & R Programming",
        "Certification",
      ],
    },
    {
      title: "Digital Marketing Mastery",
      description:
        "Learn modern digital marketing strategies including SEO, social media marketing, content marketing, and data-driven campaign optimization.",
      category: "Placement & Employability",
      duration: "6 weeks",
      level: "Beginner" as const,
      price: 12000,
      instructor: "Sneha Gupta",
      rating: 4.5,
      studentsEnrolled: 203,
      startDate: "February 25",
      features: [
        "Live Campaigns",
        "Analytics Tools",
        "Social Media Strategy",
        "Portfolio Building",
      ],
    },
    {
      title: "Project Management Professional",
      description:
        "Comprehensive project management training covering Agile, Scrum, traditional methodologies, and leadership skills for effective project delivery.",
      category: "Management Training",
      duration: "10 weeks",
      level: "Advanced" as const,
      price: 22000,
      instructor: "Vikram Agarwal",
      rating: 4.8,
      studentsEnrolled: 67,
      startDate: "March 5",
      features: [
        "PMP Preparation",
        "Agile Certification",
        "Real Projects",
        "Leadership Training",
      ],
    },
    {
      title: "Blockchain Development",
      description:
        "Learn blockchain technology, smart contract development, DeFi protocols, and cryptocurrency fundamentals with hands-on development experience.",
      category: "Technical Upskilling",
      duration: "12 weeks",
      level: "Advanced" as const,
      price: 35000,
      instructor: "Rohit Sharma",
      rating: 4.9,
      studentsEnrolled: 45,
      startDate: "March 20",
      features: [
        "Smart Contracts",
        "DApp Development",
        "Cryptocurrency",
        "Industry Projects",
      ],
    },
    {
      title: "Communication & Soft Skills",
      description:
        "Enhance your professional communication, presentation skills, leadership abilities, and emotional intelligence for career advancement.",
      category: "Placement & Employability",
      duration: "4 weeks",
      level: "Beginner" as const,
      price: 8000,
      instructor: "Kavya Reddy",
      rating: 4.4,
      studentsEnrolled: 189,
      startDate: "February 28",
      features: [
        "Public Speaking",
        "Interview Preparation",
        "Leadership Skills",
        "Team Building",
      ],
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Learn essential cybersecurity concepts, ethical hacking, network security, and risk management to protect digital assets and systems.",
      category: "Technical Upskilling",
      duration: "8 weeks",
      level: "Intermediate" as const,
      price: 18000,
      instructor: "Suresh Kumar",
      rating: 4.7,
      studentsEnrolled: 78,
      startDate: "March 12",
      features: [
        "Ethical Hacking",
        "Network Security",
        "Risk Assessment",
        "Practical Labs",
      ],
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;

    let matchesDuration = true;
    if (selectedDuration !== "All") {
      const weeks = parseInt(course.duration);
      if (selectedDuration === "Short (1-4 weeks)")
        matchesDuration = weeks <= 4;
      else if (selectedDuration === "Medium (1-3 months)")
        matchesDuration = weeks > 4 && weeks <= 12;
      else if (selectedDuration === "Long (3+ months)")
        matchesDuration = weeks > 12;
    }

    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  const stats = [
    {
      value: 50,
      suffix: "+",
      label: "Active Courses",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      value: 2000,
      suffix: "+",
      label: "Students Trained",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: 95,
      suffix: "%",
      label: "Completion Rate",
      icon: <Award className="h-8 w-8" />,
    },
    {
      value: 85,
      suffix: "%",
      label: "Job Placement",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={ref}
        className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-mokoto mb-6">
              Courses & <span className="text-kipm-orange">Skill Programs</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto font-mokoto">
              Enhance your skills with our comprehensive courses designed by
              industry experts. From AI and technology to entrepreneurship and
              management - accelerate your career growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <section className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-kipm-white/10 py-6 px-4 rounded-2xl"
                >
                  <div className="text-kipm-orange mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-kipm-yellow mb-2">
                    {inView ? (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    ) : (
                      0
                    )}{" "}
                    {stat.suffix}
                  </div>
                  <div className="text-kipm-white font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-kipm-gray border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent w-full md:w-max"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent w-full md:w-max"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent w-full md:w-max"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600 text-center">
            Showing {filteredCourses.length} courses
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all courses.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSelectedDuration("All");
                }}
                className="bg-kipm-orange hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore our diverse range of skill development programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(1).map((category, index) => {
              const categoryColors = [
                "from-kipm-navy to-blue-800",
                "from-kipm-crimson to-red-600",
                "from-kipm-orange to-yellow-500",
                "from-green-600 to-green-700",
                "from-purple-600 to-purple-700",
              ];

              const coursesInCategory = courses.filter(
                (c) => c.category === category,
              ).length;

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${categoryColors[index % categoryColors.length]} text-white p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <h3 className="text-xl font-bold mb-3">{category}</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {category === "AI & Technology" &&
                      "Master cutting-edge technologies and artificial intelligence"}
                    {category === "Entrepreneurship" &&
                      "Learn to build and scale successful businesses"}
                    {category === "Technical Upskilling" &&
                      "Enhance your technical skills with modern tools"}
                    {category === "Placement & Employability" &&
                      "Improve your job prospects and career readiness"}
                    {category === "Management Training" &&
                      "Develop leadership and management capabilities"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-kipm-orange bg-opacity-10 text-kipm-orange px-3 py-1 rounded-full text-xs font-semibold">
                      {coursesInCategory}
                    </span>
                    <span className="text-sm">Courses Available</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real achievements from our course graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Patel",
                course: "AI & Machine Learning Bootcamp",
                achievement: "Landed ML Engineer role at Google",
                salary: "₹45 LPA",
                image: "👨‍💻",
              },
              {
                name: "Priya Singh",
                course: "Entrepreneurship Development",
                achievement: "Raised ₹2 Cr funding for startup",
                salary: "CEO & Founder",
                image: "👩‍💼",
              },
              {
                name: "Rahul Kumar",
                course: "Full Stack Development",
                achievement: "Senior Developer at Microsoft",
                salary: "₹38 LPA",
                image: "👨‍💻",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-kipm-gray p-8 rounded-xl text-center"
              >
                <div className="text-6xl mb-4">{story.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {story.name}
                </h3>
                <p className="text-kipm-orange font-medium mb-2">
                  {story.course}
                </p>
                <p className="text-gray-600 mb-3">{story.achievement}</p>
                <div className="text-lg font-bold text-kipm-navy">
                  {story.salary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-t from-kipm-navy via bg-kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Upgrade Your Skills?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with our industry-relevant courses and expert mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-kipm-crimson hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Browse All Courses
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-kipm-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Talk to Counselor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
