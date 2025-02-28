
import { ChevronLeft } from 'lucide-react';
import { IoIosShareAlt } from "react-icons/io";

export default function AccountHeader() {
    return (
        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between bg-gray-200 bg-opacity-75 z-20">
            <h2 className="text-lg font-bold text-red-600 w-full text-center h-8 leading-none">
            Krisha Suryan
            <br />
            <span className='text-slate-400 text-xs h-2 leading-none'>1431251289</span>
            </h2>
            <IoIosShareAlt />
        </div>
        );
}
