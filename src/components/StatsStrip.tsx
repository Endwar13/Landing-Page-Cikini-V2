export default function StatsStrip({ stats }) {
  return (
    <section className="bg-white border-y border-sky-100 py-10 shadow-sm relative z-20 -mt-8 mx-auto max-w-6xl rounded-2xl animate-fade-in">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <span className="text-3xl md:text-4xl font-black text-sky-600 leading-none mb-2 transition-transform duration-300 group-hover:scale-105">
              {stat.value}
            </span>
            <span className="text-[13px] font-bold text-slate-800 mb-1 leading-snug">
              {stat.label}
            </span>
            <span className="text-xs text-slate-500 hidden md:block px-2">
              {stat.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
