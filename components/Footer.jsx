"use client";

import React from "react";
import Image from "next/image";
import Link from 'next/link';



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
                        <Image
                            src="/images/logo.png" // Replace with actual logo path
                            alt="Logo"
                            width={133}  // Set the desired width of the image in pixels
                            height={65}  // Set the desired height of the image in pixels
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Second Column: INFOS PRATIQUES */}
                    <div className="w-1/4">
                        <h3 className="font-medium text-lg mb-4">INFOS PRATIQUES</h3>
                        <ul>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Third Column: LÉGAL */}
                    <div className="w-1/4">
                        <h3 className="font-medium text-lg mb-4">LÉGAL</h3>
                        <ul>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth Column: MON COMPTE */}
                    <div className="w-1/4">
                        <h3 className="font-medium text-lg mb-4">MON COMPTE</h3>
                        <ul>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
                            </li>
                            <li>
                                <Link
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
                                </Link>
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
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/twitter.png"
                                alt="Facebook"
                                width={40}  // Set the width of the image in pixels
                                height={40}
                                className="w-10 h1010"
                            />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/insta.png"
                                alt="Instagram"
                                width={40}  // Set the width of the image in pixels
                                height={40}
                                className="w-10 h-10"
                            />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/linkedin.png"
                                alt="LinkedIn"
                                width={40}  // Set the width of the image in pixels
                                height={40}
                                className="w-10 h-10"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
