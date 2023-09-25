import React from "react";
import { Link } from "react-router-dom";

export const Products = (item) => {
  return (
    <>
      <div
        key={item.id}
        className="flex w-[310px] h-[390px] flex-col bg-white  "
      >
        <div className="">
          <Link to={`/productDetails/${item.id}`}>
            <img
              src={item.thumbnail}
              alt="img"
              className="h-[300px] w-[310px] object-cover"
            />
          </Link>
        </div>
        <div className="flex w-full mt-2 flex-col justify-start">
          <p className=" font-semibold">{item.title}</p>
          <p>Rs. {item.price}</p>
        </div>
      </div>
    </>
  );
};
