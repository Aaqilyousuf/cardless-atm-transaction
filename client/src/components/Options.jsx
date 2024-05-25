import React, { useContext } from "react";
import cashImg from "../assets/cash.png";
import depositImg from "../assets/deposit.png";
import transferImg from "../assets/transfer.png";
import balanceImg from "../assets/balance.png";
import transactionImg from "../assets/transaction.png";
import userImg from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/auth-context";

const Options = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    navigate("/withdraw");
  };
  const handleDeposit = (e) => {
    e.preventDefault();
    navigate("/deposit");
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    navigate("/transfer");
  };
  const handleBalance = (e) => {
    e.preventDefault();
    navigate("/balance");
  };
  const handleTransactionHistory = (e) => {
    e.preventDefault();
    navigate("/transaction");
  };
  const handleUserDetails = (e) => {
    e.preventDefault();
    navigate("/userdetails");
  };

  return (
    <div>
      <div className="m-4 grid sm:grid-cols-12 gap-4">
        <div className="min-h-[100px] sm:col-span-2 bg-[#40A2D8] rounded-md shadow-md flex justify-center items-center">
          <h2 className="text-white font-semibold">
            {user ? `${user.firstName}  ${user.lastName}` : "Guest"}
          </h2>
        </div>
        <div className="min-h-[100px] sm:col-span-8 bg-[#141E61] rounded-md shadow-md flex flex-col gap-2 justify-center items-center">
          <h1 className="text-white text-3xl font-semibold">ATM</h1>
          <p className="text-white text-sm">24 x 7 banking</p>
        </div>
        <div
          className="min-h-[100px] sm:col-span-2 bg-[#CD3F3E] rounded-md shadow-lg flex justify-center items-center cursor-pointer hover:bg-[#FD5E53] hover:shadow-[inset_-12px_-8px_40px_#46464620] transition-all duration-300 ease-linear"
          onClick={handleLogOut}
        >
          <button className="text-white font-semibold">Log Out</button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-7">
        <div className="w-[90%] sm:w-[800px] h-100 bg-[#424769] rounded-md flex justify-center items-center shadow-lg border-4 border-[#EEF2FF]">
          <h1 className="text-white text-lg font-medium">
            Balance ${user.balance}
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-7">
        <div className="w-[90%] sm:w-[800px] grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center">
          <div
            className="bg-[#EEF2FF] min-h-[200px] rounded-md flex flex-col justify-center items-center cursor-pointer border-2 border-gray-400 shadow-md text-[#141E61] hover:shadow-[inset_-12px_-8px_40px_#46464620]"
            onClick={handleWithdraw}
          >
            <img src={cashImg} className="flex-col-2 h-20 w-20" alt="cash" />
            <p className="flex-col-2 text-lg font-bold font-sans">
              Withdraw Cash
            </p>
            <p className="flex-col-2 text-center text-sm">
              Get cash now without looking at account!
            </p>
          </div>
          <div
            className="bg-[#EEF2FF] min-h-[200px] rounded-md flex flex-col justify-center items-center cursor-pointer border-2 border-gray-400 shadow-md text-[#141E61] hover:shadow-[inset_-12px_-8px_40px_#46464620]"
            onClick={handleDeposit}
          >
            <img src={depositImg} className="flex-col-2 h-28 w-28" alt="cash" />
            <p className="flex-col-2 text-lg font-bold font-sans">
              Deposit Cash
            </p>
            <p className="flex-col-2 text-center text-sm">Make cash Deposit!</p>
          </div>
          <div
            className="bg-[#EEF2FF] min-h-[200px] rounded-md flex flex-col justify-center items-center cursor-pointer border-2 border-gray-400 shadow-md text-[#141E61] hover:shadow-[inset_-12px_-8px_40px_#46464620]"
            onClick={handleTransfer}
          >
            <img
              src={transferImg}
              className="flex-col-2 h-20 w-20"
              alt="cash"
            />
            <p className="flex-col-2 text-lg font-bold font-sans">
              Transfer Money
            </p>
            <p className="flex-col-2 text-center text-sm">
              Transfer fund to another account
            </p>
          </div>
          <div
            className="bg-[#EEF2FF] min-h-[200px] rounded-md flex flex-col justify-center items-center cursor-pointer border-2 border-gray-400 shadow-md text-[#141E61] hover:shadow-[inset_-12px_-8px_40px_#46464620]"
            onClick={handleBalance}
          >
            <img src={balanceImg} className="flex-col-2 h-20 w-20" alt="cash" />
            <p className="flex-col-2 text-lg font-bold font-sans">
              Balance Enquiry
            </p>
            <p className="flex-col-2 text-center text-sm">
              Check your balance here
            </p>
          </div>
          <div
            className="bg-[#EEF2FF] min-h-[200px] rounded-md flex flex-col justify-center items-center cursor-pointer border-2 border-gray-400 shadow-md text-[#141E61] hover:shadow-[inset_-12px_-8px_40px_#46464620]"
            onClick={handleTransactionHistory}
          >
            <img
              src={transactionImg}
              className="flex-col-2 h-20 w-20"
              alt="cash"
            />
            <p className="flex-col-2 text-lg font-bold font-sans">
              Transaction History
            </p>
            <p className="flex-col-2 text-center text-sm">
              Check your Transaction History here
            </p>
          </div>
          <div
            className="bg-[#EEF2FF] min-h-[200px] rounded-md flex flex-col justify-center items-center cursor-pointer border-2 border-gray-400 shadow-lg hover:shadow-[inset_-12px_-8px_40px_#46464620]  text-[#141E61]"
            onClick={handleUserDetails}
          >
            <img src={userImg} className="flex-col-2 h-20 w-20" alt="cash" />
            <p className="flex-col-2 text-lg font-bold font-sans">
              User Details
            </p>
            <p className="flex-col-2 text-center text-sm">
              Check your Peronal Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
