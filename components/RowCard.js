import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";

function RowCard({
  _id,
  firstname,
  lastname,
  token,
  getAll,
  status,
  createdAt,
  Icon,
}) {
  return (
    <div className="flex group space-x-4 items-center bg-myColors-300 rounded-2xl p-4 mt-4 hover:bg-myColors-400">
      <UserIcon className="h-8 w-8 rounded-full bg-violet-500 p-1" />
      <div className="flex-grow">
        <h2 className="font-medium">
          {firstname} {lastname}
        </h2>
        <h3 className="text-xs text-gray-500 group-hover:text-white">
          {new Date(createdAt).toUTCString().substring(5, 22)}
        </h3>
      </div>
      <div>
        <ExclamationCircleIcon className="h-8 w-8 text-yellow-500" />
      </div>
    </div>
  );
}

export default RowCard;
