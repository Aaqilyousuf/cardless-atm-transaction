import React, { Fragment, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopUpModel from "../components/models/PopUpModel";

const Register = () => {
  const [showOtpModel, setShowOtpModel] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [isotpsent, setIsOtpSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [dob, setDob] = useState("");
  const [bank, setBank] = useState("");
  const [branch, setBranch] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [pin, setPin] = useState("");
  const [email, setEmai] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const inputRef = useRef([...Array(4)].map(() => React.createRef()));
  const navigate = useNavigate();
  // console.log(dob);
  // console.log(firstName);
  // console.log(lastName);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return false;

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
    if (inputRef.current[index + 1] && inputRef.current[index + 1].current) {
      inputRef.current[index + 1].current.focus();
    }
  };
  const handleOtp = async () => {
    // Existing code for handling OTP submission
    const joinedOtp = otp.join("");
    console.log(joinedOtp);
    const userData = {
      firstName,
      lastName,
      aadharNumber,
      PhoneNumber,
      ifscCode,
      dob,
      accountNumber,
      accountType,
      branch,
      bank,
      email,
      password,
      pin,
      joinedOtp,
    };
    try {
      const response = await fetch("http://localhost:8080/api/auth/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);
      console.log(userData);
      if (response.status === 201) {
        console.log(data);
        alert("Yep otp verified ");
        navigate("/login");
      } else {
        alert("Wrong OTP!!!");
      }
      // setVerifyOtp(true);
      // alert("OtpVerified");
    } catch (err) {
      // Handle errors
      alert("Some error happened: " + err.message);
      console.error("ERROR!!! :", err);
    }
    setOtp(new Array(4).fill(""));
    // inputRef.current[0].current.focus();
  };

  const createAccount = async (e) => {
    e.preventDefault();
    let error = {};

    if (!aadharNumber.trim() || aadharNumber.length !== 12) {
      error.aadharNumber = "Aadhar number must be 12 digits";
    } else if (!PhoneNumber.trim() || PhoneNumber.length !== 10) {
      error.pin = "PIN number must be four digits";
    } else if (!accountNumber.trim() || accountNumber.length !== 16) {
      error.accountNumber = "Card number must be 16 digits";
    } else if (!pin.trim() || pin.length !== 4) {
      error.pin = "Pin number must be 4 digits";
    } else {
      setShowOtpModel(true);
      try {
        const response = await fetch("http://localhost:8080/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.status === 201) {
          setIsOtpSent(true);
          console.log(data);
        } else {
          alert("Something wrong in sending OTP ");
        }
      } catch (err) {
        console.error("Error" + err.message);
      }
    }
    setErrors(error);
  };

  return (
    <Fragment>
      <div className="min-h-screen py-40 bg-[#F1F1F1]">
        <div className="container mx-auto">
          <div className="flex w-10/12 bg-white rounded-lg shadow-lg mx-auto overflow-hidden">
            <div className="w-1/2 flex flex-col  items-center p-12  bg-blue-500 bg-no-repeat bg-cover bg-center text-white">
              <h2 className="text-5xl mb-3  font-semibold">Welcome</h2>
              <div className="text-[22px]">
                <p className="mt-6">
                  We're all about making your online experience as awesome as
                  can be. Whether you're here to browse, shop, or just hang out,
                  we've got you covered.
                </p>
                <p className="mt-4">
                  Take a look around and discover all the cool stuff we've got
                  going on.
                </p>
                <p className="mt-4">
                  From amazing products to killer content, there's something
                  here for everyone.
                </p>
                <p className="mt-4">
                  Got questions? Don't hesitate to reach out! Our friendly team
                  is always here to help you out, so feel free to drop us a
                  message anytime.
                </p>
                <p className="mt-4">
                  Thanks for stopping by – we're so glad you're here!
                </p>
              </div>
            </div>
            <div className="w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-3">Register</h2>
              <p>Create your account</p>
              <form>
                <div className="grid grid-cols-2 gap-5 mt-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-400 py-1 px-2 focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-400 py-1 px-2 focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="date"
                    placeholder="Date of birth"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="number"
                    placeholder="Aadhar number"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                  />
                  {errors && (
                    <p className="text-red-600">{errors.aadharNumber}</p>
                  )}
                </div>
                <div className="mt-5">
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none  focus:border-2 rounded-md"
                    required
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {errors && (
                    <p className="text-red-600">{errors.PhoneNumber}</p>
                  )}
                </div>
                <div className="mt-5">
                  <select
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 focus:border-2 outline-none rounded-md"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                  >
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
                  <select
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 focus:border-2 outline-none rounded-md"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                  >
                    <option>Select Account Type</option>
                    <option>Savings Account</option>
                    <option>Current Account</option>
                  </select>
                </div>

                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Branch"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="number"
                    placeholder="Account number"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  {errors && (
                    <p className="text-red-600">{errors.accountNumber}</p>
                  )}
                </div>
                <div className="mt-5">
                  <input
                    type="number"
                    placeholder="IFSC code"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="PIN"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 outline-none focus:border-2 rounded-md"
                    required
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                  />
                  {errors && <p className="text-red-600">{errors.pin}</p>}
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 py-1 px-2 w-full focus:border-blue-500 focus:border-2 outline-none rounded-md"
                    required
                    value={email}
                    onChange={(e) => setEmai(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-500 py-1 px-2 w-full outline-none  focus:border-blue-500 focus:border-2 rounded-md"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <button
                    className="w-full bg-blue-500 py-3 text-center text-white rounded-md hover:bg-blue-700"
                    onClick={createAccount}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {isotpsent && (
        <PopUpModel
          isVisible={showOtpModel}
          closeModel={() => setShowOtpModel(false)}
        >
          <div className="">
            <h1 className="text-lg text-gray-500 font-bold c">
              Account Registeration
            </h1>
            <h2 className="text-md text-gray-400 font-medium mt-5">
              OTP sent to the registered email
            </h2>
            {otp.map((data, i) => {
              return (
                <input
                  key={i}
                  type="text"
                  value={data}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(e, i)}
                  className="border-2 p-2 mr-2 text-center mt-10 border-gray-400 outline-none w-[50px] focus:border-black"
                  ref={inputRef.current[i]}
                />
              );
            })}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium h-10 w-[110px] mt-6 rounded-md"
            onClick={handleOtp}
          >
            Submit
          </button>
        </PopUpModel>
      )}
    </Fragment>
  );
};

export default Register;
