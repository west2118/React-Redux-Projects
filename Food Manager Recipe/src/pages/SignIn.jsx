import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slice/authenticationSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const signInHandler = (e) => {
    e.preventDefault();

    if (usernameRef.current.value && passwordRef.current.value) {
      dispatch(login());

      navigate("/");
    } else {
      alert("Please Input a correct credentials");
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center flex-col mt-16">
      <form
        onSubmit={signInHandler}
        className="w-2/4 flex flex-col border-4 border-slate-700 p-5 shadow-xl">
        <label htmlFor="" className="mb-2 font-semibold text-lg">
          Username
        </label>
        <input
          type="email"
          ref={usernameRef}
          className="border border-black py-2 px-3 mb-3"
        />
        <label htmlFor="" className="mb-2 font-semibold text-lg">
          Password
        </label>
        <input
          type="password"
          ref={passwordRef}
          className="border border-black py-2 px-3 mb-3"
        />
        <button className="py-2 bg-slate-700 text-white mt-2">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
