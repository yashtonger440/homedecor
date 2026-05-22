"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  { id: 1, title: "Artisan Ceramic Vases", image: "/images/Vases/Vase1.jpeg" },
  { id: 2, title: "Elegant Showpieces", image: "/images/showpieces/showpiece1.jpeg" },
  { id: 3, title: "Luxury Wall Decor", image: "/images/walldecor/walldecor1.jpeg" },
  { id: 4, title: "Handcrafted Idols", image: "/images/Idols/idols1.jpeg" },
];

export default function Categories() {
  return (
    <section
      style={{
        padding: "60px 0 100px",
        background: "#faf9f7",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(180,160,120,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(120,100,80,0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                background: "#b8a07a",
              }}
            />
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "#b8a07a",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Collections
            </p>
            <span
              style={{
                display: "block",
                width: "40px",
                height: "1px",
                background: "#b8a07a",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              color: "#1a1612",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Shop By{" "}
            <em style={{ fontStyle: "italic", fontWeight: 600 }}>Category</em>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              style={{
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: index === 0 || index === 3 ? "3/4" : "3/4",
              }}
              whileHover="hover"
            >
              {/* Image */}
              <motion.div
                variants={{ hover: { scale: 1.08 } }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>

              {/* Base gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.3) 50%, rgba(10,8,6,0.05) 100%)",
                  zIndex: 1,
                }}
              />

              {/* Hover overlay */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(184,160,122,0.15)",
                  zIndex: 2,
                }}
              />


              {/* Content */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "32px 28px",
                  zIndex: 3,
                }}
              >
                {/* Index number */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "12px",
                    color: "#b8a07a",
                    letterSpacing: "3px",
                    marginBottom: "8px",
                    margin: "0 0 8px 0",
                  }}
                >
                  0{item.id}
                </p>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "26px",
                    fontWeight: 400,
                    color: "#ffffff",
                    letterSpacing: "0.3px",
                    margin: "0 0 20px 0",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>

                {/* Divider + button row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: "1px",
                      background: "rgba(255,255,255,0.2)",
                    }}
                  />
                  <motion.button
                    variants={{
                      hover: {
                        backgroundColor: "#b8a07a",
                        borderColor: "#b8a07a",
                        color: "#1a1612",
                      },
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "11px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.5)",
                      borderRadius: "2px",
                      padding: "10px 20px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Explore
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}