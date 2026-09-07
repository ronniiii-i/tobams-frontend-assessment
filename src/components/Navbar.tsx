"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", hasDropdown: true, href: "#", active: true },
    { name: "What We Do", hasDropdown: true, href: "#" },
    { name: "Jobs", hasDropdown: true, href: "#" },
    { name: "Projects", hasDropdown: false, href: "#" },
    { name: "TG Academy", hasDropdown: false, href: "#" },
    { name: "Strategic Partnership", hasDropdown: false, href: "#" },
    { name: "Pricing", hasDropdown: false, href: "#" },
    { name: "Book a Consultation", hasDropdown: false, href: "#" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="hidden lg:block w-full">
        <div className="border-b border-light-purple w-full">
          <div className="max-w-9/10 xl:max-w-4/5 mx-auto px-8 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="relative w-40 lg:w-60 xl:w-80 h-10 lg:h-15"
            >
              <Image
                src="/images/logo.png"
                alt="Tobams Group Logo"
                fill
                priority
                sizes="160px"
                className="object-contain object-left"
              />
            </Link>

            <div className="flex items-stretch gap-4">
              <button className="bg-purple text-white text-lg px-4 py-2 rounded-sm font-nunito-sans font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <div className="bg-light-purple rounded-full p-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z"
                      stroke="#571244"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Account
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83337 8.33333L10 12.5L14.1667 8.33333"
                    stroke="#DDD0DA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="bg-pink text-white px-4 py-2 rounded-sm font-nunito-sans font-semibold text-lg hover:opacity-90 transition-opacity">
                Take Assessment
              </button>
            </div>
          </div>
        </div>
        <nav className="max-w-9/10 xl:max-w-4/5 mx-auto px-8 py-3.5">
          <ul className="flex items-center justify-center gap-8 text-sm font-nunito-sans text-black">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 transition-colors hover:text-purple hover:border-b-2 hover:border-purple pb-1 text-sm md:text-base lg:text-lg ${
                    link.active
                      ? "text-purple font-semibold border-b-2 border-purple"
                      : ""
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="lg:hidden flex items-center justify-between px-6 py-4 bg-white">
        <Link href="/" className="relative w-40 h-12">
          <Image
            src="/images/logo.png"
            alt="Tobams Group Logo"
            fill
            priority
            sizes="144px"
            className="object-contain object-left"
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Navigation Menu"
          className="bg-black text-white p-2 rounded-lg flex items-center justify-center"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#14050E] text-white animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-4 bg-white text-black">
            <Link href="/" className="relative w-40 h-12">
              <Image
                src="/images/logo.png"
                alt="Tobams Group Logo"
                fill
                priority
                sizes="144px"
                className="object-contain object-left"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Navigation Menu"
              className="bg-black text-white p-1.5 rounded-md flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
            <ul className="flex flex-col gap-6 text-base font-semibold font-nunito-sans">
              {navLinks
                .map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 hover:text-pink transition-colors"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="flex flex-col gap-3 mt-10 items-start">
              <button className="min-w-[200px] bg-white text-dark-purple py-3 rounded-sm font-bold text-sm hover:bg-gray-100 transition-colors">
                Log In
              </button>
              <button className="min-w-[200px] bg-purple text-white py-3 rounded-sm font-bold text-sm hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
