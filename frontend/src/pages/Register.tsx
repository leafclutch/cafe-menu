import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterSection() {
  const [sent, setSent] = useState(false);

  return (
    <section
      className="bg-cover bg-center min-h-screen flex items-center justify-center -mt-[80px]"
      
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-40 mb-10">
        <h1 className="text-3xl font-bold text-center mb-8">Register</h1>

        <form
          action="mailto:info@leafclutch.dev"
          method="POST"
          encType="text/plain"
          className="space-y-4"
          onSubmit={() => setSent(true)}
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="Full Name"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter full name"
              required
            />
          </div>

          {/* Restaurant Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Restaurant Name
            </label>
            <input
              type="text"
              name="Restaurant Name"
              className="w-full border rounded px-3 py-2"
              placeholder="Restaurant name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="Email"
              className="w-full border rounded px-3 py-2"
              placeholder="Email address"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Mobile Number
            </label>
            <input
              type="number"
              name="Mobile Number"
              className="w-full border rounded px-3 py-2"
              placeholder="Mobile number"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Address
            </label>
            <input
              type="text"
              name="Address"
              className="w-full border rounded px-3 py-2"
              placeholder="Address"
              required
            />
          </div>

          {/* Password (OPTIONAL) */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Password (optional)
            </label>
            <input
              type="password"
              name="Password"
              className="w-full border rounded px-3 py-2"
              placeholder="********"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          >
            Register
          </button>

          {/* Success Message */}
          {sent && (
            <p className="text-green-600 text-center font-medium">
              ✅ Your details have been sent successfully!
            </p>
          )}

          {/* Login text (with redirect to login page) */}
          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}


