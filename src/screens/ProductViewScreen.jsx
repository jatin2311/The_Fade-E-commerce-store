import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

import useCartStore from "../store/CartStore";

const ProductViewScreen = () => {
  const location = useLocation();
  const data = location.state.data;
  const [isAdddeToCart, setIsAdddeToCart] = useState(false);
  const cartData = useCartStore((e) => e.cart);
  const addItemToCart = useCartStore((e) => e.addItem);
  const nav = useNavigate();

  useEffect(() => {
    if (cartData.findIndex((e) => e.id == data.id) != -1) {
      setIsAdddeToCart(true);
    }
  }, []);
  return (
    <div className="container md:mx-auto py-10">
      <div className="flex flex-col md:flex-row items-center pb-10 md:pb-20 ">
        <h2 className="font-semibold  text-cyan-900 text-2xl md:text-4xl pl-0 md:pl-20 ">
          Product Details
          <span className="ml-3 hidden md:inline-block">|</span>
        </h2>
        <p className="pl-0 md:pl-4 text-xl text-red-900 underline">
          {data.category}
        </p>
      </div>

      <div className="flex flex-col md:flex-row  justify-center px-10 md:px-20 pt-10 md:pt-20 h-auto border rounded-md">
        <div className="my-auto px-10 lg:px-20 w-auto md:w-2/5">
          <img
            src={data.image}
            alt=""
            className=" w-auto md:w-[60rem] h-[300px] md:h-[400px]"
          />
        </div>
        <div className=" px-2 md:px-16   py-8 w-auto md:w-3/5">
          <h2 className="text-black/40 mt-2 ">{data.category.toUpperCase()}</h2>
          <p className="text-xl text-sky-900 tracking-wider  mt-4">
            _{data.title}
          </p>
          <p className="mt-1 text-black/70  text-[18px] ">
            Rating :
            <span className="text-cyan-900/70 px-2 text-lg">
              {data.rating.rate}
            </span>
            <span className="text-[18px] pl-2">Rated :</span>
            <span className="text-base pl-1 text-cyan-900/90  ">
              ({data.rating.count})
            </span>
          </p>
          <p className="mt-4 text-base  p-1">{data.description}</p>
          <p className="mt-4 text-[25px] text-cyan-900">
            ₹<span className="pl-1">{data.price}</span>
          </p>
          <div className="flex justify-center gap-10 md:gap-20 p-4 md:p-10 ">
            <button className="border px-6 md:px-10 py-3 rounded-md bg-red-600/60 text-white  text-xl hover:translate-y-1 cursor-not-allowed">
              Buy now
            </button>
            {isAdddeToCart ? (
              <button
                className="border px-4 md:px-8 py-3 rounded-md bg-sky-600/60 text-white  text-xl hover:translate-y-1"
                onClick={() => {
                  {
                    nav("/cart");
                  }
                }}
              >
                Go to cart
              </button>
            ) : (
              <button
                className="border px-4 md:px-8 py-3 rounded-md bg-green-600/60 text-white  text-xl hover:translate-y-1"
                onClick={() => {
                  {
                    toast.success("Added to cart");
                  }
                  addItemToCart(data);
                  setIsAdddeToCart(!isAdddeToCart);
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductViewScreen;
