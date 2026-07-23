import { FaInfoCircle } from "react-icons/fa";

function ProductDescription({ product }) {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-5 md:p-8 transition-colors duration-300">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <FaInfoCircle className="text-blue-600" />
                Product Description 
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7 text-justify">
                {product.description}
            </p>
        </div>
    );
}

export default ProductDescription;