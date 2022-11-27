import React, { useState } from "react";
import Image from "next/image";
import bg from "../images/bg.jpg";
import logo from "../images/logo_1.png";
import axios from "axios";
import { LockClosedIcon, LockOpenIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import router from "next/router";
import authService from "../services/authService";

import cookie from "js-cookie";
import nextCookie from "next-cookies";

function Login() {
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .create(data)
      .then((res) => {
        console.log(res);
        setData(res.data);
        cookie.set("token", res.data.token, { expires: 1 });
        cookie.set("email", data.email, { expires: 1 });
        router.push("/Overview");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid place-items-center h-screen w-screen relative">
      <div className="text-white z-50 absolute right-10 top-10"></div>
      <Image
        alt=""
        src={bg}
        priority
        layout="fill"
        className=" object-cover object-bottom"
      />
      <div className="backdrop-blur-sm bg-white/10 text-white z-50 rounded-3xl shadow-[rgba(0,0,0,0.8)] shadow-xl">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <Image
                alt="logo"
                src={logo}
                priority
                width="150"
                height="150"
                className=" object-contain"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-white font-fancy">
                Sign in to your Dashboard Admin
              </h2>
              <p className="mt-2 text-center text-sm font-medium text-myColors-600">
                &quot;PRESENCE&quot;
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm flex-col space-y-2 py-6">
                <div className="flex relative">
                  <UserIcon className="w-5 h-5 absolute left-3 bottom-[9px]" />
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    onChange={onChangeHandler}
                    type="email"
                    autoComplete="email"
                    required
                    className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-10 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="flex relative">
                  <LockClosedIcon className="w-5 h-5 absolute left-3 bottom-[9px]" />
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    onChange={onChangeHandler}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="backdrop-blur-sm bg-white/10 rounded-full border-0 w-full focus:ring-0 px-10 py-2 placeholder-gray-400 text-white focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* <div className="flex items-center justify-end">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-white hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="text-sm">
                  <Link href="/SignUp">
                    <a
                      className="font-medium text-white hover:text-indigo-500"
                    >
                      Sign Up
                    </a>
                  </Link>
                </div>
              </div> */}

              <div className="">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 group-hover:hidden text-white opacity-80"
                      aria-hidden="true"
                    />
                    <LockOpenIcon
                      className="h-5 w-5 hidden group-hover:block"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = (ctx) => {
  const { token } = nextCookie(ctx);

  if (token) {
    return {
      redirect: {
        destination: "/Dashboard",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Login;
