"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  FiArrowRight,
  FiCheck,
  FiTruck,
  FiShield,
  FiAward,
  FiStar,
} from "react-icons/fi";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const collections = [
  {
    id: 1,
    title: "Ceramic Elegance",
    subtitle: "Ceramic vases and mugs Collection",
    image: "/images/ceremicvasesandmugs.jpeg",
    description:
      "Discover handcrafted ceramic vases and luxury mugs designed with timeless elegance, artistic craftsmanship, and refined details to elevate every modern living space.",
  },

  {
    id: 2,
    title: "Premium Wall Decor",
    subtitle: "Premium wall decor in square box designs.",
    image: "/images/premiumwalldecor.jpeg",
    description:
      "Enhance your interiors with handcrafted ceramic and marble wall decor featuring elegant square designs crafted for timeless luxury and modern living spaces.",
  },

  {
    id: 3,
    title: "Colorful Decor",
    subtitle: "Elegant idols & hanging plates.",
    image: "/images/printedplates.jpeg",
    description:
      "Enhance your interiors with elegant handcrafted idols and decorative hanging plates created for luxurious and modern living spaces.",
  },

  {
    id: 4,
    title: "Modern Lighting",
    subtitle: "Luxury Light Collection",
    image: "/images/collection4.jpg",
    description:
      "Transform your interiors with premium lighting collections designed to blend modern sophistication, comfort, and handcrafted beauty.",
  },
];

export default function CollectionsPage() {

  return (
    <>
      <Navbar />

      <section className="bg-[#f8f5f0] overflow-hidden">

        {/* HERO SECTION */}
        <div
          className="relative overflow-hidden"
          style={{
            padding: "130px 20px 90px",
          }}
        >

          {/* Blur Effects */}
          <div className="absolute top-0 left-0 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#e7d8c8] rounded-full blur-3xl opacity-40" />

          <div className="absolute bottom-0 right-0 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#d8c3ae] rounded-full blur-3xl opacity-30" />

          <div className="max-w-7xl mx-auto w-full relative z-10">

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-center"
            >

              <p
                className="uppercase tracking-[5px] sm:tracking-[6px] text-xs sm:text-sm text-gray-500 font-medium"
                style={{
                  marginBottom: "18px",
                }}
              >
                Premium Collections
              </p>

              <h1
                className="
                text-[42px]
                sm:text-[52px]
                md:text-[60px]
                lg:text-[68px]
                font-bold
                text-black
                leading-[1.1]
                "
                style={{
                  marginBottom: "24px",
                }}
              >
                Crafted For
                <br />
                Timeless Elegance
              </h1>

              <p
                className="
                text-[15px]
                sm:text-[16px]
                lg:text-[18px]
                text-gray-600
                mx-auto
                leading-8
                "
                style={{
                  maxWidth: "760px",
                  marginBottom: "40px",
                  marginLeft: "250px"
                }}
              >
                Discover our handcrafted ceramic and marble collections, thoughtfully designed to bring elegance, artistry, and luxury into every space with timeless decor pieces made for modern living.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">

                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 bg-black text-white hover:bg-[#1f1f1f] transition duration-300"
                  style={{
                    height: "54px",
                    borderRadius: "999px",
                    padding: "0 28px",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >

                  Explore Products

                  <FiArrowRight />

                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-black text-black hover:bg-black hover:text-white transition duration-300"
                  style={{
                    height: "54px",
                    borderRadius: "999px",
                    padding: "0 28px",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >

                  Contact Us

                </Link>

              </div>

            </motion.div>

          </div>

        </div>

        {/* STATS */}
        <div
          style={{
            padding: "0 20px 90px",
          }}
        >

          <div className="max-w-7xl mx-auto w-full">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

              {[
                {
                  number: "25K+",
                  title: "Happy Customers",
                },

                {
                  number: "120+",
                  title: "Luxury Collections",
                },

                {
                  number: "5+",
                  title: "Years Experience",
                },

                {
                  number: "99%",
                  title: "Positive Reviews",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="bg-white shadow-sm hover:shadow-xl transition duration-500 text-center"
                  style={{
                    padding: "28px 18px",
                    borderRadius: "24px",
                  }}
                >

                  <h2
                    className="
                    text-[28px]
                    sm:text-[34px]
                    lg:text-[42px]
                    font-bold
                    text-black
                    "
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    {item.number}
                  </h2>

                  <p className="text-gray-500 text-sm sm:text-base">
                    {item.title}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* COLLECTIONS */}
        <div
          style={{
            padding: "0 20px 90px",
          }}
        >

          <div className="max-w-7xl mx-auto w-full">

            <div
              className="text-center"
              style={{
                marginBottom: "60px",
              }}
            >

              <p
                className="uppercase tracking-[5px] text-xs sm:text-sm text-gray-500"
                style={{
                  marginBottom: "14px",
                }}
              >
                Featured Collections
              </p>

              <h2
                className="
                text-[34px]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[52px]
                font-bold
                leading-tight
                "
                style={{
                  marginBottom: "18px",
                }}
              >
                Discover Premium
                <br />
                Ceramic & Marble Collections
              </h2>

              <p
                className="text-gray-600 mx-auto leading-8 text-sm sm:text-base"
                style={{
                  maxWidth: "720px",
                  marginLeft: "250px"
                }}
              >
                Explore our handcrafted ceramic and marble collections, designed with timeless artistry, elegant details, and premium craftsmanship to bring luxury and sophistication into every space.
              </p>

            </div>

            <div className="flex flex-col gap-16">

              {collections.map((item, index) => (

                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-10
                  lg:gap-14
                  items-center
                  ${index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}
                  `}
                >

                  {/* IMAGE */}
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`
                    relative
                    overflow-hidden
                    sm:h-[480px]
                    lg:h-[560px]
                    ${index % 2 !== 0 ? "lg:col-start-2" : ""}
                    `}
                    style={{
                      height: "420px",
                      borderRadius: "28px",
                    }}
                  >

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                  </motion.div>

                  {/* CONTENT */}
                  <div>

                    <div
                      className="inline-flex items-center gap-2 bg-white shadow-sm"
                      style={{
                        padding: "10px 18px",
                        borderRadius: "999px",
                        marginBottom: "22px",
                      }}
                    >

                      <FiStar />

                      Premium Collection

                    </div>

                    <h2
                      className="
                      text-[30px]
                      sm:text-[38px]
                      md:text-[42px]
                      lg:text-[48px]
                      font-bold
                      leading-tight
                      "
                      style={{
                        marginBottom: "16px",
                      }}
                    >
                      {item.title}
                    </h2>

                    <p
                      className="text-black font-semibold"
                      style={{
                        fontSize: "18px",
                        marginBottom: "16px",
                      }}
                    >
                      {item.subtitle}
                    </p>

                    <p
                      className="text-gray-600 leading-8 text-sm sm:text-base"
                      style={{
                        marginBottom: "30px",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* FEATURES */}
                    <div
                      className="grid sm:grid-cols-2 gap-4"
                      style={{
                        marginBottom: "30px",
                      }}
                    >

                      {[
                        "Handcrafted Quality",
                        "Timeless Design",
                        "Luxury Ceramic Art",
                        "Refined Finishing",
                      ].map((feature) => (

                        <div
                          key={feature}
                          className="flex items-center gap-3 bg-white"
                          style={{
                            padding: "14px",
                            borderRadius: "20px",
                          }}
                        >

                          <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                            <FiCheck />
                          </div>

                          <p className="font-medium text-gray-700 text-sm">
                            {feature}
                          </p>

                        </div>

                      ))}

                    </div>

                    <Link
                      href="/products"
                      className="inline-flex items-center gap-3 bg-black text-white hover:bg-[#1f1f1f] transition duration-300"
                      style={{
                        height: "54px",
                        borderRadius: "999px",
                        padding: "0 28px",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >

                      Shop Collection

                      <FiArrowRight />

                    </Link>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* TRUST SECTION */}
        <div
          style={{
            padding: "0 20px 90px",
          }}
        >

          <div className="max-w-7xl mx-auto w-full">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

              {[
                {
                  title: "Premium Materials",
                  text: "Crafted using luxury-grade materials and elegant finishes.",
                },

                {
                  title: "Modern Design",
                  text: "Elegant collections inspired by modern interiors.",
                },

                {
                  title: "Fast Delivery",
                  text: "Safe and premium delivery experience worldwide.",
                },

                {
                  title: "Secure Payments",
                  text: "Trusted and secure checkout for all customers.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="bg-white shadow-sm hover:shadow-xl transition duration-500"
                  style={{
                    padding: "28px",
                    borderRadius: "24px",
                  }}
                >

                  <h3
                    className="font-bold text-[22px]"
                    style={{
                      marginBottom: "14px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-8 text-sm sm:text-base">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div
          className="bg-white"
          style={{
            padding: "90px 20px",
          }}
        >

          <div className="max-w-7xl mx-auto w-full">

            <div
              className="text-center"
              style={{
                marginBottom: "60px",
              }}
            >

              <p
                className="uppercase tracking-[5px] text-xs sm:text-sm text-gray-500"
                style={{
                  marginBottom: "14px",
                }}
              >
                Why Choose Us
              </p>

              <h2
                className="
                text-[34px]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[52px]
                font-bold
                leading-tight
                "
              >
                Premium Experience
                <br />
                Built For Luxury
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  icon: <FiTruck />,
                  title: "Fast Delivery",
                  text:
                    "Premium delivery services with secure packaging and fast shipping.",
                },

                {
                  icon: <FiShield />,
                  title: "Secure Payments",
                  text:
                    "Trusted checkout systems designed for secure luxury shopping.",
                },

                {
                  icon: <FiAward />,
                  title: "Premium Quality",
                  text:
                    "Crafted with elegant premium materials and luxury craftsmanship.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="bg-[#f8f5f0] hover:bg-black hover:text-white transition duration-500 group"
                  style={{
                    padding: "30px",
                    borderRadius: "28px",
                  }}
                >

                  <div
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-2xl"
                    style={{
                      marginBottom: "22px",
                    }}
                  >
                    {item.icon}
                  </div>

                  <h3
                    className="font-bold text-[26px]"
                    style={{
                      marginBottom: "14px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="leading-8 text-gray-500 group-hover:text-gray-300 transition text-sm sm:text-base">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* TESTIMONIALS */}
        <div
          style={{
            padding: "100px 20px",
          }}
        >

          <div className="max-w-7xl mx-auto w-full">

            <div
              className="text-center"
              style={{
                marginBottom: "60px",
              }}
            >

              <p
                className="uppercase tracking-[5px] text-xs sm:text-sm text-gray-500"
                style={{
                  marginBottom: "14px",
                }}
              >
                Testimonials
              </p>

              <h2
                className="
                text-[34px]
                sm:text-[42px]
                md:text-[48px]
                lg:text-[52px]
                font-bold
                "
              >
                What Our Customers Say
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  name: "Sophia Williams",
                  review:
                    "Absolutely loved the premium quality and elegant furniture collection.",
                },

                {
                  name: "James Anderson",
                  review:
                    "The luxury interior collection completely transformed my home.",
                },

                {
                  name: "Emma Brown",
                  review:
                    "Beautiful modern designs with premium customer experience.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="bg-white shadow-sm"
                  style={{
                    padding: "30px",
                    borderRadius: "24px",
                  }}
                >

                  <div
                    className="flex items-center gap-1 text-yellow-500"
                    style={{
                      marginBottom: "18px",
                    }}
                  >
                    ★★★★★
                  </div>

                  <p
                    className="text-gray-600 leading-8 text-sm sm:text-base"
                    style={{
                      marginBottom: "22px",
                    }}
                  >
                    {item.review}
                  </p>

                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

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