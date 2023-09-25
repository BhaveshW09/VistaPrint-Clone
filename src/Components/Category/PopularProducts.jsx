import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPopularProductsAsync } from "../../Redux/Products/ProductSlice";
import { Card } from "../Card";

export const PopularProducts = () => {
  const dispatch = useDispatch();
  const Popular = useSelector((state) => state.products.category.popular);
  console.log("popular", Popular);

  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    dispatch(fetchPopularProductsAsync(id));
  }, [dispatch]);

  return (
    <>
      <div className=" mt-14">
        <h1 className=" font-bold text-4xl">Our Popular Products</h1>
        <br />
        <div className="flex justify-between">
          {Popular?.map((item) => (
            <Link key={item.id} to={`/productDetails/${item.id}`}>
              <Card key={item.id} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
