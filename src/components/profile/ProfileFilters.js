import { Button } from "@components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function ProfileFilters() {
    return (
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
            <p className="text-sm font-semibold">Profile filters</p>
            <Button variant="outline" size="icon">
                <SlidersHorizontal className="w-5 h-5" />
            </Button>
        </div>
    );
}
