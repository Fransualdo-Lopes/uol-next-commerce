import Link from "next/link";

function Navabar() {
  return (
    <nav className='fixed top-0 w-full flex items-center py-3 px-8 justfy-between z-50 bg-white text-black'>
      <Link href="/" className='font-bold text-md h-12 flex items-center'>
        Furniro
      </Link>

      {/* Menu de navegação centralizado */}
      <ul className="flex items-center justify-center space-x-8 flex-grow">
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

    </nav>
  )
}
export default Navabar;