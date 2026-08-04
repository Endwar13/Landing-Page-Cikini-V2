import { Phone, Mail, MapPin, CalendarCheck } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="kontak" className="bg-linear-to-br from-sky-600 via-sky-700 to-slate-900 py-24 px-6 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px] opacity-10" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-200 bg-sky-500/30 px-3.5 py-1.5 rounded-full inline-block">
            Konsultasi & Kunjungan Sekolah
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Ingin Tahu Lebih Banyak Tentang Percik KIIC?
          </h2>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
            Kami menyambut hangat kunjungan calon siswa, wali murid, maupun perwakilan perusahaan industri yang ingin melihat langsung fasilitas workshop kami atau berdiskusi mengenai penyerapan lulusan.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-xl mx-auto lg:mx-0 text-left">
            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <MapPin size={18} className="text-sky-300 shrink-0" />
              <div>
                <span className="text-[10px] text-sky-200 font-bold uppercase tracking-wider block">Lokasi Sekolah</span>
                <span className="text-xs font-medium text-slate-100">KIIC Karawang Barat</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <CalendarCheck size={18} className="text-sky-300 shrink-0" />
              <div>
                <span className="text-[10px] text-sky-200 font-bold uppercase tracking-wider block">Jam Operasional</span>
                <span className="text-xs font-medium text-slate-100">Senin - Jumat | 07:00 - 15:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column buttons */}
        <div className="lg:col-span-5 flex flex-col gap-4 w-full sm:w-auto sm:max-w-md mx-auto">
          <a
            href="tel:+622678450883"
            className="px-8 py-4 bg-white text-sky-700 font-black text-sm rounded-xl shadow-xl transition-all hover:bg-slate-50 hover:scale-[1.02] cursor-pointer text-center flex items-center justify-center space-x-3.5"
          >
            <Phone size={16} />
            <span>Telepon Kantor (+62 812-9206-906)</span>
          </a>
          
          <a
            href="mailto:khrisnatirtaendira@gmail.com?subject=Tanya%20Informasi%20Percik%20KIIC"
            className="px-8 py-4 bg-sky-500/30 hover:bg-sky-500/40 text-white font-bold text-sm rounded-xl border border-white/20 transition-all text-center flex items-center justify-center space-x-3.5"
          >
            <Mail size={16} />
            <span>Kirim Email Resmi</span>
          </a>
        </div>

      </div>
    </section>
  );
}
