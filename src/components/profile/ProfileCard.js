import { Card, CardHeader, CardContent } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { Heart, MapPin, Users, Briefcase, DollarSign, Bookmark, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard({ profile }) {
    return (
        <Card className="shadow-md rounded-lg overflow-hidden">
            <CardHeader className="relative bg-orange-500 h-48 flex justify-center">
                <Image
                    src={profile.image}
                    alt={profile.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2">Premium</Badge>
            </CardHeader>

            <CardContent className="p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold">{profile.name} <span className="text-gray-400 text-sm">{profile.id}</span></h3>
                        <p className="text-sm text-gray-600">{profile.profession}</p>
                    </div>
                    <ThumbsUp className="w-5 h-5 text-gray-500 cursor-pointer" />
                    <Bookmark className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>

                <Separator className="my-3" />

                {/* Profile Info */}
                <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center"><Users className="w-4 h-4 mr-2" /> {profile.age} • {profile.height}</p>
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {profile.location}</p>
                    <p className="flex items-center"><Heart className="w-4 h-4 mr-2" /> {profile.manglikStatus}</p>
                    <p className="flex items-center"><DollarSign className="w-4 h-4 mr-2" /> {profile.salary}</p>
                </div>

                {/* Actions */}
                <div className="mt-4 flex justify-between items-center">
                    <Button variant="destructive">Send Interest</Button>
                    <Link href="/profile-details">
                        <span className="text-red-500 text-sm font-semibold cursor-pointer">View Matching Profiles</span>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
