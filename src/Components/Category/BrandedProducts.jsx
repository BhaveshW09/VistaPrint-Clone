import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBrandedProductsAsync } from "../../Redux/Products/ProductSlice";
import { Card } from "../Card";

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
      <div className=" mt-14">
        <h1 className=" font-bold text-4xl">Our Branded Products</h1>
        <br />
        <div className="flex justify-between">
          {brandedProducts?.map((item) => (
            <Link key={item.id} to={`/productDetails/${item.id}`}>
              <Card key={item.id} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
