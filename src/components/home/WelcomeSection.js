import { Mail, Phone } from "lucide-react";

export default function WelcomeSection() {
    return (
        <section className="bg-white px-6 py-8 rounded-lg shadow-md">
            {/* Header */}
            <h2 className="text-2xl font-bold text-red-600 uppercase">Welcome to</h2>
            <h3 className="text-xl font-bold text-red-800 uppercase">Rawa Rajput Matrimony</h3>

            {/* Description */}
            <p className="text-gray-700 mt-3">
                Best wedding matrimony. It is a long-established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
            </p>
            <p className="text-gray-700 mt-3">
                There are many variations of passages of Lorem Ipsum available, but the majority have 
                suffered alteration in some form, by injected humour, or randomised words which don’t 
                look even slightly believable.
            </p>

            {/* Click Here Link */}
            <p className="mt-3 text-red-600 font-semibold cursor-pointer underline">
                Click here
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-4">
                {/* Enquiry */}
                <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                        <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-gray-700 font-medium">Enquiry</p>
                        <p className="text-black font-semibold">+91-9971673684</p>
                    </div>
                </div>

                {/* Support */}
                <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                        <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-gray-700 font-medium">Get Support</p>
                        <p className="text-black font-semibold">info@rawarajputmatrimony.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
