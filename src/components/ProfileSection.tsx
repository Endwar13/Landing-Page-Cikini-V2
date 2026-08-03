import {
  GraduationCap,
  Compass,
  Award,
  Check,
  CheckCircle2,
  MapPin,
  Building,
  Cpu,
  Wrench,
  Activity,
  Network,
  Boxes
} from "lucide-react";

const IconMap = {
  Building: Building,
  Cpu: Cpu,
  Wrench: Wrench,
  Activity: Activity,
  Network: Network,
  Boxes: Boxes
};

function FacilityIcon({ name, className }) {
  const IconComponent = IconMap[name] || Building;
  return <IconComponent className={className} />;
}

export default function ProfileSection({ profileData }) {
  return (
    <section id="profil" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-700 uppercase tracking-widest mb-4">
          <GraduationCap size={14} className="text-sky-600" />
          <span>Profil Sekolah</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Membangun Keahlian Menuju Karir Sukses
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          SMK Perguruan Cikini KIIC Karawang didirikan di wilayah pusat industri Karawang untuk menjembatani kesenjangan kompetensi dunia akademis dengan tuntutan nyata revolusi industri 4.0.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-20">
        
        {/* Vision and Mission */}
        <div className="bg-white p-8 md:p-10 rounded-2xl border border-sky-100/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-sky-50 rounded-xl text-sky-600">
                <Compass size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Visi Sekolah</h3>
            </div>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-sky-400 pl-4 mb-8 text-[15px]">
              &ldquo;{profileData.vision}&rdquo;
            </p>

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-sky-50 rounded-xl text-sky-600">
                <Award size={22} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Misi Sekolah</h3>
            </div>
            <ul className="space-y-4">
              {profileData.missions.map((mission, i) => (
                <li key={i} className="flex items-start space-x-3 text-[14px] text-slate-600 leading-relaxed">
                  <div className="p-1 rounded-full bg-sky-50 text-sky-600 mt-0.5 shrink-0">
                    <Check size={12} className="stroke-3" />
                  </div>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCircle2 size={14} className="text-emerald-500" /> Akreditasi: <strong className="text-slate-700">{profileData.accreditation}</strong>
            </span>
            <span>Berdiri Sejak: <strong>{profileData.established}</strong></span>
          </div>
        </div>

        {/* Speeches & Maps Detail */}
        <div className="flex flex-col space-y-8 justify-between">
          
          <div className="bg-linear-to-br from-sky-600 to-sky-800 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl group-hover:scale-125 transition-transform" />
            
            <h4 className="text-[13px] font-bold text-sky-200 tracking-wider uppercase mb-1">Sambutan Kepala Sekolah</h4>
            <p className="text-sm md:text-base leading-relaxed text-sky-50/90 italic mb-6">
              &ldquo;Selamat datang di SMK Perguruan Cikini KIIC. Kami berdedikasi tinggi memberikan standar pendidikan terbaik, disiplin industri, dan link-and-match yang riil bersama mitra industri kami. Di sini, karir masa depan anak didik kami dimulai sejak hari pertama mereka masuk sekolah.&rdquo;
            </p>
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full bg-sky-400/30 border border-sky-300/40 flex items-center justify-center font-bold text-sm">
                KS
              </div>
              <div>
                <h5 className="font-bold text-sm">Giri Sasmita, M.Pd.</h5>
                <p className="text-xs text-sky-200">Kepala Sekolah SMK Percik KIIC</p>
              </div>
            </div>
          </div>

          {/* Lokasi / Lokasi Strategis */}
          <div className="bg-white p-8 rounded-2xl border border-sky-100/60 shadow-sm grow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-sky-50 rounded-xl text-sky-600">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Lokasi Strategis Kami</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {profileData.location}. Berada di area strategis kawasan industri, memudahkan rekrutmen tenaga kerja serta program peninjauan pabrik secara berkala.
            </p>
            
            <div className="w-full h-44 bg-slate-100 rounded-xl overflow-hidden relative shadow-inner border border-slate-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[16px_16px] flex flex-col items-center justify-center p-6 text-center">
                <MapPin size={28} className="text-red-500 mb-2 animate-bounce" />
                <span className="font-bold text-xs text-slate-800">SMK Perguruan Cikini KIIC Karawang</span>
                <span className="text-[10px] text-slate-400">Jl. Permata Raya Blok C1, Kawasan Industri KIIC</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FACILITIES SUBSECTION */}
      <div className="pt-10">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">Fasilitas Praktek Unggulan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.facilities.map((fac, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-3 bg-sky-50 text-sky-600 rounded-lg mb-4">
                <FacilityIcon name={fac.icon} className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-[15px] mb-2 leading-snug">{fac.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{fac.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
