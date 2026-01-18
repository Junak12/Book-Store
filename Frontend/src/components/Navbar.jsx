import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

const Navbar = () => {
    const [menu, setMenu] = useState(true);
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center cursor-pointer hover:scale-105 transition-all">
        <h1 className="text-[16px] xl:text-[38px] font-bold xl:font-extrabold text-black/75">
          Book Store
        </h1>
      </div>
      <div className="hidden xl:block  item-center">
        <button
          className="text-[16px] font-semibold text-gray-900/90 hover:scale-110 transition-all 
                hover:cursor-pointer  border-1 px-4 py-1 rounded-xl hover:bg-emerald-600
                hover:text-white border-gray-400 mr-8"
        >
          Home
        </button>
        <button
          className="text-[16px] font-semibold text-gray-900/90 hover:scale-110 transition-all 
                hover:cursor-pointer  border-1 px-4 py-1 rounded-xl hover:bg-emerald-600
                hover:text-white border-gray-400 mr-8"
        >
          Course
        </button>
        <button
          className="text-[16px] font-semibold text-gray-900/90 hover:scale-110 transition-all 
                hover:cursor-pointer  border-1 px-4 py-1 rounded-xl hover:bg-emerald-600
                hover:text-white border-gray-400 mr-8"
        >
          Contact
        </button>
        <button
          className="text-[16px] font-semibold text-gray-900/90 hover:scale-110 transition-all 
                hover:cursor-pointer  border-1 px-4 py-1 rounded-xl hover:bg-emerald-600
                hover:text-white border-gray-400"
        >
          About
        </button>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-1/2">
          <IoSearch className="text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>
        <button
          className="text-[14px] xl:text-[18px]  text-white/80 font-bold bg-emerald-700 hover:scale-110 transition-all 
                hover:cursor-pointer  border-1 px-3 xl:px-6 py-2 xl:rounded-xl rounded-lg hover:bg-emerald-600
                hover:text-white border-gray-400 "
        >
          Login
        </button>
      </div>
      <div 
        className="block xl:hidden hover:cursor-pointer hover:scale-115 transition-all relative"
        onClick={() => setMenu(!menu)}
      >
       {
            menu ? <AiOutlineMenuFold className="text-3xl" /> : <ImCancelCircle className="text-3xl" />
       }
      </div>
      {/* for mobile*/}
      <div className="relative block xl:hidden">
        {
            !menu && <div className="absolute right-[7px] top-8 border-1 bg-gray-200 rounded-xl px-10 py-2 ">
                <button 
                    className="text-[16px] text-gray-950 font-semibold border-1 border-gray-500 px-3
                    py-1 rounded-lg hover:scale-105 transition-all hover:bg-emerald-500 hover:text-white
                    hover:cursor-pointer"
                >Home</button>
                <button
                    className="text-[16px] text-gray-950 font-semibold border-1 border-gray-500 px-3
                    py-1 rounded-lg hover:scale-105 transition-all hover:bg-emerald-500 hover:text-white
                    hover:cursor-pointer mt-2"
                >Course</button>
                <button
                    className="text-[16px] text-gray-950 font-semibold border-1 border-gray-500 px-3
                    py-1 rounded-lg hover:scale-105 transition-all hover:bg-emerald-500 hover:text-white
                    hover:cursor-pointer mt-2"
                >Contact</button>
                <button
                    className="text-[16px] text-gray-950 font-semibold border-1 border-gray-500 px-3
                    py-1 rounded-lg hover:scale-105 transition-all hover:bg-emerald-500 hover:text-white
                    hover:cursor-pointer mt-2"
                >About</button>
            </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
