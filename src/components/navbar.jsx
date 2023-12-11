import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="p-8 bg-white flex flex-wrap justify-between shadow-md relative">
      <div className="flex justify-center">
        <Link to="/" className="text-blue-400 font-bold text-2xl">
          ManganCode
        </Link>
      </div>
      <div className="hidden md:flex gap-3 list-none">
        <ul className="flex items-center gap-3 list-none">
          <li>
            <Link to="/" className="decoration-none hover:text-blue-300">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/products" className="decoration-none hover:text-blue-300">
              PRODUCT
            </Link>
          </li>
          <li>
            <Link to="/services" className="decoration-none hover:text-blue-300">
              SERVICE
            </Link>
          </li>
          <li>
            <Link to="/cart" className="decoration-none hover:text-blue-300">
              CART ({cartCount})
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="decoration-none text-white hover:text-blue-300 bg-blue-400 rounded px-3 py-2"
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleMobileMenuToggle}
          className="text-blue-400 focus:outline-none absolute right-0 mr-3 z-20"
        >
          {isMobileMenuOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl text-bold" />
          )}
        </button>
        {isMobileMenuOpen && (
          <ul className="mt-8 flex flex-col gap-3 list-none absolute bg-white py-4 px-6 rounded shadow-md right-0 mr-4 leading-8 z-10">
            <li>
              <Link
                to="/"
                className="decoration-none hover:text-blue-300"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="decoration-none hover:text-blue-300"
                onClick={closeMobileMenu}
              >
                PRODUCT
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="decoration-none hover:text-blue-300"
                onClick={closeMobileMenu}
              >
                SERVICE
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="decoration-none hover:text-blue-300"
                onClick={closeMobileMenu}
              >
                CART ({cartCount})
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="decoration-none text-white hover:text-blue-300 bg-blue-400 rounded px-3 py-2"
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
