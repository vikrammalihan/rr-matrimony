"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation"; 

export default function MobileLogin() {
    const [countryCode, setCountryCode] = useState("+91");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const countryCodes = [
        { code: "+91", country: "India" },
        { code: "+1", country: "USA" },
        { code: "+44", country: "UK" },
        { code: "+61", country: "Australia" },
        { code: "+971", country: "UAE" },
    ];

    const handleMobileChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setMobileNumber(value);
            setError("");
        } else {
            setError("Mobile number must be 10 digits only.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mobileNumber.length !== 10) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }
        if (!isChecked) {
            setError("You must agree to the terms & conditions.");
            return;
        }
        setError("");
        alert(`Code sent to ${countryCode} ${mobileNumber}`);
        router.push("/auth/otp-verification");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-700">
            {/* Header Section */}
            <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center">
                    <button className="p-2 text-gray-600 hover:text-gray-900">
                        <ChevronLeft size={24} />
                    </button>
                </div>

                <h2 className="text-xl font-bold text-center text-gray-800 mt-2">Mobile Login</h2>
                <p className="text-sm text-center text-gray-500 mb-6">Please sign in to your existing account</p>

                {/* Mobile Number Input */}
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <div className="flex border border-gray-300 rounded-md p-2 mt-1">
                        <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="bg-transparent outline-none"
                        >
                            {countryCodes.map((code) => (
                                <option key={code.code} value={code.code}>
                                    {code.code} ({code.country})
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Enter mobile number"
                            value={mobileNumber}
                            onChange={handleMobileChange}
                            maxLength={10}
                            className="w-full outline-none px-2"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                    {/* Terms & Conditions */}
                    <div className="flex items-center mt-4">
                        <input
                            id="terms"
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                            className="w-4 h-4 text-red-500 border-gray-300 rounded"
                        />
                        <label for="terms" className="ml-2 text-sm text-gray-700">Terms & Conditions</label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition"
                    >
                        SEND CODE
                    </button>
                </form>
            </div>
        </div>
    );
}
