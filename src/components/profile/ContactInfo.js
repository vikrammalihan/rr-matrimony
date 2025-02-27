import { Separator } from "@components/ui/separator";
import { Mail, MapPin, Phone, MapPinned, Clock8, Calendar1  } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="p-6 bg-white shadow-sm rounded-md">
            <h2 className="text-lg font-bold text-red-600">CONTACT INFO</h2>

            <Separator className="my-4" />

            <div className="space-y-4 text-gray-700 text-sm">
                {/* Phone */}
                <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <p>
                        <strong>Phone:</strong> <span className="font-bold">+91 9812345670</span>
                    </p>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <p>
                        <strong>Email:</strong> <span>abc@gmail.com</span>
                    </p>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <p>
                        <strong>Permanent Address:</strong> <br />
                        28800 Orchard Lake Road, Suite 180 <br />
                        Farmington Hills, India
                    </p>
                </div>

                {/* BirthPlace */}
                <div className="flex items-start space-x-3">
                    <MapPinned className="w-5 h-5 text-red-600" />
                    <p>
                        <strong>Birth Place:</strong> <span className="font-bold">New Delhi</span>
                    </p>
                </div>


                {/* Birth Time */}
                <div className="flex items-start space-x-3">
                    <Clock8 className="w-5 h-5 text-red-600" />
                    <p>
                        <strong>Birth Time:</strong> <span className="font-bold">12:45 PM</span>
                    </p>
                </div>

                {/* Date of Birth*/}
                <div className="flex items-start space-x-3">
                    <Calendar1  className="w-5 h-5 text-red-600" />
                    <p>
                        <strong>Date of Birth</strong> <span className="font-bold">12 May 2000</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
