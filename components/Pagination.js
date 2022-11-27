import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Pagination() {
  return (
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
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md   bg-myColors-200 text-sm font-medium text-white hover:bg-myColors-400"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 -indigo-500 text-indigo-600", Default: "bg-myColors-200  text-white hover:bg-myColors-400" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-myColors-400 -indigo-500 text-white relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-myColors-200  text-white hover:bg-myColors-400 relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-myColors-200  text-white hover:bg-myColors-400 hidden md:inline-flex relative items-center px-4 py-2  text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2   bg-myColors-200 text-sm font-medium text-white">
              ...
            </span>
            <a
              href="#"
              className="bg-myColors-200  text-white hover:bg-myColors-400 hidden md:inline-flex relative items-center px-4 py-2  text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="bg-myColors-200  text-white hover:bg-myColors-400 relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              className="bg-myColors-200  text-white hover:bg-myColors-400 relative inline-flex items-center px-4 py-2  text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md   bg-myColors-200 text-sm font-medium text-white hover:bg-myColors-400"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
