import React from "react";
import { GiCash } from "react-icons/gi";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="bg-[#f1f1f1] h-screen flex items-center justify-center">
      <div className="bg-white p-12 md:p-20 rounded-lg flex flex-col gap-5 items-center shadow-lg ">
        <span>
          <GiCash className="w-10 h-10" />
        </span>
        <h3 className="text-lg">Login</h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="cardno" className="text-lg font-medium">
              Card number
            </label>
            <input
              type="number"
              class="[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]  outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100"
              id="cardno"
              placeholder="000-00-0000"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pin" className="text-lg font-medium">
              Pin
            </label>
            <input
              type="password"
              class="[&::-webkit-inner-spin-button]:appearance-none [appearance:textfield] outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100"
              id="pin"
              placeholder="****"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button className="bg-blue-500 text-white font-medium h-10 rounded-md">
              Login
            </button>
            <p>
              Forget{" "}
              <span className="text-blue-500 cursor-pointer">password ?</span>
            </p>
          </div>
          <p className="mt-10">
            Don't you have an account ?{" "}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
