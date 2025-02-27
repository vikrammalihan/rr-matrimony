import Image from "next/image";

export default function ProfileCard() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center mt-2">
            
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full bg-orange-500 flex justify-center items-center overflow-hidden">
                <Image src="https://placehold.co/80x80.png" alt="User Profile" width={80} height={80} />
            </div>

            {/* Profile Info */}
            <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold text-gray-800">Welcome</h3>
                <h2 className="text-xl font-bold text-red-600">Jon Duo</h2>
                <p className="text-gray-500 text-sm">ID: 0000123</p>
                <p className="text-sm text-red-600 mt-1">is 90% complete!</p>
                <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Complete your profile to view Contact Details</p>
            </div>
        </div>
    );
}
