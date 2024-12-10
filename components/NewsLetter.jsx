"use client";

import React from "react";
import Image from "next/image";


const NewsLetter = () => {
    return (
        <div className="relative mx-auto mt-16 mb-8" style={{ top: "2px", left: "", bottom: "50px" }}>
            {/* Wrapper div with flex to center the content and add gap */}
            <div className="flex justify-center gap-5">
                {/* Left Side: Image */}
                <div
                    className="w-[703px] h-[300px]"
                    style={{
                        borderRadius: "20px", // Rounded corners on all four sides
                        opacity: "1", // Ensuring visibility
                    }}
                >
                    <Image
                        src="/images/subscribe.png"
                        alt="Newsletter"
                        width={500} // Set the width in pixels
                        height={300} // Set the height in pixels
                        className="w-full h-full object-cover rounded-[20px]" // Make image corners rounded
                    />
                </div>

                {/* Right Side: Newsletter Subscription */}
                <div
                    className="w-[703px] h-[300px] bg-[#F9F9F9] p-8"
                    style={{
                        opacity: "1",
                        borderRadius: "20px", // Rounded corners on all four sides
                        background: "linear-gradient(180deg, #fad9e3 0%, #FFFFFF 90%)", // Faint gradient
                    }}
                >
                    {/* Title */}
                    <h2
                        className="text-2xl font-bold text-gray-800 mb-4"
                        style={{
                            fontFamily: "Cabinet Grotesk",
                        }}
                    >
                        S&apos;inscrire & économiser <span style={{ color: "#5CD2DD" }}> 10% </span>
                    </h2>

                    {/* Description */}
                    <p
                        className="text-sm text-gray-600 mb-6"
                        style={{
                            fontFamily: "Geist",
                        }}
                    >
                        Office ipsum you must be muted. Synergize helicopter prioritize
                        anyway job due harvest most opportunity didn&apos;t. Yet busy any
                        meeting shark light marginalised 4-blocker message. Productize
                        corporate nail caught synergy highlights lunch. Company another
                        pushback items dear or any.
                    </p>

                    {/* Input and Subscribe Button in One Line */}
                    <div className="flex gap-4">
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Enter your email"
                            defaultValue="Default text" // Use defaultValue for uncontrolled input
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm w-full"
                            style={{
                                borderRadius: "10px",
                                outline: "none",
                            }}
                        />

                        {/* Subscribe Button */}
                        <button
                            className="px-6 py-2 bg-[#5CD2DD] text-white font-semibold rounded-lg"
                            style={{
                                borderRadius: "10px",
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
