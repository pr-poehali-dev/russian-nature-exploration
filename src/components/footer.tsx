export function Footer() {
  return (
    <footer id="contacts" className="bg-black border-t border-lime-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand + description */}
          <div className="md:col-span-4">
            <div className="mb-4" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, letterSpacing: "-0.03em", fontSize: "1.5rem", lineHeight: 1 }}>
              <span className="text-[#AAFF00]">custom</span>
              <span className="text-white"> solutions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Реализуем крупные инфраструктурные проекты под ключ. Дата-центры, суперкомпьютеры, комплексная интеграция.
              Более 15 лет экспертизы — качество, сроки и результат гарантированы.
            </p>

            {/* Реквизиты */}
            <div className="space-y-1 text-xs text-white/30 mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>ИНН: 7 720 457 065 &nbsp;·&nbsp; КПП: 773 501 001</p>
              <p>ОГРН: 1 197 746 196 482 &nbsp;·&nbsp; ОКПО: 36 684 356</p>
            </div>
          </div>

          {/* Направления */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700 }}>
              Направления
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Производство", href: "#manufacturing" },
                { label: "Дата-центры", href: "#applications" },
                { label: "Суперкомпьютеры", href: "#applications" },
                { label: "Интеграция", href: "#applications" },
                { label: "Вопросы", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#AAFF00] transition-colors duration-200 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700 }}>
              Компания
            </h3>
            <ul className="space-y-3">
              {[
                { label: "О компании", href: "#" },
                { label: "Проекты", href: "#" },
                { label: "Контакты", href: "#contacts" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#AAFF00] transition-colors duration-200 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div className="md:col-span-4">
            <h3 className="text-white text-xs tracking-widest uppercase mb-5" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700 }}>
              Контакты
            </h3>
            <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              {/* Телефоны */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Телефон</p>
                <a href="tel:+79099223663" className="block text-gray-300 hover:text-[#AAFF00] transition-colors text-sm">+7 (909) 922-36-63</a>
                <a href="tel:+74957980071" className="block text-gray-300 hover:text-[#AAFF00] transition-colors text-sm">+7 (495) 798-00-71</a>
              </div>
              {/* E-mail */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">E-mail</p>
                <a href="mailto:ceo@cscompany.ru" className="block text-gray-300 hover:text-[#AAFF00] transition-colors text-sm">ceo@cscompany.ru</a>
                <a href="mailto:info@cscompany.ru" className="block text-gray-300 hover:text-[#AAFF00] transition-colors text-sm">info@cscompany.ru</a>
              </div>
              {/* Сайт */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Сайт</p>
                <a href="https://www.cscompany.ru" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#AAFF00] transition-colors text-sm">
                  www.cscompany.ru
                </a>
              </div>
              {/* Адрес */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-1">Адрес</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  124460, г. Москва, г. Зеленоград,<br />
                  ул. Конструктора Гуськова, д.14, стр.1, ком.34
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-lime-400/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>© 2025 Кастом Солюшнз. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#AAFF00] text-xs transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Конфиденциальность</a>
            <a href="#" className="text-gray-500 hover:text-[#AAFF00] text-xs transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>Условия работы</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
