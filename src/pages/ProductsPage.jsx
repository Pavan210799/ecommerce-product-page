import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import product from "../data/product";
import product2 from "../data/product2";
import product3 from "../data/product3";
import product4 from "../data/product4";
import product5 from "../data/product5";

import { motion } from "framer-motion";

function ProductsPage({
  category,
  darkMode,
  setDarkMode,
  cartItems,
  wishlistItems,
}) {
  const headphones = [product, product2, product3, product4];
  const earbuds = [product5];

  const products =
    category === "headphones" ? headphones : earbuds;

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

          <h1 className="text-3xl font-bold mb-8 dark:text-white">
            {category === "headphones"
              ? "Wireless Headphones"
              : "Wireless Earbuds"}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((item) => (

              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="h-56 flex items-center justify-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="max-h-full object-contain"
                  />
                </div>

                <h2 className="mt-4 h-14 overflow-hidden text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h2>

                <p className="mt-2 text-yellow-500 font-medium">
                  ⭐ {item.rating.average}
                </p>

                <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                  ₹{item.packages[0].currentPrice.toLocaleString()}
                </p>

                <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium transition">
                  View Product
                </button>

              </Link>

            ))}

          </div>

          <Footer />

        </div>
      </motion.main>
    </>
  );
}

export default ProductsPage;