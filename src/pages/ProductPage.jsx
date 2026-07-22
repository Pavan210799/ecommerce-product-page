import product from "../data/product";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import DeliveryInfo from "../components/DeliveryInfo";
import Offers from "../components/Offers";
import ProductDescription from "../components/ProductDescription";
import Specifications from "../components/Specifications";
import Reviews from "../components/Reviews";
import RelatedProducts from "../components/RelatedProducts";

function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}

        {/* Hero Section */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
          <DeliveryInfo product={product} />
          <Offers product={product} />

        </section>
        <div className="mt-12 space-y-8">

            <ProductDescription product={product} />
            <Specifications product={product} />
            <Reviews product={product} />
            <RelatedProducts product={product} />

        </div>
      </div>
    </main>
  );
}

export default ProductPage;