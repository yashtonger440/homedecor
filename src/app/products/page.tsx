"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiSliders, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { useSearchParams } from "next/navigation";

const PRODUCTS_PER_PAGE = 16;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const stats = [
  { n: "240+", l: "Products curated" },
  { n: "7",    l: "Design categories" },
  { n: "4.9★", l: "Average rating" },
  { n: "12K+", l: "Happy customers" },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams?.get("category");

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (categoryFromURL) {
      const formattedCategory =
        categoryFromURL === "vases"        ? "Vases"
        : categoryFromURL === "wall-decor" ? "Wall decor"
        : categoryFromURL === "showpieces" ? "Showpieces"
        : categoryFromURL === "idols"      ? "Handcraft Idols"
        : "All";
      setSelectedCategory(formattedCategory);
    }
  }, [categoryFromURL]);

  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Vases", "Wall decor", "Showpieces", "Handcraft Idols", "Mugs", "Printed Plates"];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" ? true : product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    if (sortBy === "low")    filtered.sort((a, b) => a.price - b.price);
    if (sortBy === "high")   filtered.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
    return filtered;
  }, [search, selectedCategory, sortBy]);

  const handleSearch   = (val: string) => { setSearch(val);          setCurrentPage(1); };
  const handleCategory = (cat: string) => { setSelectedCategory(cat); setCurrentPage(1); };
  const handleSort     = (val: string) => { setSortBy(val);           setCurrentPage(1); };

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", totalPages];
    if (currentPage >= totalPages - 3) return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  }, [currentPage, totalPages]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const goToPage = (page: number) => { setCurrentPage(page); scrollToTop(); };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">

          {/* ── TOP HEADING ── */}
          <div className="mb-10 sm:mb-12">

            {/* EYEBROW */}
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[4px] text-[#c9a96e] font-medium mt-10 sm:mt-14 mb-4 sm:mb-5"
            >
              <motion.span
                className="w-5 h-px bg-[#c9a96e] block"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
              />
              Luxury Collection
              <motion.span
                className="w-5 h-px bg-[#c9a96e] block"
                initial={{ scaleX: 0, originX: 1 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
              />
            </motion.p>

            {/* TITLE + DESC */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 mb-8 sm:mb-10">
              <div className="overflow-hidden">
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.15}
                  className="font-bold text-[#1a1a18] leading-none tracking-[-2px] text-[clamp(44px,8vw,80px)]"
                >
                  Explore<br />
                  <motion.span
                    className="inline-block"
                    style={{
                      WebkitTextStroke: "2px #1a1a18",
                      WebkitTextFillColor: "transparent",
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.35 }}
                  >
                    Products
                  </motion.span>
                </motion.h1>
              </div>

              <motion.p
                variants={slideLeft}
                initial="hidden"
                animate="visible"
                custom={0.45}
                className="text-[14px] sm:text-[15px] text-[#6b6560] leading-[1.8] mb-2 sm:mb-2.5 md:text-right md:max-w-[360px]"
              >
                Discover premium ceramic and marble decor handcrafted for elegant
                interiors, timeless beauty, and sophisticated modern living.
              </motion.p>
            </div>

            {/* MOBILE STATS */}
            <div className="grid grid-cols-2 gap-px bg-black/8 rounded-2xl overflow-hidden md:hidden">
              {stats.map(({ n, l }, i) => (
                <motion.div
                  key={l}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.5 + i * 0.1}
                  className="flex flex-col bg-[#f8f5f0] p-5"
                >
                  <motion.span
                    className="font-bold text-[#1a1a18] leading-none tracking-[-1px] text-[26px] sm:text-[28px] mb-1.5"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.55 + i * 0.1 }}
                  >
                    {n}
                  </motion.span>
                  <span className="text-[12px] text-[#9a8f82] font-medium">{l}</span>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP STATS */}
            <div className="hidden md:flex items-center">
              {stats.map(({ n, l }, i) => (
                <motion.div
                  key={l}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.5 + i * 0.1}
                  className={`flex-1 flex flex-col px-6 lg:px-8 ${i !== 0 ? "border-l border-black/10" : ""}`}
                >
                  <motion.span
                    className="font-bold text-[#1a1a18] leading-none tracking-[-1.5px] text-[32px] lg:text-[36px] mb-1.5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.55 + i * 0.1 }}
                  >
                    {n}
                  </motion.span>
                  <span className="text-[13px] text-[#9a8f82] font-medium">{l}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* ── FILTER BAR ── */}
          <motion.div
            className="bg-white rounded-2xl md:rounded-3xl border border-black/5 p-4 sm:p-5 mb-6 sm:mb-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-4">

              {/* Search */}
              <div className="flex-1 flex items-center gap-3 bg-[#f7f4ef] rounded-xl h-[48px] md:h-[52px] px-4 sm:px-[18px]">
                <FiSearch className="text-[#9a8f82] flex-shrink-0 text-[15px]" />
                <input
                  type="text"
                  placeholder="Search luxury products..."
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="bg-transparent outline-none w-full text-[#1a1a18] placeholder:text-[#bbb5ac] text-[14px] md:text-[15px]"
                />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-3 bg-[#f7f4ef] rounded-xl h-[48px] md:h-[52px] relative w-full sm:w-[210px] px-4 sm:px-[18px]">
                <FiSliders className="text-[#9a8f82] flex-shrink-0 text-[15px]" />
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="bg-transparent outline-none appearance-none w-full text-[#1a1a18] font-medium text-[14px] md:text-[15px] cursor-pointer pr-6"
                >
                  <option value="default">Default Sorting</option>
                  <option value="low">Price Low To High</option>
                  <option value="high">Price High To Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <FiChevronDown className="absolute right-4 text-[#9a8f82] pointer-events-none text-[14px]" />
              </div>
            </div>

            <div className="h-px bg-black/5 mb-4" />

            {/* Category Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.85 + i * 0.05 }}
                  onClick={() => handleCategory(cat)}
                  className={`h-9 md:h-10 rounded-[10px] border text-[13px] md:text-[14px] font-medium transition-all duration-200 px-3 sm:px-4 ${
                    selectedCategory === cat
                      ? "bg-[#1a1a18] text-white border-[#1a1a18]"
                      : "bg-transparent text-[#4a4540] border-black/10 hover:bg-[#f7f4ef]"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ── PRODUCTS INFO ── */}
          <motion.div
            className="flex items-center justify-between flex-wrap gap-3 mb-6 sm:mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div>
              <h2 className="font-bold text-black text-xl md:text-3xl">
                {filteredProducts.length} Products Found
              </h2>
              <p className="text-gray-500 text-sm md:text-base mt-1.5">
                {totalPages > 1
                  ? `Page ${currentPage} of ${totalPages} — showing ${(currentPage - 1) * PRODUCTS_PER_PAGE + 1}–${Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length)}`
                  : "Showing premium luxury furniture collection"}
              </p>
            </div>

            <Link
              href="/"
              className="h-[42px] sm:h-[44px] rounded-full border border-black hover:bg-black hover:text-white transition font-medium text-sm md:text-base whitespace-nowrap px-5 sm:px-[22px] flex items-center"
            >
              Back To Home
            </Link>
          </motion.div>

          {/* ── PRODUCTS GRID ── */}
          {filteredProducts.length > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`page-${currentPage}-${selectedCategory}-${sortBy}-${search}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" as const }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8"
                >
                  {paginatedProducts.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.04 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* ── PAGINATION ── */}
              {totalPages > 1 && (
                <motion.div
                  className="flex items-center justify-center flex-wrap gap-2 mt-12 sm:mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Prev */}
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 font-medium text-[14px] h-11 rounded-[12px] px-4 sm:px-[18px] border border-black/10 bg-white hover:bg-[#1a1a18] hover:text-white hover:border-[#1a1a18] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-black/10 transition-all duration-200"
                  >
                    <FiChevronLeft size={16} />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  {/* Page Numbers */}
                  {pageNumbers.map((page, i) =>
                    page === "..." ? (
                      <span
                        key={`ellipsis-${i}`}
                        className="text-[#9a8f82] font-medium text-[14px] select-none px-1"
                      >
                        ···
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => goToPage(page as number)}
                        className={`w-11 h-11 rounded-[12px] font-medium text-[14px] transition-all duration-200 ${
                          currentPage === page
                            ? "bg-[#1a1a18] text-white border border-[#1a1a18]"
                            : "bg-white text-[#1a1a18] border border-black/10 hover:bg-[#f7f4ef] hover:border-black/20"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  {/* Next */}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 font-medium text-[14px] h-11 rounded-[12px] px-4 sm:px-[18px] border border-black/10 bg-white hover:bg-[#1a1a18] hover:text-white hover:border-[#1a1a18] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black disabled:hover:border-black/10 transition-all duration-200"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <FiChevronRight size={16} />
                  </button>
                </motion.div>
              )}

              {/* Page info below pagination on mobile */}
              {totalPages > 1 && (
                <p className="text-center text-[13px] text-[#9a8f82] md:hidden mt-4">
                  Page {currentPage} of {totalPages}
                </p>
              )}
            </>
          ) : (
            /* ── EMPTY STATE ── */
            <motion.div
              className="bg-white text-center rounded-[28px] sm:rounded-[32px] px-5 sm:px-6 py-14 sm:py-16"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
            >
              <div className="mx-auto w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] bg-[#f5f5f5] rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <FiSearch className="text-3xl sm:text-4xl text-gray-400" />
              </div>

              <h2 className="font-bold text-black text-[clamp(26px,6vw,42px)] mb-3.5">
                No Products Found
              </h2>

              <p className="text-gray-500 leading-7 mx-auto text-[14px] sm:text-[15px] max-w-[340px] sm:max-w-[420px] mb-6 sm:mb-7">
                We couldn't find products matching your search or selected category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                  setSortBy("default");
                  setCurrentPage(1);
                }}
                className="h-[50px] sm:h-[52px] rounded-full px-7 sm:px-8 text-[14px] sm:text-[15px] font-medium bg-black text-white hover:bg-[#1f1f1f] transition"
              >
                Reset Filters
              </button>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}