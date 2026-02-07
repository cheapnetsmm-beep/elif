"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const servicesLinks = [
    { href: "/diyetisyen", label: "Online Diyetisyen" },
    { href: "/psikolog", label: "Online Psikolog" },
    { href: "/psikonutrisyon", label: "Psikonütrisyon" },
  ];

  const resourcesLinks = [
    { href: "/mutfak", label: "Bütüncül Beslenme Mutfağı" },
    { href: "/kendini-kesfet", label: "Kendini Keşfet" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center space-x-2 group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-14 sm:h-16 w-auto px-2 py-1 rounded-lg transition-all duration-300 group-hover:bg-primary-50/50"
            >
              <Image
                src="/logos.png"
                alt="Elif Naz Öksüz"
                width={180}
                height={64}
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Ana Sayfa
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                  pathname.startsWith("/diyetisyen") ||
                  pathname.startsWith("/psikolog") ||
                  pathname.startsWith("/psikonutrisyon")
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                <span>Hizmetler</span>
                <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                  pathname.startsWith("/mutfak") ||
                  pathname.startsWith("/kendini-kesfet")
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                <span>Kaynaklar</span>
                <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {openDropdown === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/hakkimda"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/hakkimda"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Hakkımda
            </Link>

            <Link
              href="/iletisim"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/iletisim"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-700 hover:text-primary-600"
              }`}
            >
              İletişim
            </Link>

            <Link
              href="/randevu"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              Randevu Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg ${
                  pathname === "/"
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Ana Sayfa
              </Link>
              <div className="px-4 py-2 font-semibold text-gray-900">
                Hizmetler
              </div>
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 font-semibold text-gray-900">
                Kaynaklar
              </div>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-8 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg ${
                  pathname.startsWith("/blog")
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/hakkimda"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg ${
                  pathname === "/hakkimda"
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Hakkımda
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg ${
                  pathname === "/iletisim"
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                İletişim
              </Link>
              <Link
                href="/randevu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold text-center"
              >
                Randevu Al
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



