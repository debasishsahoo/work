import { useEffect, useState } from "react";
import {
  Wrench,
  Calendar,
  Clock,
  Users,
  Zap,
  Shield,
  Settings,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FabricationLab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedEquipment, setSelectedEquipment] = useState("");

  const equipment = [
    {
      name: "3D Printers",
      description: "Professional FDM and SLA 3D printers for rapid prototyping",
      count: 8,
      models: ["Ultimaker S3", "Form 3+", "Prusa i3 MK3S+", "Ender 3 V2"],
      materials: ["PLA", "ABS", "PETG", "Resin", "TPU"],
      maxSize: "300 x 300 x 300 mm",
    },
    {
      name: "Laser Cutters",
      description:
        "Precision laser cutting and engraving for various materials",
      count: 3,
      models: ["Epilog Zing 24", "Universal VLS6.60", "Glowforge Pro"],
      materials: ["Acrylic", "Wood", "Cardboard", "Leather", "Fabric"],
      maxSize: "610 x 460 mm",
    },
    {
      name: "CNC Machines",
      description:
        "Computer-controlled milling machines for precise manufacturing",
      count: 2,
      models: ["Haas Mini Mill", "Tormach PCNC 440"],
      materials: ["Aluminum", "Steel", "Brass", "Plastic", "Wood"],
      maxSize: "400 x 300 x 200 mm",
    },
    {
      name: "Electronics Station",
      description: "Complete electronics prototyping and assembly workstation",
      count: 10,
      models: [
        "Soldering Stations",
        "Oscilloscope",
        "Function Generator",
        "Power Supply",
      ],
      materials: ["Arduino", "Raspberry Pi", "PCB Boards", "Components"],
      maxSize: "Various form factors",
    },
  ];

  const services = [
    {
      title: "Design Consultation",
      description: "Expert guidance on design optimization for manufacturing",
      icon: <BookOpen className="h-8 w-8" />,
      duration: "30-60 minutes",
      price: "Free",
    },
    {
      title: "Rapid Prototyping",
      description: "Quick turnaround prototyping for concept validation",
      icon: <Zap className="h-8 w-8" />,
      duration: "1-3 days",
      price: "₹500-2000",
    },
    {
      title: "Small Batch Production",
      description: "Limited production runs for testing and validation",
      icon: <Settings className="h-8 w-8" />,
      duration: "1-2 weeks",
      price: "Quote based",
    },
    {
      title: "Training Workshops",
      description: "Hands-on training on equipment usage and safety",
      icon: <Users className="h-8 w-8" />,
      duration: "2-4 hours",
      price: "₹1000",
    },
  ];

  const projects = [
    {
      title: "IoT Sensor Housing",
      description:
        "3D printed weatherproof enclosures for environmental sensors",
      category: "3D Printing",
      student: "Engineering Team",
      image: "🏠",
    },
    {
      title: "Drone Frame",
      description:
        "Lightweight carbon fiber frame for research drone prototype",
      category: "CNC Machining",
      student: "Robotics Club",
      image: "🚁",
    },
    {
      title: "Custom PCB Design",
      description: "Multi-layer PCB for autonomous vehicle control system",
      category: "Electronics",
      student: "AutoTech Startup",
      image: "🔌",
    },
    {
      title: "Architectural Model",
      description:
        "Precision laser-cut scale model for sustainable building design",
      category: "Laser Cutting",
      student: "Architecture Dept",
      image: "🏗️",
    },
  ];

  const timeSlots = [
    "09:00 - 11:00",
    "11:00 - 13:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
    "17:00 - 19:00",
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Digital <span className="text-kipm-yellow">Fabrication</span>{" "}
                Lab
              </h1>
              <p className="text-lg lg:text-xl text-gray-100 mb-8">
                Modern digital fabrication workshop equipped with 3D printers,
                laser cutters, CNC machines, and electronics prototyping tools
                to bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-kipm-orange hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group">
                  Book Equipment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-kipm-orange px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 flex flex-col items-center">
                <Wrench className="h-20 w-20 text-kipm-orange mb-6" />
                <h3 className="text-2xl font-bold mb-4">Lab Features</h3>
                <ul className="space-y-2 text-gray-300 list-disc list-outside lg:text-xl">
                  <li>1500 sq ft workshop space</li>
                  <li>15-person capacity</li>
                  <li>Ventilation & safety systems</li>
                  <li>Material storage area</li>
                  <li>Design workstations</li>
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
              Professional Fabrication Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Industry-standard tools for rapid prototyping and small-scale
              manufacturing
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

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">
                      Available Models:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.models.map((model, modelIndex) => (
                        <span
                          key={modelIndex}
                          className="bg-white px-2 py-1 rounded text-xs text-gray-700 border"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">
                      Supported Materials:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.materials.map((material, matIndex) => (
                        <span
                          key={matIndex}
                          className="bg-kimp-crimson bg-opacity-10 text-kipm-crimson px-2 py-1 rounded text-xs"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <strong>Max Build Size:</strong> {item.maxSize}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fabrication Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support from design to production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-kipm-orange mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price:</span>
                    <span className="font-medium text-kipm-orange">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Recent fabrication projects from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-kipm-gray rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-kipm-navy to-blue-800 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{project.title}</h3>
                    <span className="bg-kipm-orange text-white px-2 py-1 rounded text-xs">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    by{" "}
                    <span className="font-medium text-kipm-navy">
                      {project.student}
                    </span>
                  </div>
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
              Book Equipment
            </h2>
            <p className="text-xl text-gray-600">
              Reserve your fabrication equipment and workspace
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Type
                  </label>
                  <select
                    value={selectedEquipment}
                    onChange={(e) => setSelectedEquipment(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                  >
                    <option value="">Select equipment</option>
                    {equipment.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
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
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent">
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
                  placeholder="Describe your project and intended use of the equipment"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent">
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Duration
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent">
                    <option value="">Select duration</option>
                    <option value="1-2 hours">1-2 hours</option>
                    <option value="2-4 hours">2-4 hours</option>
                    <option value="4+ hours">4+ hours</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="safety"
                  className="h-4 w-4 text-kipm-orange focus:ring-kipm-orange border-gray-300 rounded"
                />
                <label htmlFor="safety" className="text-sm text-gray-700">
                  I have completed the required safety training for the selected
                  equipment
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-kipm-orange hover:bg-yellow-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 bg-gradient-to-t from-kipm-navy via bg-kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Safety Guidelines
            </h2>
            <p className="text-xl text-gray-300">
              Essential safety protocols for workshop environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Shield className="h-12 w-12 text-kipm-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personal Safety</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Safety glasses mandatory</li>
                <li>• Closed-toe shoes required</li>
                <li>• Tie back long hair</li>
                <li>• No loose clothing/jewelry</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Settings className="h-12 w-12 text-kipm-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3">Equipment Usage</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Complete training before use</li>
                <li>• Inspect tools before operation</li>
                <li>• Follow proper procedures</li>
                <li>• Report issues immediately</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-12 w-12 text-kipm-orange mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lab Rules</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Clean workspace after use</li>
                <li>• Return tools to designated areas</li>
                <li>• No unattended operations</li>
                <li>• Emergency contacts posted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FabricationLab;
