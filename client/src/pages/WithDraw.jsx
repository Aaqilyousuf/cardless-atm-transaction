import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { TbUserX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const WithDraw = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="w-full flex justify-center item-center mt-5">
        <div className="text-center">
          <h1 className="text-gray-600 text-5xl font-extrabold">ATM</h1>
          <p className="font-bold text-gray-300">24 X 7 BANKING</p>
        </div>
      </div>
      <div className="w-full mt-7 flex justify-center items-center">
        <div className="grid md:grid-cols-4 md:w-[800px] border-2 border-gray-500 mx-auto p-7 gap-7 text-white shadow-lg">
          <div className="min-h-[50px] md:col-span-4 rounded-md bg-white">
            <div className="text-center">
              <h1 className="text-2xl text-gray-600 font-extrabold">
                WITHDRAW CASH
              </h1>
              <p className="text-gray-600 mt-3">CARD NUMBER</p>
            </div>
          </div>
          <div className="min-h-[50px] shadow-lg rounded-md bg-[#31C6D4] flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <p className="text-[22px] font-medium">$20</p>
          </div>
          <div className="min-h-[50px] shadow-lg rounded-md bg-[#31C6D4] flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <p className="text-[22px] font-medium">$60</p>
          </div>
          <div className="min-h-[50px] shadow-lg rounded-md bg-[#31C6D4] flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <p className="text-[22px] font-medium">$100</p>
          </div>
          <div
            className="min-h-[50px] shadow-lg rounded-md bg-gray-700 flex justify-center items-center cursor-pointer hover:bg-gray-400"
            onClick={handleBack}
          >
            <div className="flex items-center text-[22px] font-medium">
              <IoIosArrowBack />
              <h1 className="ml-2 ">BACK</h1>
            </div>
          </div>
          <div className="min-h-[50px] shadow-lg rounded-md bg-[#31C6D4] flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <p className="text-[22px] font-medium">$40</p>
          </div>
          <div className="min-h-[50px] shadow-lg rounded-md bg-[#31C6D4] flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <p className="text-[22px] font-medium">$80</p>
          </div>
          <div className="min-h-[50px] shadow-lg rounded-md bg-[#31C6D4] flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <p className="text-[22px] font-medium">$200</p>
          </div>
          <div className="min-h-[50px] shadow-lg rounded-md bg-blue-500 flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <div className="flex items-center text-[22px] font-medium">
              <TbUserX />
              <h1 className="ml-2 ">LOGOUT</h1>
            </div>
          </div>
          <div className="min-h-[50px] md:col-span-3  rounded-md bg-white ">
            <p className="text-[22px] text-gray-600">
              Click the button to get the amount of cash
            </p>
            <h2 className="font-bold text-[22px] text-gray-600">
              Or Enter the amount. Must be lower than $1000.
            </h2>
          </div>
          <div className="h-[50px] md:col-span-1 rounded-md shadow-lg bg-red-500 flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <div className="flex items-center text-[22px] font-medium">
              <MdOutlineCancel />
              <h1 className="ml-2">CANCEL</h1>
            </div>
          </div>
          <div className="min-h-[50px] md:col-span-3 rounded-md bg-white">
            <input
              type="number"
              placeholder="$20"
              className="outline-none px-2 py-1 shadow-md rounded-lg bg-transparent w-full border-2 border-gray-300 focus:border-blue-500 h-12 text-gray-600"
            />
          </div>
          <div className="min-h-[50px] md:col-span-1 rounded-md shadow-lg bg-green-400 flex justify-center items-center cursor-pointer hover:shadow-[inset_-8px_-4px_30px_#242424]">
            <h1 className="text-[22px] font-medium">CONFIRM</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithDraw;
