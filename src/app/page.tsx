import HomeShop from "./components/HomeShop";

export default function Home() {
    return (
        <>
            <div className="w-full relative">
                <img
                    src="/images/home/background1.svg"
                    alt="imagem banner"
                    className="w-full h-84 object-cover"
                />

                {/* Div com fundo laranja */}
                <div className="absolute inset-x-0 left-1/2 mr-10 mt-8 bottom-0 py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-8 bg-orange-100 bg-opacity-70 backdrop-filter backdrop-blur-lg text-left cursor-pointer transition duration-200 ease-in-out opacity-0 hover:opacity-100">
                    <p className="text-black text-sm sm:text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar risus ut turpis sollicitudin, et consequat libero scelerisque.
                    </p>
                </div>

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
            <HomeShop />
        </>
    );
}

