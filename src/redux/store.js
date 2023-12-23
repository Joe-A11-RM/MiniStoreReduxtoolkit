import { configureStore } from "@reduxjs/toolkit";
import { popularproductSlice } from "./reducer/popularproductsSlicer";
import { categorySlice } from "./reducer/categorySlicer";
import { productSlice } from "./reducer/productsSlicer";
import { newproductsSlice } from "./reducer/newproductsSlicer";
import { productdetailsSlice } from "./reducer/productdetailsSlicer";
import { userSlice } from "./reducer/userSlicer";
import { userProfileSlice } from "./reducer/userProfile";
import { cartSlice } from "./reducer/cartSlicer";
export const store = configureStore({
  reducer: {
    productsReducer: productSlice.reducer,
    popularproductReducer: popularproductSlice.reducer,
    newproductReducer: newproductsSlice.reducer,
    productdetailsReducer: productdetailsSlice.reducer,
    categoryReducer: categorySlice.reducer,
    userReducer: userSlice.reducer,
    userprofileReducer: userProfileSlice.reducer,
    cartReducer: cartSlice.reducer,
  },
});
