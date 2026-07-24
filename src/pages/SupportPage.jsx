import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiPhone, FiMail, FiClock, FiHelpCircle } from "react-icons/fi";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function SupportPage({
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
        transition={{
            duration: 0.35,
            ease: "easeOut",
        }}
        className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-6 pb-8"
    >
        <div className="max-w-5xl mx-auto px-4">

          <h1 className="text-3xl font-bold mb-8 dark:text-white">
            Customer Support
          </h1>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-8 space-y-6">

            <div className="flex items-center gap-3">
              <FiPhone className="text-blue-600 text-xl" />
              <span className="dark:text-white">+91 1800-103-7799</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-blue-600 text-xl" />
              <span className="dark:text-white">
                support@sony-demo.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiClock className="text-blue-600 text-xl" />
              <span className="dark:text-white">
                Monday - Saturday | 9:00 AM - 7:00 PM
              </span>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-xl font-semibold dark:text-white">
                <FiHelpCircle />
                Frequently Asked Questions
              </h2>

              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <li>• How do I track my order?</li>
                <li>• How can I claim warranty?</li>
                <li>• How do I replace my product?</li>
                <li>• How do I cancel my order?</li>
              </ul>
            </div>

            <button
              onClick={() =>
                toast.success("Our support team will contact you shortly.")
              }
              className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Contact Support
            </button>

          </div>

          <Footer />

        </div>
      </motion.main>
    </>
  );
}

export default SupportPage;