import React from "react";
import "./Home.css";
import TopCategories from "./TopCategories/TopCategories";
import PopularProducts from "./PopularProducts/PopularProducts";
export default function Home() {
  return (
    <div>
      <img
        src="https://blog.mktgessentials.com/hubfs/online-store-small-business-blog.png"
        alt=""
        width={"100%"}
      />
      <div className="container">
        <TopCategories />
        <PopularProducts />
      </div>
    </div>
  );
}
