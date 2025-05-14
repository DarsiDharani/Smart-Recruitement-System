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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About JobPortal</h3>
          <p className="text-sm leading-6 text-gray-400">
            JobPortal is your one-stop destination for finding your dream job or hiring top talent.
            We connect job seekers with employers, simplify applications, and streamline hiring.
          </p>
        </div>

        {/* For Employers */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Employers</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/admin/jobs/create" className="hover:text-white transition-colors duration-200">Post a Job</a></li>
            <li><a href="/admin/companies" className="hover:text-white transition-colors duration-200">Company Dashboard</a></li>
            <li><a href="/admin/companies/create" className="hover:text-white transition-colors duration-200">New Company</a></li>
            <li><a href="/profile" className="hover:text-white transition-colors duration-200">Profile</a></li>
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

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
