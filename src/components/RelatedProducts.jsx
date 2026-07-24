import { FaHeadphones, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function RelatedProducts({ product }) {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-5 md:p-8 transition-colors duration-300">

            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <FaHeadphones className="text-blue-600" />
                Related Products
            </h3>

            <div className="mt-6 flex gap-4 md:gap-6 overflow-x-auto pb-2">

                {product.relatedProducts.map((item) => (

                    <Link
                        key={item.id}
                        to={`/product/${item.id}`}
                        className="min-w-[250px] flex-shrink-0 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >

                        <div className="h-44 flex items-center justify-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <h4 className="mt-4 text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                            {item.name}
                        </h4>

                        <div className="mt-3 flex items-center gap-2">
                            <FaStar className="text-yellow-400" />

                            <span className="font-medium text-slate-700 dark:text-slate-300">
                                {item.rating}
                            </span>
                        </div>

                        <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                            ₹{item.price.toLocaleString()}
                        </p>

                    </Link>

                ))}

            </div>

        </div>
    );
}

export default RelatedProducts;