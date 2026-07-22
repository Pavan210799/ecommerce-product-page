import { FaTruck } from "react-icons/fa";
import { useState } from "react";


function DeliveryInfo({ product }) {
    const [pincode, setPincode] = useState("");
    const [deliveryStatus, setDeliveryStatus] = useState(null);

    const handleCheckDelivery = () => {
        if (pincode.trim() === "") {
            setDeliveryStatus(null);
            return;
        }

        const deliveryInfo =
            product.delivery.serviceablePincodes[pincode];

        setDeliveryStatus(
            deliveryInfo ?? {
                available: false,
                estimatedDays: null,
            }
        );
    };

    let deliveryDate = "";

    if (deliveryStatus?.available) {
        const estimatedDate = new Date();

        estimatedDate.setDate(
            estimatedDate.getDate() + deliveryStatus.estimatedDays
        );

        deliveryDate = estimatedDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
        });
    }

    return (
        <div className="bg-white rounded-2xl shadow-md p-5 md:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <FaTruck className="text-blue-600" />
                Delivery
            </h3>

            <div className="mt-4 space-y-3">

                <p>
                    <span className="font-semibold">
                        {product.delivery.shipping}
                    </span>
                </p>

                <p className="text-slate-600">
                    Estimated Delivery:
                    <span className="ml-2 font-semibold text-slate-900">
                        {deliveryDate || "--"}
                    </span>
                </p>

                <p className="text-slate-600">
                    Return Policy:
                    <span className="ml-2 font-semibold text-slate-900">
                        {product.delivery.returns}
                    </span>
                </p>

                <p className="text-slate-600">
                    Cash on Delivery:
                    <span className="ml-2 font-semibold text-emerald-600">
                        {product.delivery.cod ? "Available" : "Not Available"}
                    </span>
                </p>
                <hr className="my-6 border-slate-200" />
                <div className="mt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="text-sm font-semibold text-slate-900">
                            Availability :
                        </h4>

                        {deliveryStatus !== null && (
                            <span
                                className={`text-sm font-medium ${
                                    deliveryStatus?.available
                                        ? "text-emerald-600"
                                        : "text-red-600"
                                }`}
                            >
                                {deliveryStatus?.available ?"Delivery available at your location." : "Delivery not available at your location."}
                            </span>
                        )}
                    </div>
                     <div className="mt-3 flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            maxLength={6}
                            placeholder="Enter 6-digit pincode"
                            value={pincode}
                            onChange={(e) => {
                                setPincode(e.target.value)
                                setDeliveryStatus(null);
                            }}
                            className="flex-1 w-full h-12 rounded-lg border border-slate-300 px-4 py-3 leading-none appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleCheckDelivery}
                            className="h-12 w-full sm:w-auto rounded-lg bg-blue-600 px-6 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
                        >
                            Check
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryInfo;