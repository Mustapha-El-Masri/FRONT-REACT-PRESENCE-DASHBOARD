import React from "react";

function SmallSquare({ Icon, title, color }) {
  return (
    <div className="flex flex-col items-center group space-y-1 hover:scale-95 hover:transition-transform hover:duration-200 hover:ease-in cursor-pointer">
      {/* {!color && <Icon className="h-14 w-14 bg-myColors-200 text-myColors-600 p-2 rounded-2xl" />}
      {color && <Icon className="h-14 w-14 bg-myColors-200 text-myColors-400 p-2 rounded-2xl" />} */}
      <Icon className="h-14 w-14 bg-myColors-200 text-myColors-400 p-2 rounded-2xl" />
      <h3 className="opacity-80 group-hover:opacity-100">{title}</h3>
    </div>
  );
}

export default SmallSquare;
