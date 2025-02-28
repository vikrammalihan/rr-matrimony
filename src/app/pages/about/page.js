export default function AboutUs() {
    return (
        <>
            <div className="relative w-full h-full flex flex-col  ">
                <div className="relative flex-grow overflow-y-scroll scrollbar-hide overflow-hidden pb-16">
                    <div className="bg-white">
                        <div className="container mx-auto px-4 py-8">
                            <h1 className="text-2xl font-bold text-center">About Us</h1>
                            <p className="text-center text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ligula at quam ultricies aliquet. Sed nec nunc vitae nunc aliquam lacinia. </p>
                        </div>
                    </div>
                    <div className="bg-gray-100 py-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-xl font-bold text-center">Our Mission</h2>
                            <p className="text-center text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ligula at quam ultricies aliquet. Sed nec nunc vitae nunc aliquam lacinia. </p>
                        </div>
                    </div>
                    <div className="bg-white py-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-xl font-bold text-center">Our Vision</h2>
                            <p className="text-center text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ligula at quam ultricies aliquet. Sed nec nunc vitae nunc aliquam lacinia. </p>
                        </div>
                    </div>
                    <div className="bg-gray-100 py-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-xl font-bold text-center">Our Team</h2>
                            <p className="text-center text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ligula at quam ultricies aliquet. Sed nec nunc vitae nunc aliquam lacinia. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}