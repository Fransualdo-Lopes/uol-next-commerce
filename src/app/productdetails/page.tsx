import React from 'react';
import Link from 'next/link';

export default function ProductDetails() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Barra de navegação */}
            <div className="bg-orange-100 py-4 px-6 text-gray-800 flex items-center justify-between">
                {/* Logo e links de navegação */}
                <div className="flex items-center space-x-6">
                    <img src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="Logo" className="h-8" />
                    <Link href="/">
                        <a className="text-gray-800 hover:text-gray-900">Home</a>
                    </Link>
                    <Link href="/shop">
                        <a className="text-gray-800 hover:text-gray-900">Shop</a>
                    </Link>
                </div>
                {/* Título do produto */}
                <h1 className="text-xl font-bold">Asgaard Sofa</h1>
            </div>

            {/* Seção principal */}
            <section className="py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Imagem do produto */}
                        <div className="md:w-1/2">
                            <img
                                className="w-full rounded-lg"
                                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                                alt="Imagem do Produto"
                            />
                        </div>
                        {/* Detalhes do produto */}
                        <div className="md:w-1/2">
                            <div className="mb-4">
                                <span className="text-gray-600">SKU:</span> BST-498
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Shop Item Template</h2>
                            <div className="flex items-center mb-4">
                                <span className="text-gray-500 text-sm line-through mr-2">$45.00</span>
                                <span className="text-xl font-bold text-gray-800">$40.00</span>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi
                                consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
                                laborum vero?
                            </p>
                            <div className="flex items-center">
                                <input
                                    className="form-input w-16 h-10 mr-4 text-center"
                                    id="inputQuantity"
                                    type="number"
                                    defaultValue="1"
                                />
                                <button className="btn bg-gray-800 text-white hover:bg-gray-900 py-2 px-4 rounded">
                                    <i className="bi-cart-fill mr-1" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Produtos Relacionados */}
            <section className="py-8 bg-gray-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4">Produtos Relacionados</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Produto Relacionado 1 */}
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    className="w-full h-40 object-cover"
                                    src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                    alt="Produto Relacionado"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2">Product {index + 1}</h3>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 mr-2">$40.00</span>
                                        <span className="text-gray-400 line-through">$80.00</span>
                                    </div>
                                    <button className="btn mt-4 bg-gray-800 text-white hover:bg-gray-900 py-2 px-4 rounded">
                                        Ver Opções
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
