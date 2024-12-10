import React from 'react';

const Header = () => {
    return (
        <header>
            {/* Top Section */}
            <div className="w-full flex justify-between items-center px-8 py-4 bg-white">
                {/* Left: Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="w-[133.01px] h-[65px] top-[33px] left-[29px] opacity-100" // Applied styles to the logo
                    />
                    {/* <span className="font-bold text-lg">weframetech</span> */}
                </div>

                {/* Center: Search Bar */}
                <div className="flex-grow mx-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Rechercher un produit"
                            className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600 pr-10"
                        />
                        {/* Search Icon */}
                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                            <img src="/images/search-icon.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Right: Icons and Profile */}
                <div className="flex items-center space-x-6">
                    {/* Inspiration */}
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <span><img src="/images/lightbulb-01.png" alt="" /></span>
                        <span>Inspirations</span>
                    </div>

                    {/* Favorites */}
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <span><img src="/images/heart.png" alt="" /></span>
                        <span>Mes favoris</span>
                        <span className="bg-gray-200 rounded-full px-2 text-xs">24</span>
                    </div>

                    {/* Cart */}
                    <div className="flex items-center cursor-pointer bg-[#0093D0] text-white px-4 py-2 rounded-lg">
                        <span className="mr-2"><img src="/images/shopping.png" alt="" /></span> {/* Emoji with margin right */}
                        <span>Panier</span> {/* Text */}
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="flex items-center space-x-1 text-gray-800">
                            <span>LR</span>
                            <span>▼</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Links */}
            <nav className="w-full bg-white">
                <ul className="flex justify-between px-8 py-2 text-gray-600 text-sm">
                    {[
                        'ART DE LA TABLE',
                        'MOBILIER',
                        'NAPPAGE',
                        'MATÉRIEL DE SALLE',
                        'CUISINE',
                        'BARBECUE',
                        'TENTE',
                        'CHAUFFAGE',
                        'PODIUM - PISTE DE DANSE',
                        'SON ET LUMIÈRE',
                        'PACKS',
                        'CONSOMMABLES',
                    ].map((link, index) => (
                        <li key={index} className="cursor-pointer hover:text-blue-600">
                            {link}
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Breadcrumb Section */}
            <div className="w-full px-8 py-2">
                <div className="flex items-center text-sm text-gray-600 space-x-2">
                    {/* Home Link */}
                    <a href="/" className="hover:text-blue-600">
                        Home
                    </a>
                    {/* Separator */}
                    <span className="text-gray-400">•</span>
                    {/* Current Page */}
                    <a href="/art-de-la-table" className="hover:text-blue-600">
                        Art de la table
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
