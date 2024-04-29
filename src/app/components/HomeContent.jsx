import Link from "next/link";

function HomeContent() {
    return (
        <>
            <div className="w-full relative bg-gray-900 text-white">
                <img src="/images/home/background1.svg" alt="imagem banner" className="w-full h-96 object-cover lg:w-screen lg:h-96" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className='container text-4xl p-5 text-black text-center'>
                <h1 className='font-bold'>Our Products</h1>
            </div>
        </>

    );
}

export default HomeContent;
