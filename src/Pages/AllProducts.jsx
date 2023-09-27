import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync } from "../Redux/Products/ProductSlice";
import { Products } from "./CategoryFilterPages/Products";
import { Link } from "react-router-dom";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto grid max-w-[1280px]  items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
        {product.map((item) => (
          <Link to={`/productDetails/${item.id}`}>
            <div
              key={item.id}
              className="rounded-md  p-4 shadow-md shadow-gray-500 hover:scale-105 transition-all ease-in-out 1s w-[270px] m-auto gap-x-20 "
            >
              <img
                src={item.thumbnail}
                alt="Laptop"
                className=" w-[300px] m-auto rounded-md md:aspect-auto h-[220px] md:h-[300px] lg:h-[270px] object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {item.title.slice(0, 26)}
                </h1>

                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
