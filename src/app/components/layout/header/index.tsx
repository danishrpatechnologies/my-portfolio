"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Logo from "../logo";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
}

/* ------------------------------
   FIXED FRAMER-MOTION VARIANTS
------------------------------ */
const sidebarVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const submenuVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.18 },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.22 },
  },
};

/* ------------------------------ */

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#gallery" },
    {
      name: "Case Study",
      href: "/case-study",
      subLinks: [
        { name: "Squash Analytics", href: "/case-study/squash-analytics" },
        { name: "Alsco", href: "/case-study/alsco" },
        { name: "Moneyspot", href: "/case-study/moneyspot" },
        { name: "ClassCade", href: "/case-study/classcade" },
        { name: "Fintech Spectrum", href: "/case-study/fintech-spectrum" },
        { name: "Cloud Chillies", href: "/case-study/cloud-chillies" },
        { name: "RMU Tracking System", href: "/case-study/rmu-tracking" },
      ],
    },
  ];

  // prevent body scroll when menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const handleNavClick = (
    href: string,
    e?: React.MouseEvent<HTMLAnchorElement>,
    closeMobile?: boolean
  ) => {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1)) return;
    if (e) e.preventDefault();

    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      if (href !== pathname) router.push(href);
    }

    if (closeMobile) setIsOpen(false);
    setOpenMobileIndex(null);
  };

  const toggleMobileSubmenu = (index: number) => {
    setOpenMobileIndex((prev) => (prev === index ? null : index));
  };

  return (
    <header className="header-fixed bg-transparent backdrop-blur-sm">
      <div className="container">
        <nav className="flex justify-between items-center py-2">
          <Logo />

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.subLinks) {
                      e.preventDefault();
                      return;
                    }
                    handleNavClick(link.href, e);
                  }}
                  className={`text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-500 transition-colors duration-300 flex items-center gap-2 ${
                    pathname === link.href ? "text-indigo-600" : ""
                  }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={16} />}
                </a>

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <ul className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-gray-900 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                    {link.subLinks.map((sub) => (
                      <li key={sub.name}>
                        <a
                          href={sub.href}
                          onClick={(e) => handleNavClick(sub.href, e)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 p-2 rounded-md"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.aside
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white dark:bg-gray-900 shadow-2xl z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
            >
              <div className="mobile-menu-data">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                  <Logo />
                  <button
                    className="text-gray-700 dark:text-gray-200 p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={26} />
                  </button>
                </div>

                <nav className="p-4">
                  <ul className="flex flex-col gap-2">
                    {navLinks.map((link, idx) => (
                      <li key={link.name} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <a
                            href={link.href}
                            onClick={(e) => {
                              if (link.subLinks) {
                                e.preventDefault();
                                toggleMobileSubmenu(idx);
                                return;
                              }
                              handleNavClick(link.href, e, true);
                            }}
                            className="text-gray-700 dark:text-gray-200 font-medium py-3 flex-1"
                          >
                            {link.name}
                          </a>

                          {link.subLinks && (
                            <button
                              onClick={() => toggleMobileSubmenu(idx)}
                              className="p-2 text-gray-600 dark:text-gray-300"
                            >
                              {openMobileIndex === idx ? (
                                <ChevronUp size={18} />
                              ) : (
                                <ChevronDown size={18} />
                              )}
                            </button>
                          )}
                        </div>

                        {/* Mobile Submenu */}
                        {link.subLinks && (
                          <AnimatePresence initial={false}>
                            {openMobileIndex === idx && (
                              <motion.ul
                                className="ml-4 mt-1 flex flex-col gap-1 overflow-hidden"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={submenuVariants}
                              >
                                {link.subLinks.map((sub) => (
                                  <li key={sub.name}>
                                    <a
                                      href={sub.href}
                                      onClick={(e) => handleNavClick(sub.href, e, true)}
                                      className="block text-gray-600 dark:text-gray-400 text-sm py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                      {sub.name}
                                    </a>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
