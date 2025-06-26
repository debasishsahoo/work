import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      description: "Speak directly with our team",
      details: ["+91 123 456 7890", "+91 098 765 4321"],
      availability: "Mon-Fri: 9 AM - 6 PM",
      color: "from-kipm-crimson to-red-600",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Send us a detailed message",
      details: ["info@kipminnovators.org", "admissions@kipminnovators.org"],
      availability: "24/7 Response",
      color: "from-kipm-orange to-yellow-500",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant assistance",
      details: ["Available on website", "Quick responses"],
      availability: "Mon-Fri: 9 AM - 9 PM",
      color: "from-green-600 to-green-700",
    },
  ];

  const officeLocations = [
    {
      name: "Main Campus",
      address: "KIPM Innovation Hub, Tech District, Innovation City, IC 123456",
      phone: "+91 123 456 7890",
      email: "main@kipminnovators.org",
      hours: "Mon-Fri: 8 AM - 8 PM, Sat: 9 AM - 5 PM",
    },
    {
      name: "Incubation Center",
      address:
        "Startup Building, Block A, Tech Park, Innovation City, IC 123457",
      phone: "+91 123 456 7891",
      email: "incubation@kipminnovators.org",
      hours: "24/7 Access for Members",
    },
    {
      name: "Research Facility",
      address:
        "R&D Complex, Building B, University Road, Innovation City, IC 123458",
      phone: "+91 123 456 7892",
      email: "research@kipminnovators.org",
      hours: "Mon-Fri: 9 AM - 7 PM",
    },
  ];

  const departments = [
    { name: "General Inquiry", email: "info@kipminnovators.org" },
    { name: "Admissions & Programs", email: "admissions@kipminnovators.org" },
    { name: "Startup Incubation", email: "incubation@kipminnovators.org" },
    { name: "Research Collaboration", email: "research@kipminnovators.org" },
    {
      name: "Corporate Partnerships",
      email: "partnerships@kipminnovators.org",
    },
    { name: "Media & Press", email: "media@kipminnovators.org" },
  ];

  const faqs = [
    {
      question: "How can I apply for the incubation program?",
      answer:
        "You can apply through our online portal or visit our campus. Our team will guide you through the application process.",
    },
    {
      question: "Are the courses available online?",
      answer:
        "We offer both online and offline courses. Many programs have hybrid options to provide flexibility.",
    },
    {
      question: "What are the admission requirements?",
      answer:
        "Requirements vary by program. Generally, we look for passion, commitment, and relevant background or experience.",
    },
    {
      question: "Do you provide funding for startups?",
      answer:
        "We have partnerships with investors and VCs. We also provide seed funding for selected startups through our programs.",
    },
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via-kipm-navy to-blue-900 text-white py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight font-mokoto">
              Get in <span className="text-kipm-orange">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Have questions about our programs, facilities, or want to start
              your innovation journey? We're here to help and guide you every
              step of the way.
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-kipm-white mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-400">
                Choose the most convenient way to connect with our team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${method.color} text-white p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 break-words`}
                >
                  <div className="mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-gray-200 mb-4">{method.description}</p>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-white font-medium">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-200 text-sm">
                    {method.availability}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      <option value="general">General Inquiry</option>
                      <option value="admission">Admissions</option>
                      <option value="incubation">Startup Incubation</option>
                      <option value="research">Research Collaboration</option>
                      <option value="partnership">Corporate Partnership</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent"
                    placeholder="Enter the subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kipm-orange focus:border-transparent resize-none"
                    placeholder="Enter your detailed message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-kipm-orange hover:bg-yellow-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Locations
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        {location.name}
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mt-1 mr-2 text-kipm-orange" />
                          <span className="text-sm">{location.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-kipm-orange" />
                          <span className="text-sm">{location.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-kipm-orange" />
                          <span className="text-sm">{location.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-kipm-orange" />
                          <span className="text-sm">{location.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600">
              Reach out directly to specific departments for faster assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-kipm-gray p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {dept.name}
                </h3>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-kipm-orange hover:text-kipm-crimson font-medium text-sm transition-colors"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-kipm-orange hover:bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View All FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Map
            </h2>
          </div>

          <div className="p-12 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Interactive Map
            </h3>
            <p className="text-gray-600 mb-4">
              Detailed location map with directions and nearby landmarks
            </p>
            <button className="bg-kipm-crimson hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Open in Google Maps
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
