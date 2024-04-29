import Link from "next/link";

function HomeContent() {
  return (
    <>
      <div className="w-full relative bg-gray-900 text-white">
        <img
          src="/images/home/background1.svg"
          alt="imagem banner"
          className="w-full h-84 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
        <div className ="h-12"></div>
      <div className="container mx-auto text-3xl p-5 text-black text-center">
        <h2 className="font-bold">Browse The Range</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white p-2 rounded-md">
            <img
              src="/images/home/dining.svg"
              alt="Dining Collection"
              className="w-full h-73 object-contain mb-4"
            />
            <h3 className="h-10 text-lg font-semibold mb-2">Dining</h3>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white p-2 rounded-md">
            <img
              src="/images/home/living.svg"
              alt="Living Collection"
              className="w-full h-73 object-contain mb-4"
            />
            <h3 className=" h-10 text-lg font-semibold mb-2">Living</h3>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white p-2 rounded-md">
            <img
              src="/images/home/bedroom.svg"
              alt="Bedroom Collection"
              className="w-full h-73 object-contain mb-4"
            />
            <h3 className="h-10 text-lg font-semibold mb-2">Bedroom</h3>
          </div>
        </div>

        <h2 className="font-bold mt-12">Our Products</h2>
      </div>
    </>
  );
}

export default HomeContent;
