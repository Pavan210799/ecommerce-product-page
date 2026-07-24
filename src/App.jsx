import ProductPage from "./pages/ProductPage";
import ProductSkeleton from "./components/ProductSkeleton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import SupportPage from "./pages/SupportPage";
import HomePage from "./pages/HomePage";
import { AnimatePresence } from "framer-motion";
import OrderSuccessPage from "./pages/OrderSuccessPage";


function App() {
  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [cartItems, setCartItems] = useState([]);

  const [orderItems, setOrderItems] = useState([]);

  const [wishlistItems, setWishlistItems] = useState([]);

  const location = useLocation();

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.packageId === item.packageId &&
          cartItem.colorId === item.colorId
      );

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.packageId === item.packageId &&
          cartItem.colorId === item.colorId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              }
            : cartItem
        );
      }

      return [...prev, item];
    });
  };
  

  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      const exists = prev.find((wishlistItem) => wishlistItem.id === item.id);

      if (exists) {
        return prev;
      }

      return [...prev, item];
    });
  };

  const increaseQuantity = (id, packageId, colorId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.packageId === packageId &&
        item.colorId === colorId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id, packageId, colorId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id &&
          item.packageId === packageId &&
          item.colorId === colorId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const removeItem = (id, packageId, colorId) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.packageId === packageId &&
            item.colorId === colorId
          )
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    setOrderItems(cartItems);
    setCartItems([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <>
      <AnimatePresence mode="wait">

        <Routes
            location={location}
            key={location.pathname}
        >

          <Route
              path="/"
              element={
                  <HomePage
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      cartItems={cartItems}
                      wishlistItems={wishlistItems}
                  />
              }
          />

          <Route
              path="/product/:id"
              element={
                  <ProductPage
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      addToCart={addToCart}
                      cartItems={cartItems}
                      addToWishlist={addToWishlist}
                      removeFromWishlist={removeFromWishlist}
                      wishlistItems={wishlistItems}
                  />
              }
          />

          <Route
              path="/cart"
              element={
                  <CartPage
                      cartItems={cartItems}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                      removeItem={removeItem}
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      wishlistItems={wishlistItems}
                      clearCart={clearCart}
                      placeOrder={placeOrder}
                  />
              }
          />

          <Route
              path="/wishlist"
              element={
                  <WishlistPage
                      wishlistItems={wishlistItems}
                      removeFromWishlist={removeFromWishlist}
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      cartItems={cartItems}
                  />
              }
          />

          <Route
              path="/profile"
              element={
                  <ProfilePage
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      cartItems={cartItems}
                      wishlistItems={wishlistItems}
                  />
              }
          />

          <Route
              path="/headphones"
              element={
                  <ProductsPage
                      category="headphones"
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      cartItems={cartItems}
                      wishlistItems={wishlistItems}
                  />
              }
          />

          <Route
              path="/earbuds"
              element={
                  <ProductsPage
                      category="earbuds"
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      cartItems={cartItems}
                      wishlistItems={wishlistItems}
                  />
              }
          />
          <Route
              path="/support"
              element={
                  <SupportPage
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      cartItems={cartItems}
                      wishlistItems={wishlistItems}
                  />
              }
          />

          <Route
              path="/order-success"
              element={
                  <OrderSuccessPage
                      orderItems={orderItems}
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      cartItems={cartItems}
                      wishlistItems={wishlistItems}
                      clearCart={clearCart}
                  />
              }
          />

        </Routes>

      </AnimatePresence>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </>
  );
}

export default App;