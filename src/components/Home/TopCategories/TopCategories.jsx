import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/reducer/categorySlicer";
import "./TopCategories.css";

export default function TopCategories() {
  const state = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  if (state.loading) return <h1>LOADING....</h1>;
  const category = state.categories.map((i) => (
    <div key={i} className="col-lg-3">
      <div className="list">
        <a> {i}</a>
      </div>
    </div>
  ));
  return (
    <div className="mt-5">
      <h1>Shop Our Top Categories</h1>
      <div className="category">
        <div className="row g-5">{category}</div>
      </div>
    </div>
  );
}
