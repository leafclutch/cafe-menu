import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login") return null;

  const hideOnScrollPages = ["/register", "/about", "/services", "/contact", "/Pricing"];
  const isHideOnScrollPage = hideOnScrollPages.includes(location.pathname);

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (!isHideOnScrollPage) {
      setShowNavbar(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHideOnScrollPage]);

  if (!showNavbar && isHideOnScrollPage) return null;

  const isTransparentPage = hideOnScrollPages.includes(location.pathname);

  return (
    <section className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
      <nav
        className={`transition-all duration-300 ${
          isTransparentPage ? "bg-transparent" : "bg-[#f0cfd5]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-16 py-6 flex items-center justify-between">
          
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 w-auto object-contain" 
            />
          </Link>

          <ul className="flex items-center gap-8 text-[#696FC7] font-semibold">
            <li>
              <Link to="/" className="hover:text-purple-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-purple-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Pricing" className="hover:text-purple-500 transition">
              Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-[#696FC7] text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-[#696FC7] text-white px-6 py-2.5 rounded-full hover:bg-opacity-90 transition"
                target="_blank"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
