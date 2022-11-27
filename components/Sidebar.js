import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowCircleRightIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/solid";
import {
  UserIcon,
  UserAddIcon,
  ClipboardListIcon,
  ClipboardIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  CogIcon,
  SpeakerphoneIcon,
  DocumentTextIcon,
  LightBulbIcon
} from "@heroicons/react/outline";

import {
  ArrowCircleDownIcon as ACDI,
  ArrowCircleUpIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import Link from "next/link";
import logo from "../images/logo_1.png";
import axios from "axios";

function Sidebar({ token }) {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toUTCString().substring(5, 16);
  const [currTime, setCurrTime] = useState(time);
  const [currDate, setCurrDate] = useState(date);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };
  const updateDate = () => {
    date = new Date().toUTCString().substring(5, 16);
    setCurrDate(date);
  };
  setInterval(updateTime, 1000);
  setInterval(updateDate, 1000);

  const [open, setOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const [files, setFiles] = useState([]);
  let filtredFiles = [];

  useEffect(() => {
    getallInProgress();
  }, []);

  const getallInProgress = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/filerequests/all`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setFiles(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  filtredFiles = files.filter((file) => file.status === "In Progress");
  let num = filtredFiles.length;

  return (
    <div className="bg-myColors-100 p-4 pb-8 text-sm font-medium w-2/12 min-w-[200px] flex flex-col space-y-3 h-screen">
      <div className="pl-6">
        <Link href="/Overview">
          <Image
            alt="logo"
            src={logo}
            priority
            width="80"
            height="80"
            className=" object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex-grow scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
          <Link href="/Overview">
            <a className="w-full">
              <SidebarRow Icon={ViewGridIcon} title="Overview" />
            </a>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex hover:rounded-2xl group hover:bg-myColors-300"
        >
          <a className="w-full">
            <SidebarRow
              Icon={UserIcon}
              title="Users"
              Plus={!open ? ArrowCircleRightIcon : ArrowCircleDownIcon}
            />
          </a>
        </div>
        <div className={`${open ? "block" : "hidden"} flex flex-col`}>
          {/* <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
            <Link href="/Users/AddUser" className="">
              <a className="w-full">
                <SidebarRow Icon={UserAddIcon} title="Add User" color />
              </a>
            </Link>
          </div> */}
          <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
            <Link href="/Users/UserList">
              <a className="w-full">
                <SidebarRow Icon={ClipboardListIcon} title="User List" color />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex pr-5 items-center hover:rounded-2xl mb-1 group hover:bg-myColors-300">
          <Link href="/FileRequest/FileRequestList">
            <a className="w-full relative">
              <SidebarRow Icon={DocumentTextIcon} title="Files" />
            </a>
          </Link>
          <div className="text-center text-xs font-bold bg-myColors-600 rounded-full text-myColors-300 w-[16px] h-[16px]">
            {num}
          </div>
        </div>
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
          <Link href="/Tasks">
            <a className="w-full">
              <SidebarRow Icon={ClipboardCheckIcon} title="Tasks" />
            </a>
          </Link>
        </div>
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
          <Link href="/Schedule">
            <a className="w-full">
              <SidebarRow Icon={CalendarIcon} title="Schedule" />
            </a>
          </Link>
        </div>

        {openMore && (
          <div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
              <Link href="/Teams/TeamsList">
                <a className="w-full">
                  <SidebarRow Icon={UserGroupIcon} title="Teams" />
                </a>
              </Link>
            </div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
              <Link href="/Announcements">
                <a className="w-full">
                  <SidebarRow Icon={SpeakerphoneIcon} title="Announcements" />
                </a>
              </Link>
            </div>
          </div>
        )}
        <div
          onClick={() => setOpenMore(!openMore)}
          className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 "
        >
          <a className="w-full">
            {!openMore && <SidebarRow Icon={ACDI} title="See more" />}
            {openMore && (
              <SidebarRow Icon={ArrowCircleUpIcon} title="See less" />
            )}
          </a>
        </div>
      </div>
      <div className="bg-myColors-300 rounded-2xl flex-col space-y-4 py-6 p-3 text-white">
        <div>
          <LightBulbIcon className="h-8 w-8 mx-auto" />
          <h1 className=" text-myColors-600 text-center py-4">
            “However difficult life may seem, there is always something you can
            do and succeed at.”
          </h1>
          <h1 className=" text-right">Stephen Hawking</h1>
        </div>
        {/* <div className="text-center text-3xl">{time}</div> */}
      </div>
      <div className="bg-myColors-300 rounded-2xl flex-col space-y-4 py-4 p-3 text-white">
        <div className="text-center">{date}</div>
        {/* <div className="text-center text-3xl">{time}</div> */}
      </div>
    </div>
  );
}

export default Sidebar;
