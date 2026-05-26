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
      "One of the best handcrafted decor brands I've come across. The ceramic mugs feel luxurious and unique.",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#EFE7DA] py-16 sm:py-20 lg:py-24">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(44,42,37,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[6px] text-[#C9A96E] mb-4">
            Customer Reviews
          </p>

          <h2 className="text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.03em] text-[#1E1B16] font-normal mb-4">
            Loved By
            <br />
            <em className="text-[#C9A96E] italic">Modern Homes</em>
          </h2>

          <p className="max-w-xs sm:max-w-md lg:max-w-[520px] mx-auto text-[14px] leading-[1.8] text-[#7A7064] font-medium">
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
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="reviews-swiper !pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative overflow-hidden rounded-[24px] backdrop-blur-xl flex flex-col justify-between border transition-all duration-300 min-h-[260px] sm:min-h-[285px] px-5 sm:px-[26px] py-6 sm:py-[30px] ${
                  index % 2 === 1
                    ? "bg-gradient-to-br from-[#2C2A25] to-[#1F1C18] border-[#c9a96e25] shadow-[0_20px_45px_rgba(44,42,37,0.20)]"
                    : "bg-white/80 border-[#c9a96e20] shadow-[0_8px_30px_rgba(44,42,37,0.07)]"
                }`}
              >
                {/* Quote */}
                <div
                  className={`absolute top-2 right-5 text-[95px] leading-none font-bold pointer-events-none select-none ${
                    index % 2 === 1 ? "text-[#c9a96e15]" : "text-[#c9a96e12]"
                  }`}
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 sm:mb-[18px]">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#C9A96E">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Review */}
                <p
                  className={`relative z-10 flex-1 text-[0.9rem] sm:text-[0.92rem] leading-[1.8] italic mb-5 sm:mb-[26px] ${
                    index % 2 === 1 ? "text-[#E8D5B0]" : "text-[#4A4035]"
                  }`}
                >
                  "{item.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 sm:w-[46px] sm:h-[46px] flex items-center justify-center rounded-full shrink-0"
                    style={{ background: avatarColors[index % avatarColors.length].bg }}
                  >
                    <span
                      className="text-[13px] sm:text-[14px] font-bold tracking-[0.5px]"
                      style={{ color: avatarColors[index % avatarColors.length].text }}
                    >
                      {item.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <h3
                      className={`text-[13px] sm:text-[14px] font-semibold mb-0.5 ${
                        index % 2 === 1 ? "text-white" : "text-[#1E1B16]"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`text-[10px] uppercase tracking-[0.08em] ${
                        index % 2 === 1 ? "text-[#C9A96E]" : "text-[#9A8E80]"
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
          className="text-center text-[12px] tracking-[0.05em] text-[#8B8174] mt-10 sm:mt-12"
        >
          Trusted by{" "}
          <strong className="text-[#C9A96E] font-bold">5,000+ happy customers</strong>{" "}
          for handcrafted luxury decor & artistic collections.
        </motion.p>

      </div>
    </section>
  );
}