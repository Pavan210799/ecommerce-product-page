import ProductPage from "./pages/ProductPage";
import ProductSkeleton from "./components/ProductSkeleton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }, 
  []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center transition-all duration-300"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-lg" />
          ) : (
            <FaMoon className="text-slate-700 text-lg" />
          )}
        </button>
      </div>

      {loading ? <ProductSkeleton /> : <ProductPage />}

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