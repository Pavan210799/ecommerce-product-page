import { FaListAlt } from "react-icons/fa";

function Specifications({ product }) {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-5 md:p-8 transition-colors duration-300">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <FaListAlt className="text-blue-600" />
                Specifications
            </h3>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                {product.specifications.map((spec, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-[40%_60%] ${
                            index !== product.specifications.length - 1
                                ? "border-b border-slate-200 dark:border-slate-700"
                                : ""
                        }`}
                    >
                        <div className="bg-slate-50 dark:bg-slate-800 px-4 md:px-6 py-4 font-medium text-slate-700 dark:text-slate-200 transition-colors duration-300">
                            {spec.label}
                        </div>

                        <div className="px-4 md:px-6 py-4 text-slate-600 dark:text-slate-400 transition-colors duration-300">
                            {spec.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Specifications;