import React from 'react';
import Link from 'next/link';

const FooterTop = () => {
    return (
        <div className="bg-orange-100 py-8 text-black text-center sm:text-left">
            <div className="container mx-auto flex flex-wrap justify-center sm:justify-between p-4 sm:p-10 gap-4 sm:gap-10">
                {/* Ícone de Troféu */}
                <div className="footer-icon flex items-center">
                    <img src="/images/home/icon-trophy 1.svg" alt="Trophy Icon" className="mr-2 h-12 w-12 sm:h-14 sm:w-14" />
                    <div>
                        <p className="text-gray-900 font-semibold">High Quality</p>
                        <p className="text-gray-600 text-sm">Crafted from top materials</p>
                    </div>
                </div>

                {/* Ícone de Check Circle */}
                <div className="footer-icon flex items-center">
                    <img src="/images/home/icon-check.svg" alt="Check Circle Icon" className="mr-2 h-12 w-12 sm:h-14 sm:w-14" />
                    <div>
                        <p className="text-gray-900 font-semibold">Certified Products</p>
                        <p className="text-gray-600 text-sm">Guaranteed authenticity</p>
                    </div>
                </div>

                {/* Ícone de Presente */}
                <div className="footer-icon flex items-center">
                    <img src="/images/home/icon-present.svg" alt="Gift Icon" className="mr-2 h-12 w-12 sm:h-14 sm:w-14" />
                    <div>
                        <p className="text-gray-900 font-semibold">Gift Ideas</p>
                        <p className="text-gray-600 text-sm">Perfect for every occasion</p>
                    </div>
                </div>

                {/* Ícone de Suporte */}
                <div className="footer-icon flex items-center">
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
            <footer className="bg-white text-black py-8 border-t-2 border-gray-300">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl flex flex-wrap justify-center sm:justify-between">
            
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Coluna 1: Funiro */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Funiro</h2>
                            <p className="text-gray-600">400 University Drive Suite 200</p>
                            <p className="text-gray-600">Coral Gables, FL 33134, USA</p>
                            <p className="text-gray-600">Phone: (123) 456-7890</p>
                        </div>

                        {/* Coluna 2: Links */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Links</h2>
                            <ul className="list-none">
                                <li><a href="#" className="text-gray-600">Home</a></li>
                                <li><a href="#" className="text-gray-600">Shop</a></li>
                                <li><a href="#" className="text-gray-600">Returns</a></li>
                                <li><a href="#" className="text-gray-600">About</a></li>
                                <li><a href="#" className="text-gray-600">Privacy Policies</a></li>
                                <li><a href="#" className="text-gray-600">Contact</a></li>
                            </ul>
                        </div>

                        {/* Coluna 3: Help */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Help</h2>
                            <p className="text-gray-600">Payment Options</p>
                        </div>

                        {/* Coluna 4: Newsletter */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
                            <p className="text-gray-600 mb-2">Enter Your Email Address</p>
                            <div className="flex border-b border-gray-300">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="py-2 px-3 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow border-none"
                                />
                                <button className="text-black py-2 px-4 rounded-r-md focus:outline-none focus:ring focus:border-blue-300 bg-transparent hover:bg-gray-200">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Direitos Autorais */}
                    <div className="mt-8 text-center text-sm text-gray-600">
                        <hr className="border-t-2 border-gray-300 mb-4" />
                        <p>&copy; 2023 Funiro. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
