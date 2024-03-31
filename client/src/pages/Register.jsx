import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen py-40 bg-[#F1F1F1]">
      <div className="container mx-auto">
        <div className="flex w-10/12 bg-white rounded-lg shadow-lg mx-auto overflow-hidden">
          <div className="w-1/2 flex flex-col  items-center p-12  bg-blue-500 bg-no-repeat bg-cover bg-center text-white">
            <h2 className="text-3xl mb-3  font-semibold">Welcome</h2>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-3">Register</h2>
            <p>Create your account</p>
            <form>
              <div className="grid grid-cols-2 gap-5 mt-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-400 py-1 px-2 focus:border-blue-500 outline-none rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-400 py-1 px-2 focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="date"
                  placeholder="Date of birth"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  placeholder="Aadhar number"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  placeholder="Phone number"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <select className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md">
                  <option>Select your bank</option>
                  <option>Indian Overseas Bank</option>
                  <option>State Bank of india</option>
                  <option>HDFC Bank</option>
                  <option>City Union Bank</option>
                  <option>Axis Bank</option>
                  <option>ICICI Bank</option>
                  <option>Bank of Baroda</option>
                  <option>Canara Bank</option>
                </select>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Branch"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  placeholder="Account number"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="number"
                  placeholder="IFSC code"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="PIN"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none rounded-md"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-500 py-1 px-2 w-full outline-none focus:border-blue-500 rounded-md"
                />
              </div>
              <div className="mt-5">
                <span>
                  Already have an account ?{" "}
                  <Link to="/login" className="text-blue-500 cursor-pointer">
                    Login
                  </Link>
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-blue-500 py-3 text-center text-white rounded-md">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
