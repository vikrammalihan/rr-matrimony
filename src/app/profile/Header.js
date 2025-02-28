import { ChevronLeft } from 'lucide-react';

export default function Header({heading}) {
    const navigateBack = () => {
        window.history.back();
    };

    return (
        <div className="relative top-0 left-0 w-full p-4 flex items-center justify-between bg-gray-200 bg-opacity-75 z-20">
            <ChevronLeft onClick={navigateBack} className="cursor-pointer" />
            <h2 className="text-lg font-bold text-red-600 w-full text-center">{heading}</h2>
        </div>
    );
}