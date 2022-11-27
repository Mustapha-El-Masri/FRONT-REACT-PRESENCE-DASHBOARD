import React from "react";

function SidebarRow({ Icon, title, Plus, color }) {
  return (
    <>
      {!color && <div className="flex space-x-2 p-3 px-5 cursor-pointer items-center text-white">
        {Icon && <Icon className="h-6 w-6" />}
        <p className="flex-grow">{title}</p>
        {Plus && <Plus className="h-4 w-4" />}
      </div>}
      {color && <div className="flex space-x-2 p-3 px-5 cursor-pointer items-center text-myColors-600">
        {Icon && <Icon className="h-6 w-6" />}
        <p className="flex-grow">{title}</p>
        {Plus && <Plus className="h-4 w-4" />}
      </div>}
    </>

  );
}

export default SidebarRow;
