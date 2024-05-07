// deixar assim
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import Cart from "./Cart"; //import do component Cart

function Navabar() {

  //useStore.toogleCart();
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-white text-slate-950'>
      <div>
        <Link href="/" className='font-bold text-md h-14 flex items-center'>
          <img src="images/home/icon-logo.svg" alt="icone da logo" className="p-1 h-10 w-10 mr-2" />
          <h2 className='text-xl'>Furniro</h2>
        </Link>
      </div>

      {/* Menu de navegação */}
      <div className="w-full">
        <div className="ml-10"  >
          <ul className="flex items-center gap-12 justify-center flex-grow">
            <li>
              <Link href="/" className="transform transition duration-200 hover:scale-125 hover:bg-orange-100 flex justify-center items-center">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="transform transition duration-200 hover:scale-125 hover:bg-orange-100 flex justify-center items-center">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="transform transition duration-200 hover:scale-125 hover:bg-orange-100 flex justify-center items-center">About</Link>
            </li>
            <li>
              <Link href="/contact" className="transform transition duration-200 hover:scale-125 hover:bg-orange-100 flex justify-center items-center">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex items-center gap-3'>

     

        <SignedOut>
          <SignInButton mode='modal'>
            {/* Login ou cadastro do cliente */}
            <button className='rounded-md px-2 py-2 h-12 w-12'>
              <img src="/images/home/icon-person.svg" alt="fazer login" />
            </button>
          </SignInButton>
        </SignedOut>
        {/* Botão do usuario logado*/}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <img src="/images/home/icon-lupa.svg" alt="lupa de pesquisa" className="cursor-pointer w-4 h-4"/>
        <img src="/images/home/icon-heart.svg" alt="icone de um corfacao" className="cursor-pointer w-4 h-4"/>
        {/* icone do carrinho */}
        <Cart />
      </div>
    </nav>
  )
}
export default Navabar;