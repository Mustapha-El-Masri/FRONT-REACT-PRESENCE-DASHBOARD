import React, { useState, useEffect, useRef } from "react";
import CTAButton from "./CTAButton";
import RhService from "../services/RhService";
import Swal from "sweetalert2";
import route from "next/router";
import axios from "axios";
import Image from "next/image";
import img from "../images/cas.jpg";
import {
  CakeIcon,
  BriefcaseIcon,
  LocationMarkerIcon,
  UserIcon,
  PhoneIcon,
  LoginIcon,
  CalendarIcon,
  AtSymbolIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";

function AddToTeamContent({ id, token }) {
  const [data, setData] = useState({});
  const [image, setImage] = useState();
  const [rhs, setRhs] = useState([]);
  const [rh, setRh] = useState([]);

  const getById = () => {
    RhService.getById(id)
      .then((res) => {
        console.log(res.data.data);
        console.log("profileUser: " + id);
        setRh(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getById();
  }, [id]);

  const input1 = useRef();
  const input2 = useRef();

  const getAll = () => {
    RhsServices.getAll()
      .then((res) => {
        setRhs(res.data.data);
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstname", data.firstname);
    form.append("lastname", data.lastname);
    form.append("email", data.email);
    form.append("image", data.image);

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: "Don't save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const config = {
          method: "PUT",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: data,
        };
        axios(config).then((res) => {
          getAll();
        });
        route.push("/Users/UserList");
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleImageChange = (e, fn) => {
    fn(e.target.files[0]);
    // markInputAsTrue(e.target.id);
  };

  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="flex items-center">
        <div className="flex space-x-4 w-1/2">
          <div className="">
            <Image
              alt="logo"
              src={img}
              priority
              width="80"
              height="80"
              className="object-cover cursor-pointer rounded-full"
            />
          </div>
          <div className="flex-col space-y-2">
            <div className="flex space-x-2 items-center">
              <div className=" text-2xl">
                {rh.firstname} {rh.lastname}
              </div>
            </div>
            <div className="flex-col">
              <h2 className="text-myColors-600 font-light text-sm">
                Employee ID:
              </h2>
              <h2 className="text-sm">#{id}</h2>
            </div>
          </div>
        </div>
        <div className="flex-col space-y-2 text-sm">
          <div className="flex space-x-2 items-center">
            <BriefcaseIcon className="w-6 h-6 text-myColors-600" />
            <p className=" text-myColors-600">Designation:</p>
            <p>{rh.designation}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <DocumentTextIcon className="w-6 h-6 text-myColors-600" />
            <p className=" text-myColors-600">Contract Type:</p>
            <p>CDD</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-6">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div className="mt-10 sm:mt-0 mb-4">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 font-fancy">
                Add {rh.firstname} {rh.lastname} to another team
              </h3>
              <p className="mt-1 text-sm opacity-50">
                {rh.firstname} {rh.lastname} will be in both teams, you can
                delete him from his old team.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {/* <form action="#" method="POST" onSubmit={handleSubmit}> */}
            <form action="#" method="POST">
              <div className="shadow sm:rounded-2xl sm:overflow-hidden">
                <div className="px-4 py-5 bg-myColors-100 space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label
                        htmlFor="teamId"
                        className="block text-sm font-medium text-white"
                      >
                        Team Id
                      </label>
                      {/* <input
                        type="text"
                        ref={input1}
                        name="section"
                        id="section"
                        onChange={(e) => {
                          handleInputChange(e, setTask);
                        }}
                        autoComplete="teamId"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-myColors-200"
                      /> */}
                      <input
                        type="text"
                        ref={input1}
                        name="section"
                        id="section"
                        autoComplete="teamId"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-myColors-200"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                      <label
                        htmlFor="deadline"
                        className="block text-sm font-medium text-white"
                      >
                        Employee Id
                      </label>
                      {/* <input
                        type="text"
                        ref={input2}
                        name="enddate"
                        id="enddate"
                        onChange={(e) => {
                          handleInputChange(e, setTask);
                        }}
                        autoComplete="deadline"
                        value={id}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-myColors-200"
                      /> */}
                      <input
                        type="text"
                        ref={input2}
                        name="enddate"
                        id="enddate"
                        autoComplete="deadline"
                        value={id}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-myColors-200"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-myColors-300 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToTeamContent;
