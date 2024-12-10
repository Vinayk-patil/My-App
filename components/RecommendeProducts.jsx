"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomImage from '../components/CustomImage';



const RecommendeProducts = () => {
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
        {
            id: 4,
            image: "/images/product.png",
            title: "Title 4",
            price: "0,60€/Pièce",
            reference: "VABGN8",
            remaining: "10 pièces",
        },
    ];

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (action) => {
        if (action === "increment") {
            setQuantity(quantity + 1);
        } else if (action === "decrement" && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="px-8 py-4 bg-white mt-8">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Ces produits pourraient vous intéresser</h2>
                <button className="text-sm text-blue-600 hover:underline">
                    VOIR TOUTE LA COLLECTION
                </button>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-[#F9F7F5] rounded-md flex flex-col gap-0 relative group"
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
                            className="overflow-hidden"
                        >
                            <CustomImage
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover rounded-md transform transition-transform duration-500 ease-in-out hover:scale-110"
                                width={133}  // Customize width
                                height={65}  // Customize height,
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

                        {/* Quantity Selector Section */}
                        <div
                            className="relative w-full justify-between items-center bg-white rounded-md p-2 mb-4 pl-6 hidden group-hover:flex transform transition-transform duration-500 ease-in-out"
                            style={{
                                width: "100%",
                                height: "50px",
                                padding: "5px 8px",
                                paddingLeft: "16px",
                                gap: "8px",
                                borderRadius: "var(--radius-md)",
                                background: "#FFFFFF",
                            }}
                        >
                            {/* Quantity Control */}
                            <div className="flex items-center gap-4">
                                <span className="font-small">QTE</span>
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
                                className="bg-[#EE4197] text-white px-4 py-2 rounded-md text-sm"
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
                                <h3 className="text-gray-800 text-lg font-medium">
                                    {product.title}
                                </h3>
                                <span className="text-gray-800 font-bold">0€</span>
                            </div>
                            {/* Price, Reference, and Remaining */}
                            <div className="flex justify-between items-center text-sm">
                                <p className="text-gray-600">
                                    {product.price} · RÉF : {product.reference}
                                </p>
                                <p className="text-gray-800 font-medium">{product.remaining}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendeProducts;
