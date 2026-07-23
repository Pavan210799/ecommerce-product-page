import { useState } from "react";


function ProductGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const [zoomStyle, setZoomStyle] = useState({});
    const [isZoomed, setIsZoomed] = useState(false);
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
        });
    };

    const handleMouseEnter = () => {
        setIsZoomed(true);
    };

    const handleMouseLeave = () => {
        setIsZoomed(false);
        setZoomStyle({});
    };

    return (
        <div className="w-full bg-white dark:bg-slate-900 transition-colors duration-300 rounded-2xl shadow-md p-5 md:p-8">

            <div
                className="h-80 sm:h-[450px] lg:h-[632px] rounded-xl overflow-hidden flex items-center justify-center cursor-zoom-in bg-white dark:bg-slate-950 transition-colors duration-300"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={selectedImage}
                    alt="Sony WH-1000XM6"
                    style={zoomStyle}
                    className={`w-full h-full object-contain transition-transform duration-200 ${
                        isZoomed ? "scale-200" : "scale-100"
                    }`}
                />
            </div>

            <div className="mt-6 flex justify-start md:justify-center gap-3 overflow-x-auto px-4 py-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setSelectedImage(image)}
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 p-1 object-contain rounded-lg cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                            selectedImage === image
                                ? "border-blue-600 shadow-lg"
                                : "border-gray-200 dark:border-slate-700"
                        }` }
                    />
                ))}
            </div>

        </div>
    );
}

export default ProductGallery;