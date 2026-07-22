import { FaStar, FaRegStar, FaUserCircle, FaCommentDots } from "react-icons/fa";


function Reviews({ product }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 md:p-8">

            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <FaCommentDots className="text-blue-600" />
                Customer Reviews
            </h3>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">

                <div>
                    <p className="text-4xl font-bold text-slate-900">
                        {product.rating.average}
                    </p>

                    <div className="mt-2 flex">
                        {[...Array(5)].map((_, index) => (
                            index < Math.round(product.rating.average)
                                ? (
                                    <FaStar
                                        key={index}
                                        className="text-yellow-400"
                                    />
                                )
                                : (
                                    <FaRegStar
                                        key={index}
                                        className="text-yellow-400"
                                    />
                                )
                        ))}
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-slate-500">
                        Based on{" "}
                        <span className="font-semibold text-slate-900">
                            {product.rating.totalReviews}
                        </span>{" "}
                        Reviews
                    </p>
                </div>

            </div>
            <div className="mt-8 space-y-6">

                {product.reviews.map((review) => (

                    <div
                        key={review.id}
                        className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0"
                    >

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

                            <div className="flex items-center gap-3">

                                <FaUserCircle className="text-3xl text-slate-400" />

                                <div>

                                    <p className="font-semibold text-slate-900">
                                        {review.name}
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        {review.date}
                                    </p>

                                </div>

                            </div>

                            <div className="flex">

                                {[...Array(5)].map((_, index) => (
                                    index < review.rating
                                        ? <FaStar
                                            key={index}
                                            className="text-yellow-400"
                                        />
                                        : <FaRegStar
                                            key={index}
                                            className="text-yellow-400"
                                        />
                                ))}

                            </div>

                        </div>

                        <p className="mt-4 text-slate-600 leading-7 text-justify">
                            {review.comment}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Reviews;