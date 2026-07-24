import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccessPage({
  orderItems,
  darkMode,
  setDarkMode,
  cartItems,
  wishlistItems,
  clearCart,
}) {
  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-slate-100 dark:bg-slate-950 pt-6 pb-8"
      >
        <div className="max-w-5xl mx-auto px-4">

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">

            <div className="text-center">

              <FaCheckCircle className="text-7xl text-green-500 mx-auto" />

              <h1 className="mt-5 text-4xl font-bold dark:text-white">
                Order Placed Successfully!
              </h1>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Thank you for shopping with Sony.
              </p>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-semibold dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-5">

                {orderItems.map((item) => (

                  <div
                    key={`${item.id}-${item.packageId}-${item.colorId}`}
                    className="flex items-center gap-5 border-b pb-5"
                  >

                    <img
                      src={item.image}
                      className="w-24 h-24 object-contain"
                    />

                    <div className="flex-1">

                      <h3 className="font-semibold dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-slate-500">
                        Quantity : {item.quantity}
                      </p>

                      <p className="font-bold mt-2 dark:text-white">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              <div className="mt-8 flex justify-between text-2xl font-bold dark:text-white">

                <span>Total Paid</span>

                <span>
                  ₹{total.toLocaleString()}
                </span>

              </div>

              <Link
                to="/"
                className="block mt-10 w-full bg-blue-600 hover:bg-blue-700 text-center text-white py-4 rounded-xl font-semibold"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

          <Footer />

        </div>
      </motion.main>
    </>
  );
}

export default OrderSuccessPage;