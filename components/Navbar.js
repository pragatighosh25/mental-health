"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const menuItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full h-[119px] flex items-center justify-between px-6 md:px-12 text-xl text-darkslategray font-noto-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/Logo.png"
          alt="Mindcure Logo"
          width={32}
          height={30}
          priority
        />
        <span className="font-semibold leading-none">mindcure</span>
      </Link>

      {/* Desktop Navigation */}
    
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex items-center gap-4 text-base text-steelblue">
          {menuItems.map(({ label, href }) => (
            <li key={label}>
              {href.startsWith("#") ? (
                <button
                  onClick={() => {
                    const id = href.replace("#", "");
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setActiveLink(href);
                  }}
                  className={`px-4 py-2 font-medium transition ${
                    activeLink === href
                      ? "text-darkslategray font-semibold border-b-2 border-darkslategray"
                      : "hover:text-darkslategray"
                  }`}
                >
                  {label}
                </button>
              ) : (
                <Link
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className={`px-4 py-2 font-medium transition ${
                    activeLink === href
                      ? "text-darkslategray font-semibold border-b-2 border-darkslategray"
                      : "hover:text-darkslategray"
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Get Started Button (desktop) */}
      <Link href="/contact">
      <button className="hidden md:block bg-darkcyan text-white text-sm font-medium rounded-xl border-2 border-darkcyan px-6 py-2 font-ibm-plex-sans transition-transform duration-300 transform hover:scale-105 hover:shadow-md">
        Get Started
      </button>
      </Link>

      {/* Hamburger (mobile only) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[119px] left-0 w-full bg-white shadow-lg flex flex-col gap-4 text-base text-steelblue px-6 py-4 md:hidden animate-slide-down transition-all duration-300 ease-in-out">
          {menuItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`py-2 font-medium border-b border-gray-100 ${
                pathname === href ? "text-darkslategray font-semibold" : ""
              }`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {label}
            </Link>
          ))}
          <button className="bg-darkcyan text-white text-sm font-medium rounded-xl border-2 border-darkcyan px-6 py-2 font-ibm-plex-sans mt-2 self-start">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
