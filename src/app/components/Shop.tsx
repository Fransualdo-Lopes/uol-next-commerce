import { ProductType } from "@/types/ProductType";
import ProductImage from '../components/ProductImage'; 

type ProductProps = {
    product: ProductType;
};

const Shop: React.FC<ProductProps> = ({ product }) => {
    return (
        <div>
            <Product />
        
        </div>
    );
};

export default Shop;
