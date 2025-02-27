"use client";

import { useState } from "react";

export default function EditContactDetails({ onNext, onBack }) {
    return (
        <div className="relative p-6 bg-gray-50 shadow-md rounded-md">
            <h2 className="text-lg font-bold text-gray-700">CONTACT DETAILS</h2>

            <div className="space-y-4 mt-4">
                {/* Mobile Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mobile:</label>
                    <input
                        type="text"
                        placeholder="Eg. 9876543210"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                    <input
                        type="text"
                        placeholder="Eg. 9876543210"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Email ID */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email ID:</label>
                    <input
                        type="email"
                        placeholder="Enter your email id. e.g. example@gmail.com"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Address 1 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address 1:</label>
                    <input
                        type="text"
                        placeholder="House #, Street name/Village"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Address 2 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address 2:</label>
                    <input
                        type="text"
                        placeholder="district/locality"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Pincode */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Pincode:</label>
                    <input
                        type="text"
                        placeholder="Enter pincode. e.g. 110001"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* City Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">City:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select city</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                </div>

                {/* State Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">State:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select state</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>

                {/* GPS Location Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">GPS Location:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select GPS location</option>
                        <option value="Enable GPS">Enable GPS</option>
                        <option value="Manually Enter">Manually Enter</option>
                    </select>
                </div>
            </div>

            {/* Floating Buttons */}
            <div className="flex justify-between fixed bottom-4 left-4 right-4">
                <button
                    className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition"
                    onClick={onBack}
                >
                    Back
                </button>
                <button
                    className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition"
                    onClick={onNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
