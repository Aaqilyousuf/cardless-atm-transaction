import React, { Fragment, useState } from "react";
import { GiCash } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PopUpModel from "../components/models/PopUpModel";
const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cardNumber: null,
    pinNumber: null,
  });
  const [errors, setErrors] = useState({});

  const [showModel, setShowModel] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(null));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {};
    if (!form.cardNumber.trim() || form.cardNumber.length !== 16) {
      error.cardNumber = "Card number must be 16 digits";
    } else if (!form.pinNumber.trim() || form.pinNumber.length !== 4) {
      error.pinNumber = "Pin number Required";
    } else {
      navigate("/");
      alert("Login succesfull");
    }
    setErrors(error);
  };
  const handleSendOTP = () => {
    setShowModel(false);
    setShowOtp(true);
  };
  const handleSetNewPassword = () => {
    setShowModel(false);
    setShowOtp(false);
    setShowNewPassword(true);
  };
  const handleOtpChange = (e, index) => {
    const input = e.target;

    if (input.value && input.nextSibling) {
      input.nextSibling.focus(); // Focus on the next input
    } else if (input.value === "" && input.previousElementSibling) {
      input.previousElementSibling.focus(); // Focus on the previous input
    }
  };
  return (
    <Fragment>
      <div className="bg-[#F1F1F1] h-screen flex items-center justify-center">
        <div className="bg-white p-12 md:p-20 rounded-lg flex flex-col gap-5 items-center shadow-lg ">
          <span>
            <GiCash className="w-10 h-10" />
          </span>
          <h3 className="text-lg font-bold">Login</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="cardno" className="text-lg font-medium">
                Card number
              </label>
              <input
                type="number"
                name="cardNumber"
                class="  outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100 focus:border-blue-500"
                id="cardno"
                placeholder="0000-0000-0000-0000"
                required
                value={form.cardNumber}
                onChange={handleChange}
              />
              {errors && <p className="text-red-500">{errors.cardNumber}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="pin" className="text-lg font-medium">
                Pin
              </label>
              <input
                type="password"
                name="pinNumber"
                class=" outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100 focus:border-blue-500"
                id="pin"
                placeholder="****"
                required
                value={form.pinNumber}
                onChange={handleChange}
              />
              {errors && <p className="text-red-500">{errors.pinNumber}</p>}
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-blue-500 text-white font-medium h-10 rounded-md">
                Login
              </button>
              <p>
                Forgot{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowModel(true)}
                >
                  PIN
                </span>
              </p>
            </div>
            <p className="mt-8">
              Don't you have an account ?{" "}
              <Link to="/register" className="text-blue-500">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
      <PopUpModel isVisible={showModel} closeModel={() => setShowModel(false)}>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold mb-3">Forgot PIN</h1>
            <label htmlFor="email" className="text-md font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              class="  outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100 focus:border-blue-500"
              id="email"
              placeholder="Example@email.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-md font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              class="  outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100 focus:border-blue-500"
              id="password"
              placeholder="******"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium h-10 rounded-md"
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
          </div>
        </form>
      </PopUpModel>
      <PopUpModel isVisible={showOtp} closeModel={() => setShowOtp(false)}>
        <div className="">
          <h1 className="text-lg text-gray-500 font-bold c">Forgot PIN</h1>
          <h2 className="text-md text-gray-400 font-medium mt-5">
            OTP sent to the registered email
          </h2>
          {otp.map((data, i) => {
            return (
              <input
                type="number"
                value={data}
                maxLength={1}
                onChange={(e) => handleOtpChange(e, i)}
                className="border-2 p-2 mr-2 text-center mt-10 border-gray-400 outline-none w-[50px] focus:border-black"
              />
            );
          })}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium h-10 w-[110px] mt-6 rounded-md"
          onClick={handleSetNewPassword}
        >
          Submit
        </button>
      </PopUpModel>
      <PopUpModel
        isVisible={showNewPassword}
        closeModel={() => setShowNewPassword(false)}
      >
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold mb-3 text-gray-500">Forgot PIN</h1>
            <label htmlFor="password" className="text-md font-medium">
              Pin
            </label>
            <input
              type="password"
              name="password"
              class="outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100 focus:border-blue-500"
              id="password"
              placeholder="****"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-md font-medium">
              Confirm Pin
            </label>
            <input
              type="password"
              name="password"
              class="  outline-none px-2 py-1 rounded-lg bg-transparent w-full border-2 border-gray-100 focus:border-blue-500"
              id="password"
              placeholder="****"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium h-10 rounded-md">
              Confirm
            </button>
          </div>
        </form>
      </PopUpModel>
    </Fragment>
  );
};

export default Login;
