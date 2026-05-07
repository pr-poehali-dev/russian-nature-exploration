import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Гибкость и адаптивность",
    description: "Быстро реагируем на смену внешних условий, способов поставки и логистики. Ваш проект не остановится из-за внешних факторов.",
    icon: "Zap",
    badge: "Скорость",
  },
  {
    title: "Новые каналы закупки",
    description: "Постоянно находим и развиваем альтернативные каналы закупки оборудования для бесперебойной работы цепочки поставок.",
    icon: "Link",
    badge: "Снабжение",
  },
  {
    title: "Высочайшее качество",
    description: "Неизменно соблюдаем стандарты качества поставляемого оборудования и выполняемых работ на каждом этапе.",
    icon: "Target",
    badge: "Стандарт",
  },
  {
    title: "Клиентоориентированность",
    description: "Каждый проект тонко настроен и адаптирован под конкретные запросы и потребности заказчика. Никаких шаблонных решений.",
    icon: "Globe",
    badge: "Индивидуально",
  },
  {
    title: "Экспертиза 15+ лет",
    description: "Команда с опытом реализации крупных инфраструктурных проектов: проектирование и строительство дата-центров и суперкомпьютеров.",
    icon: "Brain",
    badge: "Опыт",
  },
  {
    title: "Репутация без претензий",
    description: "За более чем 6 лет работы — ни одной пени и ни одного арбитражного дела. Качество, сроки и результат — наша гарантия.",
    icon: "ShieldCheck",
    badge: "Надёжность",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Шесть ключевых принципов, которые делают «Кастом Солюшнз» надёжным партнёром для сложных инфраструктурных проектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#AAFF00]/10 flex items-center justify-center">
                    <Icon name={feature.icon} size={20} className="text-[#AAFF00]" />
                  </div>
                  <span
                    className="text-xs border border-lime-400/30 text-[#AAFF00] px-2 py-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature.badge}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
