import { motion } from "motion/react";
import { X } from "lucide-react";

export default function MajorDetailModal({ selectedMajor, onClose }) {
  if (!selectedMajor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      {/* Card Content */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative z-10 overflow-hidden border border-slate-100"
      >
        <div className="p-6 bg-linear-to-r from-sky-600 to-sky-700 text-white flex items-center justify-between">
          <div>
            <h4 className="font-extrabold text-base leading-none">Detail Kurikulum & Magang</h4>
            <p className="text-[11px] text-sky-100/90 mt-1">{selectedMajor.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 space-y-5 text-xs text-slate-600">
          <div>
            <h5 className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-[10px]">Struktur Alur Belajar</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="bg-sky-50 text-sky-700 font-bold px-1.5 py-0.5 rounded text-[10px]">KLS X</span>
                <p className="leading-relaxed">Dasar kompetensi gambar teknik, K3 umum, perkenalan alat-alat perkakas, dasar pengukuran presisi, dan kunjungan industri orientasi lapangan.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="bg-sky-50 text-sky-700 font-bold px-1.5 py-0.5 rounded text-[10px]">KLS XI</span>
                <p className="leading-relaxed">Pendidikan kompetensi spesifik (misal: pemrograman PLC, simulasi CNC, EFI Injection diagnostic, atau logistik software WMS), bersiap mengikuti Praktek Kerja Lapangan (PKL) 6 bulan penuh di KIIC.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="bg-sky-50 text-sky-700 font-bold px-1.5 py-0.5 rounded text-[10px]">KLS XII</span>
                <p className="leading-relaxed">Pemantapan keahlian proyek mandiri (uji tugas akhir), pendalaman materi khusus industri mitra, persiapan uji sertifikasi BNSP & tes seleksi kerja di BKK.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h5 className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-[10px]">Alokasi Jadwal Magang (PKL)</h5>
            <p className="leading-relaxed">
              Siswa ditempatkan magang selama 1 semester penuh (6 bulan) pada Kelas XI akhir atau Kelas XII awal di bawah supervisi mentor teknis pabrik mitra. Penilaian magang berkontribusi 30% pada kelulusan akhir kompetensi.
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Tutup Detail
          </button>
        </div>
      </motion.div>
    </div>
  );
}
