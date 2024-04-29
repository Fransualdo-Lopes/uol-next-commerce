

import React from 'react';
import Link from 'next/link';

const FooterTop = () => {
    return (
        <div className="flex px-10 bg-orange-100 py-20 text-black text-center">
            <div className="container mx-auto flex justify-center p-10 gap-10 items-center space-x-4">
                <img src="/images/home/icon-trophy 1.svg" alt="Trophy Icon" className="h-8 w-8" />
                <img src="/images/home/icon-check.svg" alt="Check Circle Icon" className="h-8 w-8" />
                <img src="/images/home/icon-present.svg" alt="Gift Icon" className="h-8 w-8" />
                <img src="/images/home/icon-support.svg" alt="Headset Icon" className="h-8 w-8" />
            </div>
        </div>

    );
};

const Footer = () => {
    return (
        <>
            <FooterTop />
            <footer className="bg-white text-black py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Seção 1: Sobre */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Funiro</h3>
                            <p className="text-sm">
                                400 University Drive Suite 200 Coral Gables,
                                FL 33134 USA
                            </p>
                        </div>

                        {/* Seção 2: Links */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Links</h3>
                            <ul className="text-sm">
                                <li>
                                    <Link href="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Seção 3: Ajuda */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Help</h3>
                            <ul className="text-sm">
                                <li>Payment Options</li>
                                <li>Returns</li>
                                <li>Privacy Policies</li>
                            </ul>
                        </div>

                        {/* Seção 4: Newsletter */}
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                            <form className="mt-2">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="w-full px-4 py-2 mt-1 rounded-md bg-white text-black focus:outline-none focus:bg-gray-100"
                                />
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-primary text-white py-2 rounded-md hover:bg-opacity-80 transition duration-300"
                                >
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-400 mt-8 pt-4 text-left p-5">
                    <p className="text-sm">
                        &copy; 2024 Funiro. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
