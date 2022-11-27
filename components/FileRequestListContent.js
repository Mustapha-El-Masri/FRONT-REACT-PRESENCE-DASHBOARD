import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FileRequestRow from "./FileRequestRow";
import Pagination from "../components/Pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { data } from "autoprefixer";

function FileRequestListContent({ token }) {
  const [ready, setReady] = useState(false);
  const [inprogress, setInprogress] = useState(false);
  const [refused, setRefused] = useState(false);
  const [all, setAll] = useState(true);

  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const PAGE_SIZE = 7;

  const [files, setFiles] = useState([]);
  useEffect(() => {
    getAll();
  }, [pageNumber]);

  const getAll = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/filerequests?page=${pageNumber}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setFiles(data.data);
          setNumberOfPages(data.totalPages);
          setTotalNumberOfPages(data.total);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const goToPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const goToNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-4 pb-0 p-8 text-white  text-xs scrollbar scrollbar-thumb-hidden scrollbar-track-hidden flex flex-col">
      <div className="flex-grow">
        <div className="">
          <p className=" text-xl">Filter</p>
          <div className="my-2 flex-col space-x-2">
            <button
              className={`${
                ready ? "bg-myColors-600" : "bg-myColors-500"
              } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
              onClick={() => {
                setReady(true);
                setInprogress(false);
                setRefused(false);
                setAll(false);
              }}
            >
              Ready
            </button>
            <button
              className={`${
                inprogress ? "bg-myColors-600" : "bg-myColors-500"
              } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
              onClick={() => {
                setReady(false);
                setInprogress(true);
                setRefused(false);
                setAll(false);
              }}
            >
              In Progress
            </button>
            <button
              className={`${
                refused ? "bg-myColors-600" : "bg-myColors-500"
              } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
              onClick={() => {
                setReady(false);
                setInprogress(false);
                setRefused(true);
                setAll(false);
              }}
            >
              Refused
            </button>
            <button
              className={`${
                all ? "bg-myColors-600" : "bg-myColors-500"
              } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
              onClick={() => {
                setReady(false);
                setInprogress(false);
                setRefused(false);
                setAll(true);
              }}
            >
              All
            </button>
          </div>
        </div>

        <div className="pt-6 mb-4 rounded-2xl bg-myColors-200">
          <div className="flex text-white text-sm">
            <h4 className="w-3/12 pl-6">Name</h4>
            <h4 className="w-2/12">Wording</h4>
            <h4 className="w-2/12 pl-6">Status</h4>
            <h4 className="w-3/12">Date</h4>
            <h4 className="w-1/12">Actions</h4>
            <h4 className="w-1/12 text-center">Notif.</h4>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>

        <div className="flex-col space-y-2">
          {ready &&
            files
              ?.filter((file) => file.status === "Ready")
              .map(({ _id, name, wording, status, createdAt }, i) => (
                <FileRequestRow
                  id={_id}
                  getAll={getAll}
                  key={_id}
                  number={i}
                  user={user}
                  wording={wording}
                  _id={_id}
                  status={status}
                  createdAt={createdAt}
                  token={token}
                />
              ))}
          {inprogress &&
            files
              ?.filter((file) => file.status === "In Progress")
              .map(({ _id, user, wording, status, createdAt }, i) => (
                <FileRequestRow
                  id={_id}
                  getAll={getAll}
                  key={_id}
                  number={i}
                  user={user}
                  wording={wording}
                  _id={_id}
                  status={status}
                  createdAt={createdAt}
                  token={token}
                />
              ))}
          {refused &&
            files
              ?.filter((file) => file.status === "Refused")
              .map(({ _id, user, wording, status, createdAt }, i) => (
                <FileRequestRow
                  id={_id}
                  getAll={getAll}
                  key={_id}
                  number={i}
                  user={user}
                  wording={wording}
                  _id={_id}
                  status={status}
                  createdAt={createdAt}
                  token={token}
                />
              ))}
          {all &&
            files.map(({ _id, user, wording, status, createdAt }, i) => (
              <FileRequestRow
                id={_id}
                getAll={getAll}
                key={_id}
                number={i}
                user={user}
                wording={wording}
                _id={_id}
                status={status}
                createdAt={createdAt}
                token={token}
              />
            ))}
        </div>
      </div>

      <div className="py-4">
        <div className="bg-myColors-300 px-4 py-3 flex items-center justify-between rounded-xl sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2   text-sm font-medium rounded-md text-white bg-myColors-200 hover:bg-myColors-400"
            >
              Previous
            </a>
            <a
              href="#"
              className="ml-3 relative inline-flex items-center px-4 py-2   text-sm font-medium rounded-md text-white bg-myColors-200 hover:bg-myColors-400"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white">
                Showing{" "}
                <span className="font-medium">
                  {pageNumber * PAGE_SIZE + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {pageNumber * PAGE_SIZE + PAGE_SIZE < totalNumberOfPages
                    ? pageNumber * PAGE_SIZE + PAGE_SIZE
                    : totalNumberOfPages}
                </span>{" "}
                of <span className="font-medium">{totalNumberOfPages}</span>{" "}
                results
              </p>
            </div>
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={goToPrevious}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md   bg-myColors-200 text-sm font-medium text-white hover:bg-myColors-400"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                {/* Current: "z-10 bg-indigo-50 -indigo-500 text-indigo-600", Default: "bg-myColors-200  text-white hover:bg-myColors-400" */}
                {pages.map((pageIndex, id) => (
                  <button
                    onClick={() => setPageNumber(pageIndex)}
                    aria-current="page"
                    className={`z-10 bg-myColors-200 hover:bg-myColors-400 text-white relative inline-flex items-center px-4 py-2  text-sm font-medium ${
                      pageNumber === pageIndex
                        ? "bg-myColors-400"
                        : "bg-myColors-200"
                    }`}
                    key={id}
                  >
                    {pageIndex + 1}
                  </button>
                ))}
                <button
                  onClick={goToNext}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md   bg-myColors-200 text-sm font-medium text-white hover:bg-myColors-400"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileRequestListContent;
