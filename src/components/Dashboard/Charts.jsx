import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {



    const chartOptions = {
        chart: {
            type: "bar",
            height: 320,
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        colors: ["#2563EB", "#111827"], 
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "60%",
                borderRadius: 6,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
            labels: {
                style: {
                    fontSize: "12px",
                    colors: "#6B7280", 
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: "12px",
                    colors: "#6B7280",
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            markers: {
                radius: 4,
            },
            labels: {
                colors: "#6B7280",
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
    };

    const chartSeries = [
        {
            name: "Deposit",
            data: [200, 250, 100, 300, 200, 220, 280],
        },
        {
            name: "Withdraw",
            data: [450, 320, 300, 460, 120, 350, 370],
        },
    ];

    const chartOptions2 = {
        chart: {
            type: "pie",
            fontFamily: "Inter, sans-serif",
        },
        labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
        colors: ["#1E3A8A", "#F97316", "#2563EB", "#111827"],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "12px",
                fontWeight: "bold",
                colors: ["#FFFFFF"],
            },
            formatter: function (val, opts) {
                return val + "%\n" + opts.w.globals.labels[opts.seriesIndex];
            },
            dropShadow: {
                enabled: false,
            },
        },
        legend: {
            show: false, 
        },
        stroke: {
            show: true,
            colors: ["#FFFFFF"],
            width: 2,
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (val) => val + "%",
            },
        },
    };
    const chartSeries2 = [30, 15, 20, 35]; 


    return (
        <div className="my-2 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Weekly Activity</h2>
                    </div>
                    <Chart options={chartOptions} series={chartSeries} type="bar" height={400} />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Expense Statistics
                    </h2>
                    <Chart options={chartOptions2} series={chartSeries2} type="pie" height={400} />
                </div>
            </div>
        </div>

    );
};

export default Charts;
