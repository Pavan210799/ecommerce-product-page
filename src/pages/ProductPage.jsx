import product1 from "../data/product";
import product2 from "../data/product2";
import product3 from "../data/product3";
import product4 from "../data/product4";
import product5 from "../data/product5";

import { useParams } from "react-router-dom";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import DeliveryInfo from "../components/DeliveryInfo";
import Offers from "../components/Offers";
import ProductDescription from "../components/ProductDescription";
import Specifications from "../components/Specifications";
import Reviews from "../components/Reviews";
import RelatedProducts from "../components/RelatedProducts";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";


function ProductPage({ darkMode, setDarkMode, addToCart, cartItems,addToWishlist,removeFromWishlist, wishlistItems,}) {
  const { id } = useParams();

  const products = {
    1: product1,
    2: product2,
    3: product3,
    4: product4,
    5: product5,
  };

  const product = products[id] || product1;
  useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  }, [id]);

  return (
    <> 
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        cartItems={cartItems}
        wishlistItems={wishlistItems}
      />

      <main className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProductGallery 
                key={product.id}
                images={product.images} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <ProductInfo
                key={product.id} 
                product={product}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                removeFromWishlist={removeFromWishlist}
                wishlistItems={wishlistItems} 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <DeliveryInfo product={product} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Offers product={product} />
            </motion.div>

          </section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-12 space-y-8"
          >
            <ProductDescription product={product} />
            <Specifications product={product} />
            <Reviews product={product} />
            <RelatedProducts product={product} />
          </motion.div>

          <Footer />
        </div>
      </main>
    </>  
  );
}

export default ProductPage;