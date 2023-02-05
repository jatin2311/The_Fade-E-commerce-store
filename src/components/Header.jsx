import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import useCartStore from "../store/CartStore";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const cartItems = useCartStore((e) => e.cart);

  return (
    <>
      <div className="container mx-auto flex justify-between items-center py-4  w-full md:w-auto  px-4 md:px-12">
        <Link to="/" onClick={() => setToggleMenu(false)}>
          <img
            src={Logo}
            alt=""
            className="w-[200px] md:w-[400px] h-16 md:h-28 "
          />
        </Link>
        <div className="hidden md:flex px-10 py-6 gap-20 ">
          <Link
            to="/"
            className="text-xl font-semibold hover:animate-pulse hover:underline "
          >
            Home
          </Link>
          <Link
            to="/store"
            className="text-xl font-semibold hover:animate-pulse hover:underline"
          >
            Store
          </Link>
          <div className="flex">
            <Link to="/cart" className="text-xl font-semibold">
              <FaShoppingCart size={25} />
            </Link>
            <div className="relative  bottom-6 right-1 bg-black w-8 h-8 rounded-full text-white justify-center items-center flex text-xl">
              {cartItems.length}
            </div>
          </div>
        </div>
        <div className="md:hidden pr-4 z-10 ">
          {toggleMenu ? (
            <MdClose onClick={() => setToggleMenu(false)} size={30} />
          ) : (
            <FaBars onClick={() => setToggleMenu(true)} size={25} />
          )}
          {toggleMenu && (
            <div className=" absolute top-24 right-0 px-4 h-screen  bg-stone-500/40">
              <div className="flex flex-col  gap-4">
                <Link
                  to="/"
                  className="text-xl font-base pt-4  w-36 py-1  "
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </Link>
                <Link
                  to="/store"
                  className="text-xl font-base w-36 py-1 "
                  onClick={() => setToggleMenu(false)}
                >
                  Store
                </Link>
                <div className="flex w-36 ">
                  <Link
                    to="/cart"
                    className="  text-xl font-base "
                    onClick={() => setToggleMenu(false)}
                  >
                    <FaShoppingCart className="px-2" size={45} />
                  </Link>
                  <div className="relative  bottom-2 right-2 bg-black w-6 h-6 rounded-full text-white justify-center items-center flex text-lg">
                    {cartItems.length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-black/50 md:bg-black/20 "></div>
    </>
  );
};

export default Header;
