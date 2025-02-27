"use client";

import { useState } from "react";

export default function EditFamilyDetails({ onNext, onBack }) {
    return (
        <div className="relative p-6 bg-gray-50 shadow-md rounded-md">
            <h2 className="text-lg font-bold text-gray-700">FAMILY DETAILS</h2>

            <div className="space-y-4 mt-4">
                {/* Father's Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Father's Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Father's Full Name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Father's Gotra */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Father Gotra:</label>
                    <input
                        type="text"
                        placeholder="Enter Father's Gotra"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Father's Native Village */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Father Native Village:</label>
                    <input
                        type="text"
                        placeholder="Enter Father's Native Village"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Father's Occupation */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Father's Occupation:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Father's Occupation</option>
                        <option value="Business">Business</option>
                        <option value="Service">Service</option>
                        <option value="Retired">Retired</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Mother's Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mother's Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Mother's Full Name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Mother's Gotra */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mother Gotra:</label>
                    <input
                        type="text"
                        placeholder="Enter Mother's Gotra"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Mother's Native Village */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mother Native Village:</label>
                    <input
                        type="text"
                        placeholder="Enter Mother's Native Village"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Mother's Occupation */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mother's Occupation:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Mother's Occupation</option>
                        <option value="Housewife">Housewife</option>
                        <option value="Service">Service</option>
                        <option value="Business">Business</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Number of Brothers */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Brothers:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Number of Brothers</option>
                        {[...Array(6)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>

                {/* Brothers' Marital Status */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Brothers Married:</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                            {[...Array(6)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Brothers Unmarried:</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                            {[...Array(6)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Number of Sisters */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Sisters:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Number of Sisters</option>
                        {[...Array(6)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                        ))}
                    </select>
                </div>

                {/* Sisters' Marital Status */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sisters Married:</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                            {[...Array(6)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sisters Unmarried:</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                            {[...Array(6)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* About Family */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">About Family:</label>
                    <textarea
                        placeholder="Type your message here."
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
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
