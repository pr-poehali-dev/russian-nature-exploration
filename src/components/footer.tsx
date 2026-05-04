import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-lime-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4" style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, letterSpacing: "-0.03em", fontSize: "1.5rem", lineHeight: 1 }}>
              <span className="text-[#AAFF00]">custom</span>
              <span className="text-white"> solutions</span>
            </div>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Реализуем крупные инфраструктурные проекты под ключ. Дата-центры, суперкомпьютеры, комплексная интеграция.
              Более 15 лет экспертизы — качество, сроки и результат гарантированы.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#AAFF00] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#AAFF00] transition-colors duration-200">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#AAFF00] transition-colors duration-200">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Направления</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-[#AAFF00] transition-colors duration-200"
                >
                  Дата-центры
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-[#AAFF00] transition-colors duration-200"
                >
                  Суперкомпьютеры
                </a>
              </li>
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-[#AAFF00] transition-colors duration-200"
                >
                  Интеграция
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-[#AAFF00] transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-[#AAFF00] transition-colors duration-200">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-[#AAFF00] transition-colors duration-200">
                  Проекты
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-[#AAFF00] transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-lime-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 Кастом Солюшнз. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-[#AAFF00] text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-[#AAFF00] text-sm transition-colors duration-200"
              >
                Условия работы
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}