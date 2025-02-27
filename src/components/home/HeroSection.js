import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@components/ui/checkbox"

export default function HeroSection() {
    return (
        <section className="relative bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnevbbzpx/image/upload/v1737805957/Rawa-rajput-matrimony-banner-3_u9fsih.png')" }}>
            <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center px-6">
                <h1 className="text-white text-3xl font-bold text-center mb-4">
                    <span>#1</span><span>Matrimony</span><br />
                    For Rawa Rajput<br />Find Right Match <span>Here</span>
                </h1>
                <p className="text-white text-center mb-4">
                    Most trusted Matrimony for Rawa Rajput Community in the World.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <form>
                        <select className="w-full p-2 mb-2 border rounded">
                            <option>I'm Looking for</option>
                        </select>
                        <select className="w-full p-2 mb-2 border rounded">
                            <option>Age</option>
                        </select>
                        <select className="w-full p-2 mb-2 border rounded">
                            <option>Height</option>
                        </select>
                        <select className="w-full p-2 mb-2 border rounded">
                            <option>Manglik</option>
                        </select>

                        <select className="w-full p-2 mb-2 border rounded">
                            <option>Select Location</option>
                        </select>
                        <Checkbox id="photos" />
                        <label
                            htmlFor="photos"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Photos Only
                        </label>
                        <button type="submit" className="bg-red-600 text-white w-full py-2 rounded">Search</button>
                        <Link href="/search" className="text-red-600 text-sm">Advance Search</Link>
                    </form>
                </div>
            </div>
        </section>
    );
}
