import React from "react";
import Right from "../assets/Vector.png";
import RightSide from "../assets/collection.jpg";
import Clothing from "../assets/clothing.jpg";
import Electronics from "../assets/electronics.jpg";
import Jwelery from "../assets/jwelery.jpg";
import "animate.css";

import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const nav = useNavigate();
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row bg-[#ececee91]">
        <div className="w-screen  lg:w-2/5">
          <div className=" absolute top-[580px] md:top-[350px] left-[50px] md:left-[220px] -z-10 w-[300px] bg-[#ececee] rounded-full h-[300px] "></div>
          <div className="md:hidden absolute top-[125px]  left-[40px] sm:left-[200px] -z-10 w-[300px] bg-[#d9d9db] rounded-lg h-[430px] "></div>
          <div className="flex flex-col py-[100px] md:py-[250px] pb-20 md:pb-0">
            <h3 className="text-xl md:text-2xl font-semibold  pl-4 md:pl-20 lg:pl-64 animate__animated animate__fadeInDownBig">
              Amazing Products!
            </h3>
            <h2 className="text-4xl md:text-6xl font-sans pt-4 md:pt-8 pl-4 md:pl-20 lg:pl-64 animate__animated animate__fadeInDownBig ">
              Winter Collection...
            </h2>
            <p className="text-base md:text-xl py-4 md:py-8  tracking-wider pl-4 md:pl-20 lg:pl-64 animate__animated animate__fadeInLeftBig">
              wide range of winter wear online for men, women & kids at best
              prices on The Fade.{" "}
            </p>
            <Link
              to={"/store"}
              className="self-center  py-2 px-4  mt-2 md:mt-6  "
            >
              <button className="font-semibold underline text-underline text-2xl md:text-3xl  animate__animated animate__fadeInUpBig ">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block w-3/5 ">
          <div className=" relative ">
            <img
              className="w-[50rem] h-[56rem] absolute top-26 left-[13rem]   -z-20"
              src={Right}
              alt=""
            />
            <div className="pl-44 py-[180px] animate__animated animate__fadeInRightBig">
              <img
                src={RightSide}
                alt=""
                className="rounded-full w-[500px] h-[500px] ml-[300px] "
              />
            </div>
          </div>
        </div>
        <div className="pt-10 lg:hidden self-center">
          <img
            src={RightSide}
            alt=""
            className="rounded-lg w-[300px] h-[400px] animate__animated animate__fadeInRightBig -z-40 "
          />
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-black/50 md:bg-black/20 "></div>
      <section className="py-6 md:py-10 ">
        <h1 className="text-cyan-900 text-4xl underline text-center">
          Shop by categories
        </h1>
      </section>
      <div className=" pb-10">
        <div className="flex flex-col md:flex-row px-6 md:px-0 justify-center gap-10 md:gap-20 pt-2 md:pt-8">
          <section
            className=""
            onClick={() => {
              nav("/category/clothing");
            }}
          >
            <img
              src={Clothing}
              alt=""
              className="w-[22rem] md:w-[25rem] h-[18rem] md:h-[22rem] rounded-lg cursor-pointer"
            />
            <p className="text-center text-2xl py-2 hover:underline cursor-pointer hover:text-red-900/80 ">
              Clothing
            </p>
          </section>
          <section
            className=""
            onClick={() => {
              nav("/category/jewelery");
            }}
          >
            <img
              src={Jwelery}
              alt=""
              className="w-[22rem] md:w-[25rem] h-[18rem] md:h-[22rem] rounded-lg cursor-pointer"
            />
            <p className="text-center text-2xl py-2 hover:underline cursor-pointer hover:text-cyan-900/80">
              Jewelery
            </p>
          </section>
          <section
            className=""
            onClick={() => {
              nav("/category/electronics");
            }}
          >
            <img
              src={Electronics}
              alt=""
              className="w-[22rem] md:w-[25rem] h-[18rem] md:h-[22rem] rounded-lg cursor-pointer"
            />
            <p className="text-center text-2xl py-2 hover:underline cursor-pointer hover:text-stone-900/80">
              Electronics
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
