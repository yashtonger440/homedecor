"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { login } from "@/store/features/authSlice";
import { loadCart } from "@/store/features/cartSlice";
import { loadWishlist } from "@/store/features/wishlistSlice";

import {
  FiMail,
  FiLock,
  FiArrowRight,
} from "react-icons/fi";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const dispatch = useDispatch();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

  const users = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const matchedUser = users.find(
    (user: any) =>
      user.email === email &&
      user.password === password
  );

  if (matchedUser) {

    dispatch(
      login({
        email,
        password,
      })
    );

    alert("Login Successful");
    dispatch(loadCart());
    dispatch(loadWishlist());

    router.push("/");

  } else {

    alert("Invalid Email or Password");

  }
};

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0] overflow-hidden">
        <div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center"
          style={{
            padding: "110px 20px 80px",
            minHeight: "100vh",
            gap: "60px",
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="uppercase tracking-[4px] text-[#c9a96e] font-semibold"
              style={{
                fontSize: "11px",
                marginBottom: "16px",
                marginLeft: "10px"
              }}
            >
              Welcome
            </p>

            <h1
              className="font-black text-[#111827] leading-tight"
              style={{
                fontSize: "clamp(33px,5vw,70px)",
                marginBottom: "22px",
              }}
            >
              Login To Your
              <br />
              Luxury Account
            </h1>

            <p
              className="text-gray-500 leading-8"
              style={{
                maxWidth: "520px",
                fontSize: "16px",
              }}
            >
              Access your wishlist, orders, premium handcrafted collections,
              and luxury ceramic decor shopping experience.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white relative overflow-hidden"
            style={{
              borderRadius: "36px",
              padding: "40px 28px",
              boxShadow: "0 15px 50px rgba(0,0,0,0.06)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute -top-16 -right-16 bg-[#f3e4d1] blur-3xl opacity-40"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "999px",
              }}
            />

            <div className="relative z-10">

              {/* Heading */}
              <div
                style={{
                  marginBottom: "32px",
                }}
              >
                <h2
                  className="font-black text-[#111827]"
                  style={{
                    fontSize: "34px",
                    marginBottom: "10px",
                  }}
                >
                  Sign In
                </h2>

                <p className="text-gray-500 text-[15px]">
                  Login to continue your luxury shopping journey.
                </p>
              </div>

              {/* Email */}
              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  className="block font-medium text-[#111827]"
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  Email Address
                </label>

                <div
                  className="flex items-center bg-[#f8f5f0] border border-transparent focus-within:border-black transition"
                  style={{
                    height: "58px",
                    borderRadius: "18px",
                    padding: "0 18px",
                    gap: "12px",
                  }}
                >
                  <FiMail className="text-gray-400 text-lg" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none w-full text-black placeholder:text-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <label
                  className="block font-medium text-[#111827]"
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  Password
                </label>

                <div
                  className="flex items-center bg-[#f8f5f0] border border-transparent focus-within:border-black transition"
                  style={{
                    height: "58px",
                    borderRadius: "18px",
                    padding: "0 18px",
                    gap: "12px",
                  }}
                >
                  <FiLock className="text-gray-400 text-lg" />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-transparent outline-none w-full text-black placeholder:text-gray-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Forgot */}
              <div
                className="flex justify-end"
                style={{
                  marginBottom: "28px",
                }}
              >
                <button className="text-sm text-gray-500 hover:text-black transition">
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full bg-black text-white hover:bg-[#1f1f1f] transition-all duration-300 flex items-center justify-center gap-3"
                style={{
                  height: "60px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  marginBottom: "24px",
                }}
              >
                Login
                <FiArrowRight />
              </button>

              {/* Bottom */}
              <div className="text-center">
                <p className="text-gray-500 text-[15px]">
                  Don’t have an account?{" "}

                  <Link
                    href="/signup"
                    className="text-black font-semibold hover:text-[#c9a96e] transition"
                  >
                    Create Account
                  </Link>
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}