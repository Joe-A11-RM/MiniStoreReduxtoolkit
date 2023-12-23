import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userlogin } from "../../redux/reducer/userSlicer";
import { useForm } from "react-hook-form";
import { getuserdata } from "../../redux/reducer/userProfile";

export default function Login() {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const getdata = () => {
    dispatch(getuserdata());
  };
  const submitForm = (data) => {
    dispatch(userlogin(data));
    if (state.error == true) {
      alert("Wrong Email Or Password");
    } else {
      getdata();
      navigate("/home");
    }
  };

  return (
    <>
      <div className="container Form">
        <form className="text-center mt-5" onSubmit={handleSubmit(submitForm)}>
          <label htmlFor="" className="text-start">
            Email
          </label>
          <input
            type="email"
            className="input-group mb-3"
            {...register("email")}
          />
          <label htmlFor="" className=" text-end">
            Password
          </label>
          <input
            type="password"
            className="input-group"
            {...register("password")}
          />
          <button type="submit" className="product-link border-0 mt-5 px-5">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
