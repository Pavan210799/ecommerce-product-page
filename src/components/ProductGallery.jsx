import { useState } from "react";


function ProductGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 md:p-6 ">

            <div className="h-72 sm:h-96 lg:h-[520px] rounded-xl flex items-center justify-center">
                <img
                    src={selectedImage}
                    alt="Sony WH-1000XM6"
                    className="w-full max-h-full object-contain"
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
                                : "border-gray-200"
                        }` }
                    />
                ))}
            </div>

        </div>
    );
}

export default ProductGallery;