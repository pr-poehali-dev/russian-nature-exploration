import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие проекты реализует «Кастом Солюшнз»?",
      answer:
        "Мы специализируемся на крупных инфраструктурных проектах: проектирование и строительство дата-центров, поставка и интеграция суперкомпьютерных систем, комплексные интеграционные решения под ключ. Каждый проект адаптируется под конкретные требования заказчика.",
    },
    {
      question: "Как вы обеспечиваете соблюдение сроков?",
      answer:
        "За более чем 6 лет работы у нас нет ни одной пени и ни одного арбитражного дела. Мы заблаговременно прорабатываем альтернативные каналы поставки и логистики, что позволяет сохранять сроки даже при изменении внешних условий.",
    },
    {
      question: "Что такое клиентоориентированный подход в вашем понимании?",
      answer:
        "Мы не предлагаем шаблонных решений. Каждый проект — это детальное изучение потребностей заказчика, тонкая настройка под его задачи и долгосрочное партнёрство. Именно так строятся надёжные отношения.",
    },
    {
      question: "Какой опыт у вашей команды?",
      answer:
        "Наши специалисты имеют более 15 лет опыта в реализации крупных инфраструктурных проектов, включая проектирование и строительство дата-центров и суперкомпьютеров для ведущих российских и международных компаний.",
    },
    {
      question: "Как вы решаете проблемы с поставками оборудования?",
      answer:
        "Мы постоянно развиваем сеть альтернативных каналов закупки и логистики. Способность быстро адаптироваться к смене условий поставки — одна из наших ключевых компетенций, которая защищает проекты клиентов от внешних рисков.",
    },
    {
      question: "Как начать сотрудничество?",
      answer:
        "Свяжитесь с нами любым удобным способом. Мы проведём предварительную консультацию, изучим вашу задачу и предложим оптимальное решение с чётким планом реализации и фиксированными сроками.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о работе с «Кастом Солюшнз» и наших проектах.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-lime-400/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#AAFF00] font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}