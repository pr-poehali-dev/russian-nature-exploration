import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-[#AAFF00] mb-6 font-sans text-balance">Готовы обсудить проект?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Расскажите о вашей задаче — мы изучим её и предложим решение, адаптированное именно под ваши требования.
            Качество, сроки и результат гарантированы.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
