"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { motion } from "motion/react";
import { personalInfo } from "@/data/personal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export function PortfolioNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <Navbar className="fixed top-4 z-50">
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <motion.a
          href="#home"
          className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-bold text-black dark:text-white cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black border-2 border-white text-white font-bold text-xs">
            CK
          </div>
          <span className="font-bold">Chetan</span>
        </motion.a>

        {/* Navigation Items */}
        <NavItems items={navItems} onItemClick={handleItemClick} />

        {/* CTA Button */}
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-2 font-bold text-sm"
          onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
        >
          <span>Download CV</span>
        </HoverBorderGradient>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <motion.a
            href="#home"
            className="flex items-center space-x-2 px-2 py-1 text-sm font-bold text-black dark:text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black border-2 border-white text-white font-bold text-xs">
              CK
            </div>
            <span className="font-bold">Chetan Kushwah</span>
          </motion.a>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={handleItemClick}
                className="block px-4 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white font-medium cursor-pointer"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="mt-4">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 px-6 py-2 font-bold text-sm w-full"
                onClick={() => {
                  window.open(personalInfo.resumeUrl, "_blank");
                  setIsOpen(false);
                }}
              >
                <span>Download CV</span>
              </HoverBorderGradient>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
