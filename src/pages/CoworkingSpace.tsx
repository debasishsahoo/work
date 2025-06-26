import { useEffect, useState } from "react";
import {
  Users,
  Wifi,
  Coffee,
  Monitor,
  Phone,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CoworkingSpace = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  const spaces = [
    {
      name: "Open Workspace",
      description: "Flexible hot-desking area with modern ergonomic furniture",
      capacity: 50,
      price: "₹300/day",
      features: [
        "High-speed WiFi",
        "Power outlets",
        "Natural lighting",
        "Air conditioning",
      ],
      image: "💼",
    },
    {
      name: "Private Offices",
      description: "Fully furnished private offices for teams and individuals",
      capacity: 8,
      price: "₹15,000/month",
      features: [
        "24/7 access",
        "Storage space",
        "Meeting room access",
        "Mail handling",
      ],
      image: "🏢",
    },
    {
      name: "Meeting Rooms",
      description: "Professional meeting spaces with video conferencing setup",
      capacity: 12,
      price: "₹500/hour",
      features: [
        "Video conferencing",
        "Whiteboard",
        "Projector",
        "Coffee service",
      ],
      image: "📊",
    },
    {
      name: "Phone Booths",
      description:
        "Soundproof phone booths for private calls and video meetings",
      capacity: 1,
      price: "₹100/hour",
      features: [
        "Soundproof",
        "Video calling setup",
        "Comfortable seating",
        "Privacy",
      ],
      image: "📞",
    },
  ];

  const amenities = [
    {
      title: "High-Speed Internet",
      description: "Fiber optic internet with 1 Gbps speed",
      icon: <Wifi className="h-8 w-8" />,
    },
    {
      title: "Coffee & Refreshments",
      description: "Complimentary coffee, tea, and snacks throughout the day",
      icon: <Coffee className="h-8 w-8" />,
    },
    {
      title: "Printing & Scanning",
      description: "Professional printing, scanning, and copying services",
      icon: <Monitor className="h-8 w-8" />,
    },
    {
      title: "24/7 Access",
      description: "Round-the-clock access with secure keycard entry",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Event Space",
      description:
        "Dedicated space for workshops, seminars, and networking events",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Reception Services",
      description: "Professional reception and mail handling services",
      icon: <Phone className="h-8 w-8" />,
    },
  ];

  const membershipPlans = [
    {
      id: "day-pass",
      name: "Day Pass",
      price: "₹300",
      period: "per day",
      description: "Perfect for occasional visits and trying out the space",
      features: [
        "8-hour access to open workspace",
        "High-speed WiFi",
        "Coffee & tea included",
        "Printing allowance (10 pages)",
        "Access to common areas",
      ],
      popular: false,
    },
    {
      id: "hot-desk",
      name: "Hot Desk",
      price: "₹5,000",
      period: "per month",
      description: "Flexible workspace access with no assigned desk",
      features: [
        "Unlimited access to open workspace",
        "High-speed WiFi",
        "Coffee & refreshments",
        "Printing allowance (100 pages/month)",
        "Meeting room credits (2 hours/month)",
        "Locker storage",
      ],
      popular: true,
    },
    {
      id: "dedicated-desk",
      name: "Dedicated Desk",
      price: "₹8,000",
      period: "per month",
      description: "Your own dedicated desk in the open workspace",
      features: [
        "24/7 access to your dedicated desk",
        "Storage drawer & pinboard",
        "High-speed WiFi",
        "Unlimited coffee & refreshments",
        "Printing allowance (200 pages/month)",
        "Meeting room credits (5 hours/month)",
        "Mail handling service",
      ],
      popular: false,
    },
    {
      id: "private-office",
      name: "Private Office",
      price: "₹15,000",
      period: "per month",
      description: "Fully private office space for teams up to 4 people",
      features: [
        "24/7 access to private office",
        "Fully furnished (4 desks, chairs)",
        "High-speed dedicated internet",
        "Unlimited coffee & refreshments",
        "Unlimited printing",
        "Meeting room credits (10 hours/month)",
        "Reception & mail services",
        "Storage cabinet",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "TechStart Solutions",
      message:
        "The coworking space has been instrumental in our startup's growth. The networking opportunities and professional environment are exceptional.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      company: "Digital Marketing Pro",
      message:
        "Perfect balance of professional atmosphere and community feel. The meeting rooms are well-equipped and the staff is very supportive.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      company: "Creative Studios",
      message:
        "Love the flexibility and amenities. The high-speed internet and quiet environment help me stay productive throughout the day.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via bg-kipm-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Premium <span className="text-kipm-yellow">Coworking</span>{" "}
                Space
              </h1>
              <p className="text-lg lg:text-xl text-gray-100 mb-8">
                Modern workspace designed for entrepreneurs, freelancers, and
                growing teams. Connect, collaborate, and create in our vibrant
                professional community.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-kipm-orange text-kipm-gray hover:bg-kipm-yellow px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group">
                  Book a Tour
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-kipm-crimson px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                  View Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20 flex flex-col items-center">
                <Users className="h-20 w-20 text-kipm-orange mb-6" />
                <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                  Space Overview
                </h3>
                <ul className="space-y-2 text-gray-300 list-disc list-outside lg:text-xl">
                  <li>5000 sq ft modern workspace</li>
                  <li>100+ member capacity</li>
                  <li>24/7 secure access</li>
                  <li>Prime location in tech district</li>
                  <li>Parking available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Workspace Options
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect workspace solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spaces.map((space, index) => (
              <div
                key={index}
                className="bg-kipm-gray rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-40 bg-gradient-to-br from-kipm-navy to-blue-800 flex items-center justify-center">
                  <div className="text-6xl">{space.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {space.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {space.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-medium">
                        {space.capacity} people
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-bold text-kipm-crimson">
                        {space.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {space.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <div className="h-1.5 w-1.5 bg-kipm-orange rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to work productively and comfortably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-kipm-crimson mb-4">{amenity.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Membership Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your working style and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl p-6 h-full flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-br from-kipm-crimson to-red-600 text-white ring-4 ring-kipm-orange ring-opacity-50"
                    : "bg-kipm-gray border border-gray-200"
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-kipm-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.name}
                  </h3>
                  <div
                    className={`text-3xl font-bold mb-1 ${plan.popular ? "text-white" : "text-kipm-crimson"}`}
                  >
                    {plan.price}
                  </div>
                  <div
                    className={`text-sm ${plan.popular ? "text-gray-200" : "text-gray-500"}`}
                  >
                    {plan.period}
                  </div>
                  <p
                    className={`text-sm mt-3 ${plan.popular ? "text-gray-200" : "text-gray-600"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`h-1.5 w-1.5 rounded-full mr-3 mt-2 ${
                          plan.popular ? "bg-kipm-yellow" : "bg-kimp-crimson"
                        }`}
                      ></div>
                      <span
                        className={`text-sm ${plan.popular ? "text-gray-200" : "text-gray-600"}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-auto py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-white text-kipm-crimson hover:bg-gray-100"
                      : "bg-kipm-crimson text-white hover:bg-red-600"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our coworking community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col"
              >
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </div>
                  ))}
                </div>

                {/* Testimonial Message */}
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.message}"
                </p>

                {/* Name & Company aligned to bottom */}
                <div className="mt-auto pt-2">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-gradient-to-t from-kipm-navy via bg-kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Visit Our Space
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Located in the heart of the innovation district with easy access
                to public transportation, restaurants, and other amenities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-kipm-orange mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">
                      KIPM Innovation Hub, Tech District
                      <br />
                      Innovation City, IC 123456
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-kipm-orange mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Operating Hours</div>
                    <div className="text-gray-300">
                      24/7 access for members
                      <br />
                      Reception: Mon-Fri 9 AM - 6 PM
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-kipm-orange mr-3 mt-1" />
                  <div>
                    <div className="font-semibold">Contact</div>
                    <div className="text-gray-300">
                      +91 123 456 7890
                      <br />
                      coworking@kipminnovators.org
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Schedule a Tour</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-kimp-orange"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-kipm-orange"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-kimp-orange"
                  />
                  <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-kipm-orange">
                    <option value="" className="text-gray-800">
                      Preferred Time
                    </option>
                    <option value="morning" className="text-gray-800">
                      Morning (9-12 PM)
                    </option>
                    <option value="afternoon" className="text-gray-800">
                      Afternoon (12-5 PM)
                    </option>
                    <option value="evening" className="text-gray-800">
                      Evening (5-8 PM)
                    </option>
                  </select>
                </div>
                <textarea
                  rows={3}
                  placeholder="Any specific requirements or questions?"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-kimp-orange resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-kipm-orange hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Schedule Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoworkingSpace;
