import React from 'react';
import Image from "next/image";


const ProductDetails = () => {
    return (
        <div className="px-8 py-4 bg-white">

            {/* Product Details Section */}
            <div className="mt-4 grid grid-cols-2 gap-8">
                {/* Left Side: Image with Vertical Links */}
                <div className="relative bg-white h-96 rounded-lg flex items-center justify-center">
                    {/* Vertical Links */}
                    <div className="absolute left-0 top-4 flex flex-col space-y-2 pl-2">
                        {['/images/product.png', '/images/product.png', '/images/product.png', '/images/product.png'].map((imgSrc, index) => (
                            <a
                                key={index}
                                href="#"
                                className="w-14 h-14 border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={imgSrc}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    width={56} // Set width (14 * 4px = 56px, adjust accordingly)
                                    height={56} // Set height (14 * 4px = 56px, adjust accordingly)
                                />
                            </a>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="relative">
                        <img
                            src="/images/product-main.png"
                            alt="Cheese – appareil à raclette 1/2 roue"
                            className="h-full object-contain"
                            style={{ width: "552px", height: "552px" }}
                        />
                        {/* Product Name Overlay
                        <div className="absolute top-2 left-2 bg-white bg-opacity-70 px-3 py-1 rounded-lg shadow-md">
                            <p className="text-sm font-semibold text-gray-800">
                                Cheese – appareil à raclette 1/2 roue
                            </p>
                        </div> */}
                    </div>
                </div>


                {/* Right Side: Product Information */}
                <div className="flex flex-col space-y-6">
                    {/* Product Name and Like Icon */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            Cheese – appareil à raclette 1/2 roue
                        </h1>
                        <button className="text-gray-600 hover:text-red-500">
                            <Image src="/images/big-heart.png" alt="" width={20} // Required width
                                height={20} /> {/* Heart icon for like */}
                        </button>
                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold text-blue-600">
                        39,50€ <span className="text-sm font-normal text-gray-500">/piece</span>
                    </p>

                    {/* Dimensions Section with Horizontal Lines */}
                    <div>
                        <hr className="border-gray-300 mb-2" />
                        <div className="flex justify-between items-center text-gray-600">
                            <div className="flex space-x-4">
                                <div className="flex items-center space-x-2">
                                    <span><Image src="/images/Capa_1.png" alt="" width={20} // Required width
                                        height={20} /></span>
                                    <span>20 cm</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span><Image src="/images/Frame.png" alt="" width={20} // Required width
                                        height={20} /></span>
                                    <span>50 cm</span>
                                </div>
                            </div>
                            {/* Reference Text */}
                            <span className="text-gray-500 text-sm">REF: VABGN5</span>
                        </div>
                        <hr className="border-gray-300 mt-2" />
                    </div>

                    {/* Description */}
                    <div className="text-gray-600 text-sm space-y-1">
                        <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
                        <p>Réglable en hauteur</p>
                        <p>Appareil à raclette professionnel</p>
                        <p>Boîtier de chauffe horizontal réglable en hauteur</p>
                        <p>220V</p>
                        <p>900W</p>
                    </div>

                    {/* Horizontal Line Above Add to Cart */}
                    <hr className="border-gray-300 mb-2" />


                    {/* Quantity Selector and Add to Cart */}
                    <div className="flex items-center space-x-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-lg">-</button>
                            <input
                                type="text"
                                // value ="1"
                                defaultValue="Default text" // Use defaultValue for uncontrolled input
                                className="w-12 text-center text-gray-600 focus:outline-none"
                            />
                            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r-lg">+</button>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full px-8 py-2 bg-[#5CD2DD] text-white text-center rounded-lg hover:bg-blue-600">
                            AJOUTER AU PANIER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
