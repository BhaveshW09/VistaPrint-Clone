import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFragrancesAsync } from "../../Redux/CategoryFilter/FilterCategorySlice";
import { Products } from "./Products";

export const Fragrances = () => {
  const dispatch = useDispatch();
  const Fragrances = useSelector(
    (state) => state.category.filterCategory.Fragrances
  );
  console.log("smarPhone", Fragrances);

  useEffect(() => {
    dispatch(fetchFragrancesAsync());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Frangrance</h1>
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
            {Fragrances?.map((item) => (
              <Products key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
