import { Phone, Mail, MapPin } from "lucide-react";
import qr from "../assets/qr.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/login") return null;

  return (
    <footer className="bg-[#154D71] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12
                      grid gap-10
                      sm:grid-cols-2
                      lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">MenuMakchha</h2>
          <p className="text-sm leading-relaxed text-white/90">
            Discover MenuMakchha: Nepal's top restaurant, cafe, and hotel chain
            offering authentic Nepali and international cuisine. Explore our
            diverse menu and locations nationwide for unparalleled dining and
            hospitality.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="flex items-start gap-3 mb-3">
            <Phone size={18} className="mt-1" />
            <div className="text-sm">
              <p className="font-medium">+977 9802590685</p>
              <p className="text-white/80">Support Number</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <Mail size={18} className="mt-1" />
            <div className="text-sm break-all">
              <p>menumakchha@gmail.com</p>
              <p>info@menumakchha.com</p>
              <p className="text-white/80">Support Email</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-1" />
            <div className="text-sm">
              <p>Golpark-3, Butwal, Nepal</p>
              <p className="text-white/80">Address</p>
            </div>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* QR */}
        <div className="flex flex-col items-start sm:items-center lg:items-start">
          <h3 className="font-semibold mb-4">QR Code</h3>
          <img
            src={qr}
            alt="MenuMakchha QR Code"
            className="w-28 sm:w-32 bg-white p-2 rounded-lg"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/30 py-4 text-center text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} MenuMakchha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
