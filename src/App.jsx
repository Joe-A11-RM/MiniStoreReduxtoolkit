import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import New from "./components/Products/New";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/Products/AllProducts";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

function App() {
  const isLoginPath = () => {
    const location = useLocation();
    return location.pathname === "/";
  };
  if (isLoginPath()) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    return (
      <>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />}>
              <Route index element={<AllProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route>
              {["products/:productId", "home/:productId"].map((path) => (
                <Route path={path} element={<ProductDetails />} />
              ))}
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />

            <Route path="*" element={<h1>Wrong URL</h1>} />
          </Routes>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
