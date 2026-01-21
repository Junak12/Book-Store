import React, { useEffect, useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

  }, []);

  const handleMode = () => {
    const newTheme = !dark;
    setDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  };

  const buttons = ["Home", "Course", "Contact", "About"];

  return (
    <nav
      className="flex justify-between items-center border-b shadow-sm dark:shadow-slate-200 py-2 xl:py-4 px-4 xl:px-2
      sticky top-0 z-50"
    >
      <div className="">
        <h1
          className="font-bold xl:font-extrabold text-[16px] xl:text-[32px] hover:cursor-pointer
          hover:scale-105 transition-all"
        >
          Book Store
        </h1>
      </div>
      <div className="flex items-center justify-between gap-4 xl:gap-8">
        <div className="hidden xl:block items-center">
          {buttons.map((btn, index) => (
            <button
              className="ml-6 dark:border dark:border-slate-100 rounded-lg px-3 py-1 font-medium
              border border-slate-500 hover:cursor-pointer hover:scale-110 transition-all hover:bg-emerald-400"
              key={index}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="items-center border rounded-md px-2 dark:border-slate-200 hidden xl:block">
          <div className="flex items-center">
            <IoSearch className="xl:text-xl absolute" />
            <div className="hidden xl:block">
              <input
                type="text"
                placeholder="Search..."
                className="ml-5  rounded-md px-2 py-1 dark:placeholder:text-gray-200  focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div onClick={handleMode}>
          <LuSunMoon
            className="dark:text-white text-xl xl:text-3xl hover:cursor-pointer 
                      hover:scale-110 transition-all "
          />
        </div>

        <div className="flex item-center ">
          <button
            className="font-semibold text-[14px] xl:text-[20px] border px-2 xl:px-4 py-1 rounded-xl dark:border-slate-200
          hover:cursor-pointer hover:scale-110 transition-all bg-emerald-700 text-slate-200 hover:bg-emerald-400"
          >
            Login
          </button>
        </div>

        <div className="block xl:hidden" onClick={() => setMenu(!menu)}>
          {menu ? (
            <CiMenuBurger className="dark:text-white text-xl hover:cursor-pointer hover:scale-110 tranisition-all" />
          ) : (
            <MdOutlineCancel className="text-2xl hover:cursor-pointer hover:scale-110 transition-all" />
          )}
          {!menu && (
            <div className="absolute right-1 top-12 border dark:border-slate-600 px-6 py-1 rounded-2xl">
              {buttons.map((btn, index) => (
                <button
                  className="block text-[14px] font-semibold mt-2
                     px-2 xl:px-4 py-1 
                    hover:cursor-pointer hover:scale-110 transition-all hover:border hover:rounded-md hover:px-3 hover:py-1 dark:text-white text-gray-900 hover:bg-emerald-400"
                    key={index}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
