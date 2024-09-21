import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <>
      <div className="bg-gray-100 p-4 mt-8 flex justify-center">
        <div onClick={() => handlePrev()} className="px-8 hover:cursor-pointer flex justify-center items-center">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div className="font-bold mx-2 rounded-full w-[2rem] h-[2rem] flex justify-center items-center">
          {pageNo - 1}
        </div>
        <div className="font-bold mx-2 rounded-full bg-blue-600 w-[2rem] h-[2rem] flex justify-center items-center text-white">
          {pageNo}
        </div>
        <div className="font-bold mx-2 rounded-full w-[2rem] h-[2rem] flex justify-center items-center">
          {pageNo + 1}
        </div>
        <div onClick={()=> handleNext()} className="px-8 hover:cursor-pointer flex justify-center items-center">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </>
  );
}

export default Pagination;
