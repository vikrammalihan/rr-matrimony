import Link from "next/link";
import Image from "next/image";



export default function DiscoverMatches() {
    return (
        <>
        {/* Discover Matches */}
        <h3 className="text-lg font-bold text-gray-800 mt-6">Discover Matches</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                    <div className="w-6 h-6 border border-gray-400 rounded-full mr-3"></div>
                    <div>
                        <h4 className="text-sm font-semibold">Location</h4>
                        <p className="text-xs text-gray-500">125 Matches</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
                    <div className="w-6 h-6 border border-gray-400 rounded-full mr-3"></div>
                    <div>
                        <h4 className="text-sm font-semibold">Profession</h4>
                        <p className="text-xs text-gray-500">25 Matches</p>
                    </div>
                </div>
            </div>
        </>
    );
}