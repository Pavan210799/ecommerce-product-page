import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaHeadphones } from "react-icons/fa";

function AboutPage({
  darkMode,
  setDarkMode,
  cartItems,
  wishlistItems,
}) {
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
        transition={{ duration: 0.35 }}
        className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-6 pb-8"
      >
        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-10">

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              About Sony
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Sony has been delivering innovative consumer electronics for
              decades, combining premium design, cutting-edge technology, and
              exceptional audio experiences. From industry-leading
              noise-cancelling headphones to immersive wireless earbuds,
              Sony continues to redefine the way people enjoy music,
              entertainment, and everyday life.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">

                <FaBullseye className="text-3xl text-blue-600 mb-4" />

                <h2 className="text-xl font-semibold dark:text-white">
                  Our Mission
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  Deliver world-class technology that enriches everyday
                  experiences through innovation and quality.
                </p>

              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">

                <FaLightbulb className="text-3xl text-blue-600 mb-4" />

                <h2 className="text-xl font-semibold dark:text-white">
                  Innovation
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  We continuously push technology forward with advanced audio,
                  intelligent features, and premium craftsmanship.
                </p>

              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">

                <FaHeadphones className="text-3xl text-blue-600 mb-4" />

                <h2 className="text-xl font-semibold dark:text-white">
                  Premium Audio
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  Experience crystal-clear sound, immersive listening, and
                  industry-leading noise cancellation across every product.
                </p>

              </div>

            </div>

          </div>

          <Footer />

        </div>
      </motion.main>
    </>
  );
}

export default AboutPage;