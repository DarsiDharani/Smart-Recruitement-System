import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 md:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About JobPortal</h3>
          <p className="text-sm leading-6 text-gray-400">
            JobPortal is your one-stop destination for finding your dream job or hiring top talent.
            We connect job seekers with employers, simplify applications, and streamline hiring.
          </p>
        </div>

        {/* For Job Seekers */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Job Seekers</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/jobs" className="hover:text-white transition-colors duration-200">Browse Jobs</a></li>
            <li><a href="/saved-jobs" className="hover:text-white transition-colors duration-200">Saved Jobs</a></li>
            <li><a href="/profile" className="hover:text-white transition-colors duration-200">My Profile</a></li>
            <li><a href="/resumeBuilder" className="hover:text-white transition-colors duration-200">Resume Builder</a></li>
            <li><a href="/profile" className="hover:text-white transition-colors duration-200">Application Status</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              <span>RGUKT RK Valley, Andhra Pradesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" />
              <span>+91 1234567891</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <span>support@jobportal.in</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
