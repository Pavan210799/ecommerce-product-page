import product from "../data/product";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import DeliveryInfo from "../components/DeliveryInfo";
import Offers from "../components/Offers";
import ProductDescription from "../components/ProductDescription";
import Specifications from "../components/Specifications";
import Reviews from "../components/Reviews";
import RelatedProducts from "../components/RelatedProducts";
import { motion } from "framer-motion";

function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4">

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProductGallery images={product.images} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <ProductInfo product={product} />
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
      </div>
    </main>
  );
}

export default ProductPage;