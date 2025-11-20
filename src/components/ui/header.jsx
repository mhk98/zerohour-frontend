"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { DarkModeToggle } from "./dark-mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { name: "জাতীয়", slug: "national" },
  { name: "আন্তর্জাতিক", slug: "international" },
  { name: "খেলাধুলা", slug: "sports" },
  { name: "বিনোদন", slug: "entertainment" },
  { name: "প্রযুক্তি", slug: "technology" },
  { name: "স্বাস্থ্য", slug: "health" },
  { name: "বাণিজ্য", slug: "business" },
  { name: "সংস্কৃতি", slug: "culture" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="font-bengali text-2xl lg:text-3xl font-bold text-primary">
              Zero Ghonta
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`/category/${category.slug}`}
                  className={`font-bengali font-medium transition-colors flex items-center gap-1 ${
                    pathname === `/category/${category.slug}`
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary"
                  }`}
                >
                  {category.name}
                  {/* <ChevronDown className="h-4 w-4" /> */}
                </Link>
                {/* <AnimatePresence>
                  {activeDropdown === category.slug && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2"
                    >
                      <Link
                        href={`/category/${category.slug}`}
                        className="block px-4 py-2 font-bengali text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        সব খবর
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence> */}
              </div>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="font-bengali py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  প্রথম পাতা
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="font-bengali py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}


