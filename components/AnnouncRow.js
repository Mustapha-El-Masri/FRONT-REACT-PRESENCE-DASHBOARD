import React, { useState, useEffect } from "react";
import {
  PencilAltIcon,
  XCircleIcon,
  CakeIcon,
  SpeakerphoneIcon,
  LinkIcon,
  ClipboardIcon,
  DocumentSearchIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";

function AnnouncRow({ _id, title, description, createdAt }) {
  const [openAnnounc, setOpenAnnounc] = useState(false);
  return (
    <div
      onClick={() => setOpenAnnounc(!openAnnounc)}
      key={_id}
      className="flex space-x-4 justify-between items-center group bg-myColors-300 px-4 p-3 rounded-2xl cursor-pointer hover:bg-myColors-500"
    >
      <div className="flex-col space-y-1 group">
        <div className="flex space-x-2 items-center">
          <div>
            {!openAnnounc && (
              <ChevronDownIcon className="h-4 w-4 text-myColors-600" />
            )}
            {openAnnounc && (
              <ChevronUpIcon className="h-4 w-4 text-myColors-600" />
            )}
          </div>
          {!openAnnounc && (
            <div className="text-sm text-myColors-600">{title}</div>
          )}
          {openAnnounc && (
            <div className="text-xl text-myColors-600">{title}</div>
          )}
        </div>
        {!openAnnounc && (
          <div className="text-xs text-gray-300 group-hover:text-white">
            {/* {description.substring(0, 80)}... */}
            {description.length <= 50 && description}
            {description.length > 50 && description.substring(0, 50) + "..."}
          </div>
        )}
        {openAnnounc && (
          <div className="text-sm text-gray-300 group-hover:text-white pb-4">
            {description}
          </div>
        )}
        <div className="text-xs text-gray-500 group-hover:text-white">
          {new Date(createdAt).toUTCString().substring(0, 22)}
        </div>
      </div>
      <div>
        <SpeakerphoneIcon className="h-8 w-8 text-myColors-600" />
      </div>
    </div>
  );
}

export default AnnouncRow;
