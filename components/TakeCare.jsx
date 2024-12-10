"use client";

import React from "react";

const TakeCare = () => {
    return (
        <div
            className="relative mx-auto mt-16"
            style={{
                width: "100%", // Make it responsive to the full width of the screen
                maxWidth: "1662px", // Max width for large screens
                height: "567px",
                background: "linear-gradient(180deg, #fff5f8 0%, #FFFFFF 90%)", // Faint gradient
                borderRadius: "var(--radius-lg)",
                opacity: "1", // Ensured background visibility
            }}
        >
            {/* Center Box */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4">
                {/* Heading */}
                <h2
                    style={{
                        width: "307px",
                        height: "43px",
                        fontFamily: "Cabinet Grotesk",
                        fontSize: "35px",
                        fontWeight: "800",
                        lineHeight: "43.4px",
                        color: "#393939",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                    }}
                >
                    On s’occupe de <span style={{ color: "#5CD2DD" }}> tout </span>
                </h2>

                {/* Subheading */}
                <p
                    style={{
                        width: "449px",
                        height: "17px",
                        fontFamily: "Geist",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "17.36px",
                        color: "#9C9C9C",
                    }}
                >
                    Office ipsum you must be muted. It meeting commitment busy pain.
                </p>

                {/* Icon Path */}
                <div className="flex items-center justify-between w-full mt-8" style={{ width: "80%" }}>
                    {/* Icon with Text */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#ffff] rounded-full flex items-center justify-center">
                            <span className="text-white text-xl"><img src="/images/takeCare1.png" alt="" /></span>
                        </div>
                        <p
                            style={{
                                width: "168px",
                                height: "22px",
                                fontFamily: "Cabinet Grotesk",
                                fontSize: "20px",
                                fontWeight: "500",
                                lineHeight: "22px",
                                color: "#393939",
                                marginTop: "8px",
                            }}
                        >
                            Livraison & Reprise
                        </p>
                        <p
                            style={{
                                fontFamily: "Geist",
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "17px",
                                color: "#9C9C9C",
                                marginTop: "4px",
                            }}
                        >
                            Selon vos besoins
                        </p>
                    </div>

                    {/* Line Between Icons */}
                    <div className="w-1/4 h-[2px] bg-[#393939]"></div>

                    {/* Icon with Text */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#ffff] rounded-full flex items-center justify-center">
                            <span className="text-white text-xl"><img src="/images/takeCare2.png" alt="" /></span>
                        </div>
                        <p
                            style={{
                                width: "168px",
                                height: "22px",
                                fontFamily: "Cabinet Grotesk",
                                fontSize: "20px",
                                fontWeight: "500",
                                lineHeight: "22px",
                                color: "#393939",
                                marginTop: "8px",
                            }}
                        >
                            Installation
                        </p>
                        <p
                            style={{
                                fontFamily: "Geist",
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "17px",
                                color: "#9C9C9C",
                                marginTop: "4px",
                            }}
                        >
                            Selon vos besoins
                        </p>
                    </div>

                    {/* Line Between Icons */}
                    <div className="w-1/4 h-[2px] bg-[#393939]"></div>

                    {/* Icon with Text */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#ffff] rounded-full flex items-center justify-center">
                            <span className="text-white text-xl"><img src="/images/takeCare3.png" alt="" /></span>
                        </div>
                        <p
                            style={{
                                width: "168px",
                                height: "22px",
                                fontFamily: "Cabinet Grotesk",
                                fontSize: "20px",
                                fontWeight: "500",
                                lineHeight: "22px",
                                color: "#393939",
                                marginTop: "8px",
                            }}
                        >
                            Nettoyage
                        </p>
                        <p
                            style={{
                                fontFamily: "Geist",
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "17px",
                                color: "#9C9C9C",
                                marginTop: "4px",
                            }}
                        >
                            Tout est possible
                        </p>
                    </div>

                    {/* Line Between Icons */}
                    <div className="w-1/4 h-[2px] bg-[#393939]"></div>

                    {/* Icon with Text */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#ffff] rounded-full flex items-center justify-center">
                            <span className="text-white text-xl"><img src="/images/takeCare4.png" alt="" /></span>
                        </div>
                        <p
                            style={{
                                width: "168px",
                                height: "22px",
                                fontFamily: "Cabinet Grotesk",
                                fontSize: "20px",
                                fontWeight: "500",
                                lineHeight: "22px",
                                color: "#393939",
                                marginTop: "8px",
                            }}
                        >
                            Rangement
                        </p>
                        <p
                            style={{
                                fontFamily: "Geist",
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "17px",
                                color: "#9C9C9C",
                                marginTop: "4px",
                            }}
                        >
                            On s’occupe de tout.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeCare;
