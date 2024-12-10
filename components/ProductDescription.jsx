"use client"

import React, { useState } from 'react';

const ProductDescription = () => {
    // State to toggle the visibility of additional information
    const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
    const [showQuestionsInfo, setShowQuestionsInfo] = useState(false);

    return (
        <div className="px-8 py-4 bg-white mt-8">
            <div className="grid grid-cols-2 gap-8">
                {/* Left Side: Description Section */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Description produit</h2>
                    <p className="text-gray-600 text-sm">
                        Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".
                    </p>
                </div>

                {/* Right Side: Collapsible Rectangles */}
                <div className="flex flex-col space-y-4">
                    {/* Delivery Section */}
                    <div className="w-full border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow duration-300">
                        <span className="text-gray-800 font-semibold text-sm">Livraisons</span>
                        <button
                            onClick={() => setShowDeliveryInfo(!showDeliveryInfo)}
                            className="text-gray-500 hover:text-blue-600"
                        >
                            {showDeliveryInfo ? '−' : '+'}
                        </button>
                    </div>
                    {showDeliveryInfo && (
                        <div className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 text-sm text-gray-600">
                            Information about delivery goes here. Include relevant details to help users understand the process.
                        </div>
                    )}

                    {/* Questions Section */}
                    <div className="w-full border border-gray-300 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition-shadow duration-300">
                        <span className="text-gray-800 font-semibold text-sm">Questions</span>
                        <button
                            onClick={() => setShowQuestionsInfo(!showQuestionsInfo)}
                            className="text-gray-500 hover:text-blue-600"
                        >
                            {showQuestionsInfo ? '−' : '+'}
                        </button>
                    </div>
                    {showQuestionsInfo && (
                        <div className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 text-sm text-gray-600">
                            Here you can add answers to frequently asked questions or allow users to ask their own questions.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
