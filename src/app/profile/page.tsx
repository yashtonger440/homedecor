"use client";

import Link from "next/link";

import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ProfilePage() {

  const { currentUser } = useSelector(
    (state: RootState) => state.auth
  );

  const { wishlistItems } = useSelector(
    (state: RootState) => state.wishlist
  );

  const { cartItems } = useSelector(
    (state: RootState) => state.cart
  );

  if (!currentUser) {
    return (
      <>
        <Navbar />

        <section className="min-h-screen bg-[#f8f5f0] flex items-center justify-center px-5">

          <div
            className="bg-white text-center w-full max-w-md"
            style={{
              padding: "50px 30px",
              borderRadius: "30px",
            }}
          >

            <h1
              className="font-black text-black"
              style={{
                fontSize: "38px",
                marginBottom: "14px",
              }}
            >
              Please Login
            </h1>

            <p
              className="text-gray-500"
              style={{
                marginBottom: "28px",
              }}
            >
              Login to access your profile.
            </p>

            <Link
              href="/login"
              className="inline-flex items-center justify-center bg-black text-white hover:bg-[#1f1f1f] transition"
              style={{
                height: "54px",
                padding: "0 28px",
                borderRadius: "999px",
                fontWeight: "600",
              }}
            >
              Login Now
            </Link>

          </div>

        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0]">

        <div
          className="max-w-4xl mx-auto"
          style={{
            padding: "120px 20px 80px",
          }}
        >

          <div
            className="bg-white"
            style={{
              borderRadius: "32px",
              padding: "40px",
            }}
          >

            <h1
              className="font-black text-black"
              style={{
                fontSize: "42px",
                marginBottom: "30px",
              }}
            >
              My Profile
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

              <div
                className="bg-[#f8f5f0]"
                style={{
                  padding: "24px",
                  borderRadius: "22px",
                }}
              >
                <p className="text-gray-500 text-sm">
                  Full Name
                </p>

                <h2
                  className="font-bold text-black"
                  style={{
                    fontSize: "24px",
                    marginTop: "8px",
                  }}
                >
                  {currentUser.name}
                </h2>
              </div>

              <div
                className="bg-[#f8f5f0]"
                style={{
                  padding: "24px",
                  borderRadius: "22px",
                }}
              >
                <p className="text-gray-500 text-sm">
                  Email Address
                </p>

                <h2
                  className="font-bold text-black break-all"
                  style={{
                    fontSize: "22px",
                    marginTop: "8px",
                  }}
                >
                  {currentUser.email}
                </h2>
              </div>

              <div
                className="bg-[#f8f5f0]"
                style={{
                  padding: "24px",
                  borderRadius: "22px",
                }}
              >
                <p className="text-gray-500 text-sm">
                  Wishlist Products
                </p>

                <h2
                  className="font-black text-black"
                  style={{
                    fontSize: "34px",
                    marginTop: "8px",
                  }}
                >
                  {wishlistItems.length}
                </h2>
              </div>

              <div
                className="bg-[#f8f5f0]"
                style={{
                  padding: "24px",
                  borderRadius: "22px",
                }}
              >
                <p className="text-gray-500 text-sm">
                  Cart Products
                </p>

                <h2
                  className="font-black text-black"
                  style={{
                    fontSize: "34px",
                    marginTop: "8px",
                  }}
                >
                  {cartItems.length}
                </h2>
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}