import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync } from "../../Redux/Products/ProductSlice";
import { Products } from "./Products";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="flex justify-center w-full ">
          <img
            className=" relative"
            src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_1920/India%20LOB/marquee/For%20Marketing/All-categories2_Marquee_Category-Page_for-marketing"
            alt=""
          />
          <div className=" flex flex-col absolute z-10 text-white top-72 left-96">
            <h1 className="  font-bold text-5xl ">View All Products</h1>
            <span className=" mt-3 ml-2">
              Find high-quality customised products you need.
            </span>
          </div>
        </div>

        <div className="flex">
          {/* sideFilter */}
          <div className="w-1/4"></div>

          {/* Products */}
          <div className=" w-3/4 grid grid-cols-3 gap-y-10 mt-20">
            {product.map((item) => (
              <Products key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
