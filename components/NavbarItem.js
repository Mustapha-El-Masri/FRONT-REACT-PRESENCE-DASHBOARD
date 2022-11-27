import React from "react";

function NavbarItem({ Icon, alert }) {
  return (
    <div className="text-myColors-400 cursor-pointer group flex items-center relative">
      <Icon className="h-12 w-12 group-hover:bg-myColors-200 bg-myColors-100 rounded-2xl p-2" />
      {alert && (
        <div className="w-2 h-2 rounded-full bg-myColors-600 absolute top-3 right-3 animate-bounce"></div>
      )}
    </div>
  );
}

export default NavbarItem;
