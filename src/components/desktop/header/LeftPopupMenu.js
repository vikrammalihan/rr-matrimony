"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LeftPopupMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Trigger to open menu */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-md z-50"
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>

      {/* Left popup menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-white shadow-lg z-50 overflow-y-auto">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <i className="fa fa-times text-xl" aria-hidden="true"></i>
          </button>

          <div className="p-6">
            {/* Logo */}
            <div className="mb-4">
              <Image
                src="/assets/logo-b.png"
                alt="Brand Logo"
                loading="lazy"
                width={150}
                height={50}
                className="logo-brand-only"
              />
            </div>

            {/* Intro */}
            <p className="text-gray-700 text-sm mb-6">
              <strong>Best Wedding Matrimony</strong> lacinia viverra lectus.
              Fusce imperdiet ullamcorper metus eu fringilla. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>

            {/* Contact Info */}
            <ul className="menu-pop-info space-y-4">
              <li>
                <a
                  href="tel:+928800688960"
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <i className="fa fa-phone mr-2" aria-hidden="true"></i>
                  +92 (8800) 68 - 8960
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/928800688960"
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <i className="fa fa-whatsapp mr-2" aria-hidden="true"></i>
                  +92 (8800) 68 - 8960
                </a>
              </li>
              <li>
                <a
                  href="mailto:help@company.com"
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                  help@company.com
                </a>
              </li>
              <li>
                <span className="flex items-center text-gray-700">
                  <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                  3812 Lena Lane City Jackson Mississippi
                </span>
              </li>
            </ul>

            {/* Support Team */}
            <div className="menu-pop-help mt-6">
              <h4 className="text-lg font-bold mb-2">Support Team</h4>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/assets/profiles/1.jpg"
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
            <div className="menu-pop-soci mt-6">
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
          </div>
        </div>
      )}
    </div>
  );
}
