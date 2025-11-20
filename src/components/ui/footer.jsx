import React from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  // Data for Menus
  const topMenuLinks = ["আমার দেশ", "যোগাযোগ", "শর্তাবলী ও নীতিমালা", "গোপনীয়তা নীতি", "ডিএমসিপি"];
  const bottomMenuLinks = ["ওয়েব মেইল", "কন্ট্যাক্ট", "আর্কাইভ", "বিজ্ঞাপন", "সাইটম্যাপ"];

  // Data for Social Icons
  const socialLinks = [
    { icon: FaFacebookF, color: "text-blue-600", href: "#" },
    { icon: RxTwitterLogo, color: "text-black", href: "#" }, // Twitter usually black/dark now
    { icon: SiTiktok, color: "text-black", href: "#" },
    { icon: BsWhatsapp, color: "text-green-500", href: "#" },
    { icon: FaPinterestP, color: "text-red-600", href: "#" },
    { icon: FaYoutube, color: "text-red-500", href: "#" },
    { icon: FaLinkedinIn, color: "text-blue-700", href: "#" },
    { icon: FaInstagram, color: "text-pink-500", href: "#" },
    { icon: FaGoogle, color: "text-red-500", href: "#" },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t mt-12 font-sans">
      
      {/* Top Menu Section (Fixed Layout) */}
      <div className="border-b bg-white">
        {/* Main Container for alignment */}
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Side: Menu Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {topMenuLinks.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm font-bold text-black hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                // Added bg-gray-100 and rounded-full to make them look like buttons (optional, looks nice)
                className={`p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 ${social.color}`}
                aria-label="Social Link"
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column: Publisher Info */}
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
          <div>
            <p>
              স্বত্বঃ © <span className="font-semibold text-gray-800">আমার দেশ</span> | সম্পাদক ও প্রকাশক, মাহমুদুর রহমান
            </p>
          </div>
          <p className="text-justify">
            মাহমুদুর রহমান কর্তৃক ঢাকা ট্রেড সেন্টার (৮ম ফ্লোর), ৯৯, কাজী নজরুল ইসলাম অ্যাভিনিউ, কারওয়ান
            বাজার, ঢাকা-১২১৫ থেকে প্রকাশিত এবং আমার দেশ পাবলিকেশন লিমিটেড প্রেস, ৪৪/সি ও ৪৪/ডি, তেজগাঁও শিল্প এলাকা,
            ঢাকা-১২০৮ থেকে মুক্তি।
          </p>
        </div>

        {/* Right Column: Contact Info */}
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p><span className="font-semibold text-gray-700">সম্পাদক ও বানিজ্য বিভাগ:</span> ঢাকা ট্রেড সেন্টার, ৯৯, কাজী নজরুল ইসলাম অ্যাভিনিউ, কারওয়ান বাজার, ঢাকা-১২১৫।</p>
          
          <div className="grid sm:grid-cols-2 gap-x-2 gap-y-1">
            <p>ফোন: ০২-৫৫০১২২৫০</p>
            <p>ই-মেইল: info@dailyamardesh.com</p>
            <p>বার্তা ফোন: ০১৬৬৬-৭৪৯৪০০</p>
            <p>ই-মেইল: news@dailyamardesh.com</p>
            <p>বিজ্ঞাপন ফোন: +৮৮০-১৭১৫-০২৫৪০৪</p>
            <p>ই-মেইল: ad@dailyamardesh.com</p>
            <p>সার্কুলেশন ফোন: +৮৮০-০১৯১৯-৮৭৬৮৬৭</p>
            <p>ই-মেইল: circulation@dailyamardesh.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t bg-gray-50 py-4">
        <div className="max-w-6xl mx-0 px-4 flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm text-gray-500">
          {bottomMenuLinks.map((item, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-blue-600 hover:underline transition-all"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;