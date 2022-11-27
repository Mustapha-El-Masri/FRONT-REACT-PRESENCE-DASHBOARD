import React, { useEffect, useState } from "react";
import { PencilAltIcon, XCircleIcon, SpeakerphoneIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Pagination from "./Pagination";
import RhsServices from "../services/RhService";
import AnnouncRow from "../components/AnnouncRow";
import axios from "axios";

function AnnouncContent() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getallAnnouncements();
  }, []);

  const getallAnnouncements = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/announcements/`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setAnnouncements(data.data);
          console.log(announcements);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-28 pb-6 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden flex flex-col">
        {announcements.length === 0 && (
          <div className="grid place-items-center py-20">
            <SpeakerphoneIcon className="h-20 w-20 text-myColors-600" />
            <div className=" text-sm text-gray-500 pt-2">No announcements</div>
          </div>
        )}
        {announcements.length !== 0 && (
          <div className="flex-col space-y-2">
            {announcements.map(({ _id, title, description, createdAt }) => (
              <AnnouncRow
                key={_id}
                title={title}
                description={description}
                createdAt={createdAt}
              />
            )).sort().reverse()}
          </div>
        )}
    </div>
  );
}

export default AnnouncContent;
