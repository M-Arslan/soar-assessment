import React from "react";

const CardsTransactions = () => {
    return (
        <div className="p-6 rounded-lg ">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">My Cards</h2>
                <a href="#" className="text-blue-500 text-sm font-medium">
                    See All
                </a>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white w-full p-6 rounded-2xl shadow-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-300">Balance</p>
                                <p className="text-2xl font-semibold">$5,756</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                alt="Card Logo"
                                className="h-8"
                            />
                        </div>

                        <div className="flex justify-between items-center mt-6 text-sm">
                            <div>
                                <p className="text-gray-400 uppercase tracking-wider">Card Holder</p>
                                <p className="text-lg font-medium">Eddy Cusuma</p>
                            </div>
                            <div>
                                <p className="text-gray-400 uppercase tracking-wider">Valid Thru</p>
                                <p className="text-lg font-medium">12/22</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <p className="text-xl font-mono tracking-widest">3778 **** **** 1234</p>
                            <div className="relative w-12 h-6 bg-gray-600 rounded-full flex items-center px-1">
                                <div className="w-5 h-5 bg-white rounded-full shadow-md transition transform translate-x-6"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-white text-gray-900 w-full p-6 rounded-2xl shadow-lg border border-gray-200">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-500">Balance</p>
                                <p className="text-2xl font-semibold">$5,756</p>
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                alt="Card Logo"
                                className="h-8"
                            />
                        </div>

                        <div className="flex justify-between items-center mt-6 text-sm">
                            <div>
                                <p className="text-gray-400 uppercase tracking-wider">Card Holder</p>
                                <p className="text-lg font-medium text-gray-800">Eddy Cusuma</p>
                            </div>
                            <div>
                                <p className="text-gray-400 uppercase tracking-wider">Valid Thru</p>
                                <p className="text-lg font-medium text-gray-800">12/22</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <p className="text-xl font-mono tracking-widest text-gray-700">
                                3778 **** **** 1234
                            </p>
                            <div className="relative w-12 h-6 bg-gray-300 rounded-full flex items-center px-1">
                                <div className="w-5 h-5 bg-white rounded-full shadow-md transition transform translate-x-6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-lg">
                    
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <span className="bg-yellow-100 text-yellow-700 p-2 rounded-full">
                                    💳
                                </span>
                                <div>
                                    <p className="font-medium">Deposit from my Card</p>
                                    <p className="text-sm text-gray-500">28 January 2021</p>
                                </div>
                            </div>
                            <p className="text-red-500 font-bold">-$850</p>
                        </li>

                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                                    💰
                                </span>
                                <div>
                                    <p className="font-medium">Deposit Paypal</p>
                                    <p className="text-sm text-gray-500">25 January 2021</p>
                                </div>
                            </div>
                            <p className="text-green-500 font-bold">+$2,500</p>
                        </li>

                        <li className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <span className="bg-green-100 text-green-700 p-2 rounded-full">
                                    🏦
                                </span>
                                <div>
                                    <p className="font-medium">Jemi Wilson</p>
                                    <p className="text-sm text-gray-500">21 January 2021</p>
                                </div>
                            </div>
                            <p className="text-green-500 font-bold">+$5,400</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CardsTransactions;
