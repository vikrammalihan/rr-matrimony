import { Badge } from "@components/ui/badge";
import { Separator } from "@components/ui/separator";
import { Button } from "@components/ui/button";

const familyDetails = [
    { label: "Father Name:", value: "Ram singh" },
    { label: "Father Gotra", value: "Suryan" },
    { label: "Father Occupation: ", value: "private Job" },
    { label: "Native Village:", value: "Teda" },
    { label: "Mother Name", value: " sunita devi" },
    { label: "Mother Gotra", value: "Tondak" },
    { label: "Mother occupation:", value: "House Wife" },
    { label: "Mother Village:", value: "Paldi" },
    { label: "Brothers", value: "2 [1 married, 1 unmarried]" },
    { label: "Sisters", value: " 1 [1 unmarried]" }
];

export default function FamilyInfo() {
    return (
        <div className="relative p-6 bg-white shadow-sm rounded-md">
            <h2 className="text-lg font-bold text-red-600">ABOUT FAMILY</h2>
            <p className="text-gray-700 text-sm">
                It is a long established fact that a reader will be distracted by readable content.
            </p>

            <Separator className="my-4" />

            <h3 className="text-lg font-bold text-red-600">FAMILY DETAILS</h3>
            <ul className="text-sm text-gray-700 space-y-2 mt-2">
                {familyDetails.map((item, index) => (
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
