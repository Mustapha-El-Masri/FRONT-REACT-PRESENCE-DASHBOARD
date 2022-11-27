import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, ArcElement);

function DoughnutChart({ total1825, total2635,total3544, totalsup44 }) {
  var data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: [" 18-24 ", " 25-34 ", " 35-44 ", " 45+ "],
    datasets: [
      {
        label: "# of Files",
        data: [total1825, total2635, total3544, totalsup44],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 0,
        hoverOffset: 6,
        offset: 0,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 1)',
        },
        align: 'start',
      }
    }
  };

  return (
    <div className="">
      <Doughnut data={data} options={options} height={400} width={600} />
    </div>
  );
}

export default DoughnutChart;
