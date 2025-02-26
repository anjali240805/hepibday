"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function NavigationBar({ activeSection, setActiveSection }: NavigationProps) {
  const sections = ["about", "services", "testimonials", "contact"]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8 py-4">
          {sections.map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className="relative text-navy-blue hover:text-mint-green transition-colors"
              >
                <span className="capitalize">{section}</span>
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mint-green"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

