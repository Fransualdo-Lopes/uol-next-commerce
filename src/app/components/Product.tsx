'use client'
import React from 'react';
import { ProductType } from '@/types/ProductType';
import ProductImage from './ProductImage';
import { formatPrice } from '@/lib/utils';

type ProductProps = {
    product: ProductType;
};

const Product: React.FC<ProductProps> = ({ product }) => {
    const handleShareClick = () => {
        console.log('Compartilhar', product.name);
    };

    const handleCompareClick = () => {
        console.log('Comparar', product.name);
    };

    const handleLikeClick = () => {
        console.log('Curtir', product.name);
    };

    return (
        <div className="relative group flex flex-col shadow-lg h-96 p-0 text-black transition duration-300 ease-in-out hover:bg-transparent hover:relative">
            <div className="absolute inset-0 bg-slate-900/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative max-h-73 flex-1">
                <ProductImage product={product} fill />
                {/* Overlay para mostrar botão no hover */}
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    <div className="flex-none flex-col items-center justify-center text-center">
                        <button className="bg-white text-yellow-600 py-2 px-5 transform motion-safe:hover:scale-110" 
                        >See Details</button>
                       
                        <div className="flex space-x-4 mt-2 text-white">
                            {/* Ícone de compartilhar */}
                            <div className="flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                                <img
                                    src="/images/shop/icon-share.svg"
                                    alt="Share Icon"
                                    className="cursor-pointer w-6 h-6"
                                    onClick={handleShareClick}
                                />
                                <span className="ml-1 text-sm font-bold font-sans">Share</span>
                            </div>
                            {/* Ícone de comparar */}
                            <div className="flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                                <img
                                    src="/images/shop/icon-compare.svg"
                                    alt="Compare Icon"
                                    className="cursor-pointer w-6 h-6"
                                    onClick={handleCompareClick}
                                />
                                <span className="ml-1 text-sm font-bold font-sans">Compare</span>
                            </div>
                            {/* Ícone de curtir */}
                            <div className="flex items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                                <img
                                    src="/images/shop/icon-like.svg"
                                    alt="Like Icon"
                                    className="w-6 h-6"
                                    onClick={handleLikeClick}
                                />
                                <span className="ml-1 text-sm font-bold font-sans">Like</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="bg-gray-200 justify-between font-bold p-5">
                <h5 className="flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <div className="flex space-x-2 md:space-x-8">
                    <h5 className="text-md">{formatPrice(product.price)}</h5>
                    <p className="flex mb-3 font-normal text-gray-700 dark:text-gray-400 line-through">R$ 9800,00</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
