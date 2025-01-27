"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RightPopupMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Trigger to open menu */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-md z-50"
      >
        <i className="fa fa-comments" aria-hidden="true"></i>
      </button>

      {/* Right popup menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-3/4 max-w-md bg-white shadow-lg z-50 overflow-y-auto">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
          >
            <i className="fa fa-times text-xl" aria-hidden="true"></i>
          </button>

          <div className="p-6">
            {/* Support Team */}
            <div className="menu-pop-help mb-6">
              <h4 className="text-lg font-bold mb-4">Support Team</h4>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/profiles/1.jpg"
                    alt="Support Team"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h5 className="font-semibold">Ashley Emyy</h5>
                  <span className="text-sm text-gray-600">
                    Senior personal advisor
                  </span>
                  <Link
                    href="/enquiry"
                    className="block mt-2 bg-blue-600 text-white py-1 px-3 rounded text-sm"
                  >
                    Ask your doubts
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="menu-pop-soci mb-6">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="#!"
                    className="text-gray-700 hover:text-gray-900"
                    aria-label="Facebook"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-700 hover:text-gray-900"
                    aria-label="Twitter"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-700 hover:text-gray-900"
                    aria-label="WhatsApp"
                  >
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-700 hover:text-gray-900"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-700 hover:text-gray-900"
                    aria-label="YouTube"
                  >
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-gray-700 hover:text-gray-900"
                    aria-label="Instagram"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Latest News */}
            <div className="late-news mb-6">
              <h4 className="text-lg font-bold mb-4">Latest News</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-16 h-16 rounded overflow-hidden mr-4">
                    <Image
                      src="/images/couples/1.jpg"
                      alt="News"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold">
                      Long established fact that a reader distracted
                    </h5>
                    <span className="text-xs text-gray-600">12 Dec 2023</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-16 h-16 rounded overflow-hidden mr-4">
                    <Image
                      src="/images/couples/3.jpg"
                      alt="News"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold">
                      Long established fact that a reader distracted
                    </h5>
                    <span className="text-xs text-gray-600">12 Dec 2023</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Help Box */}
            <div className="prof-rhs-help bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-bold mb-2">Tell us your Needs</h3>
              <p className="text-sm text-gray-600 mb-4">
                Tell us what kind of service you are looking for.
              </p>
              <Link
                href="/register"
                className="bg-blue-600 text-white py-2 px-4 rounded text-sm"
              >
                Register for free
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
