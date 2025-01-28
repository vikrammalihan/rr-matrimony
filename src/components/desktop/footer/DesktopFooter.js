import Image from "next/image";

// Footer section
export default function DesktopFooter() {
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="row foot-supp text-center py-4">
                    <h2 className="text-lg font-semibold">
                        <span>Free support:</span> +91 9971673684 &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span> info@rawarajputmatrimony.com
                    </h2>
                </div>
                <div className="row wed-foot-link wed-foot-link-1 flex flex-wrap justify-between py-4">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Get In Touch</h4>
                        <p>Address: 402 Jaina Tower 3, A-1 Janak Puri</p>
                        <p>Phone: <a href="tel:+919971673684" className="text-blue-500">+91 9971673684</a></p>
                        <p>Email: <a href="mailto:info@example.com" className="text-blue-500">info@rawarajputmatrimony.com</a></p>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">HELP & SUPPORT</h4>
                        <ul className="space-y-2">
                            <li><a href="about-us.html" className="text-blue-500">About company</a></li>
                            <li><a href="#!" className="text-blue-500">Contact us</a></li>
                            <li><a href="#!" className="text-blue-500">Feedback</a></li>
                            <li><a href="about-us.html#faq" className="text-blue-500">FAQs</a></li>
                            <li><a href="about-us.html#testimonials" className="text-blue-500">Testimonials</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 fot-soc">
                        <h4 className="text-lg font-semibold mb-2">SOCIAL MEDIA</h4>
                        <ul className="flex space-x-4">
                            <li><a href="#!"><Image src="images/social/1.png" alt="FaceBook"  width={300} height={200} loading="lazy" className="w-8 h-8" /></a></li>
                            <li><a href="#!"><Image src="images/social/2.png" alt="Instagram" width={300} height={200} loading="lazy" className="w-8 h-8" /></a></li>
                            <li><a href="#!"><Image src="images/social/3.png" alt="YouTube" width={300} height={200} loading="lazy" className="w-8 h-8" /></a></li>
                            <li><a href="#!"><Image src="images/social/5.png" alt="LinkedIn"  width={300} height={200} loading="lazy" className="w-8 h-8" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row foot-count text-center py-4">
                    <p>
                        Rawa Rajput Matrimony - Trusted by over thousands of Rawa Rajput Boys & Girls for successful marriage. 
                        <a href="sign-up.html" className="btn btn-primary btn-sm bg-blue-500 text-white py-1 px-2 rounded ml-2">Join us today!</a>
                    </p>
                </div>
            </div>
        </section>
    );
}