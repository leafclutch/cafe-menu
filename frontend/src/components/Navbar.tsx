import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/login") return null;

  const hideOnScrollPages = ["/register", "/about", "/services", "/contact", "/Pricing"];
  const isHideOnScrollPage = hideOnScrollPages.includes(location.pathname);

  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHideOnScrollPage) {
      setShowNavbar(true);
      return;
    }

    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHideOnScrollPage]);

  if (!showNavbar && isHideOnScrollPage) return null;

  const isTransparentPage = hideOnScrollPages.includes(location.pathname);

  return (
    <section className="fixed top-0 left-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ${
          isTransparentPage ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-2
                        flex items-center justify-between">

         <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 sm:h-16 w-auto" />
            <span className="ml-2 text-lg font-semibold font-bold">Leafclutch Technologies</span>
               </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#154D71]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu */}
          <ul
            className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8
              text-[#154D71] font-semibold
              absolute lg:static top-full left-0 w-full lg:w-auto
              bg-white lg:bg-transparent
              transition-all duration-300
              ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible lg:visible lg:opacity-100"}
              
              [&_a]:px-3 [&_a]:py-2 [&_a]:rounded-md
              [&_a]:transition-all [&_a]:duration-300
              [&_a:hover]:shadow-[0_4px_12px_rgba(51,161,224,0.35)]
            `}
          >
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/Pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>

            <li>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-[#FFF9AF] text-[#1C6EA4] px-6 py-2 rounded-full hover:bg-opacity-90"
              >
                Register
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="bg-[#FFF9AF] text-[#1C6EA4] px-6 py-2 rounded-full hover:bg-opacity-90"
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
