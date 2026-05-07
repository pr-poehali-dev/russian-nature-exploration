const brands = [
  "Supermicro", "Asus", "Intel", "AMD Radeon",
  "Samsung", "Nvidia", "Broadcom", "ExeGate",
  "Seagate", "Western Digital", "Mellanox",
]

export function ManufacturingSection() {
  return (
    <section className="bg-black py-24 px-4 border-t border-lime-400/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#AAFF00] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Производство
          </p>
          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            высокотехнологичное
            <br />
            <span className="text-[#AAFF00]">производство</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left — certification block */}
          <div className="border border-lime-400/20 p-8 relative">
            <div className="absolute top-0 left-0 w-12 h-0.5 bg-[#AAFF00]" />
            <div className="absolute top-0 left-0 w-0.5 h-12 bg-[#AAFF00]" />
            <p className="text-xs text-[#AAFF00] tracking-widest uppercase mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Fastnode · EAC 2024
            </p>
            <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              В рамках развития собственного производства в 2024 году была пройдена процедура сертификации ЕАС для оборудования под торговой маркой <span className="text-white font-semibold">Fastnode</span>, что позволило повысить управляемость и независимость при реализации проектов.
            </p>
          </div>

          {/* Right — expertise block */}
          <div className="border border-lime-400/20 p-8 relative">
            <div className="absolute top-0 left-0 w-12 h-0.5 bg-[#AAFF00]" />
            <div className="absolute top-0 left-0 w-0.5 h-12 bg-[#AAFF00]" />
            <p className="text-xs text-[#AAFF00] tracking-widest uppercase mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Экспертиза
            </p>
            <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Создание уникального серверного оборудования под руководством профильных экспертов — гарантия высокой производительности и многофункциональности систем компании. Проектирование решений на базе передовых компонентов от мировых лидеров ИТ-индустрии.
            </p>
          </div>
        </div>

        {/* Brand ticker */}
        <div className="border-t border-lime-400/10 pt-10">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-6 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
            Компоненты от мировых лидеров
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {brands.map((brand) => (
              <span
                key={brand}
                className="border border-lime-400/30 text-white/60 hover:border-[#AAFF00] hover:text-[#AAFF00] transition-all duration-200 px-4 py-2 text-sm"
                style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
