"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FiArrowUpRight,
  FiAward,
  FiHeart,
  FiStar,
  FiShield,
  FiTruck,
  FiCheck
} from "react-icons/fi";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const stats = [
  {
    number: "12K+",
    label: "Happy Customers",
  },
  {
    number: "250+",
    label: "Luxury Products",
  },
  {
    number: "4.9★",
    label: "Customer Rating",
  },
  {
    number: "8+",
    label: "Years Experience",
  },
];

const values = [
  {
    icon: <FiAward />,
    title: "Premium Craftsmanship",
    desc: "Every ceramic and marble decor piece is handcrafted with precision and artistic excellence.",
  },
  {
    icon: <FiHeart />,
    title: "Elegant Designs",
    desc: "Luxury handcrafted decor designed to enhance modern interiors with timeless beauty.",
  },
  {
    icon: <FiShield />,
    title: "Trusted Quality",
    desc: "We use durable premium materials to ensure every product feels luxurious and long-lasting.",
  },
  {
    icon: <FiTruck />,
    title: "Worldwide Delivery",
    desc: "Fast and secure shipping experience with safe premium packaging for every order.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f8f5f0] overflow-hidden">
        <div
          className="max-w-7xl mx-auto"
          style={{
            padding: "100px 18px 80px",
          }}
        >
          {/* HERO */}
          <div
            className="grid lg:grid-cols-2 items-center"
            style={{
              gap: "40px",
              marginBottom: "80px",
            }}
          >
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="uppercase text-[#c9a96e] font-semibold"
                style={{
                  letterSpacing: "4px",
                  fontSize: "11px",
                  marginBottom: "16px",
                }}
              >
                About Our Brand
              </p>

              <h1
                className="font-black text-[#111827] leading-tight"
                style={{
                  fontSize: "clamp(34px,6vw,62px)",
                  marginBottom: "20px",
                }}
              >
                Handcrafted Ceramic
                <br />
                & Marble Art
              </h1>

              <p
                className="text-gray-600 leading-8"
                style={{
                  fontSize: "15px",
                  maxWidth: "560px",
                  marginBottom: "28px",
                }}
              >
                Transform your home with premium ceramic decor,
                marble dust art, luxury mugs, idols, wall decor,
                and handcrafted pieces designed for timeless elegance.
                Our collections are carefully curated to bring warmth,
                sophistication, and artistic beauty into every space.
              </p>

              {/* BUTTONS */}
              <div
                className="flex flex-wrap items-center"
                style={{
                  gap: "14px",
                }}
              >
                <Link
                  href="/products"
                  className="bg-black text-white hover:bg-[#222] transition-all duration-300 flex items-center justify-center"
                  style={{
                    height: "50px",
                    padding: "0 26px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Explore Collection
                </Link>

                <Link
                  href="/collections"
                  className="border border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
                  style={{
                    height: "50px",
                    padding: "0 22px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  View Collections
                  <FiArrowUpRight />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="relative overflow-hidden bg-white"
                style={{
                  height: "500px",
                  borderRadius: "30px",
                  padding: "14px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/about.jpg"
                    alt="About"
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* FLOATING CARD */}
                <div
                  className="absolute bg-white"
                  style={{
                    bottom: "24px",
                    left: "24px",
                    padding: "16px 18px",
                    borderRadius: "20px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="flex items-center"
                    style={{
                      gap: "12px",
                    }}
                  >
                    <div
                      className="bg-[#f8f5f0] rounded-full flex items-center justify-center"
                      style={{
                        width: "46px",
                        height: "46px",
                      }}
                    >
                      <FiStar className="text-[#c9a96e]" />
                    </div>

                    <div>
                      <h4
                        className="font-bold text-black"
                        style={{
                          fontSize: "15px",
                          marginBottom: "2px",
                        }}
                      >
                        Luxury Handcrafted Art
                      </h4>

                      <p
                        className="text-gray-500"
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Elegant premium decor collection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* OUR STORY */}
          <div
            className="grid lg:grid-cols-2 items-center"
            style={{
              gap: "50px",
              marginBottom: "90px",
            }}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  height: "450px",
                  borderRadius: "30px",
                }}
              >
                <Image
                  src="/images/about2.jpg"
                  alt="Story"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="uppercase text-[#c9a96e] font-semibold"
                style={{
                  letterSpacing: "4px",
                  fontSize: "11px",
                  marginBottom: "14px",
                }}
              >
                Our Story
              </p>

              <h2
                className="font-black text-[#111827] leading-tight"
                style={{
                  fontSize: "clamp(30px,5vw,50px)",
                  marginBottom: "20px",
                }}
              >
                Crafted For
                <br />
                Timeless Spaces
              </h2>

              <p
                className="text-gray-600 leading-8"
                style={{
                  fontSize: "15px",
                  marginBottom: "18px",
                }}
              >
                We believe home decor should feel artistic, luxurious,
                and meaningful. Our handcrafted ceramic and marble art
                collections are inspired by timeless aesthetics,
                traditional craftsmanship, and modern interior trends.
              </p>

              <p
                className="text-gray-600 leading-8"
                style={{
                  fontSize: "15px",
                  marginBottom: "30px",
                }}
              >
                From premium mugs and decorative idols to elegant wall
                decor and luxury handcrafted accents, every product is
                designed to create a sophisticated and warm atmosphere
                in your home.
              </p>

              <div
                className="grid sm:grid-cols-2"
                style={{
                  gap: "16px",
                }}
              >
                {[
                  "Premium Ceramic Decor",
                  "Luxury Marble Dust Art",
                  "Elegant Wall Decor",
                  "Modern Handmade Designs",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white flex items-center"
                    style={{
                      gap: "12px",
                      padding: "16px",
                      borderRadius: "18px",
                    }}
                  >
                    <div
                      className="bg-black text-white rounded-full flex items-center justify-center"
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    >
                      <FiCheck className="text-sm" />
                    </div>

                    <span
                      className="font-semibold text-black"
                      style={{
                        fontSize: "14px",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* VALUES */}
          <div>
            <div
              className="text-center"
              style={{
                marginBottom: "50px",
              }}
            >
              <p
                className="uppercase text-[#c9a96e] font-semibold"
                style={{
                  letterSpacing: "4px",
                  fontSize: "11px",
                  marginBottom: "12px",
                }}
              >
                Why Choose Us
              </p>

              <h2
                className="font-black text-[#111827]"
                style={{
                  fontSize: "clamp(30px,5vw,52px)",
                  marginBottom: "14px",
                }}
              >
                Luxury Decor Experience
              </h2>

              <p
                className="text-gray-500 mx-auto leading-8"
                style={{
                  maxWidth: "650px",
                  fontSize: "15px",
                  marginLeft: "250px"
                }}
              >
                Experience premium handcrafted decor made with elegance,
                creativity, and attention to every artistic detail.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-white hover:-translate-y-2 transition-all duration-500"
                  style={{
                    padding: "28px 22px",
                    borderRadius: "26px",
                    boxShadow: "0 4px 25px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="bg-[#f8f5f0] text-[#c9a96e] rounded-full flex items-center justify-center"
                    style={{
                      width: "56px",
                      height: "56px",
                      marginBottom: "20px",
                      fontSize: "22px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="font-bold text-black"
                    style={{
                      fontSize: "18px",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-gray-500 leading-7"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}