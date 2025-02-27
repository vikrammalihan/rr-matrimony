import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import { Button } from "@components/ui/button";

const professionalDetails = [
    { label: "Qualification:", value: "BBA/BFA/MBA/PGDM" },
    { label: "Specific Degree:", value: "Btech" },
    { label: "Passing Year: ", value: "2024" },
    { label: "Occupation Name:", value: "Software Professional" },
    { label: "Working as", value: "Sr. Developer" },
    { label: "Employed In:", value: "Google" },
    { label: "Annual Income:", value: "12-18 LPA" },
    { label: "Job Details::", value: "ASDASFASVA DS AS" },
    { label: "Current location", value: "DUBAI, INDIA" }
];

export default function ProfessionalInfo() {
    return (
        <div className="relative p-6 bg-white shadow-sm rounded-md">
            <h2 className="text-lg font-bold text-red-600">ABOUT PROFESSION</h2>
            <p className="text-gray-700 text-sm">
                It is a long established fact that a reader will be distracted by readable content.
            </p>

            <Separator className="my-4" />

            <h3 className="text-lg font-bold text-red-600">PROFESSION DETAILS</h3>
            <ul className="text-sm text-gray-700 space-y-2 mt-2">
                {professionalDetails.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-600">➤</span>
                        <span>
                            <strong>{item.label}:</strong> {item.value}
                        </span>
                    </li>
                ))}
            </ul>

            <div className="fixed bottom-28 right-2">
                <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white shadow-sm">
                    Send Interest
                </Button>
            </div>
        </div>
    );
}
