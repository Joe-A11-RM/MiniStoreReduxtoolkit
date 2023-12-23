import { useSelector } from "react-redux";

export default function Cart() {
  const state = useSelector((state) => state.cartReducer);
  const productstate = useSelector((state) => state.productdetailsReducer);
  const productquantity = state.cartdetails.products.map((i) => i.quantity);
  return (
    <>
      <div className="container">
        <h1 className="mt-5">Your Cart</h1>
        <ol>
          <li>{productstate.details.title}</li>
          <ul>
            <li>Price {productstate.details.price} $</li>
            <li>Quantity {productquantity} </li>
          </ul>
        </ol>
        <button className="btn btn-success  px-5">Buy</button>
      </div>
    </>
  );
}
