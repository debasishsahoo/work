import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },

    { path: "/about", label: "About" },

    {
      label: "Labs",
      dropdown: [
        { path: "/ai-lab", label: "AI Lab" },
        { path: "/fabrication-lab", label: "Fabrication Lab" },
      ],
    },
    {
      label: "Incubation",
      dropdown: [
        { path: "/amenities", label: "Amenities" },
        { path: "/startups", label: "Startups" },
        { path: "/coworking-space", label: "Coworking Space" },
      ],
    },
    {
      path: "/courses",
      label: "Courses",
    },

    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (dropdownItems: { path: string }[]) => {
    return dropdownItems.some((sub) => location.pathname.startsWith(sub.path));
  };

  return (
    <nav className="bg-kipm-navy sticky top-0 z-40 shadow-lg h-[12svh]">
      <div className="px-2 md:px-6 lg:px-8">
        <div className="flex justify-between lg:justify-around items-center">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={`${item.path} - ${idx}`}
                  className="relative group flex items-center"
                >
                  <div
                    className={`px-1 py-2 text-sm font-medium font-mokoto cursor-pointer transition-colors duration-200 ${
                      isDropdownActive(item.dropdown)
                        ? "text-kipm-orange border-b-2 border-kipm-orange"
                        : "text-kipm-white hover:text-kipm-yellow"
                    }`}
                  >
                    {item.label}
                  </div>
                  <ChevronDown className="h-[12px] text-kipm-white cursor-pointer group-hover:text-kipm-yellow" />

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-kipm-white/80 text-kipm-navy  shadow-lg border border-kipm-white min-w-[180px] z-10">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`px-4 py-2 transition-colors duration-150
                          ${
                            isActive(subItem.path)
                              ? "text-kipm-orange bg-kipm-navy"
                              : "text-kipm-navy hover:text-kipm-yellow hover:bg-kipm-navy"
                          }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={`${item.path} - ${idx}`}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium font-mokoto transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-kipm-orange border-b-2 border-kipm-orange"
                      : "text-kipm-white hover:text-kipm-yellow"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-kipm-white hover:text-kipm-yellow"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`lg:hidden absolute top-full left-0 h-[92svh] w-full bg-kipm-navy pb-4 shadow-xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-[100%]"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-2 border-t border-gray-600">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  item.dropdown.map((subItem) => (
                    <Link
                      key={`${subItem.path} - ${index}`}
                      to={subItem.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 text-xl font-medium font-mokoto transition-colors duration-200 ${
                        isActive(subItem.path)
                          ? "text-kipm-orange bg-kipm-navy bg-opacity-50"
                          : "text-kipm-white hover:text-kipm-yellow hover:bg-kipm-navy hover:bg-opacity-30"
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-xl font-medium font-mokoto transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-kipm-orange bg-kipm-navy bg-opacity-50"
                        : "text-kipm-white hover:text-kipm-yellow hover:bg-kipm-navy hover:bg-opacity-30"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
