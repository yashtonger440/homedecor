"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/footer/Footer";

import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiArrowLeft,
  FiTag,
  FiChevronRight,
  FiCheck,
  FiLock,
  FiGift,
  FiRefreshCcw,
} from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/store/features/cartSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 500 ? 0 : 40;
  const total = subtotal - discount + shipping;
  const freeShippingLeft = Math.max(0, 500 - subtotal);
  const shippingProgress = Math.min(100, (subtotal / 500) * 100);

  const handleRemove = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(removeFromCart(id));
      setRemovingId(null);
    }, 300);
  };

  const handleCoupon = () => {
    if (coupon.trim().toLowerCase() === "luxury10") setCouponApplied(true);
  };

  return (
    <section className="min-h-screen bg-[#f8f5f0]">

      {/* ── Page header bar ── */}
      <div className="bg-white border-b border-[#ede9e3] py-4 sm:py-[18px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-4">

          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] font-semibold text-[#a89880] hover:text-black transition-colors"
          >
            <FiArrowLeft size={14} />
            Continue Shopping
          </Link>

          <h1 className="font-black text-[#111827] tracking-[-1px] text-[18px] sm:text-[22px]">
            Shopping Cart
            {cartItems.length > 0 && (
              <span className="text-[13px] font-semibold text-[#a89880] ml-2.5">
                ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
              </span>
            )}
          </h1>

          {/* Steps indicator */}
          <div className="hidden md:flex items-center gap-2 text-[12px] font-semibold">
            {["Cart", "Shipping", "Payment"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5 ${i === 0 ? "text-black" : "text-[#c4b8a8]"}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? "bg-black text-white" : "bg-[#e8e0d4] text-[#a89880]"}`}>
                    {i === 0 ? <FiCheck size={10} /> : i + 1}
                  </div>
                  {step}
                </div>
                {i < 2 && <FiChevronRight size={12} className="text-[#c4b8a8]" />}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12 sm:pb-16">

        {/* ══ EMPTY STATE ══ */}
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center bg-white rounded-[28px] sm:rounded-[36px] border border-[#ede9e3] px-5 sm:px-10 py-16 sm:py-20 mt-4 sm:mt-5"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] sm:rounded-[32px] bg-[#f8f5f0] flex items-center justify-center text-[#c9a96e] text-[38px] sm:text-[44px] mb-6 sm:mb-7">
              <FiShoppingBag />
            </div>
            <h2 className="font-black text-[#111827] tracking-[-1px] text-[28px] sm:text-[36px] mb-3">
              Your Cart Is Empty
            </h2>
            <p className="text-[#a89880] leading-[1.8] max-w-[340px] sm:max-w-[400px] text-[14px] sm:text-[15px] mb-8 sm:mb-9">
              Discover our premium luxury home decor collections crafted to
              transform your modern interiors beautifully.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-black text-white rounded-full font-bold hover:bg-[#1a1a1a] transition-colors px-8 sm:px-10 py-3.5 sm:py-4 text-[14px] sm:text-[15px]"
              >
                Explore Collection
                <FiChevronRight size={16} />
              </motion.button>
            </Link>
          </motion.div>

        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 sm:gap-8 items-start">

            {/* ── LEFT: Cart items ── */}
            <div>

              {/* Free shipping progress */}
              <div className={`flex items-center gap-3 sm:gap-4 rounded-[14px] sm:rounded-[16px] border px-4 sm:px-5 py-3.5 mb-4 sm:mb-5 ${
                freeShippingLeft === 0
                  ? "bg-[#f0faf4] border-[#b8e6c8]"
                  : "bg-white border-[#ede9e3]"
              }`}>
                <FiTruck className={`shrink-0 ${freeShippingLeft === 0 ? "text-emerald-500" : "text-[#c9a96e]"}`} />
                <div className="flex-1">
                  <p className={`text-[12px] sm:text-[13px] font-semibold mb-2 ${freeShippingLeft === 0 ? "text-emerald-700" : "text-[#7a6550]"}`}>
                    {freeShippingLeft === 0
                      ? "🎉 You've unlocked FREE shipping!"
                      : `Add ₹${freeShippingLeft} more to get free shipping`}
                  </p>
                  <div className="h-[5px] rounded-full bg-[#e8e0d4] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${shippingProgress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`h-full rounded-full ${freeShippingLeft === 0 ? "bg-emerald-500" : "bg-[#c9a96e]"}`}
                    />
                  </div>
                </div>
              </div>

              {/* Items list */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <AnimatePresence>
                  {cartItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: removingId === item.id ? 0 : 1,
                        x: removingId === item.id ? 40 : 0,
                        y: 0,
                      }}
                      exit={{ opacity: 0, x: 40, height: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="bg-white rounded-[24px] sm:rounded-[28px] border border-[#ede9e3] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
                    >
                      <div className="flex flex-col sm:flex-row">

                        {/* Product image */}
                        <div className="relative bg-[#f8f5f0] shrink-0 overflow-hidden w-full h-[200px] sm:w-[200px] sm:h-auto rounded-t-[24px] sm:rounded-t-none sm:rounded-l-[28px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition duration-500 hover:scale-105"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 lg:p-[22px_24px]">

                          {/* Top row */}
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="inline-block bg-[#f8f5f0] text-[#c9a96e] text-[10px] font-bold uppercase tracking-[3px] rounded-full px-3 py-1 mb-2.5">
                                Premium Collection
                              </span>
                              <h3 className="font-black text-[#111827] leading-[1.2] tracking-[-0.5px] text-[17px] sm:text-[20px] mb-1.5">
                                {item.title}
                              </h3>
                              <p className="text-[#a89880] text-[12px] sm:text-[13px]">
                                Unit price:{" "}
                                <span className="font-semibold text-black">₹{item.price}</span>
                              </p>
                            </div>

                            <button
                              onClick={() => handleRemove(item.id)}
                              className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full border border-[#fad4d4] bg-[#fff5f5] text-[#e07070] flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
                            >
                              <FiTrash2 size={13} />
                            </button>
                          </div>

                          {/* Divider */}
                          <div className="h-px bg-[#f0ece6] my-3.5 sm:my-4" />

                          {/* Bottom row */}
                          <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">

                            {/* Qty stepper */}
                            <div className="flex items-center gap-2 bg-[#f8f5f0] rounded-full p-1 sm:p-[5px]">
                              <button
                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-[#5a4a38] shadow-sm hover:bg-black hover:text-white transition-all duration-200"
                              >
                                <FiMinus size={13} />
                              </button>
                              <span className="w-6 sm:w-7 text-center font-black text-[15px] sm:text-[16px] text-[#111827]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => dispatch(increaseQuantity(item.id))}
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-all duration-200"
                              >
                                <FiPlus size={13} />
                              </button>
                            </div>

                            {/* Line total */}
                            <div className="text-right">
                              <p className="font-black text-[#111827] tracking-[-1px] leading-none text-[22px] sm:text-[28px]">
                                ₹{item.price * item.quantity}
                              </p>
                              {item.quantity > 1 && (
                                <p className="text-[11px] text-[#a89880] mt-0.5 sm:mt-[3px]">
                                  {item.quantity} × ₹{item.price}
                                </p>
                              )}
                            </div>

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Coupon row */}
              <div className="flex gap-3 bg-white rounded-[18px] sm:rounded-[20px] border border-[#ede9e3] px-4 sm:px-5 py-3.5 sm:py-4 mt-4">
                <div className="flex items-center gap-2 flex-1">
                  <FiTag className="text-[#c9a96e] shrink-0" size={15} />
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder='Have a coupon? Try "LUXURY10"'
                    disabled={couponApplied}
                    className="flex-1 bg-transparent text-[13px] sm:text-[14px] text-[#111827] placeholder:text-[#c4b8a8] outline-none font-medium"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCoupon}
                  disabled={couponApplied}
                  className={`rounded-full text-[12px] sm:text-[13px] font-bold transition-all duration-200 px-4 sm:px-5 py-2.5 ${
                    couponApplied
                      ? "bg-emerald-500 text-white"
                      : "bg-black text-white hover:bg-[#333]"
                  }`}
                >
                  {couponApplied ? (
                    <span className="flex items-center gap-1.5">
                      <FiCheck size={13} /> Applied!
                    </span>
                  ) : "Apply"}
                </motion.button>
              </div>
            </div>

            {/* ══ RIGHT: Order Summary ══ */}
            <div className="sticky top-[100px] flex flex-col gap-4">

              {/* Summary card */}
              <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-[#ede9e3] p-5 sm:p-6 lg:p-7 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">

                {/* Header */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <h2 className="font-black text-[#111827] tracking-[-0.5px] text-[18px] sm:text-[20px]">
                    Order Summary
                  </h2>
                  <div className="w-9 h-9 rounded-full bg-[#f8f5f0] flex items-center justify-center text-[#c9a96e]">
                    <FiTag size={14} />
                  </div>
                </div>

                {/* Line items */}
                <div className="flex flex-col gap-3 mb-5">
                  {[
                    {
                      label: "Subtotal",
                      value: `₹${subtotal}`,
                      sub: `${cartItems.length} items`,
                    },
                    ...(couponApplied
                      ? [{ label: "Discount (10%)", value: `-₹${discount}`, sub: "LUXURY10 applied", green: true }]
                      : []),
                    {
                      label: "Shipping",
                      value: shipping === 0 ? "Free" : `₹${shipping}`,
                      sub: shipping === 0 ? "🎉 You saved ₹40" : "Standard delivery",
                      green: shipping === 0,
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-[13px] font-medium text-[#a89880]">{row.label}</p>
                        {row.sub && (
                          <p className={`text-[11px] mt-0.5 ${row.green ? "text-emerald-600" : "text-[#c4b8a8]"}`}>
                            {row.sub}
                          </p>
                        )}
                      </div>
                      <span className={`text-[14px] sm:text-[15px] font-bold ${row.green ? "text-emerald-600" : "text-[#111827]"}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dashed divider */}
                <div className="border-t border-dashed border-[#e8e0d4] mb-5" />

                {/* Total */}
                <div className="flex items-center justify-between bg-[#111827] rounded-[16px] sm:rounded-[18px] px-5 sm:px-[22px] py-4 sm:py-[18px] mb-4 sm:mb-5">
                  <span className="text-[16px] sm:text-[18px] font-semibold text-white/60">Total</span>
                  <span className="font-black text-white tracking-[-1px] text-[18px] sm:text-[20px]">
                    ₹{total}
                  </span>
                </div>

                {/* Checkout CTA */}
                <motion.button
                  onClick={() => router.push("/checkout")}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-[52px] sm:h-[56px] rounded-full bg-[#c9a96e] text-black font-black text-[14px] sm:text-[15px] tracking-[0.3px] flex items-center justify-center gap-2 hover:bg-[#b8955a] transition-colors duration-300 mb-3 sm:mb-3.5"
                >
                  <FiLock size={14} />
                  Proceed to Checkout
                </motion.button>

                <Link
                  href="/products"
                  className="w-full h-[44px] sm:h-[48px] rounded-full border-2 border-[#111827] text-[#111827] font-bold text-[13px] sm:text-[14px] flex items-center justify-center gap-2 hover:bg-[#111827] hover:text-white transition-all duration-300"
                >
                  Continue Shopping
                </Link>

                {/* Trust row */}
                <div className="flex items-center justify-center gap-4 sm:gap-5 mt-4 sm:mt-5">
                  {[
                    { icon: <FiShield size={12} />, text: "Secure" },
                    { icon: <FiCheck size={12} />, text: "Guaranteed" },
                    { icon: <FiRefreshCcw size={12} />, text: "Easy Returns" },
                  ].map((b) => (
                    <div key={b.text} className="flex items-center gap-1 text-[11px] font-semibold text-[#a89880]">
                      {b.icon} {b.text}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
}