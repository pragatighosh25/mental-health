import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-darkcyan text-white font-noto-sans text-lg">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-6 md:px-36 py-16 gap-6">
        {/* Top Footer Section */}
        <div className="w-full flex flex-wrap justify-between gap-y-10 gap-x-8">
          {/* Logo */}
          <div className="flex items-center bg-white text-darkslategray px-4 py-2 gap-2 rounded-md">
            <Image src="/Logo.png" alt="Mindcure Logo" width={32} height={30} />
            <span className="font-semibold text-xl">mindcure</span>
          </div>

          {/* Get Links */}
          <div>
            <h3 className="text-white mb-2">Get Links</h3>
            <ul className="text-sm leading-7 opacity-80 space-y-1">
              <li>
                <Link
                  href="/contact"
                  className="hover:underline hover:text-white transition"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:underline hover:text-white transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:underline hover:text-white transition"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:underline hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:underline hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-2">Contact Us</h3>
            <ul className="text-sm opacity-70 space-y-2">
              <li className="flex justify-between">
                <span>Contact Number:</span>
                <a
                  href="tel:+13235550192"
                  className="font-semibold hover:underline hover:text-white transition"
                >
                  +(323) 555-0192
                </a>
              </li>
              <li className="flex justify-between">
                <span>Email:</span>
                <a
                  href="mailto:serena@mindcure.com"
                  className="font-semibold hover:underline hover:text-white transition"
                >
                  serena@mindcure.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="mb-2">Location</h3>
            <div className="text-sm leading-7 opacity-80">
              <a
                href="https://www.google.com/maps?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026"
                className="font-semibold hover:underline hover:text-white transition"
              >
                1287 Maplewood Drive, <br />
                Los Angeles, CA 90026
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-2">Services</h3>
            <ul className="text-sm leading-7 opacity-80 space-y-1">
              <li>
                <a
                  href="#services"
                  className="hover:underline hover:text-white transition font-medium"
                >
                  Anxiety and Stress Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:underline hover:text-white transition font-medium"
                >
                  Relationship Counselling
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:underline hover:text-white transition font-medium"
                >
                  Trauma Recovery
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="w-full border-t border-white opacity-20 mt-10" />

        {/* Copyright */}
        <p className="text-sm opacity-65 text-center mt-4">
          © 2025 Mindcure | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
