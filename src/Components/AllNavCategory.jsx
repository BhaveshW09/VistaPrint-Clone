import React from "react";
import { Link } from "react-router-dom";

export const AllNavCategory = () => {
  return (
    <>
      <div className=" flex text-lg gap-4 justify-between mt-6">
        <Link to="AllProducts">
          <button className="">All Products</button>
        </Link>
        <Link to="SmartPhones">
          <button className="">Smart Phones</button>
        </Link>
        <Link to="Fragrances">
          <button className="">Fragrances</button>
        </Link>
        <Link to="Laptops">
          <button className="">Laptops</button>
        </Link>
        <Link to="Skincare">
          <button className="">Skincare</button>
        </Link>
        <Link to="Groceries">
          <button className="">Groceries</button>
        </Link>
        <Link to="Home-decoration">
          <button className="">Home-decoration</button>
        </Link>
        <Link to="Furniture">
          <button className="">Furniture</button>
        </Link>
      </div>
    </>
  );
};
