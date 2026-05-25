"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
    FiHeart,
    FiTrash2,
    FiShoppingBag,
    FiArrowLeft,
    FiStar,
} from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";

import {
    removeFromWishlist,
    clearWishlist,
} from "@/store/features/wishlistSlice";

import { addToCart } from "@/store/features/cartSlice";

import { RootState } from "@/store/store";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function WishlistPage() {
    const dispatch = useDispatch();

    const { wishlistItems } = useSelector(
        (state: RootState) => state.wishlist
    );

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-[#f8f5f0]">
                <div
                    className="max-w-7xl mx-auto"
                    style={{
                        padding: "100px 20px 100px",
                    }}
                >
                    {/* Top Section */}
                    <div
                        className="flex items-center justify-between flex-wrap gap-4"
                        style={{
                            marginBottom: "36px",
                        }}
                    >
                        <div>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition"
                                style={{
                                    marginBottom: "14px",
                                    fontSize: "14px",
                                }}
                            >
                                <FiArrowLeft className="text-sm" />
                                Continue Shopping
                            </Link>

                            <div className="flex items-center gap-3">

                                {/* Icon */}
                                <div
                                    className="bg-black text-white rounded-full flex items-center justify-center"
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        fontSize: "20px",
                                    }}
                                >
                                    <FiHeart />
                                </div>

                                {/* Text */}
                                <div>
                                    <p
                                        className="uppercase tracking-[3px] text-gray-400 font-medium"
                                        style={{
                                            fontSize: "10px",
                                            marginBottom: "4px",
                                        }}
                                    >
                                        Saved Products
                                    </p>

                                    <h1
                                        className="font-black text-[#111827] leading-none"
                                        style={{
                                            fontSize: "clamp(28px,4vw,42px)",
                                        }}
                                    >
                                        My Wishlist
                                    </h1>
                                </div>

                            </div>
                        </div>

                        {wishlistItems.length > 0 && (
                            <button
                                onClick={() => dispatch(clearWishlist())}
                                className="border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                                style={{
                                    height: "44px",
                                    borderRadius: "999px",
                                    padding: "0 20px",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                }}
                            >
                                Clear Wishlist
                            </button>
                        )}
                    </div>

                    {/* Empty Wishlist */}
                    {wishlistItems.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white text-center"
                            style={{
                                borderRadius: "40px",
                                padding: "90px 20px",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                            }}
                        >
                            {/* <div
                                className="mx-auto bg-[#f5f5f5] rounded-full flex items-center justify-center"
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    marginBottom: "30px",
                                    fontSize: "50px",
                                }}
                            >
                                <FiHeart />
                            </div> */}

                            <h2
                                className="font-black text-[#111827]"
                                style={{
                                    fontSize: "clamp(34px,5vw,52px)",
                                    marginBottom: "18px",
                                }}
                            >
                                Your Wishlist Is Empty
                            </h2>

                            <p
                                className="text-gray-500 mx-auto leading-8"
                                style={{
                                    maxWidth: "550px",
                                    marginBottom: "36px",
                                    fontSize: "17px",
                                    marginLeft: "320px"
                                }}
                            >
                                Save your favorite handcrafted ceramic and marble decor
                                products here for future shopping.
                            </p>

                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center bg-black text-white hover:bg-[#1f1f1f] transition-all duration-300"
                                style={{
                                    height: "58px",
                                    padding: "0 34px",
                                    borderRadius: "999px",
                                    fontWeight: "600",
                                }}
                            >
                                Explore Products
                            </Link>
                        </motion.div>
                    ) : (
                        <>
                            {/* Products Count */}
                            <div
                                className="flex items-center justify-between flex-wrap gap-4"
                                style={{
                                    marginBottom: "34px",
                                }}
                            >
                                <div>
                                    <h2
                                        className="font-bold text-black"
                                        style={{
                                            fontSize: "28px",
                                        }}
                                    >
                                        {wishlistItems.length} Saved Products
                                    </h2>

                                    <p
                                        className="text-gray-500"
                                        style={{
                                            marginTop: "6px",
                                        }}
                                    >
                                        Luxury handcrafted pieces saved for your collection.
                                    </p>
                                </div>
                            </div>

                            {/* Wishlist Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                                {wishlistItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 35 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.08,
                                        }}
                                        className="group bg-white overflow-hidden relative"
                                        style={{
                                            borderRadius: "32px",
                                            padding: "14px",
                                            boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
                                        }}
                                    >
                                        {/* Product Image */}
                                        <Link href={`/products/${item.id}`}>
                                            <div
                                                className="relative overflow-hidden bg-[#f8f5f0]"
                                                style={{
                                                    height: "300px",
                                                    borderRadius: "24px",
                                                    marginBottom: "20px",
                                                }}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition duration-700"
                                                />

                                                {/* Remove Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(removeFromWishlist(item.id));
                                                    }}
                                                    className="absolute top-4 right-4 bg-white text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg"
                                                    style={{
                                                        width: "42px",
                                                        height: "42px",
                                                        borderRadius: "999px",
                                                    }}
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            </div>
                                        </Link>

                                        {/* Content */}
                                        <div
                                            style={{
                                                padding: "0 6px 6px",
                                            }}
                                        >
                                            <p
                                                className="uppercase tracking-[3px] text-[#c9a96e] font-semibold"
                                                style={{
                                                    fontSize: "11px",
                                                    marginBottom: "10px",
                                                }}
                                            >
                                                {item.category}
                                            </p>

                                            <Link href={`/products/${item.id}`}>
                                                <h3
                                                    className="font-bold text-[#111827] hover:text-black transition leading-snug"
                                                    style={{
                                                        fontSize: "22px",
                                                        marginBottom: "14px",
                                                    }}
                                                >
                                                    {item.title}
                                                </h3>
                                            </Link>

                                            {/* Rating */}
                                            <div
                                                className="flex items-center gap-2"
                                                style={{
                                                    marginBottom: "18px",
                                                }}
                                            >
                                                <FiStar className="text-yellow-500 fill-yellow-500" />

                                                <span className="text-sm font-medium text-gray-600">
                                                    {item.rating} Rating
                                                </span>
                                            </div>

                                            {/* Price */}
                                            <div
                                                className="flex items-center gap-3"
                                                style={{
                                                    marginBottom: "22px",
                                                }}
                                            >
                                                <span className="text-3xl font-black text-black">
                                                    ${item.price}
                                                </span>

                                                <span className="text-lg text-gray-400 line-through">
                                                    ${item.oldPrice}
                                                </span>
                                            </div>

                                            {/* Add To Cart */}
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        addToCart({
                                                            id: item.id,
                                                            title: item.title,
                                                            image: item.image,
                                                            price: item.price,
                                                            quantity: 1,
                                                        })
                                                    )
                                                }
                                                className="w-full bg-black text-white hover:bg-[#1f1f1f] transition-all duration-300 flex items-center justify-center gap-3"
                                                style={{
                                                    height: "56px",
                                                    borderRadius: "999px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                <FiShoppingBag />
                                                Add To Cart
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}