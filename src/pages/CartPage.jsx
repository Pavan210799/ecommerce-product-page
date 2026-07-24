import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function CartPage({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  darkMode,
  setDarkMode,
  wishlistItems,
  clearCart,
  placeOrder
}) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

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
        <div className="max-w-6xl mx-auto px-4">

          <h1 className="text-3xl font-bold mb-8 dark:text-white">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-xl p-10 text-center shadow">

              <h2 className="text-xl font-semibold dark:text-white">
                Your cart is empty
              </h2>

              <Link
                to="/"
                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Continue Shopping
              </Link>

            </div>
          ) : (

            <div className="grid lg:grid-cols-3 gap-8">

              <div className="lg:col-span-2 space-y-5">

                {cartItems.map((item) => (

                  <div
                    key={`${item.id}-${item.packageId}-${item.colorId}`}
                    className="bg-white dark:bg-slate-900 rounded-xl shadow p-5 flex gap-5"
                  >

                    <img
                      src={item.image}
                      className="w-28 h-28 object-contain"
                    />

                    <div className="flex-1">

                      <h2 className="font-bold text-lg dark:text-white">
                        {item.title}
                      </h2>

                      <p className="text-slate-500 mt-2">
                        Color : {item.color}
                      </p>

                      <p className="text-slate-500">
                        Package : {item.package}
                      </p>

                      <p className="mt-3 font-bold text-2xl dark:text-white">
                        ₹{item.price.toLocaleString()}
                      </p>

                      <div className="mt-4 flex items-center gap-4">

                        <button
                            onClick={() =>
                                decreaseQuantity(
                                    item.id,
                                    item.packageId,
                                    item.colorId
                                )
                            }
                            className="w-9 h-9 rounded-lg border hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            −
                        </button>

                        <span className="font-semibold text-lg dark:text-white">
                            {item.quantity}
                        </span>

                        <button
                            onClick={() =>
                                increaseQuantity(
                                    item.id,
                                    item.packageId,
                                    item.colorId
                                )
                            }
                            className="w-9 h-9 rounded-lg border hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            +
                        </button>

                      </div>
                      <button
                          onClick={() =>
                              removeItem(
                                  item.id,
                                  item.packageId,
                                  item.colorId
                              )
                          }
                          className="mt-4 text-red-600 hover:underline font-medium"
                      >
                          Remove
                      </button>

                    </div>

                  </div>

                ))}

              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 h-fit">

                <h2 className="text-xl font-bold dark:text-white">
                  Order Summary
                </h2>

                <div className="mt-6 flex justify-between">

                  <span>Subtotal</span>

                  <span>
                    ₹{subtotal.toLocaleString()}
                  </span>

                </div>

                <div className="mt-3 flex justify-between">

                  <span>Shipping</span>

                  <span className="text-green-600">
                    FREE
                  </span>

                </div>

                <hr className="my-5" />

                <div className="flex justify-between font-bold text-xl dark:text-white">

                  <span>Total</span>

                  <span>
                    ₹{subtotal.toLocaleString()}
                  </span>

                </div>

                <button
                    onClick={() => {
                        if (cartItems.length === 0) return;

                        placeOrder();
                        navigate("/order-success");
                    }}
                    className="mt-6 w-full h-12 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
                >
                    Place Order
                </button>
                <Link
                    to="/"
                    className="block mt-4 text-center border border-slate-300 dark:border-slate-700 rounded-lg py-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                    Continue Shopping
                </Link>

              </div>

            </div>

          )}

        </div>
      </motion.main>
  </>
  );
}

export default CartPage;