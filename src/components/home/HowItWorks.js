import Image from "next/image";

const steps = [
    {
        title: "Register",
        time: "TIMING: 7:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        icon: "/icons/register.png",
    },
    {
        title: "Find your Match",
        time: "TIMING: 7:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        icon: "/icons/find-match.png",
    },
    {
        title: "Send Interest",
        time: "TIMING: 7:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        icon: "/icons/send-interest.png",
    },
    {
        title: "Get Profile Information",
        time: "TIMING: 7:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        icon: "/icons/profile-info.png",
    },
    {
        title: "Start Meetups",
        time: "TIMING: 7:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        icon: "/icons/meetups.png",
    },
    {
        title: "Getting Marriage",
        time: "TIMING: 7:00 PM",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        icon: "/icons/marriage.png",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-10 bg-white text-center">
            {/* Header */}
            <h2 className="text-2xl font-bold text-red-600 uppercase">Moments</h2>
            <h3 className="text-xl font-bold text-red-800">How It Works</h3>

            {/* Timeline */}
            <div className="relative border-l-4 border-red-600 mx-10 mt-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative pl-8 pb-10">
                        {/* Dot Indicator */}
                        <div className="absolute left-[-12px] top-4 w-6 h-6 bg-white border-4 border-red-600 rounded-full"></div>

                        {/* Step Content */}
                        <div className="flex items-start space-x-4">
                            <Image src={step.icon} alt={step.title} width={50} height={50} />
                            <div className="text-left">
                                <h3 className="text-lg font-bold text-red-700">{step.title}</h3>
                                <p className="text-sm font-semibold text-red-500">{step.time}</p>
                                <p className="text-gray-600 text-sm mt-2">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
