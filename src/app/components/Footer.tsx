import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Seção 1: Sobre */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ultricies justo nec nunc tempor, vitae hendrerit nisi dictum.
            </p>
          </div>

          {/* Seção 2: Links */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Seção 3: Newsletter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:bg-gray-600"
              />
              <button
                type="submit"
                className="w-full mt-2 bg-primary text-white py-2 rounded-md hover:bg-opacity-80 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Seção 4: Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-primary">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-primary">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Créditos e informações adicionais */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-left p-5">
        <p className="text-sm">
          &copy; 2024 furino. All rights reverved. 
        </p>
        <p className="text-xs mt-1">
          Images by{" "}
          <Link href="https://www.freepik.com" target="_blank">
            Freepik
          </Link>{" "}
          and{" "}
          <Link href="https://www.flaticon.com" target="_blank">
            Flaticon
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


