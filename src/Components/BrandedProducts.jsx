import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBrandedProductsAsync } from "../Redux/Products/ProductSlice";

export const BrandedProducts = () => {
  const dispatch = useDispatch();
  const brandedProducts = useSelector(
    (state) => state.products.category.brandedProducts
  );
  console.log("popular", BrandedProducts);

  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    dispatch(fetchBrandedProductsAsync());
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto grid w-full max-w-[1280px] mt-32">
        <h1 className="font-bold text-4xl">Most Popular Products</h1>
        <div className="mx-auto grid w-full max-w-[1280px] items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {brandedProducts?.map((item) => (
            <Link to={`/productDetails/${item.id}`}>
              <div
                key={item.id}
                className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
              >
                <img
                  src={item.thumbnail}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute w-full bottom-0 h-28 rounded-md bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    {item.title.slice(0, 26) + "..."}
                  </h1>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
