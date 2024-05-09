import React from 'react';
import { ProductType } from '@/types/ProductType';
import ProductImage from './ProductImage';
import { formatPrice } from '@/lib/utils';

type ProductProps = {
    product: ProductType;
};

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="relative group flex flex-col shadow-lg h-96 p-0 text-black transition duration-300 ease-in-out hover:bg-transparent hover:relative">
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative max-h-73 flex-1">
                <ProductImage product={product} fill />
                {/* Overlay para mostrar botão no hover */}
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-yellow-600 py-2 px-5">See Details</button>
                    
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
