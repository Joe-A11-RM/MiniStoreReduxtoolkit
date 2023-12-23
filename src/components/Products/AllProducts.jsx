import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../../redux/reducer/productsSlicer";
import ProductCard from "../../UI/ProductCard/ProductCard";

export default function AllProducts() {
  const state = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, []);
  const products = state.Products.map((i) => {
    return (
      <ProductCard
        key={i.id}
        id={i.id}
        image={i.image}
        title={i.title}
        price={i.price}
      />
    );
  });
  console.log(products);
  return (
    <div className="container">
      <div className="row">{products}</div>
    </div>
  );
}
