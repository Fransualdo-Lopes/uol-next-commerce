// components/ProductDetails.tsx

import React from 'react';
import { useRouter } from 'next/router';
import { ProductType } from '@/types/ProductType'; // Importe o tipo ProductType

const ProductDetails: React.FC<{ product: ProductType }> = ({ product }) => {
    const router = useRouter();

    // Função para redirecionar de volta à página anterior
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
                <button
                    className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
                    onClick={handleGoBack}
                >
                    Voltar
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Imagem do produto */}
                <div>
                    <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                </div>
                {/* Detalhes do produto */}
                <div>
                    <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-600">SKU:</span> {product.sku}
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600">Preço:</span>
                        <span className="text-xl font-bold text-gray-800 ml-2">${product.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
