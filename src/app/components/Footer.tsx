import React from 'react';
import Link from 'next/link';

const FooterTop = () => {
    return (
        <div className="bg-orange-100 py-8 text-black text-center sm:text-left">
            <div className="container mx-auto flex flex-wrap justify-center sm:justify-between p-4 sm:p-10 gap-4 sm:gap-10">
                {/* Ícone de Troféu */}
                <div className="footer-icon flex items-center transition-transform hover:scale-110 cursor-pointer">
                    <img src="/images/home/icon-trophy 1.svg" alt="Trophy Icon" className="mr-2 h-12 w-12 sm:h-14 sm:w-14" />
                    <div>
                        <p className="text-gray-900 font-semibold">High Quality</p>
                        <p className="text-gray-600 text-sm">Crafted from top materials</p>
                    </div>
                </div>

                {/* Ícone de Check Circle */}
                <div className="footer-icon flex items-center transition-transform hover:scale-110 cursor-pointer">
                    <img src="/images/home/icon-check.svg" alt="Check Circle Icon" className="mr-2 h-12 w-12 sm:h-14 sm:w-14" />
                    <div>
                        <p className="text-gray-900 font-semibold">Certified Products</p>
                        <p className="text-gray-600 text-sm">Guaranteed authenticity</p>
                    </div>
                </div>

                {/* Ícone de Presente */}
                <div className="footer-icon flex items-center transition-transform hover:scale-110 cursor-pointer">
                    <img src="/images/home/icon-present.svg" alt="Gift Icon" className="mr-2 h-12 w-12 sm:h-14 sm:w-14" />
                    <div>
                        <p className="text-gray-900 font-semibold">Gift Ideas</p>
                        <p className="text-gray-600 text-sm">Perfect for every occasion</p>
                    </div>
                </div>

                {/* Ícone de Suporte */}
                <div className="footer-icon flex items-center transition-transform hover:scale-110 cursor-pointer">
                    <img src="/images/home/icon-support.svg" alt="Headset Icon" className="mr-2 h-12 w-12 sm:h-14 sm:w-14" />
                    <div>
                        <p className="text-gray-900 font-semibold">Customer Support</p>
                        <p className="text-gray-600 text-sm">24/7 assistance</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <>
            <FooterTop />
            <footer className="bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {/* Endereço */}
                        <div className="col-span-1">
                            <h1 className="text-black sm:font-medium mb-4">Funiro.</h1>
                            <p className="text-gray-500">
                                400 University Drive Suite 200
                                <br />
                                Coral Gables, FL 33134, USA
                            </p>
                            <p className="text-gray-500 mt-2">Phone: (123) 456-7890</p>
                        </div>

                        {/* Links */}
                        <div className="col-span-1">
                            <h3 className="text-gray-600 font-medium mb-4">Links</h3>
                            <ul className="text-gray-500">
                                <li><a href="#" className="hover:text-gray-800">Home</a></li>
                                <li><a href="#" className="hover:text-gray-800">Shop</a></li>
                                <li><a href="#" className="hover:text-gray-800">Returns</a></li>
                                <li><a href="#" className="hover:text-gray-800">About</a></li>
                                <li><a href="#" className="hover:text-gray-800">Privacy Policies</a></li>
                                <li><a href="#" className="hover:text-gray-800">Contact</a></li>
                                <li><a href="#" className="hover:text-gray-800">Help</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-span-1">
                            <h3 className="text-gray-600 font-medium mb-4">Newsletter</h3>
                            <p className="text-gray-500 mb-4">Enter Your Email Address</p>
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="py-2 px-3 w-full rounded-l-md focus:outline-none"
                                />
                                <button className="bg-white text-gray-500 px-4 rounded-r-md hover:bg-gray-800 focus:outline-none">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                        {/* Texto de Direitos Autorais */}
                        <div className="col-span-4 mt-8 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
                            <p>&copy; 2023 Funiro. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
