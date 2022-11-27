import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

function LineChart() {
  var data = {
    // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    labels: ["January", "February", "March", "April", "May", "June"],
    // datasets: [
    //   {
    //     label: "# of Files",
    //     // data: [12, 19, 3, 5, 2, 3],
    //     data: [numReady, numInProgress, numRefused],
    //     backgroundColor: [
    //       "rgba(255, 99, 132, 0.9)",
    //       "rgba(54, 162, 235, 0.9)",
    //       "rgba(255, 206, 86, 0.9)",
    //       "rgba(75, 192, 192, 0.9)",
    //       "rgba(153, 102, 255, 0.9)",
    //       "rgba(255, 159, 64, 0.9)",
    //     ],
    //     borderColor: [
    //       "rgba(255, 99, 132, 1)",
    //       "rgba(54, 162, 235, 1)",
    //       "rgba(255, 206, 86, 1)",
    //       "rgba(75, 192, 192, 1)",
    //       "rgba(153, 102, 255, 1)",
    //       "rgba(255, 159, 64, 1)",
    //     ],
    //     borderWidth: 1,
    //   },
    //   {
    //     label: "# of Files",
    //     // data: [12, 19, 3, 5, 2, 3],
    //     data: [3, 4, 2],
    //     backgroundColor: [
    //       "rgba(255, 99, 132, 0.9)",
    //       "rgba(54, 162, 235, 0.9)",
    //       "rgba(255, 206, 86, 0.9)",
    //       "rgba(75, 192, 192, 0.9)",
    //       "rgba(153, 102, 255, 0.9)",
    //       "rgba(255, 159, 64, 0.9)",
    //     ],
    //     borderColor: [
    //       "rgba(255, 99, 132, 1)",
    //       "rgba(54, 162, 235, 1)",
    //       "rgba(255, 206, 86, 1)",
    //       "rgba(75, 192, 192, 1)",
    //       "rgba(153, 102, 255, 1)",
    //       "rgba(255, 159, 64, 1)",
    //     ],
    //     borderWidth: 1,
    //   },
    // ],
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
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          display: true, 
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' 
        }
      },
    },
    plugins: {
      legend: {
          labels: {
              color: 'rgba(255, 255, 255, 1)',
          }
      }
  },
    elements: {
      line: {
        backgroundColor: 'rgba(200, 200, 200, 0.9)',
        tension: 0,
        // stepped: 'middle',
      }
    }
  };

  return (
    <div>
      <Line data={data} options={options} height={400} width={600} />
    </div>
  );
}

export default LineChart