import { Heart, Users, User, UserCheck } from "lucide-react";
import { Card, CardContent } from "@components/ui/card";

export default function StatsSection() {
    return (
        <section className="py-10 bg-white text-center">
            {/* Top Highlighted Card */}
            <Card className="bg-white shadow-lg rounded-xl p-6 mx-auto w-4/5">
                <div className="flex flex-col items-center">
                    <div className="text-yellow-500 text-4xl">💍</div>
                    <h3 className="text-xl font-semibold mt-2">2000+ weddings</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        Lakhs of people have found their life partner
                    </p>
                </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 px-6 mt-6">
                {/* Couples Matched */}
                <Card className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <Heart className="text-red-500 text-3xl" />
                    <CardContent className="text-center mt-2">
                        <h3 className="text-xl font-bold text-red-500">2K</h3>
                        <p className="text-sm text-gray-600">Couples Paired</p>
                    </CardContent>
                </Card>

                {/* Registrations */}
                <Card className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <Users className="text-yellow-500 text-3xl" />
                    <CardContent className="text-center mt-2">
                        <h3 className="text-xl font-bold text-yellow-500">4000+</h3>
                        <p className="text-sm text-gray-600">Registrants</p>
                    </CardContent>
                </Card>

                {/* Men Count */}
                <Card className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <User className="text-blue-500 text-3xl" />
                    <CardContent className="text-center mt-2">
                        <h3 className="text-xl font-bold text-blue-500">1600+</h3>
                        <p className="text-sm text-gray-600">Mens</p>
                    </CardContent>
                </Card>

                {/* Women Count */}
                <Card className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <UserCheck className="text-pink-500 text-3xl" />
                    <CardContent className="text-center mt-2">
                        <h3 className="text-xl font-bold text-pink-500">2000+</h3>
                        <p className="text-sm text-gray-600">Womens</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
