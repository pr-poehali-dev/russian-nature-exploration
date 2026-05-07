export function PartnerYadroSection() {
  return (
    <section className="bg-black py-24 px-4 border-t border-lime-400/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — label + heading */}
          <div>
            <p
              className="text-[#AAFF00] text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Партнёрство
            </p>
            <h2
              className="text-white leading-none mb-8"
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              партнёр
              <br />
              <span className="text-[#AAFF00]">YADRO</span>
            </h2>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Сотрудничество с экспертами является важным элементом усиления инженерной и технологической экспертизы компании.
            </p>
          </div>

          {/* Right — content card */}
          <div className="border border-lime-400/20 p-8 relative">
            <div className="absolute top-0 left-0 w-16 h-0.5 bg-[#AAFF00]" />
            <div className="absolute top-0 left-0 w-0.5 h-16 bg-[#AAFF00]" />
            <div className="absolute bottom-0 right-0 w-16 h-0.5 bg-[#AAFF00]" />
            <div className="absolute bottom-0 right-0 w-0.5 h-16 bg-[#AAFF00]" />

            <p
              className="text-xs text-[#AAFF00] tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              С 2025 года
            </p>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Custom Solutions развивает проектную деятельность в стратегическом партнерстве с командой{" "}
              <span className="text-white font-semibold">YADRO</span>, что обеспечивает интеграцию передовых решений и применение актуальных технологических подходов на уровне лучших отраслевых практик.
            </p>
            <p
              className="text-white/80 leading-relaxed mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Гарантирует высокий уровень компетенций в области архитектуры и инфраструктурных решений.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
