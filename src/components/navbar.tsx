import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Fastnode", href: "#manufacturing" },
  { label: "Направления", href: "#applications" },
  { label: "Заказчики", href: "#clients" },
  { label: "Проекты", href: "#projects" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-lime-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, letterSpacing: "-0.03em", fontSize: "1.1rem" }}>
              <span className="text-[#AAFF00]">custom</span>
              <span className="text-white"> solutions</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-[#AAFF00] transition-colors duration-200 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#AAFF00] hover:bg-[#99ee00] text-black font-bold border-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#AAFF00] transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-lime-400/20">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 text-white hover:text-[#AAFF00] transition-colors duration-200 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-[#AAFF00] hover:bg-[#99ee00] text-black font-bold border-0"
                  onClick={() => { setIsOpen(false); document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" }) }}
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
