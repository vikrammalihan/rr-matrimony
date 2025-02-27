"use client";

import { useState } from "react";
import MultiSelectDropdown from "@components/myui/MultiSelectDropdown";

export default function EditPersonalInfo({ onNext }) {
    const [date, setDate] = useState("");
    const [height, setHeight] = useState(4.5); // Default height in feet
    const [weight, setWeight] = useState(45); // Default weight in kg
    const [hobbies, setHobbies] = useState([]);

    const hobbiesList = [
        "Reading", "Traveling", "Cooking", "Photography", "Music", "Dancing", "Gaming",
        "Yoga", "Sports", "Painting", "Writing", "Cycling", "Hiking", "Fishing", "Acting"
    ];


    // Calculate valid date range
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 50, today.getMonth(), today.getDate()) // 50 years ago
        .toISOString()
        .split("T")[0];
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()) // 18 years ago
        .toISOString()
        .split("T")[0];

    // Convert height value to feet & inches
    const formatHeight = (value) => {
        const feet = Math.floor(value);
        const inches = Math.round((value - feet) * 12);
        return `${feet}'${inches}"`;
    };

    return (
        <div className="relative p-6 bg-gray-50 shadow-md rounded-md">
            <h2 className="text-lg font-bold text-gray-700">PERSONAL INFORMATION</h2>

            <div className="space-y-4 mt-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Created for</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select</option>
                        <option value="Myself">Myself</option>
                        <option value="Daughter">Daughter</option>
                        <option value="Son">Son</option>
                        <option value="Sister">Sister</option>
                        <option value="Brother">Brother</option>
                        <option value="Relative">Relative</option>
                        <option value="Friend">Friend</option>
                    </select>
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Gotra */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Gotra:</label>
                    <input
                        type="text"
                        placeholder="Enter Gotra"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>

                {/* Date of Birth with Age Restrictions */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={minDate}
                        max={maxDate}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                    <p className="text-xs text-gray-500">Date of birth should be between {minDate} and {maxDate}.</p>
                </div>

                {/* Height Slider */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Height: {formatHeight(height)}</label>
                    <input
                        type="range"
                        min="4.5"
                        max="6.25"
                        step="0.0833"
                        value={height}
                        onChange={(e) => setHeight(parseFloat(e.target.value))}
                        className="w-full cursor-pointer accent-red-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>4'6"</span>
                        <span>6'3"</span>
                    </div>
                </div>

                {/* Manglik Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Manglik:</label>
                    <div className="flex space-x-4">
                        {["Don't Know", "Yes", "No"].map((option, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="radio" name="manglik" value={option} className="text-red-500" />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Gender:</label>
                    <div className="flex space-x-4">
                        {["Male", "Female"].map((gender, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="radio" name="gender" value={gender} className="text-red-500" />
                                <span>{gender}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Marital Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Marital Status:</label>
                    <div className="flex space-x-4">
                        {["Never Married", "Divorcee"].map((gender, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="radio" name="marital-status" value={gender} className="text-red-500" />
                                <span>{gender}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Weight Slider */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Weight: {weight} kg</label>
                    <input
                        type="range"
                        min="40"
                        max="80"
                        step="1"
                        value={weight}
                        onChange={(e) => setWeight(parseInt(e.target.value))}
                        className="w-full cursor-pointer accent-red-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>40 kg</span>
                        <span>80 kg</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Body Type</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Body Type</option>
                        <option value="Slim">Slim</option>
                        <option value="Average">Average</option>
                        <option value="Athletic">Athletic</option>
                        <option value="Heavy">Heavy</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Complexion</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300">
                        <option value="">Select Complexion</option>
                        <option value="VFair">Very Fair</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Dark">Dark</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Drinking Habits</label>
                    <div className="flex space-x-4">
                        {["Never", "Some time"].map((option, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="radio" name="drinking" value={option} className="text-red-500" />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Eating Habits</label>
                    <div className="flex space-x-4">
                        {["Veg", "Non-Veg"].map((option, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="radio" name="eating" value={option} className="text-red-500" />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Smoking Habits</label>
                    <div className="flex space-x-4">
                        {["Never", "Occationally"].map((option, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="radio" name="smoking" value={option} className="text-red-500" />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <MultiSelectDropdown
                        label="Hobbies"
                        options={hobbiesList}
                        selected={hobbies}
                        setSelected={setHobbies}
                    />
                </div>

                {/* About */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">About:</label>
                    <textarea
                        placeholder="Type your message here."
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                    />
                </div>
            </div>

            {/* Floating Next Button */}
            <div className="fixed bottom-4 right-4">
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
