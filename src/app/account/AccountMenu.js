import Link from "next/link";
import { User, Edit, Send, Eye, ThumbsUp, Users, Bookmark, Settings, Info, FileText, LogOut } from "lucide-react";

const menuItems = [
    { icon: User, label: "View Public Profile", path: "/profile/my" },
    { icon: Edit, label: "Edit Profile", path: "/profile/edit" },
    { icon: Send, label: "Interest Received", path: "/profile/interestedinme" },
    { icon: Send, label: "Interest Sent", path: "/profile/interestsent" },
    { icon: Eye, label: "Contact Viewed", path: "/profile/address" },
    { icon: ThumbsUp, label: "Likes", path: "/profile/likes" },
    { icon: Eye, label: "Profile Views", path: "/profile/views" },
    
    { icon: Bookmark, label: "Shortlisted", path: "/profile/saved" },
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: Info, label: "About Us", path: "/about" },
    { icon: FileText, label: "Terms & Conditions", path: "/terms" },
    { icon: LogOut, label: "Logout", path: "/logout" },
];

export default function AccountMenu() {
    return (
        <div className="p-4 bg-white shadow-sm rounded-md">
            <ul className="space-y-2 text-gray-700">
                {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <li key={index}>
                            <Link href={item.path} className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-md">
                                <div className="flex items-center space-x-3">
                                    <IconComponent className="w-5 h-5 text-gray-600" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
                                <span className="text-gray-400">&gt;</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
