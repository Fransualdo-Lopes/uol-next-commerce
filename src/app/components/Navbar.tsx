// deixar assim
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

function Navabar() {
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justfy-between z-50 bg-white text-slate-950'>
      <div>
        <Link href="/"
          className='font-bold text-md h-14 flex items-center'>
          <img src="images/home/icon-logo.svg" alt="icone da logo" className=" p-1  h-10 w-10 mr-2" />
          <h2 className="text-lg font-bold">Furniro</h2>
        </Link>
      </div>

      {/* Menu de navegação centralizado */}
      <div></div>
      <ul className=" flex items-center justify-center gap-10 space-x-8 flex-grow">
        <li>
          <Link href="/" className="hover:text-gray-800">Home</Link>
        </li>
        <li>
          <Link href="/shop" className="hover:text-gray-800">Shop</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-800">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-800">Contact</Link>
        </li>
      </ul>

      <div className='flex items-center gap-8'>
        <SignedOut>
          <SignInButton mode='modal'>
            {/* Login ou cadastro do cliente */}
            <button className='rounded-md px-3 py-2'>
              <img src="/images/home/icon-person.svg" alt="fazer login" />
            </button>
          </SignInButton>
        </SignedOut>
        {/* Botão do usuario logado*/}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
export default Navabar;