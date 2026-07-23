import { FaStar, FaRegHeart, FaHeart, FaShoppingCart, FaBolt } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";


function ProductInfo({ product }) {
    const [selectedColor, setSelectedColor] = useState(
        product.colors.find((color) => color.available)
    );
    const [selectedPackage, setSelectedPackage] = useState(
        product.packages.find((pkg) => pkg.available)
    );
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                {product.title}
            </h1>
            <p className="mt-4 text-slate-500">
                by
                <span className="ml-2 font-semibold text-slate-800">
                    {product.brand}
                </span>
            </p>
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />

                    <span className="font-bold">
                        {product.rating.average}
                    </span>

                    <span className="text-slate-500">
                        ({product.rating.totalReviews} Reviews)
                    </span>
                </div>

                <button
                    onClick={() => {
                        setIsWishlisted(!isWishlisted);

                        if (!isWishlisted) {
                            toast.success("Added to Wishlist");
                        } else {
                            toast.info("Removed from Wishlist");
                        }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                        isWishlisted
                            ? "bg-red-50 text-red-500 border-red-300"
                            : "bg-white text-slate-600 border-slate-300 hover:border-red-300 hover:text-red-500"
                    }`}
                >
                    {isWishlisted ? <FaHeart /> : <FaRegHeart />}

                    <span>
                        {isWishlisted ? "Wishlisted" : "Wishlist"}
                    </span>
                </button>

            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-4xl font-bold text-slate-900">
                    ₹{selectedPackage.currentPrice.toLocaleString()}
                </span>

                <span className="text-xl text-slate-400 line-through">
                    ₹{selectedPackage.originalPrice.toLocaleString()}
                </span>

                <span className="text-emerald-600 font-semibold uppercase tracking-wide">
                    {selectedPackage.discount}% OFF
                </span>
            </div>
            <hr className="my-6 border-slate-200" />
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                    Color
                </h3>
                <div className="mt-4 flex items-center gap-5">
                    {product.colors.map((color) => (
                        <button
                            key={color.id}
                            onClick={() =>color.available && setSelectedColor(color)}
                            className={`w-10 h-10 rounded-full border-2 transition-all duration-300
                                ${
                                    selectedColor.id === color.id
                                        ? "border-blue-500 scale-110"
                                        : "border-slate-300"
                                }

                                ${
                                    !color.available
                                        ? "opacity-40 cursor-not-allowed"
                                        : "cursor-pointer hover:scale-110"
                                }
                            `}
                            style={{backgroundColor: color.code,}}
                        />
                    ))}
                </div>
                <p className="mt-2 text-slate-500">
                    Selected:
                    <span className="ml-2 font-semibold text-slate-900">
                        {selectedColor.name}
                    </span>
                </p>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-900">
                    Package
                </h3>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    {product.packages.map((pkg) => (
                        <button
                            key={pkg.id}
                            onClick={() =>pkg.available && setSelectedPackage(pkg)}
                            className={`rounded-xl px-5 py-3 border-2 w-full sm:flex-1 transition-all duration-300
                                ${
                                    selectedPackage.id === pkg.id
                                        ? "border-blue-500 bg-blue-600 text-white"
                                        : "border-gray bg-white text-dark"
                                }
                                ${
                                    !pkg.available
                                        ? "opacity-40 cursor-not-allowed"
                                        : "cursor-pointer hover:scale-110"
                                }
                            `}
                        >
                            {pkg.name}
                        </button>
                    ))}

                </div>
                <div className="mt-4 space-y-2">
                    <p className="text-slate-500">
                        Selected Package:
                        <span className="ml-2 font-semibold text-slate-900">
                            {selectedPackage.name}
                        </span>
                    </p>

                    <p className="text-slate-500">
                        Includes:
                        <span className="ml-2 font-semibold text-slate-900">
                            {selectedPackage.items}
                        </span>
                    </p>
                </div>    
            </div>
            <hr className="my-6 border-slate-200" />
            <div className="mt-6 space-y-6">
                <div className="flex items-center gap-10">
                    <h3 className="text-lg font-semibold text-slate-900">
                        Quantity
                    </h3>

                    <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">

                        <button
                            onClick={() => {
                                if (quantity > 1) {
                                    setQuantity((prev) => prev - 1);
                                }
                            }}
                            className="w-10 h-10 hover:bg-slate-100 transition-colors text-lg font-semibold"
                        >
                            −
                        </button>

                        <span className="w-10 h-10 flex items-center justify-center border-x border-slate-300 font-semibold text-slate-900">
                            {quantity}
                        </span>

                        <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="w-10 h-10 hover:bg-slate-100 transition-colors text-lg font-semibold"
                        >
                            +
                        </button>

                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <button
                        onClick={() =>
                            toast.success(
                                `${quantity} × ${product.brand} ${product.category} (${selectedPackage.name}) added to cart`
                            )
                        }
                        className="group flex items-center justify-center gap-2 h-12 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300"
                    >
                        <FaShoppingCart className="transition-transform duration-300 group-hover:scale-110" />
                        <span>Add to Cart</span>
                    </button>

                    <button
                        onClick={() =>
                            toast.info("Proceeding to checkout...")
                        }
                        className="group flex items-center justify-center gap-2 h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
                    >
                        <FaBolt className="transition-transform duration-300 group-hover:scale-110"/>
                        <span>Buy Now</span>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ProductInfo;