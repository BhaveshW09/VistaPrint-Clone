import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkincareAsync } from "../../Redux/CategoryFilter/FilterCategorySlice";
import { Products } from "./Products";

export const Skincare = () => {
  const dispatch = useDispatch();
  const Skincare = useSelector(
    (state) => state.category.filterCategory.Skincare
  );
  console.log("Laptops", Skincare);

  useEffect(() => {
    dispatch(fetchSkincareAsync());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Skincare</h1>
        <div className="flex justify-center w-[1280px]">
          <img
            src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>

        <div className="flex">
          {/* sideFilter */}
          <div className="w-1/4"></div>

          {/* Products */}
          <div className=" w-3/4 grid grid-cols-3 gap-y-10 mt-20">
            {Skincare?.map((item) => (
              <Products key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
