function ProductSkeleton() {
    return (
        <div className="grid lg:grid-cols-2 gap-10 animate-pulse">

            <div className="bg-white rounded-2xl p-6 shadow-md">

                <div className="h-[420px] bg-slate-200 rounded-xl"></div>

                <div className="flex gap-3 mt-6">
                    {[1,2,3,4].map((item) => (
                        <div
                            key={item}
                            className="w-20 h-20 rounded-lg bg-slate-200"
                        />
                    ))}
                </div>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">

                <div className="h-8 w-3/4 bg-slate-200 rounded"></div>

                <div className="h-5 w-32 bg-slate-200 rounded mt-4"></div>

                <div className="h-10 w-48 bg-slate-200 rounded mt-8"></div>

                <div className="h-6 w-full bg-slate-200 rounded mt-8"></div>

                <div className="h-6 w-2/3 bg-slate-200 rounded mt-3"></div>

                <div className="grid grid-cols-2 gap-4 mt-10">

                    <div className="h-12 bg-slate-200 rounded-xl"></div>

                    <div className="h-12 bg-slate-200 rounded-xl"></div>

                </div>

            </div>

        </div>
    );
}

export default ProductSkeleton;