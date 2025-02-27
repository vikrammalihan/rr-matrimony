import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
        title: "Wedding arrangements",
        author: "WEDDING - JOHNNY",
        img: "https://placehold.co/400x250.png",
        link: "/blog/1",
    },
    {
        title: "Wedding arrangements",
        author: "WEDDING - JOHNNY",
        img: "https://placehold.co/400x250.png",
        link: "/blog/2",
    },
    {
        title: "Invitation cards",
        author: "WEDDING - JOHNNY",
        img: "https://placehold.co/400x250.png",
        link: "/blog/3",
    },
];

export default function BlogSection() {
    return (
        <section className="py-10 bg-black text-center text-white">
            {/* Section Header */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-red-600 uppercase">Blog Posts</h2>
                <h3 className="text-xl font-bold text-red-800">Blog & Articles</h3>
                <div className="w-24 h-1 bg-red-600 mx-auto my-2"></div>
            </div>

            {/* Blog List */}
            <div className="flex flex-col gap-8 px-6 mt-6">
                {blogs.map((blog, index) => (
                    <div key={index} className="bg-black text-white shadow-lg rounded-md overflow-hidden">
                        <Image src={blog.img} alt={blog.title} width={400} height={250} className="w-full" />
                        <div className="p-4 text-left">
                            <p className="text-sm font-bold text-red-500">{blog.author}</p>
                            <h3 className="text-lg font-bold text-red-600">{blog.title}</h3>
                            <p className="text-sm text-gray-300">
                                It is a long established fact that a reader will be distracted by the readable content.
                            </p>
                            <Link href={blog.link} className="block mt-3">
                                <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-semibold">
                                    READ MORE
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
