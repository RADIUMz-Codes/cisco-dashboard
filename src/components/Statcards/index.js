import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "./index.css";
function Statcards({ doughnutData}) {

    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);

    useEffect(() => {
        let tempLabels = doughnutData.map((obj) => obj.jira_ticket_status);
        let labelSet = new Set(tempLabels);
        let processedLabels = [...labelSet];
        setLabels(processedLabels);

        let tempValues = {};
        for (let data of tempLabels) {
            if (tempValues[data]) {
                tempValues[data]++;
            } else {
                tempValues[data] = 1;
            }
        }

        let valArray = [];
        for (let label of processedLabels) {
            valArray.push(tempValues[label]);
        }
        setValues(valArray);
        console.log("test in stats");
    }, [doughnutData]);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "No. of Tickets",
                data: values,
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
                position: "right",
                labels: {
                    generateLabels: (chart) => {
                        const dataset = chart.data.datasets[0];
                        return chart.data.labels.map((label, i) => {
                            const value = dataset.data[i];
                            return {
                                text: `${label}: ${value}`,
                                fillStyle: dataset.backgroundColor[i],
                                strokeStyle: dataset.borderColor[i],
                                lineWidth: dataset.borderWidth,
                                hidden: !chart.getDataVisibility(i),
                                index: i,
                            };
                        });
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };
    return (
        <>
            <div className="card">
                
                <Doughnut data={data} options={options} />
            </div>
        </>
    );
}

export default Statcards;
