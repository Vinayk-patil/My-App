"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import CustomImage from '../components/CustomImage';



const ArticleSimilaire = () => {
    const products = [
        {
            id: 1,
            image: "/images/product.png",
            title: "Title 1",
            price: "0,35€/Pièce",
            reference: "VABGN5",
            remaining: "20 pièces",
        },
        {
            id: 2,
            image: "/images/product.png",
            title: "Title 2",
            price: "0,50€/Pièce",
            reference: "VABGN6",
            remaining: "15 pièces",
        },
        {
            id: 3,
            image: "/images/product.png",
            title: "Title 3",
            price: "0,45€/Pièce",
            reference: "VABGN7",
            remaining: "25 pièces",
        },
        // Additional products
        ...Array.from({ length: 9 }, (_, index) => ({
            id: index + 4,
            image: "/images/product.png",
            title: `Title ${index + 4}`,
            price: `0,${index + 35}€/Pièce`,
            reference: `VABGN${index + 8}`,
            remaining: `${30 - index} pièces`,
        })),
    ];

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (action) => {
        if (action === "increment") {
            setQuantity(quantity + 1);
        } else if (action === "decrement" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = 350; // Scroll amount in pixels
        if (direction === "left") {
            scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="px-8 py-4 bg-white mt-8">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Articles similaires</h2>
                <button className="text-sm text-blue-600 hover:underline">
                    VOIR TOUTE LA COLLECTION
                </button>
            </div>

            {/* Scrollable Container */}
            <div className="relative">
                {/* Left Scroll Button */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-[50%] transform -translate-y-[50%] bg-[#5CD2DD] text-white px-4 py-2 rounded shadow-md hover:bg-[#4FBCC7] z-10"
                >
                    ←
                </button>

                {/* Product Cards Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-12 overflow-x-scroll no-scrollbar"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-[330px] h-[438px] bg-[#F9F7F5] rounded-md flex flex-col gap-0 flex-shrink-0 relative group"
                            style={{ opacity: "1" }}
                        >
                            {/* Product Image Section with Zoom Effect */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "224px",
                                    width: "224px",
                                    margin: "40px auto",
                                }}
                                className=" overflow-hidden" // To ensure the zoom effect stays within bounds
                            >
                                <CustomImage
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded-md transform transition-transform duration-500 ease-in-out hover:scale-90"
                                    width={133}  // Customize width
                                    height={65}  // Customize height
                                />
                                {/* Heart Icon */}
                                <button
                                    className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
                                >
                                    <CustomImage src="/images/big-heart.png" alt="" width={20} // Required width
                                        height={20} />
                                </button>
                                {/* Badge */}
                                <div
                                    className="absolute top-2 right-2 bg-white text-xs font-medium rounded-tl-md px-2 py-[2px] transition-opacity duration-500 ease-in-out"
                                    style={{
                                        width: "100px",
                                        height: "18px",
                                    }}
                                >
                                    Art de la table
                                </div>
                            </div>

                            {/* Quantity Selector Section (Above the Title) */}
                            <div
                                className="relative w-full justify-between items-center bg-white rounded-md p-2 mb-4 pl-6 hidden group-hover:flex  transform transition-transform duration-500 ease-in-out"
                                style={{
                                    width: "330px", // Fill width
                                    height: "50px", // Hug height
                                    padding: "5px 8px",
                                    paddingLeft: "16px", // Adds space from the left side
                                    gap: "8px",
                                    borderRadius: "var(--radius-md)",
                                    opacity: "1", // Ensure visibility
                                    background: "#FFFFFF",
                                }}
                            >
                                {/* Quantity Control */}
                                <div className="flex items-center gap-4">
                                    <span className="font-small">QTE   </span>
                                    <button
                                        onClick={() => handleQuantityChange("decrement")}
                                        className="border px-2 py-1"
                                    >
                                        -
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange("increment")}
                                        className="border px-2 py-1"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    className="bg-[#EE4197] text-white px-4 py-3 rounded-md text-sm"
                                    style={{
                                        fontWeight: 600,
                                        fontSize: 9,
                                    }}
                                >
                                    AJOUTER AU PANIER
                                </button>
                            </div>

                            {/* Product Details Section */}
                            <div className="w-full flex flex-col gap-2 p-4">
                                {/* Title and Span */}
                                <div className="flex justify-between items-center">
                                    <h3
                                        className="text-gray-800"
                                        style={{
                                            width: "283px",
                                            height: "30px",
                                            fontSize: "24px",
                                            fontWeight: "400",
                                            lineHeight: "30px",
                                            textAlign: "left",
                                            textUnderlinePosition: "from-font",
                                            textDecorationSkipInk: "none",
                                            opacity: "1",
                                            marginTop: "20px", // Adds space above the section
                                        }}
                                    >
                                        {product.title}
                                    </h3>
                                    <span
                                        className="text-gray-800"
                                        style={{
                                            width: "27px",
                                            height: "30px",
                                            fontSize: "20px",
                                            fontWeight: "500",
                                            lineHeight: "30px",
                                            textAlign: "right",
                                            textUnderlinePosition: "from-font",
                                            textDecorationSkipInk: "none",
                                        }}
                                    >
                                        0€
                                    </span>
                                </div>
                                {/* Price, Reference, and Remaining */}
                                <div className="flex justify-between items-center">
                                    <p className="text-xs text-gray-600">
                                        {product.price} · RÉF : {product.reference}
                                    </p>
                                    <p className="text-xs font-medium text-gray-800">
                                        {product.remaining}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-[50%] transform -translate-y-[50%] bg-[#5CD2DD] text-white px-4 py-2 rounded shadow-md hover:bg-[#4FBCC7] z-10"
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default ArticleSimilaire;
