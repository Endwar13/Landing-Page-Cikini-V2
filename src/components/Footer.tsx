import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer({ schoolLogo, majorsData, scrollToSection, setActiveTab }) {
  const handleMajorClick = (id) => {
    scrollToSection("jurusan");
    setActiveTab(id);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-10 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* Col 1 */}
        <div className="md:col-span-5">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={schoolLogo}
              alt="Logo Percik Footer"
              className="w-12 h-12 rounded-full object-cover bg-white"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="font-bold text-white text-[17px] block tracking-tight">
                SMK Perguruan Cikini
              </span>
              <span className="text-sky-400 text-xs font-bold uppercase tracking-wider block leading-none">
                KIIC Karawang
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-6">
            Pendidikan kejuruan modern, handal, dan berkarakter, menghasilkan tenaga kerja siap pakai berstandar tinggi nasional maupun global di bawah naungan Yayasan Perguruan Cikini.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-semibold text-slate-500">Kunjungi:</span>
            <a href="https://percikkiic.sch.id" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-sky-400 hover:bg-slate-700/80 transition-colors">
              <Globe size={15} />
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Konsentrasi Keahlian</h4>
          <ul className="space-y-2 text-xs">
            {majorsData.map((maj) => (
              <li key={maj.id}>
                <button
                  onClick={() => handleMajorClick(maj.id)}
                  className="hover:text-sky-400 transition-colors cursor-pointer text-left"
                >
                  {maj.name} ({maj.shortName})
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div className="md:col-span-4">
          <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Hubungi Kami</h4>
          <ul className="space-y-3.5 text-xs">
            <li className="flex items-start space-x-2.5">
              <MapPin size={15} className="text-sky-400 shrink-0 mt-0.5" />
              <span>Jl. Permata Raya Blok C1, Kawasan Industri KIIC, Sukaluyu, Karawang Barat, Karawang, Jawa Barat 41361</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone size={15} className="text-sky-400 shrink-0" />
              <span>+62 267 845 0883</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail size={15} className="text-sky-400 shrink-0" />
              <span>info@percikkiic.sch.id</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800/60 text-center text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; 2026 SMK Perguruan Cikini KIIC Karawang. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <span>Powered by</span>
          <span className="text-slate-400 font-semibold">Google AI Studio</span>
        </p>
      </div>
    </footer>
  );
}
