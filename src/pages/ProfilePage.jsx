import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

import { motion } from "framer-motion";

function ProfilePage({
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

          <h1 className="text-3xl font-bold dark:text-white mb-8">
            My Profile
          </h1>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-8">

            <div className="flex flex-col md:flex-row items-center gap-8">

              <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center">
                <FiUser className="text-white text-6xl" />
              </div>

              <div className="flex-1 space-y-5">

                <div className="flex items-center gap-3">
                  <FiUser className="text-blue-600" />
                  <span className="dark:text-white font-medium">
                    Pavan Kumar
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiMail className="text-blue-600" />
                  <span className="dark:text-white">
                    pavan@example.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiPhone className="text-blue-600" />
                  <span className="dark:text-white">
                    +91 98765 43210
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FiMapPin className="text-blue-600" />
                  <span className="dark:text-white">
                    Bengaluru, India
                  </span>
                </div>

              </div>

            </div>

          </div>

          <Footer />

        </div>
      </motion.main>
    </>
  );
}

export default ProfilePage;