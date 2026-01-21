import React from "react";
import banner from "../assets/Banner.jpg";
import { MdOutlineEmail } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row mt-2 xl:mt-32 ">
        <div className="w-full xl:w-1/2 space-y-6 xl:space-y-12 order-2 xl:order-1 mt-10 xl:mt-0">
          <h1 className="text-xl xl:text-4xl font-bold">
            Hello, welcome here to learn <br /> something{" "}
            <span className="text-pink-500">new everyday</span>
          </h1>
          <p className="text-[14px] xl:text-[18px]">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit .
            Quaerat reiciendis eos doloremque <br /> beatae Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quaerat reiciendis <br /> eos
            doloremque beatae.
          </p>
          <div className="relative flex-1 border border-blackw-full xl:w-1/2 rounded-md">
            <MdOutlineEmail className="absolute top-1" />
            <input
              type="text"
              className="px-2 ml-4 focus:outline-none"
              placeholder="Enter your email to login"
            />
          </div>
          <button 
            className="bg-pink-600 text-white px-6 py-2 rounded-xl font-semibold
            hover:cursor-pointer hover:scale-105 transition-all "
            >
            Seconadary
          </button>
        </div>
        <div className="w-full xl:w-1/2 mt-10 xl:mt-0 order-1 xl:oreder-2">
          <img className="w-120 h-92 rounded-xl xl:ml-15" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
