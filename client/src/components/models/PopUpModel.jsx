import React from "react";

const PopUpModel = ({ isVisible, closeModel, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModel();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="min-h-[] w-[400px] flex flex-col animate-fadeIn">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => closeModel()}
        >
          X
        </button>
        <div className="bg-white p-4 rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default PopUpModel;
