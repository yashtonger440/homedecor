"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Home Decor Enthusiast",
    review:
      "The ceramic vase collection completely transformed my living space. Every piece feels premium and beautifully handcrafted.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Interior Stylist",
    review:
      "Absolutely impressed by the marble dust decor and wall plates. The finishing and luxury feel exceeded expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    role: "Luxury Home Owner",
    review:
      "The idols and decorative collections added a timeless artistic touch to my interiors. Truly elegant craftsmanship.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Verma",
    role: "Architect",
    review:
      "The hanging plates and wall decor gave my studio a premium artistic vibe. Every guest asks about them.",
    rating: 5,
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    role: "Interior Consultant",
    review:
      "One of the best handcrafted decor brands I’ve come across. The ceramic mugs feel luxurious and unique.",
    rating: 5,
  },
  {
    id: 6,
    name: "Simran Kaur",
    role: "Home Stylist",
    review:
      "Beautiful craftsmanship and premium finishing. The marble dust collection looks absolutely stunning.",
    rating: 5,
  },
  {
    id: 7,
    name: "Aditya Singh",
    role: "Decor Collector",
    review:
      "Elegant products with excellent detailing. The idols brought warmth and sophistication to my home.",
    rating: 5,
  },
  {
    id: 8,
    name: "Ishita Arora",
    role: "Lifestyle Blogger",
    review:
      "Absolutely in love with the handcrafted aesthetic. The quality and packaging are truly premium.",
    rating: 5,
  },
  {
    id: 9,
    name: "Vikram Joshi",
    role: "Luxury Apartment Owner",
    review:
      "Every decor item feels artistic and exclusive. The collection elevated my apartment interiors beautifully.",
    rating: 5,
  },
];

const avatarColors = [
  { bg: "#2C2A25", text: "#C9A96E" },
  { bg: "#C9A96E", text: "#2C2A25" },
  { bg: "#4A4540", text: "#E8D5B0" },
];

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#EFE7DA]"
      style={{
        padding: "80px 0",
      }}
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(44,42,37,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div
        className="relative max-w-[1320px] mx-auto"
        style={{
          padding: "0 24px",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
          style={{
            marginBottom: "48px",
          }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[6px] text-[#C9A96E]"
            style={{
              marginBottom: "16px",
            }}
          >
            Customer Reviews
          </p>

          <h2
            className="text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.03em] text-[#1E1B16] font-normal"
            style={{
              marginBottom: "16px",
            }}
          >
            Loved By
            <br />
            <em className="text-[#C9A96E] italic">
              Modern Homes
            </em>
          </h2>

          <p style={{ marginLeft: "300px"}} className="max-w-[620px] mx-auto text-[14px] leading-[1.8] text-[#7A7064] font-medium">
            Discover why customers love our handcrafted ceramic
            decor, marble dust artistry, luxury idols, wall decor,
            hanging plates, mugs, and decorative collections.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1.1}
          spaceBetween={18}
          speed={1200}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="reviews-swiper !pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className={`relative overflow-hidden rounded-[24px] backdrop-blur-xl flex flex-col justify-between border transition-all duration-300 ${
                  index % 2 === 1
                    ? "bg-gradient-to-br from-[#2C2A25] to-[#1F1C18] border-[#c9a96e25] shadow-[0_20px_45px_rgba(44,42,37,0.20)]"
                    : "bg-white/80 border-[#c9a96e20] shadow-[0_8px_30px_rgba(44,42,37,0.07)]"
                }`}
                style={{
                  padding: "30px 26px",
                  minHeight: "285px",
                }}
              >
                {/* Quote */}
                <div
                  className={`absolute top-2 right-5 text-[95px] leading-none font-bold pointer-events-none ${
                    index % 2 === 1
                      ? "text-[#c9a96e15]"
                      : "text-[#c9a96e12]"
                  }`}
                >
                  "
                </div>

                {/* Stars */}
                <div
                  className="flex items-center gap-1"
                  style={{
                    marginBottom: "18px",
                  }}
                >
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="#C9A96E"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Review */}
                <p
                  className={`relative z-10 flex-1 text-[0.92rem] leading-[1.8] italic ${
                    index % 2 === 1
                      ? "text-[#E8D5B0]"
                      : "text-[#4A4035]"
                  }`}
                  style={{
                    marginBottom: "26px",
                  }}
                >
                  "{item.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: "46px",
                      height: "46px",
                      background:
                        avatarColors[index % avatarColors.length].bg,
                    }}
                  >
                    <span
                      className="text-[14px] font-bold tracking-[0.5px]"
                      style={{
                        color:
                          avatarColors[index % avatarColors.length]
                            .text,
                      }}
                    >
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h3
                      className={`text-[14px] font-semibold ${
                        index % 2 === 1
                          ? "text-white"
                          : "text-[#1E1B16]"
                      }`}
                      style={{
                        marginBottom: "2px",
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      className={`text-[10px] uppercase tracking-[0.08em] ${
                        index % 2 === 1
                          ? "text-[#C9A96E]"
                          : "text-[#9A8E80]"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-[12px] tracking-[0.05em] text-[#8B8174]"
          style={{
            marginTop: "46px",
          }}
        >
          Trusted by{" "}
          <strong className="text-[#C9A96E] font-bold">
            5,000+ happy customers
          </strong>{" "}
          for handcrafted luxury decor & artistic collections.
        </motion.p>
      </div>
    </section>
  );
}