"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { clearCartState } from "@/store/features/cartSlice"; 
import { clearWishlistState } from "@/store/features/wishlistSlice";

import {
  FiShoppingBag,
  FiHeart,
  FiMenu,
  FiX,
  FiUser,
  FiSearch,
  FiLogOut,
} from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store/store";

import { logout } from "@/store/features/authSlice";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {

  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = useState(false);

  const { cartItems } = useSelector(
    (state: RootState) => state.cart
  );

  const { wishlistItems } = useSelector(
    (state: RootState) => state.wishlist
  );

  const { currentUser } = useSelector(
    (state: RootState) => state.auth
  );

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

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <button className="hover:scale-110 transition text-xl">
              <FiSearch />
            </button>

            {/* Auth Section */}
            {
              currentUser ? (

                <div className="hidden md:flex items-center gap-3">

                  {/* Profile */}
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 bg-black text-white"
                    style={{
                      height: "42px",
                      padding: "0 18px",
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <FiUser />
                    {currentUser.name}
                  </Link>

                  {/* Logout */}
                  <button
                    onClick={() => dispatch(logout())}
                    className="w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white transition flex items-center justify-center"
                  >
                    <FiLogOut />
                  </button>

                </div>

              ) : (

                <Link
                  href="/login"
                  className="hidden md:flex items-center justify-center hover:scale-110 transition text-xl"
                >
                  <FiUser />
                </Link>

              )
            }

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative hover:scale-110 transition text-xl"
            >
              <FiHeart />

              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                {wishlistItems.length}
              </span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative hover:scale-110 transition text-xl"
            >
              <FiShoppingBag />

              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden hover:scale-110 transition text-xl"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
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

              {/* Mobile Auth */}
              {
                currentUser ? (

                  <button
                    onClick={() => {
                      dispatch(logout());
                      dispatch(clearCartState());
                      dispatch(clearWishlistState());
                      setMobileOpen(false);
                    }}
                    className="text-[15px] font-medium text-red-500 hover:bg-gray-50 transition flex items-center gap-3"
                    style={{ padding: "14px 24px" }}
                  >
                    <FiLogOut />
                    Logout
                  </button>

                ) : (

                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="text-[15px] font-medium text-gray-800 hover:text-[#c9a96e] hover:bg-gray-50 transition flex items-center gap-3"
                    style={{ padding: "14px 24px" }}
                  >
                    <FiUser />
                    Login / Signup
                  </Link>

                )
              }

            </nav>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}