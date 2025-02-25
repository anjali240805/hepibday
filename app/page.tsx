"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-[#FAF3F0]">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section id="about" className="py-16">
            <About />
          </section>

          <section id="services" className="py-16">
            <Services />
          </section>

          <section id="testimonials" className="py-16">
            <Testimonials />
          </section>

          <section id="contact" className="py-16">
            <Contact />
          </section>
        </motion.div>
      </main>
    </div>
  )
}