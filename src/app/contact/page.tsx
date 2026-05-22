"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiSend,
} from "react-icons/fi";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const contactInfo = [
  {
    icon: <FiPhone />,
    title: "Call Us",
    value: "+91 98765 43210",
    desc: "Mon to Sat • 10AM to 7PM",
  },
  {
    icon: <FiMail />,
    title: "Email Address",
    value: "support@luxedecor.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: <FiMapPin />,
    title: "Our Studio",
    value: "New Delhi, India",
    desc: "Luxury Ceramic Art Studio",
  },
  {
    icon: <FiClock />,
    title: "Working Hours",
    value: "10:00 AM - 7:00 PM",
    desc: "Sunday Closed",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0] overflow-hidden">
        <div
          className="max-w-7xl mx-auto"
          style={{
            padding: "100px 18px 80px",
          }}
        >
          {/* HERO */}
          <div
            className="text-center"
            style={{
              marginBottom: "70px",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase text-[#c9a96e] font-semibold"
              style={{
                letterSpacing: "4px",
                fontSize: "11px",
                marginBottom: "16px",
                marginRight: "50px"
              }}
            >
              Contact Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-black text-[#111827] leading-tight"
              style={{
                fontSize: "clamp(30px,5vw,60px)",
                marginBottom: "20px",
              }}
            >
              Let’s Create
              <br />
              Elegant Spaces Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 mx-auto leading-8"
              style={{
                maxWidth: "700px",
                fontSize: "15px",
                marginLeft: "280px"
              }}
            >
              Have questions about our handcrafted ceramic and marble
              decor collections? We’d love to help you choose the perfect
              luxury decor pieces for your home.
            </motion.p>
          </div>

          {/* CONTACT GRID */}
          <div
            className="grid lg:grid-cols-[0.9fr_1.1fr]"
            style={{
              gap: "30px",
              marginBottom: "80px",
            }}
          >
            {/* LEFT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white"
              style={{
                borderRadius: "32px",
                padding: "34px 28px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.05)",
              }}
            >
              <p
                className="uppercase text-[#c9a96e] font-semibold"
                style={{
                  letterSpacing: "4px",
                  fontSize: "11px",
                  marginBottom: "14px",
                }}
              >
                Get In Touch
              </p>

              <h2
                className="font-black text-[#111827] leading-tight"
                style={{
                  fontSize: "clamp(28px,4vw,44px)",
                  marginBottom: "18px",
                }}
              >
                We’re Here
                <br />
                To Help You
              </h2>

              <p
                className="text-gray-500 leading-8"
                style={{
                  fontSize: "14px",
                  marginBottom: "32px",
                }}
              >
                Connect with our team for product inquiries,
                bulk orders, collaborations, or personalized
                decor recommendations.
              </p>

              {/* CONTACT CARDS */}
              <div
                className="flex flex-col"
                style={{
                  gap: "18px",
                }}
              >
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="bg-[#f8f5f0] flex items-start"
                    style={{
                      gap: "16px",
                      padding: "18px",
                      borderRadius: "22px",
                    }}
                  >
                    <div
                      className="bg-white text-[#c9a96e] flex items-center justify-center rounded-full"
                      style={{
                        width: "54px",
                        height: "54px",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3
                        className="font-bold text-black"
                        style={{
                          fontSize: "16px",
                          marginBottom: "5px",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="font-semibold text-[#111827]"
                        style={{
                          fontSize: "15px",
                          marginBottom: "4px",
                        }}
                      >
                        {item.value}
                      </p>

                      <p
                        className="text-gray-500"
                        style={{
                          fontSize: "13px",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* SOCIAL */}
              <div
                style={{
                  marginTop: "36px",
                }}
              >
                <p
                  className="font-semibold text-black"
                  style={{
                    fontSize: "15px",
                    marginBottom: "16px",
                  }}
                >
                  Follow Us
                </p>

                <div
                  className="flex items-center"
                  style={{
                    gap: "12px",
                  }}
                >
                  {[FiInstagram, FiFacebook, FiTwitter].map(
                    (Icon, index) => (
                      <button
                        key={index}
                        className="bg-black text-white hover:scale-110 transition-all duration-300 flex items-center justify-center rounded-full"
                        style={{
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <Icon />
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white"
              style={{
                borderRadius: "32px",
                padding: "36px 28px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  marginBottom: "30px",
                }}
              >
                <p
                  className="uppercase text-[#c9a96e] font-semibold"
                  style={{
                    letterSpacing: "4px",
                    fontSize: "11px",
                    marginBottom: "14px",
                  }}
                >
                  Send Message
                </p>

                <h2
                  className="font-black text-[#111827]"
                  style={{
                    fontSize: "clamp(28px,4vw,46px)",
                    marginBottom: "14px",
                  }}
                >
                  Contact Form
                </h2>

                <p
                  className="text-gray-500 leading-8"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Fill out the form below and our support team
                  will get back to you shortly.
                </p>
              </div>

              {/* FORM */}
              <form
                className="flex flex-col"
                style={{
                  gap: "20px",
                }}
              >
                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block font-semibold text-black"
                      style={{
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-[#f8f5f0] outline-none border border-transparent focus:border-black transition"
                      style={{
                        height: "56px",
                        borderRadius: "16px",
                        padding: "0 18px",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-semibold text-black"
                      style={{
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#f8f5f0] outline-none border border-transparent focus:border-black transition"
                      style={{
                        height: "56px",
                        borderRadius: "16px",
                        padding: "0 18px",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    className="block font-semibold text-black"
                    style={{
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Write subject"
                    className="w-full bg-[#f8f5f0] outline-none border border-transparent focus:border-black transition"
                    style={{
                      height: "56px",
                      borderRadius: "16px",
                      padding: "0 18px",
                      fontSize: "14px",
                    }}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    className="block font-semibold text-black"
                    style={{
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    placeholder="Write your message..."
                    className="w-full bg-[#f8f5f0] outline-none border border-transparent focus:border-black transition resize-none"
                    style={{
                      height: "170px",
                      borderRadius: "20px",
                      padding: "18px",
                      fontSize: "14px",
                    }}
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-[#222] transition-all duration-300 flex items-center justify-center gap-3"
                  style={{
                    height: "58px",
                    borderRadius: "999px",
                    fontSize: "15px",
                    fontWeight: "600",
                    marginTop: "10px",
                  }}
                >
                  Send Message
                  <FiSend />
                </button>
              </form>
            </motion.div>
          </div>

          {/* MAP / CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-black text-white"
            style={{
              borderRadius: "36px",
              padding: "60px 24px",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at top right, #ffffff 0%, transparent 40%)",
              }}
            />

            <div
              className="relative z-10 text-center"
              style={{
                maxWidth: "780px",
                margin: "0 auto",
              }}
            >
              <p
                className="uppercase text-[#c9a96e] font-semibold"
                style={{
                  letterSpacing: "4px",
                  fontSize: "11px",
                  marginBottom: "16px",
                }}
              >
                Luxury Decor Studio
              </p>

              <h2
                className="font-black leading-tight"
                style={{
                  fontSize: "clamp(30px,5vw,58px)",
                  marginBottom: "18px",
                }}
              >
                Elevate Your Interior
                <br />
                With Artistic Elegance
              </h2>

              <p
                className="text-gray-300 leading-8 mx-auto"
                style={{
                  maxWidth: "620px",
                  fontSize: "15px",
                  marginBottom: "30px",
                  marginLeft: "100px"
                }}
              >
                Explore handcrafted ceramic decor, marble dust art,
                luxury mugs, idols, and premium home styling pieces
                designed for elegant modern living.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-white text-black hover:bg-[#f2f2f2] transition-all duration-300"
                style={{
                  height: "56px",
                  padding: "0 28px",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: "600",
                  marginRight: "20px"
                }}
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}