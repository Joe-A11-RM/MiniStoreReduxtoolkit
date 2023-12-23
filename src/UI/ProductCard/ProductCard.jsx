import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  const title = props.title;
  const slicedtitle = title.slice(0, 17);

  return (
    <>
      <div className="col-lg-3">
        <div className="card mb-4">
          <div className="card-img">
            <img
              src={props.image}
              className="card-img-top product-img"
              alt="..."
            />
          </div>

          <div className="card-body">
            <h6 className="card-title">{slicedtitle}</h6>
            <p className="card-text">{props.price} $</p>
            <Link to={`${props.id}`} className="detailsbtn">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
