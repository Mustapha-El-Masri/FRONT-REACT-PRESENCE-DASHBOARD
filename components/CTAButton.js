import React from "react";

function CTAButton({ title }) {
  return (
    <div className="">
      <button
        type="submit"
        className="inline-flex justify-center w-full py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-myColors-400 hover:bg-myColors-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myColors-400"
      >
        {title}
      </button>
    </div>
  );
}

export default CTAButton;
