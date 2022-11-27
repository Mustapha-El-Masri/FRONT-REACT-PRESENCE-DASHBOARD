import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function BarChart2() {
  var data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Presential",
        data: [2, 1, 2, 6, 9, 9],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 3,
        barPercentage: 0.5,
      },
      {
        label: "Online",
        data: [8, 9, 8, 4, 1, 1],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 3,
        barPercentage: 0.5,
      },
    ],
  };

  var options = {
    indexAxis: "x",
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          display: true,
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} height={400} width={600} />
    </div>
  );
}

export default BarChart2;
