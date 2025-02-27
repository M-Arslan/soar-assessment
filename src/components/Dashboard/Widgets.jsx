import React from "react";
import Chart from "react-apexcharts";

const DashboardWidgets = () => {
    // Balance History Chart Configuration
    const chartOptions = {
        chart: {
            type: "area",
            height: 300,
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        colors: ["#2563EB"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 100],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        xaxis: {
            categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
            labels: {
                style: { colors: "#6B7280", fontSize: "12px" },
            },
        },
        yaxis: {
            labels: {
                style: { colors: "#6B7280", fontSize: "12px" },
            },
        },
        grid: {
            borderColor: "#E5E7EB",
            strokeDashArray: 4,
        },
        tooltip: {
            enabled: true,
        },
    };

    const chartSeries = [{ name: "Balance", data: [150, 300, 500, 800, 450, 600, 750] }];

    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-6">

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Transfer</h2>

                    <div className="grid grid-cols-4 gap-4 items-center">
                        <div className="text-center">
                            <img
                                className="w-20 h-20 rounded-full object-cover mx-auto"
                                src="https://randomuser.me/api/portraits/women/45.jpg"
                                alt="Livia Bator"
                            />
                            <p className="font-semibold mt-2">Livia Bator</p>
                            <p className="text-blue-600 text-sm font-medium">CEO</p>
                        </div>

                        <div className="text-center">
                            <img
                                className="w-20 h-20 rounded-full object-cover mx-auto"
                                src="https://randomuser.me/api/portraits/men/46.jpg"
                                alt="Randy Press"
                            />
                            <p className="font-semibold mt-2">Randy Press</p>
                            <p className="text-gray-500 text-sm">Director</p>
                        </div>
                        <div className="text-center">
                            <img
                                className="w-20 h-20 rounded-full object-cover mx-auto"
                                src="https://randomuser.me/api/portraits/men/47.jpg"
                                alt="Workman"
                            />
                            <p className="font-semibold mt-2">Workman</p>
                            <p className="text-gray-500 text-sm">Designer</p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600 mb-2">Write Amount</p>
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    placeholder="525.50"
                                    className=" bg-gray-100 text-gray-800 w-50% p-3 rounded-full text-center"
                                />
                                <button className="ml-4 bg-black text-white px-6 py-3 rounded-full flex items-center">
                                    Send
                                    <svg
                                        className="w-5 h-5 ml-2 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Balance History</h2>
                    <Chart options={chartOptions} series={chartSeries} type="area" height={300} />
                </div>

            </div>
        </div>
    );
};

export default DashboardWidgets;
