"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
  e.preventDefault();

  const userData = {
    name,
    email,
    password,
  };

  const existingUsers = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  existingUsers.push(userData);

  localStorage.setItem(
    "users",
    JSON.stringify(existingUsers)
  );

  alert("Account Created Successfully");

  router.push("/login");
};

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0] overflow-hidden">
        <div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center"
          style={{
            padding: "110px 20px 80px",
            gap: "40px",
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
                marginBottom: "14px",
                marginLeft: "10px"
              }}
            >
              Join NishMee
            </p>

            <h1
              className="font-black text-[#111827] leading-none"
              style={{
                fontSize: "clamp(33px,5vw,72px)",
                marginBottom: "22px",
              }}
            >
              Create Your
              <br />
              Luxury Account
            </h1>

            <p
              className="text-gray-600 leading-7"
              style={{
                maxWidth: "520px",
                fontSize: "15px",
                marginBottom: "34px",
              }}
            >
              Save your favorite handcrafted ceramic & marble decor,
              manage orders, build your wishlist, and enjoy a premium
              luxury shopping experience.
            </p>

            {/* FEATURES */}
            <div
              className="grid sm:grid-cols-2 gap-4"
              style={{
                maxWidth: "520px",
              }}
            >
              {[
                "Save Wishlist",
                "Track Orders",
                "Fast Checkout",
                "Premium Experience",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="bg-white flex items-center gap-3 border border-[#ece7df]"
                  style={{
                    padding: "16px 18px",
                    borderRadius: "18px",
                  }}
                >
                  <div
                    className="bg-[#f8f5f0] text-[#c9a96e] flex items-center justify-center"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "999px",
                    }}
                  >
                    <FiHeart />
                  </div>

                  <p className="font-semibold text-[#111827] text-sm">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white mx-auto w-full"
            style={{
              maxWidth: "500px",
              borderRadius: "34px",
              padding: "36px 28px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
            }}
          >
            {/* TOP */}
            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <h2
                className="font-black text-[#111827]"
                style={{
                  fontSize: "34px",
                  marginBottom: "10px",
                }}
              >
                Sign Up
              </h2>

              <p className="text-gray-500 text-sm">
                Create your account to continue shopping.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSignup}
              className="flex flex-col"
              style={{
                gap: "18px",
              }}
            >
              {/* NAME */}
              <div>
                <label
                  className="font-medium text-[#111827] block"
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                  }}
                >
                  Full Name
                </label>

                <div
                  className="flex items-center bg-[#f8f5f0] border border-transparent focus-within:border-black transition"
                  style={{
                    height: "56px",
                    borderRadius: "16px",
                    padding: "0 18px",
                    gap: "12px",
                  }}
                >
                  <FiUser className="text-gray-400 text-lg" />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-transparent outline-none w-full text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  className="font-medium text-[#111827] block"
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
                    height: "56px",
                    borderRadius: "16px",
                    padding: "0 18px",
                    gap: "12px",
                  }}
                >
                  <FiMail className="text-gray-400 text-lg" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent outline-none w-full text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  className="font-medium text-[#111827] block"
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
                    height: "56px",
                    borderRadius: "16px",
                    padding: "0 18px",
                    gap: "12px",
                  }}
                >
                  <FiLock className="text-gray-400 text-lg" />

                  <input
                    type="password"
                    placeholder="Create password"
                    className="bg-transparent outline-none w-full text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-black text-white hover:bg-[#1f1f1f] transition-all duration-300 flex items-center justify-center gap-3"
                style={{
                  height: "58px",
                  borderRadius: "999px",
                  marginTop: "10px",
                  fontWeight: "600",
                }}
              >
                Create Account
                <FiArrowRight />
              </button>
            </form>

            {/* LOGIN */}
            <div
              className="text-center"
              style={{
                marginTop: "24px",
              }}
            >
              <p className="text-gray-500 text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-black font-semibold hover:text-[#c9a96e] transition"
                >
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}