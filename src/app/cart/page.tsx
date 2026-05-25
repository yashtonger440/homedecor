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

export default function CartPage() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 500 ? 0 : 40;
  const tax = Math.round((subtotal - discount) * 0.08);
  const total = subtotal - discount + shipping + tax;
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
    <section
      className="min-h-screen bg-[#f8f5f0]"
    >
      {/* ── Page header bar ── */}
      <div
        className="bg-white border-b border-[#ede9e3]"
        style={{ padding: "18px 0" }}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4"
          style={{ padding: "0 24px" }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] font-semibold text-[#a89880] hover:text-black transition-colors"
          >
            <FiArrowLeft size={14} />
            Continue Shopping
          </Link>

          <h1 style={{ marginLeft: "120px" }} className="font-black text-[#111827] tracking-[-1px] text-[22px]">
            Shopping Cart
            {cartItems.length > 0 && (
              <span
                className="text-[13px] font-semibold text-[#a89880]"
                style={{ marginLeft: "10px" }}
              >
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

      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "40px 24px 0" }}
      >

        {/* ══ EMPTY STATE ══ */}
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center bg-white rounded-[36px] border border-[#ede9e3]"
            style={{ padding: "80px 40px", marginTop: "20px" }}
          >
            <div
              className="w-28 h-28 rounded-[32px] bg-[#f8f5f0] flex items-center justify-center text-[#c9a96e]"
              style={{ marginBottom: "28px", fontSize: "44px" }}
            >
              <FiShoppingBag />
            </div>
            <h2
              className="font-black text-[#111827] tracking-[-1px]"
              style={{ fontSize: "36px", marginBottom: "12px" }}
            >
              Your Cart Is Empty
            </h2>
            <p
              className="text-[#a89880] leading-[1.8] max-w-[400px]"
              style={{ fontSize: "15px", marginBottom: "36px" }}
            >
              Discover our premium luxury home decor collections crafted to
              transform your modern interiors beautifully.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-black text-white rounded-full font-bold hover:bg-[#1a1a1a] transition-colors"
                style={{ padding: "16px 40px", fontSize: "15px" }}
              >
                Explore Collection
                <FiChevronRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div>

              {/* Free shipping progress */}
              <div
                className={`flex items-center gap-4 rounded-[16px] border ${
                  freeShippingLeft === 0
                    ? "bg-[#f0faf4] border-[#b8e6c8]"
                    : "bg-white border-[#ede9e3]"
                }`}
                style={{ padding: "14px 20px", marginBottom: "20px" }}
              >
                <FiTruck className={freeShippingLeft === 0 ? "text-emerald-500 shrink-0" : "text-[#c9a96e] shrink-0"} />
                <div className="flex-1">
                  <p
                    className={`text-[13px] font-semibold ${freeShippingLeft === 0 ? "text-emerald-700" : "text-[#7a6550]"}`}
                    style={{ marginBottom: "8px" }}
                  >
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
              <div className="flex flex-col gap-4">
                <AnimatePresence>
                  {cartItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: removingId === item.id ? 0 : 1, x: removingId === item.id ? 40 : 0, y: 0 }}
                      exit={{ opacity: 0, x: 40, height: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="bg-white rounded-[28px] border border-[#ede9e3] overflow-hidden"
                      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                    >
                      <div className="flex flex-col sm:flex-row">

                        {/* Product image */}
                        <div
                          className="relative bg-[#f8f5f0] shrink-0 overflow-hidden rounded-tl-[28px] rounded-bl-[28px] rounded-tr-[28px] sm:rounded-tr-none rounded-br-none"
                          style={{ width: "100%", height: "200px", flex: "0 0 200px", maxWidth: "200px" }}
                        >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Info */}
                        <div
                          className="flex flex-1 flex-col justify-between"
                          style={{ padding: "22px 24px" }}
                        >
                          {/* Top row */}
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span
                                className="inline-block bg-[#f8f5f0] text-[#c9a96e] text-[10px] font-bold uppercase tracking-[3px] rounded-full"
                                style={{ padding: "4px 12px", marginBottom: "10px" }}
                              >
                                Premium Collection
                              </span>
                              <h3
                                className="font-black text-[#111827] leading-[1.2] tracking-[-0.5px]"
                                style={{ fontSize: "20px", marginBottom: "6px" }}
                              >
                                {item.title}
                              </h3>
                              <p className="text-[#a89880] text-[13px]">
                                Unit price: <span className="font-semibold text-black">₹{item.price}</span>
                              </p>
                            </div>

                            <button
                              onClick={() => handleRemove(item.id)}
                              className="w-9 h-9 shrink-0 rounded-full border border-[#fad4d4] bg-[#fff5f5] text-[#e07070] flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
                            >
                              <FiTrash2 size={14} />
                            </button>
                          </div>

                          {/* Divider */}
                          <div className="h-px bg-[#f0ece6]" style={{ margin: "16px 0" }} />

                          {/* Bottom row */}
                          <div className="flex items-center justify-between flex-wrap gap-4">

                            {/* Qty stepper */}
                            <div className="flex items-center gap-2 bg-[#f8f5f0] rounded-full" style={{ padding: "5px" }}>
                              <button
                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#5a4a38] shadow-sm hover:bg-black hover:text-white transition-all duration-200"
                              >
                                <FiMinus size={13} />
                              </button>
                              <span className="w-7 text-center font-black text-[16px] text-[#111827]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => dispatch(increaseQuantity(item.id))}
                                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-all duration-200"
                              >
                                <FiPlus size={13} />
                              </button>
                            </div>

                            {/* Line total */}
                            <div className="text-right">
                              <p
                                className="font-black text-[#111827] tracking-[-1px] leading-none"
                                style={{ fontSize: "28px" }}
                              >
                                ₹{item.price * item.quantity}
                              </p>
                              {item.quantity > 1 && (
                                <p className="text-[11px] text-[#a89880]" style={{ marginTop: "3px" }}>
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
              <div
                className="flex gap-3 bg-white rounded-[20px] border border-[#ede9e3]"
                style={{ padding: "16px 20px", marginTop: "16px" }}
              >
                <div className="flex items-center gap-2 flex-1">
                  <FiTag className="text-[#c9a96e] shrink-0" size={15} />
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder='Have a coupon? Try "LUXURY10"'
                    disabled={couponApplied}
                    className="flex-1 bg-transparent text-[14px] text-[#111827] placeholder:text-[#c4b8a8] outline-none font-medium"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCoupon}
                  disabled={couponApplied}
                  className={`rounded-full text-[13px] font-bold transition-all duration-200 ${
                    couponApplied
                      ? "bg-emerald-500 text-white"
                      : "bg-black text-white hover:bg-[#333]"
                  }`}
                  style={{ padding: "10px 20px" }}
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
              <div
                className="bg-white rounded-[28px] border border-[#ede9e3]"
                style={{
                  padding: "28px",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
                }}
              >
                {/* Header */}
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: "24px" }}
                >
                  <h2 className="font-black text-[#111827] tracking-[-0.5px] text-[20px]">
                    Order Summary
                  </h2>
                  <div className="w-9 h-9 rounded-full bg-[#f8f5f0] flex items-center justify-center text-[#c9a96e]">
                    <FiTag size={14} />
                  </div>
                </div>

                {/* Line items */}
                <div className="flex flex-col gap-3" style={{ marginBottom: "20px" }}>
                  {[
                    { label: "Subtotal", value: `₹${subtotal}`, sub: `${cartItems.length} items` },
                    ...(couponApplied ? [{ label: "Discount (10%)", value: `-₹${discount}`, sub: "LUXURY10 applied", green: true }] : []),
                    {
                      label: "Shipping",
                      value: shipping === 0 ? "Free" : `₹${shipping}`,
                      sub: shipping === 0 ? "🎉 You saved ₹40" : "Standard delivery",
                      green: shipping === 0,
                    },
                    { label: "Tax (8%)", value: `₹${tax}`, sub: "Included" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-[13px] font-medium text-[#a89880]">{row.label}</p>
                        {row.sub && (
                          <p className={`text-[11px] ${row.green ? "text-emerald-600" : "text-[#c4b8a8]"}`} style={{ marginTop: "2px" }}>
                            {row.sub}
                          </p>
                        )}
                      </div>
                      <span className={`text-[15px] font-bold ${row.green ? "text-emerald-600" : "text-[#111827]"}`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dashed divider */}
                <div
                  className="border-t border-dashed border-[#e8e0d4]"
                  style={{ marginBottom: "20px" }}
                />

                {/* Total */}
                <div
                  className="flex items-center justify-between bg-[#111827] rounded-[18px]"
                  style={{ padding: "18px 22px", marginBottom: "20px" }}
                >
                  <span className="text-[18px] font-semibold text-white/60">Total</span>
                  <span className="font-black text-white tracking-[-1px]" style={{ fontSize: "20px" }}>
                    ₹{total}
                  </span>
                </div>

                {/* Checkout CTA */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-[56px] rounded-full bg-[#c9a96e] text-black font-black text-[15px] tracking-[0.3px] flex items-center justify-center gap-2 hover:bg-[#b8955a] transition-colors duration-300"
                  style={{ marginBottom: "14px" }}
                >
                  <FiLock size={14} />
                  Proceed to Checkout
                </motion.button>

                <Link href="/products" className="w-full h-[48px] rounded-full border-2 border-[#111827] text-[#111827] font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#111827] hover:text-white transition-all duration-300">
                  Continue Shopping
                </Link>

                {/* Trust row */}
                <div
                  className="flex items-center justify-center gap-5"
                  style={{ marginTop: "20px" }}
                >
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

                <p
                  className="text-center text-[11px] text-[#c4b8a8] leading-[1.6]"
                  style={{ marginTop: "12px" }}
                >
                  SSL encrypted. Taxes calculated at checkout.
                </p>
              </div>

              {/* Accepted payments */}
              {/* <div
                className="bg-white rounded-[24px] border border-[#ede9e3]"
                style={{ padding: "16px 22px" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#c4b8a8]" style={{ marginBottom: "10px" }}>
                  We Accept
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((p) => (
                    <span
                      key={p}
                      className="bg-[#f8f5f0] text-[#7a6550] text-[11px] font-bold rounded-[8px]"
                      style={{ padding: "5px 12px" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div> */}

            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}