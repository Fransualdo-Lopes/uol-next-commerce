import { ProductType } from "@/types/ProductType";
import ProductImage from './ProductImage';

type ProductProps = {
    product: ProductType;
};

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className='flex flex-col shadow-lg h-96 p-0.5 text-black hover:bg-orange-100'>
        <div className='relative max-h-73 flex-1'>
            <ProductImage product={product} fill />
        </div>
        <div className=' bg-grey-200 justify-between font-bold mt-4 p-5'>
            <h5 className='flex mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{product.name}</h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{product.description}</p>
            <div className="flex space-x-2 md:space-x-8">
                <h5 className='text-md'>R$ {product.price}</h5>
                <p className='flex mb-3 font-normal text-gray-700 dark:text-gray-400 line-through'>R$ 9800,00</p>
            </div>
        </div>
    </div>
    
    );
};

export default Product;







