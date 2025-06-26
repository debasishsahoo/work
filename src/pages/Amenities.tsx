import {
  Coffee,
  Wifi,
  Car,
  Shield,
  Utensils,
  Gamepad,
  Dumbbell,
  Bed,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Amenities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const amenities = [
    {
      category: "Essential Services",
      items: [
        {
          name: "High-Speed Internet",
          description:
            "Fiber optic internet with 1 Gbps speed throughout the campus",
          icon: <Wifi className="h-8 w-8" />,
          availability: "24/7",
          cost: "Free",
        },
        {
          name: "Parking Facility",
          description:
            "Secure parking for cars and two-wheelers with CCTV surveillance",
          icon: <Car className="h-8 w-8" />,
          availability: "24/7",
          cost: "₹100/day",
        },
        {
          name: "Security Services",
          description:
            "Round-the-clock security with keycard access and CCTV monitoring",
          icon: <Shield className="h-8 w-8" />,
          availability: "24/7",
          cost: "Free",
        },
      ],
    },
    {
      category: "Food & Refreshments",
      items: [
        {
          name: "Campus Cafeteria",
          description:
            "Multi-cuisine cafeteria serving fresh meals, snacks, and beverages",
          icon: <Utensils className="h-8 w-8" />,
          availability: "7 AM - 10 PM",
          cost: "₹50-200/meal",
        },
        {
          name: "Coffee Station",
          description:
            "Premium coffee and tea station with complimentary refreshments",
          icon: <Coffee className="h-8 w-8" />,
          availability: "24/7",
          cost: "Free for members",
        },
      ],
    },
    {
      category: "Recreation & Wellness",
      items: [
        {
          name: "Recreation Area",
          description:
            "Gaming zone with pool table, board games, and entertainment systems",
          icon: <Gamepad className="h-8 w-8" />,
          availability: "6 AM - 11 PM",
          cost: "Free",
        },
        {
          name: "Fitness Center",
          description:
            "Well-equipped gym with modern equipment and wellness programs",
          icon: <Dumbbell className="h-8 w-8" />,
          availability: "5 AM - 11 PM",
          cost: "₹1000/month",
        },
        {
          name: "Rest Areas",
          description:
            "Comfortable lounges and quiet spaces for relaxation and power naps",
          icon: <Bed className="h-8 w-8" />,
          availability: "24/7",
          cost: "Free",
        },
      ],
    },
  ];

  const facilitiesMap = [
    {
      floor: "Ground Floor",
      facilities: ["Reception", "Cafeteria", "Security Office", "Parking"],
    },
    {
      floor: "First Floor",
      facilities: [
        "Coworking Space",
        "Meeting Rooms",
        "Coffee Station",
        "Recreation Area",
      ],
    },
    {
      floor: "Second Floor",
      facilities: [
        "Private Offices",
        "Conference Hall",
        "Rest Areas",
        "Admin Offices",
      ],
    },
    {
      floor: "Third Floor",
      facilities: ["AI Lab", "Research Areas", "Quiet Zones", "Library"],
    },
    {
      floor: "Fourth Floor",
      facilities: ["Fabrication Lab", "Workshop", "Storage", "Fitness Center"],
    },
  ];

  return (
    <div className="min-h-screen bg-kipm-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kipm-navy via kipm-navy to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Campus <span className="text-kipm-yellow">Amenities</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto">
              Comprehensive facilities and services designed to support your
              innovation journey with comfort, convenience, and productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {amenities.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-kipm-gray p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-green-600 mb-4">{amenity.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {amenity.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{amenity.description}</p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Availability:</span>
                        <span className="font-medium">
                          {amenity.availability}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Cost:</span>
                        <span
                          className={`font-medium ${amenity.cost === "Free" || amenity.cost.includes("Free") ? "text-green-600" : "text-kipm-orange"}`}
                        >
                          {amenity.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-16 bg-kipm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Campus Floor Plan
            </h2>
            <p className="text-xl text-gray-600">
              Navigate through our facilities across different floors
            </p>
          </div>

          <div className="space-y-6">
            {facilitiesMap.reverse().map((floor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {floor.floor}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {floor.facilities.map((facility, facilityIndex) => (
                    <div
                      key={facilityIndex}
                      className="bg-kipm-gray p-3 rounded-lg text-center"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {facility}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines & Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Facility Guidelines
            </h2>
            <p className="text-xl text-gray-600">
              Important guidelines to ensure a safe and productive environment
              for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-kipm-navy text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">General Guidelines</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Valid ID required for campus access</li>
                <li>• Maintain cleanliness in all areas</li>
                <li>• No smoking or alcohol on premises</li>
                <li>• Respect quiet zones and study areas</li>
                <li>• Report any issues to security</li>
              </ul>
            </div>

            <div className="bg-kipm-crimson text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Safety Protocols</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Follow emergency evacuation procedures</li>
                <li>• Use equipment only after proper training</li>
                <li>• Wear appropriate safety gear in labs</li>
                <li>• Report accidents immediately</li>
                <li>• Keep emergency contacts handy</li>
              </ul>
            </div>

            <div className="bg-kipm-orange text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Booking Policies</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Advance booking required for meeting rooms</li>
                <li>• Maximum 4-hour slots for equipment</li>
                <li>• Cancellation 24 hours in advance</li>
                <li>• No-show charges may apply</li>
                <li>• Group bookings available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Amenities */}
      <section className="py-16 bg-gradient-to-tl from-kipm-navy via kipm-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Additional Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Have specific requirements or need custom arrangements? Our
            facilities team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-kipm-orange hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Contact Facilities Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-kipm-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Request Custom Service
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;
