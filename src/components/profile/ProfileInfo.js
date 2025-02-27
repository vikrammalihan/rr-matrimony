import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import { Button } from "@components/ui/button";

export default function ProfileInfo() {
    return (
        <div className="relative p-6 bg-white shadow-sm rounded-md">
            <h2 className="text-lg font-bold text-red-600">ABOUT</h2>
            <p className="text-gray-700 text-sm">
                It is a long established fact that a reader will be distracted by readable content.
            </p>

            <Separator className="my-4" />

            <h3 className="text-lg font-bold text-red-600">PERSONAL INFORMATION</h3>
            <ul className="text-sm text-gray-700 space-y-2 mt-2">
                {[
                    { label: "Name", value: "Krisha Suryan" },
                    { label: "Gotra", value: "Suryan" },
                    { label: "Manglik", value: "No" },
                    { label: "Age", value: "24" },
                    { label: "Gender", value: "Female" },
                    { label: "Height", value: "5 ft 3 inch" },
                    { label: "Weight", value: "65kg" },
                    { label: "Status", value: "Never Married" },
                    { label: "Profile Created by", value: "Self" },
                    { label: "Body Type", value: "Slim" },
                    { label: "Complexion", value: "Fair" },
                ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-600">➤</span>
                        <span>
                            <strong>{item.label}:</strong> {item.value}
                        </span>
                    </li>
                ))}
            </ul>

            <Separator className="my-4" />

            <h3 className="text-lg font-bold text-red-600">HABITS</h3>
            <ul className="text-sm text-gray-700 space-y-2 mt-2">
                {[
                    { label: "Drinking", value: "Non-Drinking" },
                    { label: "Eating", value: "Vegetarian" },
                    { label: "Smoking", value: "Non-Smoking" },
                ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-600">➤</span>
                        <span>
                            <strong>{item.label}:</strong> {item.value}
                        </span>
                    </li>
                ))}
            </ul>

            <Separator className="my-4" />

            <h3 className="text-lg font-bold text-red-600">HOBBIES</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {["Modelling", "Watching movies", "Adventure travel", "Music", "Yoga"].map((hobby) => (
                    <Badge key={hobby} variant="outline" className="border-red-400 text-red-600">
                        {hobby}
                    </Badge>
                ))}
            </div>

            <div className="fixed bottom-28 right-2">
                <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white shadow-sm">
                    Send Interest
                </Button>
            </div>
        </div>
    );
}
