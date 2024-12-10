"use client";

import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-white py-10 mb-[200px]">
            {/* Horizontal Line Separator */}
            <hr className="border-gray-300 mb-10" />

            {/* Footer Content */}
            <div className="flex justify-between items-start px-8">
                {/* Left Side */}
                <div
                    className="flex justify-between"
                    style={{
                        width: "799.01px", // Hug width
                        height: "130px", // Hug height
                        gap: "40px", // Gap between columns
                        opacity: "1", // Ensure visibility
                    }}
                >
                    {/* First Column: Logo */}
                    <div className="w-1/4">
                        <img
                            src="/images/logo.png" // Replace with actual logo path
                            alt="Logo"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Second Column: INFOS PRATIQUES */}
                    <div className="w-1/4">
                        <h3 className="font-medium text-lg mb-4">INFOS PRATIQUES</h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Livraisons & Reprises
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Mode d’emploi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    F.A.Q
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Column: LÉGAL */}
                    <div className="w-1/4">
                        <h3 className="font-medium text-lg mb-4">LÉGAL</h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Mentions légales
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    CGU
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    CGV
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Politique de confidentialité
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth Column: MON COMPTE */}
                    <div className="w-1/4">
                        <h3 className="font-medium text-lg mb-4">MON COMPTE</h3>
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Accéder à mon compte
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Ma liste d’envie
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Créer un compte
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        lineHeight: "17.36px",
                                        textAlign: "left",
                                    }}
                                >
                                    Mot de passe oublié
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    className="flex flex-col items-start gap-3"
                    style={{
                        width: "146px", // Hug width
                        height: "76.65px", // Hug height
                        opacity: "1",
                    }}
                >
                    <h3 className="font-medium text-lg">NOUS SUIVRE</h3>
                    <div className="flex gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/twitter.png"
                                alt="Facebook"
                                className="w-10 h1010"
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/insta.png"
                                alt="Instagram"
                                className="w-10 h-10"
                            />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/linkedin.png"
                                alt="LinkedIn"
                                className="w-10 h-10"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
