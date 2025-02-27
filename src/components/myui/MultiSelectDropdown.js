"use client";

import { useState } from "react";

export default function MultiSelectDropdown({ label, options, selected, setSelected }) {
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    // Filter hobbies based on search input
    const filteredOptions = search
        ? options.filter((option) => option.toLowerCase().includes(search.toLowerCase()))
        : options;

    const addOption = (option) => {
        if (!selected.includes(option)) {
            setSelected([...selected, option]);
        }
        setSearch("");
        setShowDropdown(false);
    };

    const removeOption = (option) => {
        setSelected(selected.filter((item) => item !== option));
    };

    return (
        <div className="relative">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            
            {/* Input Box */}
            <div className="relative">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                    placeholder={`Search or select ${label.toLowerCase()}...`}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                />

                {/* Dropdown List */}
                {showDropdown && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg">
                        {filteredOptions.map((option) => (
                            <li
                                key={option}
                                className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                                onClick={() => addOption(option)}
                            >
                                {option}
                                {selected.includes(option) && (
                                    <span className="text-green-500 font-semibold">✔</span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Selected Options as Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
                {selected.map((option) => (
                    <div
                        key={option}
                        className="flex items-center space-x-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                    >
                        <span>{option}</span>
                        <button
                            onClick={() => removeOption(option)}
                            className="text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
