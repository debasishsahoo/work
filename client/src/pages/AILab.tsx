import { useEffect, useState } from "react";
import {
  Cpu,
  Calendar,
  Clock,
  Users,
  Zap,
  Shield,
  Database,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AILab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const equipment = [
    {
      name: "NVIDIA DGX A100 Systems",
      description:
        "High-performance AI workstations with 40GB GPU memory for deep learning research",
      count: 4,
      specifications: [
        "640 Tensor Cores",
        "40GB HBM2 Memory",
        "1,555 GB/s Memory Bandwidth",
      ],
    },
    {
      name: "GPU Cluster",
      description:
        "Distributed computing cluster with RTX 4090 and A6000 graphics cards",
      count: 16,
      specifications: [
        "24GB GDDR6X Memory",
        "10,752 CUDA Cores",
        "83.0 RT Cores",
      ],
    },
    {
      name: "Edge Computing Devices",
      description: "Jetson AGX Orin and Nano devices for edge AI development",
      count: 20,
      specifications: [
        "ARM Cortex-A78AE CPU",
        "2048-core NVIDIA Ampere GPU",
        "275 TOPS AI Performance",
      ],
    },
    {
      name: "Quantum Computing Simulator",
      description:
        "IBM Qiskit compatible quantum computing simulation environment",
      count: 2,
      specifications: [
        "32-qubit Simulation",
        "Quantum Circuit Composer",
        "Error Correction Modeling",
      ],
    },
  ];

  const software = [
    "TensorFlow & PyTorch",
    "CUDA & cuDNN",
    "OpenCV & OpenAI Gym",
    "Jupyter Notebooks",
    "Docker & Kubernetes",
    "MLflow & TensorBoard",
    "MATLAB & Simulink",
    "ROS (Robot Operating System)",
  ];

  const researchAreas = [
    {
      title: "Computer Vision",
      description:
        "Image recognition, object detection, facial recognition, and medical imaging analysis",
      icon: <Zap className="h-8 w-8" />,
      projects: 12,
    },
    {
      title: "Natural Language Processing",
      description:
        "Language models, sentiment analysis, chatbots, and text-to-speech systems",
      icon: <BookOpen className="h-8 w-8" />,
      projects: 8,
    },
    {
      title: "Machine Learning",
      description:
        "Predictive analytics, recommendation systems, and automated decision making",
      icon: <Database className="h-8 w-8" />,
      projects: 15,
    },
    {
      title: "Robotics & Automation",
      description:
        "Autonomous systems, robotic process automation, and human-robot interaction",
      icon: <Shield className="h-8 w-8" />,
      projects: 6,
    },
  ];

  const timeSlots = [
    "09:00 - 11:00",
    "11:00 - 13:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
    "17:00 - 19:00",
    "19:00 - 21:00",
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-white py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold font-mokoto mb-6">
                AI Research <span className="text-kipm-orange">Laboratory</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 font-mokoto">
                State-of-the-art artificial intelligence research facility
                equipped with cutting-edge hardware and software for
                breakthrough AI innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-kipm-crimson hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group">
                  Book Lab Time
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-kipm-orange text-kipm-orange hover:bg-kipm-orange hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  Take Virtual Tour
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 flex flex-col items-center">
                <Cpu className="h-20 w-20 text-kipm-orange mb-6" />
                <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                  Lab Specifications
                </h3>
                <ul className="space-y-2 text-gray-300 list-disc list-outside lg:text-xl">
                  <li>2000 sq ft research space</li>
                  <li>25-person capacity</li>
                  <li>24/7 access for researchers</li>
                  <li>Climate-controlled environment</li>
                  <li>High-speed internet (10 Gbps)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Equipment & Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              Professional-grade hardware designed for intensive AI research and
              development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-kipm-gray p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="bg-kipm-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.count} Units
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.specifications.map((spec, specIndex) => (
                    <div
                      key={specIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="h-2 w-2 bg-kipm-crimson rounded-full mr-3"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Software & Development Tools
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive suite of AI/ML frameworks and development
              environments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {software.map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="font-semibold text-gray-900">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Active Research Areas
            </h2>
            <p className="text-xl text-gray-600">
              Ongoing research projects spanning multiple AI domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-kipm-navy to-blue-800 text-white p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-kipm-orange mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                <div className="flex items-center text-kipm-yellow">
                  <div className="text-2xl font-bold mr-2">{area.projects}</div>
                  <div className="text-sm">Active Projects</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Book Lab Time
            </h2>
            <p className="text-xl text-gray-600">
              Reserve your slot for AI research and development work
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Slot
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent resize-none"
                  placeholder="Briefly describe your research project or intended use"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-kipm-orange focus:ring-kipm-orange border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the lab usage guidelines and safety protocols
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-kipm-orange hover:bg-yellow-500 text-white py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Lab Guidelines */}
      <section className="py-16 bg-gradient-to-t from-kipm-navy via bg-kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Lab Usage Guidelines
            </h2>
            <p className="text-xl text-gray-300">
              Important guidelines to ensure productive and safe research
              environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="h-12 w-12 text-kipm-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Access Requirements
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Valid KIPM ID or visitor pass</li>
                <li>• Completed safety orientation</li>
                <li>• Project approval from faculty</li>
                <li>• Equipment training certification</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-12 w-12 text-kipm-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3">Operating Hours</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Monday-Friday: 24/7 access</li>
                <li>• Weekend: 9 AM - 10 PM</li>
                <li>• Advanced booking required</li>
                <li>• Maximum 4-hour sessions</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Shield className="h-12 w-12 text-kipm-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3">Safety Protocols</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• No food or drinks in lab</li>
                <li>• Proper handling of equipment</li>
                <li>• Data backup procedures</li>
                <li>• Emergency contact information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AILab;
