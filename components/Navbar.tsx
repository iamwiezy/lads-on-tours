"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="flexBetween max-container padding-container relative z-50 py-5">
      {/* Logo */}
      <Link href="/">
        <p className="poppins-black text-2xl uppercase">
          Lads <span className="text-green-600">On Tours</span>
        </p>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-600">
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="hidden lg:flex">
        <Link href="https://wa.me/919876543210" target="_blank">
          <Button
            type="button"
            title="WhatsApp Us"
            icon="/whatsapp.svg"
            variant="btn_white"
          />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden z-50" onClick={toggleMenu}>
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-white shadow-md rounded-xl px-6 py-4 lg:hidden z-40">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-900 text-lg font-medium hover:text-green-600 transition">
                  {link.label}
                </Link>
              ))}
              <Link href="https://wa.me/919485431169" target="_blank">
                <Button
                  type="button"
                  title="WhatsApp Us"
                  icon="/whatsapp.svg"
                  variant="btn_white"
                />
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
