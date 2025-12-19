import { useState } from "react";
import logo from "../assets/logo.png";
import qr from "../assets/qr.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* 
          1. Changed flex to flex-col for mobile, lg:flex-row for desktop 
          2. Added max-w-md for mobile and max-w-5xl for desktop
      */}
      <div className="bg-white rounded-xl shadow-lg flex flex-col lg:flex-row max-w-md lg:max-w-5xl w-full overflow-hidden">

        {/* Left Column (QR/Image) - Hidden or resized on small screens */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-6 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
          <p className="text-gray-500 mb-4 text-sm font-medium lg:hidden">Scan to Login</p>
          <img src={qr} alt="Login QR" className="w-48 lg:w-full max-w-xs object-cover rounded-md" />
        </div>

        {/* Right Column (Form) */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center relative">
          
          {/* Logo - Adjusted position for mobile layout */}
          <div className="flex justify-center lg:absolute lg:top-6 lg:right-6 mb-6 lg:mb-0">
            <img src={logo} alt="Logo" className="w-24" />
          </div>

          <div className="mt-4 lg:mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 lg:hidden text-center">Welcome Back</h2>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  E-Mail/Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email or mobile"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-400" />
                  <label htmlFor="remember" className="text-sm text-gray-600">Remember Me</label>
                </div>
                <a href="#" className="text-sm text-[#1C6EA4] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFF9AF] text-[#1C6EA4] py-2.5 rounded-lg font-semibold transition duration-200 shadow-md"
              >
                Login
              </button>

              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{" "}
                <a href="/register" className="text-[#1C6EA4] font-semibold hover:underline">
                  Register Here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
