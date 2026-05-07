const categories = [
  {
    id: "01",
    title: "Наука и высшее образование",
    clients: [
      { name: "МФТИ", full: "Московский физико-технический институт (национальный исследовательский университет)" },
      { name: "ОИЯИ", full: "Объединённый институт ядерных исследований" },
      { name: "ФИЦ ОПБиФТ", full: "ФГБНУ «ФИЦ оригинальных и перспективных биомедицинских и фармацевтических технологий»" },
    ],
  },
  {
    id: "02",
    title: "Информационные технологии и цифровая среда",
    clients: [
      { name: "VisionLabs", full: "ООО «ВИЖНЛАБС» — один из лидеров в области компьютерного зрения" },
      { name: "Крибрум", full: "АО «Крибрум» — ведущий российский разработчик систем мониторинга и анализа социальных медиа" },
      { name: "YADRO", full: "ООО «КНС ГРУПП» (бренд YADRO) — ключевой разработчик и производитель вычислительной техники" },
    ],
  },
  {
    id: "03",
    title: "Телекоммуникации и медиа",
    clients: [
      { name: "Ростелеком ЦР", full: "Ростелеком Цифровые Регионы (РЦР)" },
      { name: "Газпром-Медиа", full: "АО «Газпром-Медиа Холдинг»" },
    ],
  },
  {
    id: "04",
    title: "Промышленность",
    clients: [
      { name: "СМК", full: "АО «СМК» (Ступинская металлургическая компания)" },
    ],
  },
]

export function ClientsSection() {
  return (
    <section className="bg-black py-24 px-4 border-t border-lime-400/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#AAFF00] text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Заказчики
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
            ключевые
            <br />
            <span className="text-[#AAFF00]">заказчики</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-0">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="border-t border-lime-400/10 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6"
            >
              {/* Category number + title */}
              <div className="lg:col-span-1">
                <span
                  className="text-[#AAFF00] text-xs tracking-widest block mb-2"
                  style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700 }}
                >
                  {cat.id}
                </span>
                <p
                  className="text-white/50 text-sm leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {cat.title}
                </p>
              </div>

              {/* Clients */}
              <div className="lg:col-span-3 flex flex-wrap gap-3">
                {cat.clients.map((client) => (
                  <div
                    key={client.name}
                    className="group border border-lime-400/20 hover:border-[#AAFF00] transition-all duration-200 px-5 py-3 cursor-default"
                  >
                    <p
                      className="text-white group-hover:text-[#AAFF00] transition-colors duration-200 text-sm font-bold"
                      style={{ fontFamily: "'Unbounded', sans-serif", letterSpacing: "-0.01em" }}
                    >
                      {client.name}
                    </p>
                    <p
                      className="text-white/30 text-xs mt-1 max-w-xs"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {client.full}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-lime-400/10" />
        </div>
      </div>
    </section>
  )
}
