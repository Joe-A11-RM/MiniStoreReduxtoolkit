import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getuserdata } from "../../redux/reducer/userProfile";

export default function Profile() {
  const state = useSelector((state) => state.userprofileReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuserdata());
  }, []);

  const { id, email, name, role, avatar } = state.userData;
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://api.lorem.space/image/face?w=640&h=480&r=867"
              alt="avatar"
              className="circle"
            />
          </div>
          <div className="col-lg-6">
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
          </div>
        </div>
      </div>
    </>
  );
}
