import { FaGift, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import confetti from "canvas-confetti";


function Offers({ product }) {
    const [couponCode, setCouponCode] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const handleApplyCoupon = () => {

        if (couponCode.trim().toUpperCase() === "SONY500") {
            confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 },
            });
            toast.success("Coupon applied successfully!");
            setCouponApplied(true);
        } else {
            toast.error("Invalid coupon code.");
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-5 md:p-8 transition-colors duration-300">
            {/* Heading */}
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                <FaGift className="text-blue-600" />
                Available Offers
            </h3>

            {/* Offers */}
            <div className="mt-4 space-y-3">
                {product.offers.map((offer, index) => (
                    <p
                        key = {index}
                        className="flex items-center gap-3"
                    >
                            <FaCheckCircle className="text-emerald-500 text-base flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400">{offer}</span>
                    </p>
                ))}
            </div>
            <hr className="my-6 border-slate-200 dark:border-slate-700" />
            <div className="space-y-3">

                <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                    Apply Coupon
                </h4>

                <div className="flex flex-col sm:flex-row gap-3">

                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => {
                            setCouponCode(e.target.value)
                            setCouponApplied(false);
                        }}
                        className="w-full sm:flex-1 h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                    />

                    <button
                        onClick={handleApplyCoupon}
                        disabled={couponApplied}
                        className={`w-full sm:w-auto h-12 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] ${
                            couponApplied
                                ? "bg-emerald-600 text-white cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                    >
                        {couponApplied ? "✔ Applied" : "Apply"}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Offers;