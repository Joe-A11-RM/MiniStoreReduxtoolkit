import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductdetails } from "../../../redux/reducer/productdetailsSlicer";
import { useParams } from "react-router-dom";
import { addtoCart } from "../../../redux/reducer/cartSlicer";

export default function ProductDetails() {
  const state = useSelector((state) => state.productdetailsReducer);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproductdetails(params.productId));
  }, []);
  const { id, title, price, description, category, image } = state.details;
  const user = useSelector((state) => state.userprofileReducer);
  const userid = user.userData.id;
  const no = 5;
  const productid = params.productId;
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-4">
            <img src={image} alt={title} className="w-100" />
          </div>
          <div className="col-lg-4 my-auto">
            <h1>
              <span>Name: </span> {title}
            </h1>
            <p>
              <span>Description: </span> {description}
            </p>
            <p>
              <span>Price: </span>
              {price} $
            </p>
            <p>
              <span>Category: </span>
              {category}
            </p>

            <button
              className="product-link border-0"
              onClick={() => {
                dispatch(
                  addtoCart({ userid: userid, pid: Number(productid), no })
                );
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
