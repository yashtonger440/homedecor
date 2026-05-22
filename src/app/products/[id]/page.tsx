"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiShield,
  FiTruck,
  FiRefreshCcw,
  FiCheck,
  FiMinus,
  FiPlus,
  FiShare2,
  FiArrowUpRight,
  FiPackage,
} from "react-icons/fi";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import { products } from "@/data/products";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === Number(params?.id));

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.gallery[0]);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "shipping" | "returns">("description");

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold bg-[#f8f5f0]">
        Product Not Found
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    }));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabContent = {
    description: product.description,
    shipping: "Free standard shipping on all orders over $50. Express delivery available at checkout. Estimated delivery: 3–7 business days.",
    returns: "We offer a hassle-free 7-day return policy. Items must be unused and in original packaging. Contact support to initiate a return.",
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto" style={{ padding: "110px 24px 100px" }}>

          {/* ── Breadcrumb ── */}
          <div
            className="flex items-center gap-2 text-[13px] text-gray-400"
            style={{ marginBottom: "36px" }}
          >
            <Link href="/" className="hover:text-black transition">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/products" className="hover:text-black transition">Products</Link>
            <span className="text-gray-300">/</span>
            <span className="text-black font-medium">{product.title}</span>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* ── LEFT: Images ── */}
            <div className="sticky top-28">

              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="relative overflow-hidden rounded-[32px] bg-white"
                style={{
                  height: "410px",
                  marginBottom: "16px",
                  boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mainImage}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={mainImage || product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Discount badge */}
                <div
                  className="absolute top-5 left-5 bg-black text-white text-[11px] font-bold uppercase tracking-[2px] rounded-full z-10"
                  style={{ padding: "6px 14px" }}
                >
                  {discount}% OFF
                </div>

                {/* Top-right actions */}
                <div className="absolute top-5 right-5 flex flex-col gap-2 z-10">
                  <button
                    onClick={() => setWished(!wished)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                      wished ? "bg-black text-white" : "bg-white text-gray-600 hover:bg-black hover:text-white"
                    }`}
                  >
                    <FiHeart className={`text-sm ${wished ? "fill-white" : ""}`} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
                    <FiShare2 className="text-sm" />
                  </button>
                </div>
              </motion.div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`relative overflow-hidden rounded-[16px] border-2 bg-white transition-all duration-200 ${
                      mainImage === img ? "border-black scale-[0.97]" : "border-transparent hover:border-gray-200"
                    }`}
                    style={{ height: "82px", padding: "5px" }}
                  >
                    <div className="relative w-full h-full rounded-[11px] overflow-hidden">
                      <Image src={img} alt="" fill className="object-cover" />
                    </div>
                  </button>
                ))}
              </div>

            </div>

            {/* ── RIGHT: Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >

              {/* Category eyebrow */}
              <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
                <span className="w-4 h-px bg-[#c9a96e]" />
                <p className="uppercase tracking-[5px] text-[11px] text-[#c9a96e] font-semibold">
                  {product.category}
                </p>
              </div>

              {/* Title */}
              <h1
                className="font-black text-[#111827] leading-[1.05] tracking-[-1.5px]"
                style={{ fontSize: "42px", marginBottom: "20px" }}
              >
                {product.title}
              </h1>

              {/* Rating + stock row */}
              <div
                className="flex items-center flex-wrap gap-4"
                style={{ marginBottom: "24px" }}
              >
                <div className="flex items-center gap-1.5">
                  <FiStar className="text-[#c9a96e] fill-[#c9a96e] text-sm" />
                  <span className="font-bold text-sm text-black">{product.rating}</span>
                  <span className="text-gray-400 text-sm">/ 5</span>
                </div>
                <span className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <FiCheck className="text-sm" />
                  <span className="text-sm font-semibold">In Stock</span>
                </div>
                <span className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-1.5 text-gray-500">
                  <FiPackage className="text-sm" />
                  <span className="text-sm">Ships in 2–3 days</span>
                </div>
              </div>

              {/* Price block */}
              <div
                className="flex items-end gap-4 bg-white rounded-[20px]"
                style={{ padding: "20px 24px", marginBottom: "28px" }}
              >
                <span className="font-black text-[#111827] leading-none" style={{ fontSize: "44px" }}>
                  ${product.price}
                </span>
                <div style={{ marginBottom: "6px" }}>
                  <span className="text-[18px] line-through text-gray-400">${product.oldPrice}</span>
                  <span
                    className="block text-[11px] font-bold text-emerald-600 uppercase tracking-wide"
                    style={{ marginTop: "2px" }}
                  >
                    You save ${product.oldPrice - product.price}
                  </span>
                </div>
              </div>

              {/* Tabs: Description / Shipping / Returns */}
              <div style={{ marginBottom: "28px" }}>
                <div
                  className="flex gap-1 bg-white rounded-[14px] w-fit"
                  style={{ padding: "5px" }}
                >
                  {(["description", "shipping", "returns"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`capitalize text-[13px] font-semibold rounded-[10px] transition-all duration-200 ${
                        activeTab === tab
                          ? "bg-black text-white"
                          : "text-gray-500 hover:text-black"
                      }`}
                      style={{ padding: "8px 16px" }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-600 leading-[1.85] text-[15px]"
                    style={{ marginTop: "16px" }}
                  >
                    {tabContent[activeTab]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Quantity + Add to Cart row */}
              <div
                className="flex items-center gap-4 flex-wrap"
                style={{ marginBottom: "20px" }}
              >
                {/* Qty stepper */}
                <div
                  className="flex items-center gap-3 bg-white rounded-full"
                  style={{ padding: "6px 8px" }}
                >
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="w-9 h-9 rounded-full bg-[#f5f5f5] hover:bg-black hover:text-white transition flex items-center justify-center text-sm"
                  >
                    <FiMinus />
                  </button>
                  <span className="w-6 text-center font-bold text-[16px]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-full bg-black text-white hover:scale-110 transition flex items-center justify-center text-sm"
                  >
                    <FiPlus />
                  </button>
                </div>

                {/* Add to cart */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAddToCart}
                  className={`flex-1 h-[54px] rounded-full font-bold text-[15px] flex items-center justify-center gap-3 transition-all duration-300 shadow-lg ${
                    added
                      ? "bg-emerald-600 text-white"
                      : "bg-black text-white hover:bg-[#1f1f1f]"
                  }`}
                  style={{ minWidth: "180px" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={added ? "added" : "cart"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="flex items-center gap-2"
                    >
                      {added ? <FiCheck className="text-lg" /> : <FiShoppingBag className="text-lg" />}
                      {added ? "Added to Cart!" : "Add to Cart"}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>

                {/* Buy Now */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="h-[54px] rounded-full font-bold text-[15px] border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                  style={{ padding: "0 28px" }}
                >
                  Buy Now
                </motion.button>
              </div>

              {/* Benefits strip */}
              <div
                className="grid grid-cols-3 gap-3"
                style={{ marginTop: "28px" }}
              >
                {[
                  { icon: <FiTruck />, label: "Free Delivery", sub: "Orders over $50" },
                  { icon: <FiShield />, label: "Secure Pay", sub: "100% protected" },
                  { icon: <FiRefreshCcw />, label: "7-day Returns", sub: "No questions" },
                ].map(({ icon, label, sub }) => (
                  <div
                    key={label}
                    className="bg-white rounded-[18px] flex flex-col items-center text-center"
                    style={{ padding: "18px 12px" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full bg-[#f8f5f0] flex items-center justify-center text-[#c9a96e] text-lg"
                      style={{ marginBottom: "10px" }}
                    >
                      {icon}
                    </div>
                    <p className="font-bold text-[13px] text-black">{label}</p>
                    <p className="text-[11px] text-gray-400" style={{ marginTop: "3px" }}>{sub}</p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* ── Related Products ── */}
          <div style={{ marginTop: "110px" }}>

            {/* Section header */}
            <div
              className="flex items-end justify-between flex-wrap gap-4"
              style={{ marginBottom: "48px" }}
            >
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: "10px" }}>
                  <span className="w-4 h-px bg-[#c9a96e]" />
                  <p className="uppercase tracking-[5px] text-[11px] text-[#c9a96e] font-semibold">
                    Similar Products
                  </p>
                </div>
                <h2
                  className="font-black text-[#111827] leading-tight tracking-[-1px]"
                  style={{ fontSize: "38px" }}
                >
                  You May Also Like
                </h2>
              </div>
              <Link
                href="/products"
                className="group flex items-center gap-2 text-[13px] font-semibold text-black border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                style={{ padding: "10px 20px" }}
              >
                View All
                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/products/${item.id}`}
                    className="group block bg-white overflow-hidden rounded-[26px] hover:-translate-y-1 transition-transform duration-500"
                    style={{
                      padding: "12px",
                      boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-[18px] bg-[#f8f5f0]"
                      style={{ height: "200px", marginBottom: "14px" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-[1.07] transition duration-600"
                      />
                    </div>

                    <div style={{ padding: "4px 6px 8px" }}>
                      <p
                        className="uppercase tracking-[3px] text-[10px] text-[#c9a96e] font-semibold"
                        style={{ marginBottom: "6px" }}
                      >
                        {item.category}
                      </p>
                      <h3
                        className="font-bold text-[#111827] leading-tight text-[16px] line-clamp-1"
                        style={{ marginBottom: "10px" }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[18px] font-black text-black">${item.price}</span>
                          <span className="text-[13px] line-through text-gray-400">${item.oldPrice}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                          <FiArrowUpRight className="text-xs" />
                        </div>
                      </div>
                    </div>
                  </Link>
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