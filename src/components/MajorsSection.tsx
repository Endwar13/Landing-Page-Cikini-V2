import { motion } from "motion/react";
import { Cpu, Flame, CheckCircle2, Briefcase, ChevronRight, Info } from "lucide-react";

export default function MajorsSection({ majorsData, activeTab, setActiveTab, onSelectMajorDetail }) {
  return (
    <section id="jurusan" className="bg-sky-300 py-24 border-y border-sky-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-700 uppercase tracking-widest mb-4">
            <Cpu size={14} className="text-sky-600" />
            <span>Konsentrasi Keahlian</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            5 Jurusan Terakreditasi Tinggi
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Silabus pembelajaran dirancang terintegrasi dengan kebutuhan nyata industri manufaktur, teknik, dan sistem rantai pasok logistik modern.
          </p>
        </div>

        {/* Tab Controls (Click/Hover Interactive) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {majorsData.map((major) => {
            const isSelected = activeTab === major.id;
            return (
              <button
                key={major.id}
                onClick={() => setActiveTab(major.id)}
                onMouseOver={() => setActiveTab(major.id)}
                className={`px-4 md:px-6 py-3.5 rounded-xl font-bold text-xs md:text-sm tracking-wide uppercase transition-all duration-200 cursor-pointer flex items-center space-x-2.5 ${
                  isSelected
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20 scale-[1.02]"
                    : "bg-slate-50 text-slate-600 hover:bg-sky-50 hover:text-sky-700 border border-slate-100"
                }`}
              >
                <span className="opacity-75">{major.shortName}</span>
                <span className="font-semibold block max-w-37.5 truncate">{major.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content with Animations */}
        <div className="min-h-112.5">
          {majorsData.map((major) => {
            if (major.id !== activeTab) return null;
            return (
              <motion.div
                key={major.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-slate-50 p-6 md:p-10 rounded-2xl border border-sky-100/60"
              >
                {/* Intro Left */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase text-sky-600 tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100/60 inline-block mb-4">
                      Konsentrasi Keahlian {major.shortName}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-3">
                      {major.name}
                    </h3>
                    <p className="text-sky-600 font-bold text-[14px] mb-5 leading-normal">
                      {major.tagline}
                    </p>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                      {major.description}
                    </p>
                  </div>

                  {/* Major Unique Features */}
                  <div className="bg-white p-5 rounded-xl border border-sky-100/40 mt-4">
                    <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <Flame size={12} className="text-amber-500" />
                      Keunggulan Utama Jurusan
                    </h4>
                    <ul className="space-y-2">
                      {major.features.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start space-x-2">
                          <span className="text-sky-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specific Skills & Careers Right */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Skills taught */}
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span>Keterampilan yang Dikuasai</span>
                    </h4>
                    <ul className="space-y-3">
                      {major.skills.map((skill, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Opportunities */}
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Briefcase size={16} className="text-sky-600" />
                      <span>Peluang Karir Lulusan</span>
                    </h4>
                    <ul className="space-y-3">
                      {major.careers.map((career, i) => (
                        <li key={i} className="flex items-center space-x-2.5 text-xs text-slate-600 font-medium">
                          <ChevronRight size={14} className="text-sky-400 shrink-0" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed curriculum trigger button */}
                  <button
                    onClick={() => onSelectMajorDetail(major)}
                    className="w-full text-center py-3 bg-sky-50 hover:bg-sky-100/80 text-sky-700 font-semibold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 border border-sky-100"
                  >
                    <Info size={14} />
                    <span>Lihat Alur Kurikulum & Jadwal Magang</span>
                  </button>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
