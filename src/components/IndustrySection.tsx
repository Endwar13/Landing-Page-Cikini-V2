import { Users, Quote } from "lucide-react";

export default function IndustrySection({ industrialData }) {
  return (
    <section id="kerjasama" className="bg-sky-300 py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-700 uppercase tracking-widest mb-4">
          <Users size={14} className="text-sky-600" />
          <span>Sinergi Dunia Industri</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Hubungan Erat bersama Raksasa Industri KIIC
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          {industrialData.description}
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {industrialData.benefits.map((benefit, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-sky-100/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-[15px] mb-2 leading-snug">{benefit.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Companies Grid */}
      <div className="bg-slate-100/80 rounded-2xl p-8 md:p-12 border border-slate-200/60 mb-20">
        <h3 className="text-center text-xs font-bold text-slate-500 tracking-widest uppercase mb-10">
          Mitra Industri & Pengguna Lulusan Utama kami
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industrialData.partners.map((partner, i) => (
            <div 
              key={i} 
              className="bg-white px-5 py-6 rounded-xl border border-slate-200/40 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300"
            >
              <span className="font-black text-[15px] text-slate-800 tracking-tight mb-1">
                {partner.name.split("PT ")[1] || partner.logoText}
              </span>
              <span className="text-[10px] uppercase font-bold text-sky-500 tracking-wider">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {industrialData.testimonials.map((test, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-sky-100/40 shadow-sm relative flex flex-col justify-between">
            <div className="mb-6">
              <span className="text-4xl text-sky-200 font-serif leading-none absolute top-4 left-4 select-none">&ldquo;</span>
              <p className="text-[14px] text-slate-600 leading-relaxed italic relative z-10 pl-4">
                {test.quote}
              </p>
            </div>
            
            <div className="flex items-center space-x-3.5 border-t border-slate-50 pt-4">
              <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">
                {test.author.substring(4, 6).toUpperCase()}
              </div>
              <div>
                <h5 className="font-bold text-xs text-slate-900">{test.author}</h5>
                <p className="text-[10px] text-slate-400 font-semibold">{test.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
