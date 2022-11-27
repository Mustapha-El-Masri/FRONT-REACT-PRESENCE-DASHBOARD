import {
  SearchIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import {
  ClipboardCheckIcon,
  UserIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import RowCard from "./RowCard";
import SmallSquare from "./SmallSquare";
import Link from "next/link";
import axios from "axios";

function RightSidebar() {
  const [rhs, setRhs] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/users/all",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setRhs(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  let filtredUsers = [];
  filtredUsers = rhs.filter(
    (user) => user.status === "Pending" && user.role !== "admin"
  );

  return (
    <div className="bg-myColors-100 text-white pt-6 pb-8 px-4 text-sm w-3/12 min-w-[200px] flex flex-col space-y-5 h-screen">
      <div className="flex h-11 cursor-pointer items-center rounded-xl bg-myColors-200 mb-6">
        <input
          className="pl-4 flex-grow h-full text-sm focus:ring-0 focus:border-0 font-normal rounded-bl-xl rounded-tl-xl text-white items-center bg-transparent outline-none border-0"
          type="text"
          placeholder="Find something..."
        />
        <SearchIcon className="h-10 w-10 px-2 hover:opacity-100 text-white opacity-60" />
      </div>
      <div className="flex-grow flex-col space-y-3">
        <h2 className="font-semibold text-xl font-fancy">Admin Panel</h2>
        <div className="flex-col space-y-4 pt-1">
          <div className=" bg-myColors-300 group p-5 rounded-xl flex items-center space-x-6 cursor-pointer hover:bg-green-500">
            <Link href="/AssignTasks">
              <a className="w-full flex space-x-6">
                <div>
                  <ClipboardCheckIcon className="h-10 w-10 text-green-500 bg-green-200 p-1 rounded-xl" />
                </div>
                <div className="flex-col space-y-1">
                  <p className=" font-medium">Assign Tasks</p>
                  <p className="text-xs text-gray-500 group-hover:text-white">
                    Assign tasks to your teams
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className=" bg-myColors-300 group p-5 rounded-xl flex items-center space-x-6 cursor-pointer hover:bg-violet-500">
            <Link href="/PublishAnnoucement">
              <a className="w-full flex space-x-6">
                <div>
                  <SpeakerphoneIcon className="h-10 w-10 text-violet-500 bg-violet-200 p-1 rounded-xl" />
                </div>
                <div className="flex-col space-y-1">
                  <p className="font-medium">Publish an Announcement</p>
                  <p className="text-xs text-gray-500 group-hover:text-white">
                    Publish an Ann. to your employees
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-col relative scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
        <h2 className="fixed bg-myColors-100 font-semibold text-xl w-full pb-4 z-50 font-fancy">
          New employees
        </h2>
        <div className="pt-9">
          {filtredUsers?.map(
            (
              { _id, firstname, lastname, token, getAll, status, createdAt },
              i
            ) => (
              <RowCard
                id={_id}
                getAll={getAll}
                key={_id}
                firstname={firstname}
                lastname={lastname}
                _id={_id}
                token={token}
                status={status}
                createdAt={createdAt}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
