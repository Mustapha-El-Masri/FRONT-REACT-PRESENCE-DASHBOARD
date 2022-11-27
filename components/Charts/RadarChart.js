import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, RadialLinearScale, PointElement);

function RadarChart({ numInProgress, numReady, numRefused }) {
    var data = {
        labels: [
            'Project Manager',
            'Front End Developer',
            'Back End Developer',
            'Software Architect',
            'UI/UX Designer',
            'QA Engineer',
            'Business Analyst'
        ],
        datasets: [{
            label: 'Male',
            data: [1, 2, 2, 1, 0, 1, 1],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }, {
            label: 'Female',
            data: [0, 0, 0, 0, 1, 1, 0],
            fill: true | 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
        ],
    };

    var options = {
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                }
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(255, 255, 255, 1)',
                }
            }
        }
    };

    return (
        <div>
            <Radar data={data} options={options} height={400} width={600} />
        </div>
    );
}

export default RadarChart