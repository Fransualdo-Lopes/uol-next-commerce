
import { ProductType } from "@/types/ProductType";
import Product from "../components/Product";
import { Stripe } from 'stripe';

async function getProducts(): Promise<ProductType[]> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2024-04-10',
    });

    const products = await stripe.products.list();
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
            {/* banner tela shop */}
            <nav>
                <img src="images/shop/Rectangle 1.svg" alt="banner da tela shop" 
                className="w-full h-80 object-cover" />
            </nav>
            <div></div>
            {/* // cards de produtos- tela inicial  */}
            <div className='max-w-7xl mx-auto pt-8 p-8 xl-px0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'>

                    {products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}
                </div>
            </div>
        </>
    );
}
// aqui no return eu posso retornar uma tela criada esta é a tela /shop, mesmo nome da pasta