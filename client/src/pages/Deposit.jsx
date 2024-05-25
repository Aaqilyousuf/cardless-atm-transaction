import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { TbUserX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/auth-context";
const Deposit = () => {
  const navigate = useNavigate();
  const [depositAmount, setDepositAmount] = useState(null);
  const [balance, setBalance] = useState(null);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const handleBack = () => {
    navigate("/");
  };

  const handleDeposite = async () => {
    const response = await fetch(
      "http://localhost:8080/api/transaction/deposit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ amount: depositAmount }),
      }
    );
    const data = await response.json();
  };

  return (
    <div>
      <Header />
      <div className="w-full mt-5 flex justify-center items-center">
        <div className="grid md:grid-cols-3 md:w-[800px] gap-4 border-2 border-gray-600 rounded-md shadow-md p-5">
          <div className="min-h-[50px] md:col-span-3 bg-white">
            <div className="text-center">
              <h1 className="text-2xl text-gray-600 font-extrabold">
                DEPOSIT CASH
              </h1>
              <p className="text-gray-600 mt-3">
                {user ? `${user.accountNumber}` : "CARD NUMBER"}
              </p>
            </div>
          </div>
          <div className="min-h-[50px] md:col-span-2 bg-[#EEF2FF] rounded-md flex justify-center items-center text-gray-600 p-4 border-2 border-gray-400">
            <div className="text-center">
              <h1 className="font-bold text-[20px] text-gray-400">BALANCE</h1>
              <p className="font-bold text-[20px] mt-1">
                {user ? `$ ${user.balance}` : "Error in server"}
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
          <div className="relative h-[90px]  md:col-span-2 bg-[#EEF2FF] rounded-md text-gray-600">
            <input
              type="number"
              className="absolute inset-0 w-full bg-transparent z-10 pt-7 pl-10 pr-10 font-bold text-[26px] text-center"
              value={balance}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
            <h1 className="absolute top-0 left-0 mb-5 w-full h-full flex justify-center z-0 font-bold text-[20px] text-gray-400 border-2 border-gray-400">
              Inserted Cash
            </h1>
          </div>

          <div className="w-[200px] h-[50px] md:col-span-1 bg-red-500 rounded-md flex justify-center items-center cursor-pointer">
            <div className="flex items-center text-white font-bold text-[18px]">
              <TbUserX className="text-[22px]" />
              <h1 className="ml-2">LOGOUT</h1>
            </div>
          </div>
          <div className="min-h-[50px] md:col-span-1 bg-green-500 rounded-md flex justify-center items-center cursor-pointer">
            <div>
              <h1
                className="text-white font-bold text-[16px]"
                onClick={handleDeposite}
              >
                CONFIRM
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
