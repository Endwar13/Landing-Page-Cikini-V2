import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrollToSection, schoolLogo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 shadow-sm border-b border-sky-100/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between animate-fade-in">
        
        {/* NAV ITEMS: Left Side */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleNavClick("profil")}
            className="font-medium text-[15px] text-slate-600 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
          >
            Profil Sekolah
          </button>
          <button
            onClick={() => handleNavClick("jurusan")}
            className="font-medium text-[15px] text-slate-600 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
          >
            Jurusan Unggulan
          </button>
          <button
            onClick={() => handleNavClick("kerjasama")}
            className="font-medium text-[15px] text-slate-600 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
          >
            Kerjasama Industri
          </button>
        </div>

        {/* MOBILE MENU TOGGLE: Left/Center on Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* SCHOOL NAME / LOGO: Right Side */}
        <div className="flex items-center space-x-3 text-right">
          <div className="flex flex-col">
            <span className="font-bold text-base md:text-[17px] tracking-tight text-slate-900 leading-tight">
              SMK Perguruan Cikini
            </span>
            <span className="text-[11px] md:text-xs font-semibold text-sky-600 uppercase tracking-widest leading-none">
              KIIC Karawang
            </span>
          </div>
          <img
            src={schoolLogo}
            alt="Logo Percik"
            className="w-10 h-10 rounded-full border border-sky-200 object-cover bg-white"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-sky-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("profil")}
                className="text-left font-medium text-slate-700 hover:text-sky-600 py-2 border-b border-slate-50 cursor-pointer"
              >
                Profil Sekolah
              </button>
              <button
                onClick={() => handleNavClick("jurusan")}
                className="text-left font-medium text-slate-700 hover:text-sky-600 py-2 border-b border-slate-50 cursor-pointer"
              >
                Jurusan Unggulan
              </button>
              <button
                onClick={() => handleNavClick("kerjasama")}
                className="text-left font-medium text-slate-700 hover:text-sky-600 py-2 border-b border-slate-50 cursor-pointer"
              >
                Kerjasama Industri
              </button>
              <button
                onClick={() => handleNavClick("kontak")}
                className="w-full text-center font-semibold bg-sky-600 text-white rounded-xl py-3 shadow-md shadow-sky-100 hover:bg-sky-700 active:scale-95 transition-all cursor-pointer"
              >
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
