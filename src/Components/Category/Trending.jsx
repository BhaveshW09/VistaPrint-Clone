import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchTrendingProductsAsync } from "../../Redux/Products/ProductSlice";
import { Card } from "../Card";

export const Trending = () => {
  const dispatch = useDispatch();
  const Trending = useSelector((state) => state.products.category.trending);
  console.log("Trending", Trending);

  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    dispatch(fetchTrendingProductsAsync(id));
  }, [dispatch]);

  return (
    <>
      <div className=" mt-14">
        <h1 className=" font-bold text-4xl">Our Trending Products</h1>
        <br />
        <div className="flex justify-between">
          {Trending?.map((trending) => (
            <Link key={trending.id} to={`/productDetails/${trending.id}`}>
              <Card key={trending.id} {...trending} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
