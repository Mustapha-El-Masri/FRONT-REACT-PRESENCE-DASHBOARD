import React, { useEffect, useState } from "react";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import UserRow from "./UserRow";
import Pagination from "./Pagination";
import RhsServices from "../services/RhService";
import axios from "axios";

function UserListContent({ token }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const PAGE_SIZE = 8;

  const [rhs, setRhs] = useState([]);
  useEffect(() => {
    getAll();
  }, [pageNumber]);
  const getAll = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/users?page=${pageNumber}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setRhs(data.data);
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
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-16 pb-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden flex flex-col">
      <div className="flex-col space-y-2 flex-grow">
        {rhs?.map(
          (
            {
              _id,
              firstname,
              lastname,
              date_of_birth,
              gender,
              remote,
              status,
              role,
              image,
              email,
              location,
              designation,
            },
            i
          ) => (
            <UserRow
              id={_id}
              getAll={getAll}
              key={_id}
              firstname={firstname}
              lastname={lastname}
              location={location}
              designation={designation}
              date_of_birth={date_of_birth}
              email={email}
              gender={gender}
              remote={remote}
              status={status}
              _id={_id}
              image={image}
              role={role}
              token={token}
            />
          )
        )}
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
export default UserListContent;
