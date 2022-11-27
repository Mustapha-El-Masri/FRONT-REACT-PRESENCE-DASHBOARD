import React from "react";
import Image from "next/image";
import {
  PencilAltIcon,
  TrashIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  LockClosedIcon,
  LockOpenIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  UserIcon,
} from "@heroicons/react/solid";
import RhsServices from "../services/RhService";
import Swal from "sweetalert2";
import Link from "next/link";
import { requirePageAuth } from "../utils/auth";
import axios from "axios";

function UserRow({
  id,
  _id,
  firstname,
  lastname,
  date_of_birth,
  gender,
  remote,
  role,
  email,
  location,
  designation,
  status,
  image,
  getAll,
  token,
  ...section
}) {
  const deleteRh = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete user "${firstname} ${lastname}" !`,
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          method: "DELETE",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  //////
  console.log("yyyyyyyyy" + section);

  const updateStatusToApproved = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          method: "PUT",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { status: "Approved" },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire(
          "Approved!",
          "Your employee account has been approved.",
          "success"
        );
      }
    });
  };

  const updateStatusToPending = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Pending it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          method: "PUT",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { status: "Pending" },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire("Pending!", "Your employee account is pending.", "success");
      }
    });
  };

  const updateRemote = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Switch it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          method: "PUT",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { remote: !remote },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire("Switching!", "", "success");
      }
    });
  };

  return (
    <div className="flex items-center text-xs bg-myColors-300 hover:bg-myColors-400 py-1 rounded-xl ">
      <div className="w-4/12 flex items-center space-x-2 pl-6 py-1">
        {/* <img
          alt=""
          src={"http://localhost:5000/getImage/" + image}
          width={35}
          height={35}
          layout="fixed"
          className=" object-cover rounded-full"
        /> */}
        {role === "admin" && (
          <Image
            alt=""
            src="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F02%2F1192510411-850x560.jpeg"
            width={28}
            height={28}
            layout="fixed"
            className=" object-cover rounded-full"
          />
        )}
        {role !== "admin" && (
          <UserIcon className="h-7 w-7 rounded-full bg-green-500 p-1" />
        )}
        <h4 className="">
          {firstname} {lastname}
        </h4>
      </div>
      <div className="flex justify-between space-x-3 w-3/12 items-center pr-28">
        <div className="">
          {role === "admin" && <></>}
          {role !== "admin" && (
            <h4 className="">
              {remote === false && "Remote"}
              {remote === true && "Presential"}
            </h4>
          )}
        </div>
        {role === "admin" && <></>}
        {role !== "admin" && (
          <div
            className="opacity-70 hover:opacity-100 bg-teal-500 flex-col rounded-full w-6 h-6 cursor-pointer"
            onClick={(e) => updateRemote(id)}
          >
            <ArrowRightIcon className="h-4 w-4  text-sky-900 -mb-2 mx-auto" />
            <ArrowLeftIcon className="h-4 w-4 text-sky-900 mx-auto" />
          </div>
        )}
      </div>
      <div className="w-3/12 flex justify-between items-center space-x-3">
        <div className="">
          {role === "admin" && <h4 className=""></h4>}
          {role !== "admin" && <h4 className="">{status}</h4>}
        </div>
        {firstname === "Admin" && <></>}
        {firstname !== "Admin" && (
          <div className="pr-28">
            <div className="relative group">
              {status === "Pending" && (
                <div onClick={(e) => updateStatusToApproved(id)}>
                  <LockClosedIcon className="h-5 w-5 cursor-pointer text-red-500" />
                  <p className="hidden text-xs mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
                    Approved!
                  </p>
                </div>
              )}
              {status === "Approved" && (
                <div onClick={(e) => updateStatusToPending(id)}>
                  <LockOpenIcon className="h-5 w-5 cursor-pointer text-green-500" />
                  <p className="hidden text-xs mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
                    Pending!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {role === "admin" && <div className="w-2/12"></div>}
      {role !== "admin" && (
        <div className="w-2/12 flex">
          <Link href={"/Users/ProfileUser/" + _id} key={_id}>
            <div className="relative group">
              <a>
                <ExternalLinkIcon className="h-9 w-9 hover:bg-myColors-200 text-yellow-500 p-2 rounded-xl cursor-pointer" />
              </a>
              <p className="hidden text-xs z-50 mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
                Profile!
              </p>
            </div>
          </Link>
          <Link href={"/Users/UpdateUser/" + _id} key={_id}>
            <div className="relative group">
              <a>
                <PencilAltIcon className="h-9 w-9 hover:bg-myColors-200 text-blue-500 p-2 rounded-xl cursor-pointer" />
              </a>
              <p className="hidden text-xs z-50 mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
                Update!
              </p>
            </div>
          </Link>
          <div className="relative group">
            <TrashIcon
              className="h-9 w-9 hover:bg-myColors-200 text-red-500 p-2 rounded-xl cursor-pointer"
              onClick={(e) => deleteRh(id)}
            />
            <p className="hidden text-xs z-50 mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
              Delete!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export const getServerSideProps = requirePageAuth;

export default UserRow;
