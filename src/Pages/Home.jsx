import { Link } from "react-router-dom";
import { PopularProducts } from "../Components/Category/PopularProducts";
import { Trending } from "../Components/Category/Trending";
import { AllNavCategory } from "../Components/AllNavCategory";
import { BrandedProducts } from "../Components/Category/BrandedProducts";

export const Home = () => {
  return (
    <>
      {/* Lists */}
      <div className=" w-[1280px] m-auto">
        <AllNavCategory />

        {/* HeroSection */}
        <div className="flex justify-center w-[1280px]">
          <img
            src="https://cms.cloudinary.vpsvc.com/image/upload/c_sc…on/IN_Visiting-Cards_Food-Truck_Mobile-Marquee_01"
            alt=""
          />
        </div>

        {/* Most Popular Product */}
        <PopularProducts />

        {/* Trending Products */}
        <Trending />

        {/* Branded Products */}
        <BrandedProducts />

        {/* HeroSection 2 */}

        {/* Explore More */}

        {/* New Arrival */}

        {/* Explore All Categories */}
      </div>
    </>
  );
};
