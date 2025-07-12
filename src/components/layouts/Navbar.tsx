import { useState } from 'react';

import {
  CircleUserRound,
  MenuIcon,
  ShoppingCart,
  XIcon,
} from 'lucide-react';
import {
  Link,
  NavLink,
} from 'react-router-dom';

// import logo from '@/assets/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-black max-lg:shadow-lg lg:bg-transparent text-white z-40 flex items-center justify-between p-6 lg:px-12">
      <Link to="/" aria-label="Go to homepage">
        <p className="text-white text-4xl font-bold">
          pr<span className="text-blue-500">i</span>
          <span className="text-orange-400">z</span>eet
        </p>
        {/* <img src={logo} alt="Prizeet logo" /> */}
      </Link>

      <nav
        className={`max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:font-medium max-lg:text-lg z-50 flex flex-col lg:flex-row items-center max-lg:justify-center gap-8 lg:px-8 lg:rounded-full lg:py-3 max-lg:h-screen min-lg:rounded-full backdrop-blur-2xl bg-black/70 lg:bg-white/10 lg:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${
          isMenuOpen ? "max-lg:w-full" : "max-lg:w-0"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <XIcon
          className="lg:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        />
        <NavLink
          to="/"
          onClick={() => {
            setIsMenuOpen(false);
            scrollTo(0, 0);
          }}
          className={({ isActive }) =>
            `relative px-4 after:content-[''] after:left-1/2 after:-translate-x-1/2 after:origin-center after:absolute after:-bottom-1 after:w-0 after:h-[2px]
          ${
            isActive
              ? "font-semibold text-orange-400"
              : "font-light opacity-75 after:bg-white after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => {
            setIsMenuOpen(false);
            scrollTo(0, 0);
          }}
          className={({ isActive }) =>
            `relative px-4 after:content-[''] after:left-1/2 after:-translate-x-1/2 after:origin-center after:absolute after:-bottom-1 after:w-0 after:h-[2px]
          ${
            isActive
              ? "font-semibold text-orange-400"
              : "font-light opacity-75 after:bg-white after:w-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => {
            setIsMenuOpen(false);
            scrollTo(0, 0);
          }}
          className={({ isActive }) =>
            `relative px-4 after:content-[''] after:left-1/2 after:-translate-x-1/2 after:origin-center after:absolute after:-bottom-1 after:w-0 after:h-[2px]
          ${
            isActive
              ? "font-semibold text-orange-400"
              : "font-light opacity-75 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          }`
          }
        >
          Contact
        </NavLink>

        <Link
          to="/"
          onClick={() => {
            setIsMenuOpen(false);
            scrollTo(0, 0);
          }}
          className="lg:hidden"
          aria-label="Become a vendor"
        >
          Become a vendor
        </Link>
      </nav>

      {/* quick actions */}
      <div className="hidden lg:flex items-center gap-4">
        {/* shopping cart */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          aria-label="Shopping cart"
          className="relative mr-4"
        >
          <ShoppingCart />
          <div className="absolute -top-3 -right-3 bg-orange-400 rounded-full w-full text-center text-black">
            0
          </div>
        </div>
        <Link
          to="/"
          data-aos="fade-up"
          data-aos-delay="150"
          className="px-4 py-2 border border-orange-400 rounded-md hover:bg-orange-400 hover:text-black transition-all duration-300 ease-in-out"
          aria-label="Become a vendor"
        >
          Become a vendor
        </Link>
        <Link
          to="/"
          data-aos="fade-up"
          data-aos-delay="150"
          className="px-4 py-2 border border-orange-400 bg-orange-400 rounded-md text-black hover:bg-orange-500 hover:border-orange-500 transition-all duration-500 ease-in-out"
          aria-label="Login to your account"
        >
          Login
        </Link>
        {/* <Link to="/">Join</Link> */}
      </div>

      {/* mobile menu icon + user icon */}
      <div className="flex items-center gap-2 lg:hidden">
        {/* shopping cart */}
        <div aria-label="Shopping cart" className="relative mr-1 lg:mr-4">
          <ShoppingCart />
          <div className="absolute -top-3 -right-3 bg-orange-400 rounded-full w-full text-center text-black">
            0
          </div>
        </div>

        <CircleUserRound
          className="max-lg:ml-4 lg:hidden cursor-pointer"
          aria-label="User profile & Login"
        />
        <MenuIcon
          className="max-lg:ml-4 lg:hidden w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        />
      </div>
    </header>
  );
};

export default Navbar;
