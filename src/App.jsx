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
      {loading ? <ProductSkeleton /> : <ProductPage darkMode={darkMode} setDarkMode={setDarkMode}/>}

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