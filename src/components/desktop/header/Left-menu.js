import Image from "next/image"

export default function Left_menu() {
    return (
        <>
            <div className="menu-pop menu-pop1">
                <span className="menu-pop-clo"><i className="fa fa-times" aria-hidden="true" /></span>
                <div className="inn">
                    <Image src="/icons/RRM-logo2.png" alt="rrm logo" loading="lazy" className="logo-brand-only" width={200} height={80} />
                    <p><strong>Best Rawa Rajput Matrimony</strong> lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu fringilla. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul className="menu-pop-info space-y-2">
                        <li><a href="#!" className="flex items-center"><i className="fa fa-phone mr-2" aria-hidden="true" />+91 9971673684</a></li>
                        <li><a href="#!" className="flex items-center"><i className="fa fa-whatsapp mr-2" aria-hidden="true" />+91 9971673684</a></li>
                        <li><a href="#!" className="flex items-center"><i className="fa fa-envelope-o mr-2" aria-hidden="true" />help@info@rawarajputmatrimony.com</a></li>
                        <li><a href="#!" className="flex items-center"><i className="fa fa-map-marker mr-2" aria-hidden="true" />402 Jaina Tower III, A-1 Janak Puri, New Delhi</a></li>
                    </ul>
                    <div className="menu-pop-help mt-4">
                        <h4 className="font-bold">Support Team</h4>
                        <div className="user-pro mt-2">
                            <Image src="/assets/profiles/1.jpg" alt="profile image" loading="lazy" width={200} height={80} />
                        </div>
                        <div className="user-bio mt-2">
                            <h5 className="font-semibold">Vikram Malihan</h5>
                            <span className="block text-sm">CTO/Project Architect</span>
                            <a href="enquiry.html" className="btn btn-primary btn-sm mt-2 bg-blue-500 text-white py-1 px-2 rounded">Ask your doubts</a>
                        </div>
                    </div>
                    <div className="menu-pop-soci mt-4">
                        <ul className="flex space-x-4">
                            <li><a href="#!" className="text-gray-700"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#!" className="text-gray-700"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#!" className="text-gray-700"><i className="fa fa-whatsapp" aria-hidden="true" /></a></li>
                            <li><a href="#!" className="text-gray-700"><i class="fa fa-linkedin" aria-hidden="true" /></a></li>
                            <li><a href="#!" className="text-gray-700"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                            <li><a href="#!" className="text-gray-700"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

