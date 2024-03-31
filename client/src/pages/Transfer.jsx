import React from "react";
import Header from "../components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { TbUserX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const Transfer = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="w-full mt-5 flex justify-center items-center">
        <div className="grid md:grid-cols-3 md:w-[800px] gap-4 border-2 border-gray-600 rounded-md shadow-md p-5">
          <div className="min-h-[50px] md:col-span-3 bg-white mb-4">
            <div className="text-center">
              <h1 className="text-2xl text-gray-600 font-extrabold">
                TRANSFER CASH
              </h1>
            </div>
          </div>
          <div className="min-h-[50px] md:col-span-2 bg-[#fff] rounded-md flex justify-center items-center text-gray-600 p-1 ">
            <div className="">
              <p className="font-semibold">
                Transfer fund from one account from another account. You can
                type in a routing of another account that is not in your
                available accounts.
              </p>
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
          <div className="relative h-[90px]  md:col-span-1 bg-[#EEF2FF] rounded-md text-gray-600">
            <p className="absolute inset-0 w-full bg-transparent z-10  mt-12 font-bold text-[16px] text-center">
              CARD NUMBER
            </p>
            <h1 className="absolute top-0 left-0 mb-5 w-full h-full flex justify-center z-0 font-bold text-[20px] text-gray-400 border-2 border-gray-400">
              FROM
            </h1>
          </div>
          <div className="relative h-[90px]  md:col-span-1 bg-[#EEF2FF] rounded-md text-gray-600">
            <input
              type="number"
              className="absolute inset-0 w-full bg-transparent z-10 pt-7 pl-10 pr-10 font-bold text-[16px] text-center"
              placeholder="CARD NUMBER"
            />
            <h1 className="absolute top-0 left-0 mb-5 w-full h-full flex justify-center z-0 font-bold text-[20px] text-gray-400 border-2 border-gray-400">
              TO
            </h1>
          </div>

          <div className="w-[200px] h-[50px] md:col-span-1 bg-red-500 rounded-md flex justify-center items-center cursor-pointer">
            <div className="flex items-center text-white font-bold text-[18px]">
              <TbUserX className="text-[22px]" />
              <h1 className="ml-2">LOGOUT</h1>
            </div>
          </div>
          <div className="relative h-[90px]  md:col-span-2 bg-[#EEF2FF] rounded-md text-gray-600">
            <input
              type="number"
              className="absolute inset-0 w-full bg-transparent z-10 pt-7 pl-10 pr-10 font-bold text-[26px] text-center"
              placeholder="$100"
            />
            <h1 className="absolute top-0 left-0 mb-5 w-full h-full flex justify-center z-0 font-bold text-[20px] text-gray-400 border-2 border-gray-400">
              Inserted Cash
            </h1>
          </div>
          <div className="w-[200px] h-[50px] md:col-span-1 bg-green-500 rounded-md flex justify-center items-center cursor-pointer">
            <div>
              <h1 className="text-white font-bold text-[16px]">CONFIRM</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
