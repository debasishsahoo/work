import { useEffect, useState } from "react";
import {
  Search,
  Calendar,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Entrepreneurship",
    "Innovation",
    "Startup Stories",
    "Industry Insights",
    "Career Guidance",
  ];

  const featuredPost = {
    title: "The Future of AI in Indian Startups: Opportunities and Challenges",
    excerpt:
      "Exploring how artificial intelligence is reshaping the startup ecosystem in India, the opportunities it presents, and the challenges entrepreneurs face in implementing AI solutions.",
    author: "Dr. Priya Sharma",
    date: "February 20, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "🤖",
    tags: ["AI", "Startups", "Innovation", "Technology"],
  };

  const blogPosts = [
    {
      title: "5 Essential Steps to Validate Your Startup Idea",
      excerpt:
        "Learn the systematic approach to validate your business idea before investing time and money into development.",
      author: "Rajesh Kumar",
      date: "February 18, 2024",
      readTime: "6 min read",
      category: "Entrepreneurship",
      image: "💡",
      tags: ["Startups", "Validation", "Business"],
    },
    {
      title: "Building a Strong Technical Team for Your Startup",
      excerpt:
        "Insights on hiring, retaining, and managing technical talent in the competitive startup landscape.",
      author: "Amit Singh",
      date: "February 15, 2024",
      readTime: "7 min read",
      category: "Startup Stories",
      image: "👥",
      tags: ["Team Building", "Hiring", "Tech"],
    },
    {
      title: "Funding Landscape 2024: What Entrepreneurs Need to Know",
      excerpt:
        "A comprehensive overview of the current funding environment and strategies for securing investment.",
      author: "Meera Patel",
      date: "February 12, 2024",
      readTime: "10 min read",
      category: "Industry Insights",
      image: "💰",
      tags: ["Funding", "Investment", "VC"],
    },
    {
      title: "From College Project to Million-Dollar Startup: Success Story",
      excerpt:
        "How three engineering students turned their college project into a successful AI-powered healthcare startup.",
      author: "Success Stories Team",
      date: "February 10, 2024",
      readTime: "12 min read",
      category: "Startup Stories",
      image: "🏆",
      tags: ["Success Story", "Healthcare", "AI"],
    },
    {
      title: "Digital Marketing Strategies for Early-Stage Startups",
      excerpt:
        "Cost-effective digital marketing tactics that startups can implement with limited budgets.",
      author: "Sneha Gupta",
      date: "February 8, 2024",
      readTime: "9 min read",
      category: "Entrepreneurship",
      image: "📱",
      tags: ["Marketing", "Digital", "Growth"],
    },
    {
      title: "The Rise of GreenTech: Sustainable Innovation Opportunities",
      excerpt:
        "Exploring the growing opportunities in sustainable technology and environmental innovation.",
      author: "Dr. Environmental Team",
      date: "February 5, 2024",
      readTime: "8 min read",
      category: "Innovation",
      image: "🌱",
      tags: ["GreenTech", "Sustainability", "Environment"],
    },
    {
      title: "Career Transition: From Employee to Entrepreneur",
      excerpt:
        "A practical guide for professionals looking to make the transition from corporate jobs to entrepreneurship.",
      author: "Career Guidance Team",
      date: "February 3, 2024",
      readTime: "11 min read",
      category: "Career Guidance",
      image: "🚀",
      tags: ["Career", "Transition", "Entrepreneur"],
    },
    {
      title: "Blockchain Applications Beyond Cryptocurrency",
      excerpt:
        "Discovering practical blockchain applications in supply chain, healthcare, and other industries.",
      author: "Rohit Sharma",
      date: "February 1, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "⛓️",
      tags: ["Blockchain", "Technology", "Innovation"],
    },
    {
      title: "Building Minimum Viable Products (MVP): Best Practices",
      excerpt:
        "Essential guidelines for creating effective MVPs that validate your product hypothesis quickly.",
      author: "Product Team",
      date: "January 28, 2024",
      readTime: "9 min read",
      category: "Entrepreneurship",
      image: "🔨",
      tags: ["MVP", "Product", "Development"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const popularTags = [
    "AI",
    "Startups",
    "Innovation",
    "Technology",
    "Funding",
    "Marketing",
    "Blockchain",
    "Career",
  ];

  const trendingPosts = [
    { title: "AI Startup Funding Hits Record High", views: "12.5K" },
    { title: "New Government Policies for Startups", views: "8.2K" },
    { title: "Top 10 Indian Unicorns of 2024", views: "15.3K" },
    { title: "Remote Work Impact on Innovation", views: "6.8K" },
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Innovation <span className="text-kipm-orange">Blog</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto">
              Stay updated with the latest insights on technology,
              entrepreneurship, and innovation. Learn from industry experts and
              successful entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
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
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center text-gray-600">
            {selectedCategory === "All"
              ? "All articles"
              : `${selectedCategory} articles`}{" "}
            • {filteredPosts.length} results
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <div className="bg-gradient-to-r from-kipm-navy to-blue-800 text-white rounded-2xl p-8 mb-12">
              <div className="flex items-center mb-4">
                <span className="bg-kipm-orange text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                  Featured
                </span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {featuredPost.title}
              </h2>

              <p className="text-lg text-gray-300 mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-4 items-center text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>

                <button className="bg-kipm-crimson hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-kipm-gray to-gray-300 flex items-center justify-center">
                    <div className="text-6xl">{post.image}</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-kipm-orange bg-opacity-10 text-kipm-orange px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kipm-navy transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex flex-wrap gap-4 items-center text-gray-500 text-xs">
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3 mr-1" />
                          <span className="mr-3">{post.author}</span>
                        </div >
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <button className="text-kipm-crimson hover:text-red-600 font-semibold text-sm transition-colors">
                        Read More →
                      </button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-kipm-orange hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-kipm-gray hover:bg-kipm-orange hover:text-white text-gray-700 px-3 py-1 rounded-full text-sm transition-all duration-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-kipm-orange mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Trending</h3>
              </div>
              <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-3 last:border-b-0"
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-1 hover:text-kipm-navy cursor-pointer transition-colors">
                      {post.title}
                    </h4>
                    <div className="text-xs text-gray-500">
                      {post.views} views
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-kipm-crimson to-red-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-200 text-sm mb-4">
                Get the latest insights delivered to your inbox weekly.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-kipm-orange"
                />
                <button className="w-full bg-white text-kipm-crimson hover:bg-gray-100 py-2 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
