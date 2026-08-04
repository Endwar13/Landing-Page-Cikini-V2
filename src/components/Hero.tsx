import { motion } from "motion/react";
import { ChevronRight, PhoneCall } from "lucide-react";

export default function Hero({ scrollY, schoolLogo, heroBg, scrollToSection }) {
  // Scroll interactive coefficients
  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroScale = 1 + scrollY * 0.0004;
  const heroTranslateY = scrollY * 0.35;
  const logoScale = Math.max(0.65, 1 - scrollY / 600);
  const logoTranslateY = scrollY * 0.15;

  return (
    <section className="relative h-[95vh] min-h-150 w-full overflow-hidden flex items-center justify-center bg-slate-900">
      
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-full origin-center"
        style={{
          transform: `translateY(${heroTranslateY}px) scale(${heroScale})`,
          opacity: heroOpacity,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-sky-950/75 via-sky-900/60 to-slate-950/90" />
      </div>

      {/* Floating Abstract Shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        
        {/* Animated Logo Container */}
        <motion.div
          style={{
            transform: `translateY(${logoTranslateY}px) scale(${logoScale})`,
          }}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          className="mb-8"
        >
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl relative group">
            <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-xl group-hover:scale-110 transition-transform duration-500" />
            <img
              src={schoolLogo}
              alt="Logo SMK Perguruan Cikini KIIC"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-inner relative z-10 bg-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* School Name Headers */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sky-300 uppercase tracking-widest font-extrabold text-sm md:text-base mb-3"
        >
          YAYASAN PERGURUAN CIKINI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight md:leading-none mb-6 text-slate-100"
        >
          SMK Perguruan Cikini <br />
          <span className="text-sky-300">KIIC Karawang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-slate-300 max-w-2xl font-light mb-10 leading-relaxed"
        >
          Menghasilkan lulusan kompeten bersertifikasi industri nasional & global. Terintegrasi langsung di Pusat Kawasan Industri Terbesar di Indonesia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("kontak")}
            className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-sky-400/40 transform active:scale-[0.98] flex items-center justify-center space-x-2.5 cursor-pointer group"
          >
            <span>Hubungi Kami</span>
            <PhoneCall size={18} className="text-sky-100 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection("profil")}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Jelajahi Profil</span>
            <ChevronRight size={18} />
          </button>
        </motion.div>

      </div>


    </section>
  );
}
