import { useEffect, useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StartupCard from "../components/StartupCard";

const Startups = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const categories = [
    "All",
    "FinTech",
    "HealthTech",
    "EdTech",
    "GreenTech",
    "RetailTech",
    "AgriTech",
    "FoodTech",
  ];
  const stages = ["All", "Ideation", "MVP", "Growth", "Scale"];
  const types = ["All", "Student Venture", "External Startup"];

  const startups = [
    {
      name: "EcoTech Solutions",
      description:
        "Developing sustainable technology solutions for environmental challenges using AI and IoT to monitor and reduce carbon footprint in industrial settings.",
      category: "GreenTech",
      stage: "Growth",
      founded: "2023",
      teamSize: 8,
      website: "https://ecotech.example.com",
      isStudent: true,
    },
    {
      name: "HealthAI Pro",
      description:
        "AI-powered healthcare diagnostics platform for early disease detection and prevention with 95% accuracy in preliminary screenings.",
      category: "HealthTech",
      stage: "MVP",
      founded: "2024",
      teamSize: 5,
      website: "https://healthai.example.com",
      isStudent: false,
    },
    {
      name: "EduVerse",
      description:
        "Virtual reality platform for immersive educational experiences and remote learning, making complex subjects accessible through VR.",
      category: "EdTech",
      stage: "Ideation",
      founded: "2024",
      teamSize: 4,
      isStudent: true,
    },
    {
      name: "FinSecure",
      description:
        "Blockchain-based financial security platform providing secure transaction processing and fraud detection for small businesses.",
      category: "FinTech",
      stage: "Growth",
      founded: "2022",
      teamSize: 12,
      website: "https://finsecure.example.com",
      isStudent: false,
    },
    {
      name: "AgriSmart",
      description:
        "IoT-enabled precision agriculture platform helping farmers optimize crop yield and reduce resource consumption through smart monitoring.",
      category: "AgriTech",
      stage: "MVP",
      founded: "2023",
      teamSize: 6,
      isStudent: true,
    },
    {
      name: "RetailIQ",
      description:
        "AI-powered retail analytics platform providing real-time insights into customer behavior and inventory optimization for e-commerce.",
      category: "RetailTech",
      stage: "Scale",
      founded: "2021",
      teamSize: 15,
      website: "https://retailiq.example.com",
      isStudent: false,
    },
    {
      name: "FoodTrace",
      description:
        "Blockchain-based food traceability system ensuring food safety and supply chain transparency from farm to table.",
      category: "FoodTech",
      stage: "Growth",
      founded: "2023",
      teamSize: 8,
      isStudent: true,
    },
    {
      name: "MedConnect",
      description:
        "Telemedicine platform connecting rural patients with specialists in urban areas, bridging the healthcare accessibility gap.",
      category: "HealthTech",
      stage: "Growth",
      founded: "2022",
      teamSize: 10,
      website: "https://medconnect.example.com",
      isStudent: false,
    },
    {
      name: "LearnAI",
      description:
        "Personalized AI tutoring system that adapts to individual learning styles and provides customized educational content.",
      category: "EdTech",
      stage: "MVP",
      founded: "2024",
      teamSize: 5,
      isStudent: true,
    },
  ];

  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || startup.category === selectedCategory;
    const matchesStage =
      selectedStage === "All" || startup.stage === selectedStage;
    const matchesType =
      selectedType === "All" ||
      (selectedType === "Student Venture" && startup.isStudent) ||
      (selectedType === "External Startup" && !startup.isStudent);

    return matchesSearch && matchesCategory && matchesStage && matchesType;
  });

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-mokoto mb-6">
              Our <span className="text-kipm-orange">Startup</span> Ecosystem
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto font-mokoto">
              Discover innovative startups that are transforming industries and
              solving real-world problems through cutting-edge technology and
              entrepreneurial excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search startups..."
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
                    {category} {category !== "All" && "Tech"}
                  </option>
                ))}
              </select>

              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent w-full md:w-max"
              >
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent w-full md:w-max"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-gray-600">
            Showing {filteredStartups.length} startups
          </div>
        </div>
      </section>

      {/* Startups Grid/List */}
      <section className="py-12 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStartups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStartups.map((startup, index) => (
                <StartupCard key={index} {...startup} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No startups found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or browse all startups.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedStage("All");
                  setSelectedType("All");
                }}
                className="bg-kipm-orange hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-t from-kipm-navy via bg-kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Have a Groundbreaking Idea?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our ecosystem and transform your innovative ideas into
            successful ventures with our comprehensive incubation program and
            world-class support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-kipm-crimson hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Apply for Incubation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-kipm-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Startups;
