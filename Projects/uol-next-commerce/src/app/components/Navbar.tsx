import Link from "next/link";

function Navabar(){
    return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justfy-between z-50 bg-slate-800 text-gray-300'>
    <Link href="/" className='uppercase font-bold text-md h-12 flex items-center'>
      Next Store
    </Link>
  </nav>
  ) 
}
export default Navabar;