"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiShoppingBag,
  FiHeart,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/features/cartSlice";
import { RootState } from "@/store/store";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/" },
];

export default function Navbar() {
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200"
      >
        <div className="container-custom h-20 flex items-center justify-between"> 

          {/* Logo */}
          <Link href="/">
            <div className="flex flex-col items-center gap-1">
              <div className="relative w-24 h-12 flex-shrink-0">
                <Image
                  src="/images/LOGO.png"
                  alt="NishMee logo icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-row items-center leading-none gap-[2px]">
                <div className="flex items-center leading-none">
                  <span
                    style={{
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 1000,
                      fontStyle: "normal",
                      letterSpacing: "8px",
                      color: "#1a1a2e",
                      lineHeight: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    nish
                  </span>
                  <span
                    style={{
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 1000,
                      fontStyle: "normal",
                      letterSpacing: "8px",
                      color: "#c9a96e",
                      lineHeight: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    mee
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium hover:text-gray-500 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5 text-xl">
            <button className="hover:scale-110 transition">
              <FiSearch />
            </button>

            <button className="relative hover:scale-110 transition">
              <FiHeart />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>

            <Link href="/cart" className="relative hover:scale-110 transition">
              <FiShoppingBag />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>

            {/* Hamburger / Close toggle */}
            <button
              className="lg:hidden hover:scale-110 transition"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 w-full z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-medium text-gray-800 hover:text-[#c9a96e] hover:bg-gray-50 transition"
                  style={{ padding: "14px 24px" }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}