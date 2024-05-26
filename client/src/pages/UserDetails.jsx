import React, { useContext } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../context/auth-context";
const UserDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <div>
      <Header />
      <div className="w-full mt-5 flex justify-center items-center flex-col">
        <div className="flex justify-between">
          <div className="text-7xl">
            <p>
              <FaUserCircle />
            </p>
          </div>
          <div className="ml-8">
            <h1 className="text-gray-700 font-semibold">
              {user ? `${user.firstName} ${user.lastName}` : "Guest"}
            </h1>
            <p className="text-gray-700 font-semibold">
              {user ? `${user.accountNumber}` : "Guest"}
            </p>
          </div>
        </div>
        <hr className="text-gray-600 h-1" />
        <div className="grid md:grid-cols-2 md:w-[800px] gap-4 border-2 border-gray-600 rounded-md shadow-md p-5 mt-8 mb-5">
          <div className="min-h-[50px] md:col-span-2 bg-[#EEF2FF] rounded-md flex justify-center items-center text-gray-600 p-4 border-2 border-gray-400">
            <div className="text-center">
              <h1 className="font-bold text-[20px] text-gray-400">BALANCE</h1>
              <p className="font-bold text-[20px] mt-1">
                {user ? `${user.balance}` : "Guest"}
              </p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                FIRST NAME
              </h1>
              <p>{user ? `${user.firstName}` : "Guest"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                LAST NAME
              </h1>
              <p>{user ? `${user.lastName}` : "Guest"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                DATE OF BIRTH
              </h1>
              <p>{user ? `${user.dateOfBirth}` : "00-00-0000"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                AADHAR NUMBER
              </h1>
              <p>{user ? `${user.aadharNumber}` : "0000-0000-0000"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                PHONE NUMBER
              </h1>
              <p>{user ? `${user.phoneNumber}` : "0000000000"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">BANK</h1>
              <p>{user ? `${user.bank}` : "bank"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                BRANCH
              </h1>
              <p>{user ? `${user.branch}` : "00-00-0000"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                ACCOUNT NUMBER
              </h1>
              <p>{user ? `${user.accountNumber}` : "00-00-0000"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                ACCOUNT TYPE
              </h1>
              <p>{user ? `${user.accountType}` : "savings"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                IFSC CODE
              </h1>
              <p>{user ? `${user.ifscCode}` : "0000000000"}</p>
            </div>
          </div>
          <div className="min-h-[40px]  bg-white mb-4">
            <div className="text-center">
              <h1 className="text-[14px] text-gray-600 font-extrabold">
                EMAIL
              </h1>
              <p>{user ? `${user.email}` : "guest@email.com"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
