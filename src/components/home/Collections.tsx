"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

const collections = [
  {
    id: 1,
    title: "Ceramic Elegance",
    subtitle:
      "Luxury ceramic vases, mugs & handcrafted decor.",
    image: "/images/ceremicvasesandmugs.jpeg",
    tag: "Best Seller",
  },
  {
    id: 2,
    title: "Premium Wall Decor",
    subtitle:
      "Premium wall decor in square box designs.",
    image: "/images/premiumwalldecor.jpeg",
    tag: "Trending",
  },
  {
    id: 3,
    title: "Colorful Decor",
    subtitle:
      "Elegant idols & hanging plates.",
    image: "/images/printedplates.jpeg",
    tag: "New Arrival",
  },
];

export default function Collections() {
  return (
    <section
      className="relative overflow-hidden bg-[#f8f5f0]"
      style={{
        padding: "70px 0 75px",
      }}
    >
      {/* Ambient Blurs */}
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-[#e8ddd0] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="absolute -bottom-24 -right-24 w-[280px] h-[280px] bg-[#dfd4c5] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div
        className="relative z-10 container-custom"
        style={{
          padding: "0 20px",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5"
          style={{
            marginBottom: "40px",
          }}
        >
          {/* Left */}
          <div>
            <div
              className="flex items-center gap-2"
              style={{
                marginBottom: "10px",
              }}
            >
              <span className="w-5 h-px bg-[#c9a96e]" />

              <p className="uppercase tracking-[4px] text-[10px] text-[#c9a96e] font-semibold">
                Premium Collections
              </p>

              <span className="w-5 h-px bg-[#c9a96e]" />
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.05] tracking-[-1.5px] text-[#111827]">
              Crafted Decor
              <span className="block text-[#c9a96e]">
                Collections
              </span>
            </h2>
          </div>

          {/* Right */}
          <p className="max-w-[340px] text-[13px] leading-[1.8] text-[#6b7280] md:text-right">
            Handcrafted ceramic decor, marble artistry,
            idols, wall decor & luxury decorative pieces.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={18}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          }}
          className="collections-swiper !pb-12"
        >
          {collections.map((item, i) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[26px] cursor-pointer"
                style={{
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: "400px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Tag */}
                  <div
                    className="absolute top-0 left-0 right-0"
                    style={{
                      padding: "18px",
                    }}
                  >
                    <span
                      className="bg-white/90 text-black text-[9px] uppercase tracking-[2px] font-bold rounded-full"
                      style={{
                        padding: "7px 14px",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 text-white"
                    style={{
                      padding: "24px",
                    }}
                  >
                    <p
                      className="uppercase tracking-[3px] text-white/60 font-semibold"
                      style={{
                        fontSize: "9px",
                        marginBottom: "8px",
                      }}
                    >
                      Handcrafted Luxury Decor
                    </p>

                    <h3
                      className="font-black leading-[1.15]"
                      style={{
                        fontSize: "24px",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Hover Content */}
                    <div className="overflow-hidden">
                      <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p
                          className="text-white/75 leading-relaxed"
                          style={{
                            fontSize: "13px",
                            marginBottom: "18px",
                          }}
                        >
                          {item.subtitle}
                        </p>

                        <button
                          className="group/btn flex items-center gap-2 bg-white text-black rounded-full font-semibold hover:bg-[#c9a96e] hover:text-white transition-all duration-300"
                          style={{
                            padding: "10px 18px",
                            fontSize: "12px",
                          }}
                        >
                          Explore
                          <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}