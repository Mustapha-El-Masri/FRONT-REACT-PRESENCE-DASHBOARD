import Head from "next/head";
import Image from "next/image";
import HomeContent from "../../components/HomeContent";
import KanbanContent from "../../components/KanbanContent";
import Navbar from "../../components/Navbar";
import RightSidebar from "../../components/RightSidebar";
import ScheduleContent from "../../components/ScheduleContent";
import Sidebar from "../../components/Sidebar";
import { requirePageAuth } from "../../utils/auth";
import {
  UserGroupIcon,
  DotsVerticalIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TeamCard from "../../components/TeamCard";
import axios from "axios";

function TeamsList() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/sections",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setTeams(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };
  return (
    <div className="flex">
      <Head>
        <title>PFE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.syncfusion.com/ej2/20.1.55/material.css"
          rel="stylesheet"
        ></link>
      </Head>

      <Sidebar />
      <div className=" bg-myColors-100 h-screen w-7/12 relative">
        <Navbar navBarTitle_1="Teams" navBarTitle_2="" />
        {/* <KanbanContent /> */}
        <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden grid grid-cols-2 gap-4">
          {teams?.map(({ _id, name, employees, teamLeader, tasks }) => (
            <TeamCard
              id={_id}
              _id={_id}
              getAll={getAll}
              key={_id}
              name={name}
              employees={employees}
              teamLeader={teamLeader}
              tasks={tasks}
            />
          ))}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}

export const getServerSideProps = requirePageAuth;

export default TeamsList;