import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../UI/ProductCard/ProductCard";
import { getnewProducts } from "../../redux/reducer/newproductsSlicer";

export default function New() {
  const state = useSelector((state) => state.newproductReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getnewProducts());
  }, []);
  const products = state.newProducts.map((i) => {
    return (
      <ProductCard
        key={i.id}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYwMbKjI7KLw1NwEkWWvillIbfTY8Une3F5A&usqp=CAU"
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
