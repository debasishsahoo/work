import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-kipm-navy text-kipm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-10 md:items-center">
          {/* Brand Section */}
          <div className="flex-1 min-w-[250px]">
            <div className="mb-4">
              <Logo showText={true}/>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering innovation and entrepreneurship through cutting-edge
              incubation programs, state-of-the-art facilities, and
              comprehensive skill development courses.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-kipm-white hover:text-kipm-orange transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Link and Contact Section */}
          <div className="flex-1 min-w-[250px] flex flex-col sm:flex-row gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-kipm-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", path: "/about" },
                  { label: "Startups", path: "/startups" },
                  { label: "Courses", path: "/courses" },
                  { label: "AI Lab", path: "/ai-lab" },
                  { label: "Fabrication Lab", path: "/fabrication-lab" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-kipm-yellow transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-kipm-white mb-4">
                Contact Info
              </h4>
              <div className="space-y-4">
                {[
                  {
                    Icon: MapPin,
                    text: "KIPM Campus, Innovation Hub, Techno City",
                  },
                  {
                    Icon: Phone,
                    text: "+91 123 456 7890",
                  },
                  {
                    Icon: Mail,
                    text: "info@kipminnovators.org",
                  },
                ].map(({ Icon, text }, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-kipm-orange" />
                    <span className="text-gray-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 KIPM Innovators Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (label, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-kipm-yellow text-sm transition-colors"
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
