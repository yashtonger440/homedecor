import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#0d0d0d] text-white"
      style={{
        padding: "90px 0 30px",
        marginTop: "80px",
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl opacity-30" />

      <div
        className="relative z-10 container-custom"
        style={{
          padding: "0 20px",
        }}
      >
        {/* Top Section */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 border-b border-white/10"
          style={{
            gap: "50px",
            paddingBottom: "50px",
          }}
        >
          {/* Brand */}
          <div>
            <h2
              className="text-4xl font-black tracking-wide"
              style={{
                marginBottom: "20px",
              }}
            >
              NishMee
            </h2>

            <p
              className="text-gray-400 leading-8"
              style={{
                marginBottom: "28px",
              }}
            >
              Premium furniture and luxury home decor crafted
              for elegant modern interiors.
            </p>

            {/* Social Icons */}
            <div
              className="flex items-center"
              style={{
                gap: "14px",
              }}
            >
              {[FiFacebook, FiInstagram, FiTwitter, FiYoutube].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="bg-white/10 hover:bg-[#d6bfa7] hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  >
                    <Icon />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl font-bold"
              style={{
                marginBottom: "24px",
              }}
            >
              Quick Links
            </h3>

            <div
              className="flex flex-col text-gray-400"
              style={{
                gap: "16px",
              }}
            >
              {["Home", "Shop", "Collections", "Contact"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="hover:text-white transition duration-300 flex items-center gap-2 group"
                  >
                    {item}

                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300" />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3
              className="text-xl font-bold"
              style={{
                marginBottom: "24px",
              }}
            >
              Categories
            </h3>

            <div
              className="flex flex-col text-gray-400"
              style={{
                gap: "16px",
              }}
            >
              {["Lamps", "Chairs", "Vases", "Wall Decor"].map(
                (item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="hover:text-white transition duration-300 flex items-center gap-2 group"
                  >
                    {item}

                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300" />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-xl font-bold"
              style={{
                marginBottom: "24px",
              }}
            >
              Stay Updated
            </h3>

            <p
              className="text-gray-400 leading-7"
              style={{
                marginBottom: "22px",
              }}
            >
              Subscribe for luxury decor inspiration and exclusive offers.
            </p>

            <div
              className="bg-white/10 border border-white/10 rounded-full flex items-center overflow-hidden"
              style={{
                padding: "8px",
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent text-white placeholder:text-gray-500 outline-none"
                style={{
                  paddingLeft: "10px",
                  height: "52px",
                }}
              />

              <button
                className="bg-[#d6bfa7] text-black font-semibold rounded-full hover:bg-white transition duration-300"
                style={{
                  padding: "0 20px",
                  marginRight: "4px",
                  height: "52px",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between text-gray-500"
          style={{
            paddingTop: "28px",
            gap: "12px",
          }}
        >
          <p>© 2026 DECORA. All Rights Reserved.</p>

          <div
            className="flex items-center"
            style={{
              gap: "18px",
            }}
          >
            <Link
              href="/"
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-white transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}