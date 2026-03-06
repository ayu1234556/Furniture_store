import React from "react";

const Section = () => {
  return (
    <div className="border-2 border-black mx-4 my-6 p-6">
      <div className="border-2 border-black p-6">

        <div className="flex justify-center mb-6">
          <span className="text-2xl text-amber-800 underline font-bold">
            Category
          </span>
        </div>

        <div className="border-2 border-black p-4 flex justify-center gap-6">
          <div className="w-40 h-28 border-2 border-black hover:bg-green-300"></div>
          <div className="w-40 h-28 border-2 border-black hover:bg-green-300"></div>
          <div className="w-40 h-28 border-2 border-black hover:bg-green-300"></div>
          <div className="w-40 h-28 border-2 border-black hover:bg-green-300"></div>
        </div>

      </div>
    </div>
  );
};

export default Section;