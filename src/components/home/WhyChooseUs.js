import Image from "next/image";
import { Card, CardContent } from "@components/ui/card";
import { FaShieldAlt, FaUsers, FaSearch } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <section className="py-10 bg-white text-center">
            {/* Gradient Background with Image & Text */}
            <div className="relative bg-gradient-to-r from-red-600 to-orange-400 py-12 px-6 rounded-lg text-white">
                <Image
                    src="/assets/home/smiling-man.png"
                    alt="Smiling Man"
                    width={150}
                    height={150}
                    className="absolute top-[-50px] left-1/2 transform -translate-x-1/2"
                />
                <h3 className="text-lg font-semibold opacity-75">#1 WEDDING WEBSITE</h3>
                <h2 className="text-3xl font-bold mt-2">Why Choose Us</h2>
                <p className="text-sm mt-2 opacity-90">
                    Most Trusted and Premium Matrimony Service for the Rawa Rajput Community in the World.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-6 px-6 mt-12">
                {/* First Card */}
                <Card className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
                    <FaShieldAlt className="text-yellow-500 text-4xl" />
                    <CardContent className="text-center mt-3">
                        <h3 className="text-lg font-semibold">Genuine Profiles</h3>
                        <p className="text-sm text-gray-600">
                            Contact genuine profiles with 100% verified mobile.
                        </p>
                    </CardContent>
                </Card>

                {/* Second Card */}
                <Card className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
                    <FaUsers className="text-red-500 text-4xl" />
                    <CardContent className="text-center mt-3">
                        <h3 className="text-lg font-semibold">Most Trusted</h3>
                        <p className="text-sm text-gray-600">
                            The most trusted wedding matrimony brand.
                        </p>
                    </CardContent>
                </Card>

                {/* Third Card */}
                <Card className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center">
                    <FaSearch className="text-blue-500 text-4xl" />
                    <CardContent className="text-center mt-3">
                        <h3 className="text-lg font-semibold">Advanced Search</h3>
                        <p className="text-sm text-gray-600">
                            Find your match with advanced filtering options.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
