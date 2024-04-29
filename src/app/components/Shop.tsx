// pages/shop.tsx

import { ProductType } from "@/types/ProductType";
import Product from "../components/Product"; // Importa o componente Product aqui

type ShopProps = {
    products: ProductType[];
};

const Shop: React.FC<ShopProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
