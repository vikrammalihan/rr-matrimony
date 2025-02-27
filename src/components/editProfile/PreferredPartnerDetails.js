"use client";

import { useState } from "react";
import MultiSelectDropdown from "@components/myui/MultiSelectDropdown";
import RangeSlider from "@components/myui/RangeSlider";

export default function PreferredPartnerDetails({ onNext, onBack }) {
    const [excludedGotras, setExcludedGotras] = useState([]);
    const [professions, setProfessions] = useState([]);
    const [education, setEducation] = useState([]);
    const [ageRange, setAgeRange] = useState([22, 32]);
    const [heightRange, setHeightRange] = useState([4.5, 6.2]);
    const [incomeRange, setIncomeRange] = useState([3.5, 20]);
    const [manglik, setManglik] = useState("Doesn't Matter");
    const [maritalStatus, setMaritalStatus] = useState("Never Married");

    const formatHeight = (value) => `${Math.floor(value)}'${Math.round((value - Math.floor(value)) * 12)}"`;

    return (
        <div className="relative p-6 bg-gray-50 shadow-md rounded-md">
            <h2 className="text-lg font-bold text-gray-700">PREFERRED PARTNER DETAILS</h2>

            <div className="space-y-4 mt-4">

                {/* Exclude Gotras Multi-Select Dropdown */}
                <MultiSelectDropdown
                    label="Exclude Gotras"
                    options={["Goud", "Suryan", "Bhardwaj", "Kashyap", "Shandilya"]}
                    selected={excludedGotras}
                    setSelected={setExcludedGotras}
                />

                {/* Age Slider */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <RangeSlider min={18} max={50} step={1} values={ageRange} onChange={setAgeRange} />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>{ageRange[0]} Years</span>
                        <span>{ageRange[1]} Years</span>
                    </div>
                </div>

                {/* Height Slider */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Height</label>
                    <RangeSlider min={4.5} max={6.5} step={0.0833} values={heightRange} onChange={setHeightRange} />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>{formatHeight(heightRange[0])}</span>
                        <span>{formatHeight(heightRange[1])}</span>
                    </div>
                </div>

                {/* Manglik Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Manglik</label>
                    <div className="flex space-x-4">
                        {["Doesn't Matter", "Yes", "No"].map((option) => (
                            <label key={option} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="manglik"
                                    value={option}
                                    checked={manglik === option}
                                    onChange={() => setManglik(option)}
                                    className="text-red-500"
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Marital Status */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                    <div className="flex space-x-4">
                        {["Never Married", "Widow", "Divorcee"].map((status) => (
                            <label key={status} className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="marital-status"
                                    value={status}
                                    checked={maritalStatus === status}
                                    onChange={() => setMaritalStatus(status)}
                                    className="text-red-500"
                                />
                                <span>{status}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Profession Multi-Select Dropdown */}
                <MultiSelectDropdown
                    label="Profession"
                    options={["Accountant", "Engineer", "Doctor", "Teacher", "Student", "Business"]}
                    selected={professions}
                    setSelected={setProfessions}
                />

                {/* Education Multi-Select Dropdown */}
                <MultiSelectDropdown
                    label="Education"
                    options={["High School", "Bachelor", "Post Graduation", "PhD"]}
                    selected={education}
                    setSelected={setEducation}
                />

                {/* Income Slider */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Income</label>
                    <RangeSlider min={3.5} max={50} step={0.5} values={incomeRange} onChange={setIncomeRange} />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>{incomeRange[0]} Lacs</span>
                        <span>{incomeRange[1]} Lacs</span>
                    </div>
                </div>

                {/* About Preferred Partner */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">About Preferred Partner</label>
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
