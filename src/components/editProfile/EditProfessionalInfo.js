"use client";

import { useState } from "react";

export default function EditProfessionalInfo({ onNext, onBack }) {
    return (
        <div className="relative p-6 bg-gray-50 shadow-md rounded-md">
            <h2 className="text-lg font-bold text-gray-700">PROFESSIONAL DETAILS</h2>

            <div className="space-y-4 mt-4">
                {/* Qualification */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Qualification:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Qualification</option>
                        <option value="High School">High School</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor's">Bachelor's</option>
                        <option value="Master's">Master's</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>

                {/* Specific Degree */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Specific Degree:</label>
                    <input
                        type="text"
                        placeholder="Enter Degree (e.g. B.Tech, MBA)"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Passing Year */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Passing Year:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Passing Year</option>
                        {[...Array(50)].map((_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </select>
                </div>

                {/* Occupation */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Occupation:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Occupation</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Business">Business</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Working As */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Working As:</label>
                    <input
                        type="text"
                        placeholder="Current working designation (e.g. Sr. Developer)"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Employed In */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Employed In:</label>
                    <input
                        type="text"
                        placeholder="Company where you currently work (e.g. Google)"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Annual Income */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Annual Income:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select income group</option>
                        <option value="Below 5 LPA">Below 5 LPA</option>
                        <option value="5-10 LPA">5-10 LPA</option>
                        <option value="10-20 LPA">10-20 LPA</option>
                        <option value="20-50 LPA">20-50 LPA</option>
                        <option value="50 LPA+">50 LPA+</option>
                    </select>
                </div>

                {/* About Profession */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">About Profession:</label>
                    <textarea
                        placeholder="Type your message here."
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Location - Country, State, City */}
                <h3 className="text-lg font-bold text-gray-700 mt-6">Current Location</h3>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Country:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">State:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select State</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">City:</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Hyderabad">Hyderabad</option>
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
