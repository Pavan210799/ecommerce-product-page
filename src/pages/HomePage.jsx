import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero from "../assets/hero.png";

import product from "../data/product";
import product2 from "../data/product2";
import product3 from "../data/product3";
import product4 from "../data/product4";
import product5 from "../data/product5";

import { motion } from "framer-motion";

function HomePage({
  darkMode,
  setDarkMode,
  cartItems,
  wishlistItems,
}) {

  const products = [
    product,
    product2,
    product3,
    product4,
    product5,
  ];

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
      />

      <motion.main
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{
            duration: 0.35,
            ease: "easeOut",
        }}
        className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-6 pb-8"
    >

        <div className="max-w-7xl mx-auto px-4">

          {/* Hero Section */}

          <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg overflow-hidden">

            <div className="grid lg:grid-cols-2 gap-10 items-center p-10">

              <div>

                <h1 className="text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  Premium Audio Experience
                </h1>

                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                  Discover Sony's latest range of wireless headphones and earbuds
                  with industry-leading sound quality, advanced noise cancellation,
                  and exceptional comfort.
                </p>

                <Link
                  to="/headphones"
                  className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Shop Headphones
                </Link>

              </div>

              <div className="flex justify-center">

                <img
                  src={hero}
                  alt="Sony Hero"
                  className="max-h-[420px] object-contain"
                />

              </div>

            </div>

          </section>

          {/* Featured Products */}

          <section className="mt-14">

            <h2 className="text-3xl font-bold dark:text-white mb-8">
              Featured Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {products.map((item) => (

                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="h-60 flex justify-center items-center">

                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="max-h-full object-contain"
                    />

                  </div>

                  <h3 className="mt-5 h-14 overflow-hidden text-xl font-semibold dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-yellow-500">
                    ⭐ {item.rating.average}
                  </p>

                  <p className="mt-3 text-3xl font-bold dark:text-white">
                    ₹{item.packages[0].currentPrice.toLocaleString()}
                  </p>

                  <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                    View Product
                  </button>

                </Link>

              ))}

            </div>

          </section>

          <Footer />

        </div>

      </motion.main>

    </>
  );
}

export default HomePage;