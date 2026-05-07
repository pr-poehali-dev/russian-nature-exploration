import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const DATA_CENTER_IMG = "https://cdn.poehali.dev/projects/0520905d-b0a3-48c5-957a-e3d06663febb/bucket/5041789a-4a7e-4a05-8092-a4a8890beca2.png"

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

function CategoryRow({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(rowRef, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={rowRef}
      key={cat.id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="border-t border-lime-400/15 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6"
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
          className="text-white/60 text-sm leading-snug"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {cat.title}
        </p>
      </div>

      {/* Clients */}
      <div className="lg:col-span-3 flex flex-wrap gap-3">
        {cat.clients.map((client, ci) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, delay: index * 0.1 + ci * 0.07 + 0.15, ease: "easeOut" }}
            className="group border border-lime-400/20 hover:border-[#AAFF00] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-200 px-5 py-3 cursor-default"
          >
            <p
              className="text-white group-hover:text-[#AAFF00] transition-colors duration-200 text-sm font-bold"
              style={{ fontFamily: "'Unbounded', sans-serif", letterSpacing: "-0.01em" }}
            >
              {client.name}
            </p>
            <p
              className="text-white/40 text-xs mt-1 max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {client.full}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"])

  return (
    <section id="clients" ref={sectionRef} className="relative overflow-hidden border-t border-lime-400/10">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          style={{ scale: imageScale, y: imageY }}
        >
          <img
            src={DATA_CENTER_IMG}
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.18) contrast(1.1)" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-[#AAFF00]/3" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            ref={headerRef}
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>

          {/* Categories */}
          <div className="space-y-0">
            {categories.map((cat, i) => (
              <CategoryRow key={cat.id} cat={cat} index={i} />
            ))}
            <div className="border-t border-lime-400/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
