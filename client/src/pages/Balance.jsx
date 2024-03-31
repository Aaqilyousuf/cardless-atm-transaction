import React from "react";
import Header from "../components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { TbUserX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Balance = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="w-full mt-5 flex justify-center items-center">
        <div className="grid md:grid-cols-2 md:w-[800px] gap-4 border-2 border-gray-600 rounded-md shadow-md p-5">
          <div className="min-h-[50px] md:col-span-2 bg-white">
            <div className="text-center">
              <h1 className="text-2xl text-gray-600 font-extrabold">
                CHECK BALANCE
              </h1>
              <p className="text-gray-600 mt-3">CARD NUMBER</p>
            </div>
          </div>
          <div className="min-h-[50px] md:col-span-3 bg-[#EEF2FF] rounded-md flex justify-center items-center text-gray-600 p-4 pt-3 pb-3 border-2 border-gray-400">
            <div className="text-center">
              <h1 className="font-bold text-[20px] text-gray-400">BALANCE</h1>
              <p className="font-bold text-[26px] mt-1">$20,897</p>
            </div>
          </div>
          <div
            className="w-[200px] h-[50px] md:col-span-1 bg-gray-600 rounded-md flex justify-center items-center cursor-pointer"
            onClick={handleBack}
          >
            <div className="flex items-center text-white font-bold text-[18px]">
              <IoIosArrowBack />
              <h1 className="">BACK</h1>
            </div>
          </div>

          <div className="w-[200px] h-[50px] md:col-span-1 bg-red-500 rounded-md flex justify-center items-center cursor-pointer">
            <div className="flex items-center text-white font-bold text-[18px]">
              <TbUserX className="text-[22px]" />
              <h1 className="ml-2">LOGOUT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
