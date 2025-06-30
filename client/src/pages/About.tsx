import {
  Award,
  Target,
  Eye,
  Users,
  MapPin,
  Mail,
  Phone,
  IndianRupee,
  CircleCheck,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const milestones = [
    {
      year: "2020",
      title: "Foundation Established",
      description:
        "KIPM Innovators Foundation was founded with a vision to foster innovation and entrepreneurship.",
    },
    {
      year: "2021",
      title: "First Incubation Program",
      description:
        "Launched our first startup incubation program with 10 selected ventures.",
    },
    {
      year: "2022",
      title: "AI Lab Inauguration",
      description:
        "Opened state-of-the-art AI research lab with advanced computing infrastructure.",
    },
    {
      year: "2023",
      title: "100+ Startups Milestone",
      description:
        "Reached the milestone of supporting over 100 startups and student ventures.",
    },
    {
      year: "2024",
      title: "International Partnerships",
      description:
        "Established partnerships with global innovation hubs and accelerators.",
    },
  ];

  const team = [
    {
      name: "Dr. Arjun Patel",
      role: "Director & CEO",
      description:
        "Former tech entrepreneur with 20+ years of experience in innovation management.",
      expertise: "Innovation Strategy, Technology Transfer",
    },
    {
      name: "Prof. Meera Singh",
      role: "Head of Incubation",
      description:
        "Renowned researcher and startup mentor with expertise in emerging technologies.",
      expertise: "Startup Mentoring, Research Commercialization",
    },
    {
      name: "Rajesh Kumar",
      role: "Programs Manager",
      description:
        "Business development expert specializing in startup ecosystem development.",
      expertise: "Business Development, Program Management",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Technical Lead",
      description:
        "AI researcher and technical advisor for deep-tech startups.",
      expertise: "Artificial Intelligence, Technical Advisory",
    },
  ];

  const achievements = [
    {
      value: 150,
      suffix: "+",
      label: "Startups Supported",
      icon: <Award className="h-8 w-8" />,
    },
    {
      value: 2000,
      suffix: "+",
      label: "Students Trained",
      icon: <Users className="h-8 w-8" />,
    },
    {
      value: 50,
      suffix: "Cr+",
      label: "Funding Raised",
      icon: <IndianRupee className="h-8 w-8" />,
    },
    {
      value: 85,
      suffix: "%",
      label: "Success Rate",
      icon: <CircleCheck className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-mokoto mb-6">
              About <span className="text-kipm-orange">KIPM</span> Innovators
              Foundation
            </h1>
            <p className="text-md lg:text-xl text-gray-300 max-w-4xl mx-auto font-mokoto">
              Empowering the next generation of innovators and entrepreneurs
              through world-class incubation programs, cutting-edge facilities,
              and comprehensive support.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Mission */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-8 lg:p-12 rounded-3xl shadow-xl hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col items-center justify-center mb-6 gap-4">
                  <Target className="h-10 w-10 text-kipm-orange" />
                  <h2 className="text-2xl lg:text-3xl font-bold font-mokoto text-white">
                    Our Mission
                  </h2>
                </div>
                <p className="text-md leading-relaxed text-center text-gray-200 font-mokoto">
                  To create a thriving ecosystem for innovation and
                  entrepreneurship by providing world-class incubation services,
                  state-of-the-art facilities, and comprehensive skill
                  development programs that transform ideas into successful
                  ventures and prepare future-ready professionals.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-8 lg:p-12 rounded-3xl shadow-xl hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col items-center justify-center mb-6 gap-4">
                  <Eye className="h-10 w-10 text-kipm-orange" />
                  <h2 className="text-2xl lg:text-3xl font-bold font-mokoto text-white">
                    Our Vision
                  </h2>
                </div>
                <p className="text-md leading-relaxed text-center text-gray-200 font-mokoto">
                  To be India's leading innovation hub that nurtures
                  breakthrough technologies, sustainable solutions, and
                  entrepreneurial excellence, contributing significantly to
                  economic growth and societal development through
                  innovation-driven ventures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Achievements */}
      <section ref={ref} className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that reflect our commitment to innovation excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-kipm-orange mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-kipm-navy mb-2">
                  {inView? <CountUp end={achievement.value} duration={2.5} separator="," /> : 0}{achievement.suffix}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TimeLine */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to foster innovation
            </p>
          </div>

          <div className="relative">
            {/* Center Line for md+ screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-kipm-orange"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-8 md:text-right text-left"
                        : "md:pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold text-kipm-orange mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 break-words">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:block z-10 my-6 md:my-0">
                    <div className="w-4 h-4 bg-kipm-orange rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Spacer for layout (hidden on mobile) */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries driving innovation at KIPM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-kipm-navy to-blue-800 flex items-center justify-center">
                  <div className="text-6xl text-white font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-kipm-orange font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>Expertise:</strong> {member.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-tl from-kipm-navy via bg-kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Ready to start your innovation journey with us?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-kipm-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">
                KIPM Campus, Innovation Hub
                <br />
                Techno City, Innovation District
                <br />
                PIN - 123456
              </p>
            </div>

            <div className="text-center">
              <Phone className="h-12 w-12 text-kipm-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">
                +91 123 456 7890
                <br />
                +91 098 765 4321
                <br />
                Mon-Fri: 9 AM - 6 PM
              </p>
            </div>

            <div className="text-center">
              <Mail className="h-12 w-12 text-kipm-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">
                info@kipminnovators.org
                <br />
                admissions@kipminnovators.org
                <br />
                partnerships@kipminnovators.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
