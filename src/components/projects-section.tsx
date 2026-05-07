const projects = [
  {
    id: "01",
    title: "AI/ML кластер",
    budget: "90 000 000 ₽",
    tags: ["GPU NVIDIA", "Дефицитное оборудование"],
    details: [
      "GPU ускорители NVIDIA",
      "Поставка оригинального оборудования в условиях дефицита",
    ],
  },
  {
    id: "02",
    title: "СХД для коллайдера NICA",
    budget: "более 1 000 000 $",
    tags: ["High SLA", "Партнёрский проект", "ЗИП склад"],
    details: [
      "Высочайший уровень SLA, склад ЗИП для заказчика",
      "Партнёрский проект, реализованный в срок",
    ],
  },
  {
    id: "03",
    title: "Серверные системы для AI-инфраструктуры",
    budget: "50 000 000 ₽",
    tags: ["GPU A800", "2 месяца"],
    details: [
      "Серверы с графическими ускорителями А800",
      "Комплексная поставка в течение 2 месяцев",
    ],
  },
  {
    id: "04",
    title: "Серверная платформа СРК",
    budget: "33 000 000 ₽",
    tags: ["44-ФЗ", "Реестровое оборудование", "6 недель"],
    details: [
      "Аукцион 44 ФЗ",
      "Оперативная интеграция реестрового оборудования в 6-недельный срок",
    ],
  },
  {
    id: "05",
    title: "Инженерные системы для ЦОД",
    budget: "11 000 000 ₽",
    tags: ["44-ФЗ", "Реестровое оборудование"],
    details: [
      "Аукцион 44 ФЗ",
      "Успешная реализация на базе реестрового оборудования с соблюдением всех сроков",
    ],
  },
  {
    id: "06",
    title: "Сервер для AI",
    budget: "7 000 000 ₽",
    tags: ["2×A100 + NVLink", "Прямая поставка из Китая"],
    details: [
      "Выдан кластер с 2×A100 + NVLINK на тест",
      "Разработана архитектура решения",
      "Прямая поставка из Китая",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section className="bg-black py-24 px-4 border-t border-lime-400/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-[#AAFF00] text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Опыт
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
            практический опыт
            <br />
            <span className="text-[#AAFF00]">в цифрах</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-lime-400/10">
          {projects.map((p) => (
            <div key={p.id} className="bg-black p-8 relative group hover:bg-[#AAFF00]/3 transition-colors duration-300">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-0.5 bg-[#AAFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 w-0.5 h-8 bg-[#AAFF00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <span
                className="text-white/20 text-xs mb-4 block"
                style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700 }}
              >
                {p.id}
              </span>

              {/* Budget */}
              <p
                className="text-[#AAFF00] mb-3"
                style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {p.budget}
              </p>

              {/* Title */}
              <h3
                className="text-white mb-5 leading-snug"
                style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h3>

              {/* Details */}
              <ul className="space-y-1.5 mb-6">
                {p.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-white/50 text-xs flex gap-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="text-[#AAFF00] mt-0.5 flex-shrink-0">—</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] border border-lime-400/20 text-white/40 px-2 py-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
