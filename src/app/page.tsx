//  import { ProductType } from "@/types/ProductType";
// import Product from "./components/Product";
// import { Stripe } from 'stripe';

// async function getProducts(): Promise<ProductType[]> {
//   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
//     apiVersion: '2024-04-10',
//   });

//   const products = await stripe.products.list();
//   const formatedProducts = await Promise.all(
//     products.data.map(async (product) => {
//       const price = await stripe.prices.list({
//         product: product.id,
//       });
//       return {
//         id: product.id,
//         price: price.data[0].unit_amount,
//         name: product.name,
//         image: product.images[0],
//         description: product.description,
//         currency: price.data[0].currency, 
//       } 
//     })
//   );

//   return formatedProducts;

// }
//  export default async function Home() {
//   const products = await getProducts();

  // return (
  //  <div className='max-w-7xl mx-auto pt-8 p-8 xl-px0'>
  //   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'>

  //     {products.map((product) => (
  //       <Product key={product.id} product={product}></Product>
  //     ))}    
  //   </div>
  //  </div>
  // );
// }
export default function About() {
  return (
    <>
        <div className="w-full relative bg-gray-900 text-white">
            <img
                src="/images/home/background1.svg"
                alt="imagem banner"
                className="w-full h-84 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 py-4 bg-peach-200 bg-opacity-75 backdrop-filter backdrop-blur-lg text-center cursor-pointer transition duration-300 ease-in-out opacity-0 hover:opacity-100">
                <p className="text-white text-sm px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    pulvinar risus ut turpis sollicitudin, et consequat libero
                    scelerisque.
                </p>
            </div>
  
            <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="h-12"></div>
        <div className="container mx-auto text-3xl p-5 text-black text-center">
            <h2 className="font-bold">Browse The Range</h2>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                {/* Card 1 */}
                <div className="flex flex-col items-center bg-white p-2 rounded-md transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105">
                    <img
                        src="/images/home/dining.svg"
                        alt="Dining Collection"
                        className="w-full h-65 object-contain mb-4"
                    />
                    <h3 className="h-9 text-lg font-semibold mb-2">Dining</h3>
                </div>
  
                {/* Card 2 */}
                <div className="flex flex-col items-center bg-white p-2 rounded-md transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105">
                    <img
                        src="/images/home/living.svg"
                        alt="Living Collection"
                        className="w-full h-65 object-contain mb-4"
                    />
                    <h3 className=" h-9 text-lg font-semibold mb-2">Living</h3>
                </div>
  
                {/* Card 3 */}
                <div className="flex flex-col items-center bg-white p-2 rounded-md transition duration-300 ease-in-out transform hover:bg-orange-100 hover:scale-105">
                    <img
                        src="/images/home/bedroom.svg"
                        alt="Bedroom Collection"
                        className="w-full h-65 object-contain mb-4"
                    />
                    <h3 className="h-9 text-lg font-semibold mb-2">Bedroom</h3>
                </div>
            </div>
  
            <h2 className="font-bold mt-12">Our Products</h2>
            
        </div> 
        <div>esta é a tela home de teste</div>
    </>
  );
}

