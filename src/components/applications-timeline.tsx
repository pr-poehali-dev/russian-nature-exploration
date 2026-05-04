import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Дата-центры",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Полный цикл проектирования и строительства дата-центров любой мощности. От концепции и выбора оборудования
            до монтажа инженерных систем и ввода в эксплуатацию.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Проектирование и инженерное обеспечение
            </div>
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Поставка и монтаж серверного оборудования
            </div>
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Системы охлаждения, электропитания и безопасности
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Суперкомпьютеры",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Опыт реализации проектов суперкомпьютерных систем — от подбора архитектуры и поставки компонентов
            до сборки, тестирования и запуска в промышленную эксплуатацию.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Архитектура и проектирование вычислительных кластеров
            </div>
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Поставка высокопроизводительных компонентов
            </div>
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Интеграция и нагрузочное тестирование
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Комплексная интеграция",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Реализация уникальных клиентоориентированных проектов полного цикла. Координация поставок, логистики
            и монтажа в единый слаженный процесс с фиксированными сроками и результатом.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Управление цепочкой поставок и логистикой
            </div>
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Монтаж и пусконаладочные работы
            </div>
            <div className="flex items-center gap-3 text-lime-400 text-sm">
              <div className="w-2 h-2 bg-[#AAFF00] rounded-full"></div>
              Сопровождение и техническая поддержка
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Направления работы</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            «Кастом Солюшнз» реализует крупные инфраструктурные проекты с опытом более 15 лет —
            от концепции до ввода в эксплуатацию.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
