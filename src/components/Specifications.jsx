import { FaListAlt } from "react-icons/fa";

function Specifications({ product }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 md:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <FaListAlt className="text-blue-600" />
                Specifications
            </h3>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                {product.specifications.map((spec, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-2 ${
                            index !== product.specifications.length - 1
                                ? "border-b border-slate-200"
                                : ""
                        }`}
                    >
                        <div className="bg-slate-50 px-4 md:px-6 py-4 font-medium text-slate-700">
                            {spec.label}
                        </div>

                        <div className="px-4 md:px-6 py-4 text-slate-600">
                            {spec.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Specifications;