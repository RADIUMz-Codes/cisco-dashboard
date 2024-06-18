import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./index.css";
function Statcards() {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: true,
                position: "right", // You can use 'top', 'left', 'bottom', 'right'
            },
            tooltip: {
                enabled: true,
            },
        },
    };
    return (
        <>
            <div className="card">
                <Doughnut data={data} options = {options} />
            </div>
        </>
    );
}

export default Statcards;
