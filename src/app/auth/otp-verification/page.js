"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { ChevronLeft } from "lucide-react";
import Link from "next/link"; 

export default function OtpVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(50);
    const inputRefs = useRef([]);
    const router = useRouter(); // ✅ Initialize Next.js router

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; // Allow only numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus to next input box
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = () => {
        if (otp.join("").length !== 6) {
            alert("Please enter a 6-digit OTP.");
            return;
        }

        // ✅ Redirect to dashboard after verification
        router.push("/dashboard");
    };

    const handleResend = () => {
        setTimer(50);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0].focus();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-700">
            {/* Header Section */}
            <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center">
                    <Link href="/auth/otp-login" className="p-2 text-gray-600 hover:text-gray-900">
                        <ChevronLeft size={24} />
                    </Link>
                </div>

                <h2 className="text-xl font-bold text-center text-gray-800 mt-2">Verification</h2>
                <p className="text-sm text-center text-gray-500">
                    We have sent a code to your mobile <br />
                    <span className="font-bold">9876543210</span>
                    <span className="text-red-500 ml-1 cursor-pointer"> Edit</span>
                </p>

                {/* OTP Input */}
                <div className="flex justify-center gap-2 mt-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-red-300"
                        />
                    ))}
                </div>

                {/* Resend OTP */}
                <div className="text-center text-sm text-gray-600 mt-4">
                    {timer > 0 ? (
                        <>Resend in <span className="font-bold">{timer}s</span></>
                    ) : (
                        <span className="text-red-500 cursor-pointer" onClick={handleResend}>
                            Resend OTP
                        </span>
                    )}
                </div>

                {/* Verify Button */}
                <button
                    onClick={handleVerify}
                    className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition"
                >
                    VERIFY
                </button>
            </div>
        </div>
    );
}
