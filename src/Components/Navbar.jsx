import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiFolderNotchLight } from "react-icons/pi";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between py-5 px-10 bg-blend-color-burn w-[1280px] m-auto  items-center text-lg">
      {/* Logo */}
      <div className=" text-3xl">
        <Link to="/">Vistaprint</Link>
      </div>

      {/* SearchBar */}
      <div className="flex items-center relative">
        <span className=" absolute left-3 cursor-pointer">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className=" px-12 py-2 rounded-md bg-[#e9e9e9] border border-gray-500"
        />
      </div>

      {/* nav list */}
      <div className="flex">
        <ul className=" flex gap-3 md:max-md:gap-6 cursor-pointer items-center font-normal">
          <Link to="AllProducts">
            <div className=" flex items-center gap-2">
              <span>
                <AiOutlineQuestionCircle />
              </span>
              <div className=" flex flex-col  ">
                <li className="hidden max-sm:block">Help is here</li>
                <li className="hidden max-sm:block">0203164461</li>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className=" flex items-center gap-2">
              <span>
                <PiFolderNotchLight />
              </span>
              <li className=" hidden md:max-sm:list-item ">My Projects</li>
            </div>
          </Link>
          <Link to="AboutUs">
            <div className=" flex items-center gap-2">
              <span>
                <MdPerson />
              </span>
              <li className=" hidden md:max-sm:block">My Account</li>
            </div>
          </Link>
          <Link to="/cart">
            <div className=" flex items-center gap-2">
              <span>
                <FiShoppingCart className="hover:font-bold" />
              </span>
              <li className=" hidden md:max-sm:block">Cart</li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
