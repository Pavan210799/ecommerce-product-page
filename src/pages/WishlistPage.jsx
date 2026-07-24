import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function WishlistPage({ wishlistItems,
    removeFromWishlist,
    darkMode,
    setDarkMode,
    cartItems,}) {
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
                My Wishlist
                </h1>

                {wishlistItems.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-10 text-center">

                    <h2 className="text-xl font-semibold dark:text-white">
                    Your wishlist is empty
                    </h2>

                    <Link
                    to="/"
                    className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                    Continue Shopping
                    </Link>

                </div>
                ) : (

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {wishlistItems.map((item) => (

                    <div
                        key={item.id}
                        className="bg-white dark:bg-slate-900 rounded-xl shadow p-5"
                    >

                        <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full object-contain"
                        />

                        <h2 className="mt-4 font-semibold text-lg dark:text-white h-14 overflow-hidden">
                        {item.title}
                        </h2>

                        <p className="mt-2 text-2xl font-bold dark:text-white">
                        ₹{item.price.toLocaleString()}
                        </p>

                        <Link
                        to={`/product/${item.id}`}
                        className="block mt-5 text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                        >
                        View Product
                        </Link>

                        <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="w-full mt-3 border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                        Remove
                        </button>

                    </div>

                    ))}

                </div>

                )}

            </div>
        </motion.main>
    </>
  );
}

export default WishlistPage;