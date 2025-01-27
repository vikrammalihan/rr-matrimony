import Image from 'next/image';

// BANNER & SEARCH
export default function BannerSearch() {
    return (
        <section>
            <div className="str">
                <div className="hom-head">
                    <div className="container mx-auto">
                        <div className="row flex justify-center">
                            <div className="hom-ban text-center">
                                <div className="ban-tit">
                                    <span className="text-xl font-bold"><i className="no1">#1</i> Matrimony</span>
                                    <h1 className="text-4xl font-bold">For Rawa Rajput<br /><b>Find Right Match</b> here</h1>
                                    <p className="text-lg">Most trusted Matrimony for Rawa Rajput Community in the World.</p>
                                </div>
                                <div className="ban-search chosenini mt-6">
                                    <form>
                                        <ul className="flex flex-wrap justify-center space-x-4">
                                            <li className="sr-look">
                                                <div className="form-group">
                                                    <label className="block text-sm font-medium text-gray-700">Im looking for</label>
                                                    <select className="chosen-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option value="">Im looking for</option>
                                                        <option value="Men">Groom</option>
                                                        <option value="Women">Bride</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li className="sr-age">
                                                <div className="form-group">
                                                    <label className="block text-sm font-medium text-gray-700">Age</label>
                                                    <select className="chosen-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option value="">Age</option>
                                                        <option value="">18 to 30</option>
                                                        <option value="">31 to 40</option>
                                                        <option value="">41 to 50</option>
                                                        <option value="">51 to 60</option>
                                                        <option value="">61 to 70</option>
                                                        <option value="">71 to 80</option>
                                                        <option value="">81 to 90</option>
                                                        <option value="">91 to 100</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li className="sr-reli">
                                                <div className="form-group">
                                                    <label className="block text-sm font-medium text-gray-700">Height</label>
                                                    <div className='flex space-x-2 flex-row'>
                                                    <select className="chosen-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option>Height from</option>
                                                        <option>4'0" (121 cm)</option>
                                                        <option>4'1" (124 cm)</option>
                                                        <option>4'2" (127 cm)</option>
                                                        <option>4'3" (130 cm)</option>
                                                    </select>
                                                    <select className="chosen-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option>Height Upto</option>
                                                        <option>4'0" (121 cm)</option>
                                                        <option>4'1" (124 cm)</option>
                                                        <option>4'2" (127 cm)</option>
                                                        <option>4'3" (130 cm)</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="sr-cit">
                                                <div className="form-group">
                                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                                    <select className="chosen-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option>Location</option>
                                                        <option>Any location</option>
                                                        <option>Delhi NCR</option>
                                                        <option>UP</option>
                                                        <option>Haryana</option>
                                                    
                                                    </select>
                                                </div>
                                            </li>
                                            <li className="sr-btn">
                                                <input type="submit" value="Search" className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}