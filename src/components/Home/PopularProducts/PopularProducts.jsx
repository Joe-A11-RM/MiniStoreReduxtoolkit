import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getpopular } from "../../../redux/reducer/popularproductsSlicer";
import ProductCard from "../../../UI/ProductCard/ProductCard";
import { Link } from "react-router-dom";

export default function PopularProducts() {
  const state = useSelector((state) => state.popularproductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpopular());
  }, []);
  const popular = state.PopularProducts.map((i) => (
    <ProductCard
      key={i.id}
      id={i.id}
      image={i.image}
      title={i.title}
      price={i.price}
    />
  ));
  return (
    <div>
      <h1 className="my-5">Popular Products</h1>
      <div className="row">{popular}</div>
    </div>
  );
}
