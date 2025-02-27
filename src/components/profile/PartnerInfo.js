
import { Separator } from "@components/ui/separator";

const prefferedPartner =
    [
        { label: "Excluded Gotras", value: "Tondak, Suryan" },
        { label: "Age", value: " 25-40 yrs" },
        { label: "Height", value: "5’2’-6’0’" },
        { label: "Manglik", value: "No" },
        { label: "Marital  Status", value: "Never Married" },
        { label: "Profession", value: "Accountant, Student" },
        { label: "Education", value: "Bachelor, Post Graduation" },
        { label: "Income", value: "10 lacs - 20 Lacks" }
    ];

export default function PartnerInfo() {
    return (
        <div className="relative p-6 bg-white shadow-sm rounded-md">
            <h2 className="text-lg font-bold text-red-600">About Desired Partner</h2>
            <p className="text-gray-700 text-sm">
                It is a long established fact that a reader
                will be distracted by the readable
                content of a page when looking at its
                layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal
                distribution of letters, as opposed to
                using 'Content here, content here',
                making it look like readable English.
            </p>

            <Separator className="my-4" />

            <h3 className="text-lg font-bold text-red-600">Looking for partner</h3>
            <ul className="text-sm text-gray-700 space-y-2 mt-2">
                {prefferedPartner.map((item, index) => (
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

            
        </div>
    );
}
