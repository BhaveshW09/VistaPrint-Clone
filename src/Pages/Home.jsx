import { BrandedProducts } from "../Components/BrandedProducts";
import { Swipers } from "../Components/Swiper/Swiper";
import { MainCategory } from "../Components/MainCategory";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* Lists */}
      <Link to="/home">
        <div>
          {/* HeroSection */}
          <div className="flex justify-center w-full h-[600px]">
            <Swipers />
          </div>

          {/* Branded Products */}
          <BrandedProducts />

          {/* HeroSection 2 */}

          <MainCategory />
        </div>
      </Link>
    </>
  );
};
