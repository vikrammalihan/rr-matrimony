export default function Topbar1() {
    return (
        <div className="bg-gray-100 py-2 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex space-x-4">
                        <a href="#!" className="text-gray-700"><i className="fa fa-search"></i></a>
                        <a href="about.html" className="text-gray-700">About</a>
                        <a href="faq.html" className="text-gray-700">FAQ</a>
                        <a href="contact.html" className="text-gray-700">Contact</a>
                    </div>
                    {/* Right Section */}
                    <div className="flex space-x-4">
                        <a href="tel:+919971673684" className="text-gray-700">
                            <i className="fa fa-phone"></i>&nbsp;+91 9971673684
                        </a>
                        <a href="mailto:info@example.com" className="text-gray-700">
                            <i className="fa fa-envelope-o"></i>&nbsp;help@rawarajputmatrimony.com
                        </a>
                        <a href="#!" className="text-gray-700"><i className="fa fa-facebook"></i></a>
                        <a href="#!" className="text-gray-700"><i className="fa fa-twitter"></i></a>
                        <a href="#!" className="text-gray-700"><i className="fa fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
