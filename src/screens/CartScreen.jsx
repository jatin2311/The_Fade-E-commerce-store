import React, { useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useLocation } from "react-router";
import useCartStore from "../store/CartStore";
import lottie from "lottie-web";
import EmptyBox from "../assets/emptybox.json";
import { Link } from "react-router-dom";
import { FaCcMastercard, FaCcVisa, FaRegCreditCard } from "react-icons/fa";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const CartScreen = () => {
  const location = useLocation();
  const totalPrice = useCartStore((e) => e.totalPrice);
  const removeItems = useCartStore((e) => e.removeItem);
  const data = useCartStore((e) => e.cart);
  const reset = useCartStore((e) => e.emptyCart);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animation"),
      loop: true,
      animationData: EmptyBox,
    });
  }, []);

  if (data.length === 0) {
    return (
      <div>
        <div className="flex justify-center items-center flex-col">
          <div
            className="w-[300px] lg:w-[500px] h-[500px]"
            id="animation"
          ></div>
          <p className="text-xl tracking-wider text-center">
            No item present in the cart!
            <Link
              to="/store"
              className=" ml-2 font-medium text-xl underline text-cyan-800/90"
            >
              Shop now
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-0 md:mx-auto">
      <h2 className="text-[40px] px-4 lg:px-24 text-[#3e305f] pt-4  ">
        Cart
        <span
          className="hidden lg:inline-block ml-[42rem] border-2 px-8 hover:underline py-1 bg-cyan-900/60 text-white cursor-pointer rounded-md  text-[20px]"
          onClick={() => {
            reset();
          }}
        >
          Empty cart
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row px-4 lg:px-20 py-12 ">
        <div className="flex flex-col gap-10 border rounded-md border-black/40 px-2 md:px-10 py-6 w-full lg:w-1/2 h-[35rem]  overflow-auto ">
          {data.map((e) => (
            <div
              className="w-full  gap-5 lg:gap-10 flex justify-between items-center  transition hover:transition-[var(--transition-mode)] md:px-2 py-2"
              key={e.id}
            >
              <img
                src={e.image}
                className="w-[50px] md:w-[70px] h-[70px] md:h-[90px] pl-0 md:pl-4"
                alt=""
              />
              <div className="mx-0 md:mx-4">
                <h2 className="text-[15px] text-stone-900/60">{e.category}</h2>
                <p className="text-lg text-amber-900/80 text-[18px]">
                  {e.title}
                </p>
                <p className="text-[17px]">
                  ₹<span className="pl-1">{e.price}</span>
                </p>
              </div>
              <div className="cursor-pointer">
                <MdOutlineDelete
                  size={35}
                  onClick={() => {
                    {
                      toast.info("Added removed from cart");
                    }
                    removeItems(e);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2  ">
          <div className="flex flex-col justify-between   py-6 px-10 border h-[35rem] ml-0 lg:ml-20 rounded-md ">
            <h2 className=" text-3xl pb-10">Order summary</h2>
            <div className="">
              <div className="mx-2 flex justify-between">
                <p className="text-lg text-black/60">Shipping charges</p>
                <span className="">₹0</span>
              </div>
              <div className="h-[1px] mb-2 bg-black/40"></div>
              <div className="mx-2  flex justify-between">
                <p className="text-lg text-black/60">Sub total</p>
                <span className="tracking-wider ">₹{totalPrice}</span>
              </div>
              <div className="h-[1px] mb-2 bg-black/40"></div>
              <div className="px-2 flex justify-between">
                <p className="text-3xl text-black/80 font-semibold">Total -</p>
                <span className="tracking-wider">₹{totalPrice}</span>
              </div>
              <div className="mt-6 flex  flex-col">
                <p className="text-center">Accepted Payments method</p>
                <div className="mt-1 flex px-20 justify-between  rounded-md text-black/60 ">
                  <FaCcMastercard size={45} />
                  <FaCcVisa size={45} />
                  <FaCcMastercard size={45} />
                  <FaRegCreditCard size={45} />
                  <FaRegCreditCard size={45} />
                  <FaCcVisa size={45} />
                </div>
              </div>
              <button className="mt-8 h-[50px] text-white bg-[#1C8D73] rounded-md border w-full cursor-not-allowed">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartScreen;
