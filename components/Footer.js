import Image from "next/image";

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

          {/* Learn More */}
          <div>
            <h3 className="text-white mb-2">Learn More</h3>
            <ul className="text-sm leading-7 opacity-80">
              <li>Get in Touch</li>
              <li>Testimonials</li>
              <li>About me</li>
              <li>Therapies</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-2">Contact Us</h3>
            <ul className="text-sm opacity-70 space-y-2">
              <li className="flex justify-between">
                <span>Contact Number:</span>
                <span className="font-semibold">+123-456-7890</span>
              </li>
              <li className="flex justify-between">
                <span>Email:</span>
                <span>support@mindcure.com</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="mb-2">Location</h3>
            <div className="text-sm leading-7 opacity-80">
              <p>24 Willow Street</p>
              <p>New York, NY 10016</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-2">Services</h3>
            <ul className="text-sm leading-7 opacity-80">
              <li>Individual therapy</li>
              <li>Couples Counselling</li>
              <li>Family therapy</li>
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
