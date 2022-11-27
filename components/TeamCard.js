import React, { useState } from "react";
import {
  UserGroupIcon,
  DotsVerticalIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

function TeamCard({ id, _id, name, employees, teamLeader, tasks }) {
  const [open1, setOpen1] = useState(false);
  const [copy, setCopy] = useState(false);

  return (
    <div className="relative bg-myColors-700 rounded-xl flex items-center justify-center space-x-6 hover:bg-green-500">
      <div>
        <UserGroupIcon className="h-14 w-14 text-green-500 bg-green-200 p-2 rounded-xl" />
      </div>
      <div className="flex-col space-y-1">
        <p className=" text-xs">Team</p>
        <p className="  text-2xl font-fancy">{name}</p>
      </div>
      <DotsVerticalIcon
        onClick={() => setOpen1(!open1)}
        className="h-10 w-10 hover:text-green-500 cursor-pointer hover:bg-white p-2 rounded-full absolute right-1 top-1"
      />
      {open1 && (
        <div className="absolute top-12 right-1 bg-myColors-300 rounded-lg p-1">
          <Link href={"/Teams/TeamMembers/" + _id} key={_id}>
            <div className="flex cursor-pointer items-center space-x-4 p-2 px-4 hover:bg-myColors-400 rounded-lg">
              <UserGroupIcon className="h-5 w-5" />
              <p>Members</p>
            </div>
          </Link>
          <div
            onClick={() => {
              navigator.clipboard.writeText(id);
              setCopy(true);
            }}
            className="flex cursor-pointer items-center space-x-4 p-2 px-4 hover:bg-myColors-400 rounded-lg"
          >
            <ClipboardCheckIcon className="h-5 w-5" />
            {!copy && <p>Copy Team Id</p>}
            {copy && <p>Copied!</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamCard;
