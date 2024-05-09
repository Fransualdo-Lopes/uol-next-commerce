
import { ProductType } from "@/types/ProductType";
import Product from "../components/Product";
import { Stripe } from 'stripe';
import Link from 'next/link'

async function getProducts(): Promise<ProductType[]> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2024-04-10',
    });

    const products = await stripe.products.list({ limit: 8 });
    const formatedProducts = await Promise.all(
        products.data.map(async (product) => {
            const price = await stripe.prices.list({
                product: product.id,
            });
            return {
                id: product.id,
                price: price.data[0].unit_amount,
                name: product.name,
                image: product.images[0],
                description: product.description,
                currency: price.data[0].currency,
            }
        })
    );

    return formatedProducts;

}
export default async function Shop() {
    const products = await getProducts();

    return (
        <>
            {/* // cards de produtos- tela inicial  */}
            <div className='max-w-7xl mx-auto pt-8 p-8 xl-px0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'>

                    {products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}

                </div>
            </div>
            <div className="left-0 right-0 text-center mb-10">
                <Link href="/shop">
                    <button className="bg-white text-yellow-600 py-3 px-6 rounded-lg border-2 border-yellow-600 
                    shadow-md hover:bg-yellow-600 hover:text-white hover:shadow-lg transform hover:scale-105 
                    transition duration-300 ease-in-out min-w-[150px]">
                        Show More
                    </button>
                </Link>
            </div>
        </>
    );
}