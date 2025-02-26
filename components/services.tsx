"use client"

import { motion } from "framer-motion"
import { MapPin, Film, MessageSquare } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Human GPS Service",
      description:
        "Sri offers expert navigation skills. With an unmatched ability to read Google Maps and find the best routes, he's essentially a walking version of the app—no detours, no wrong turns(lie), just almost perfectly accurate directions, every time. He's the ultimate guide to any destination.",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Cinematic Guru",
      description:
        "Sri is a master at recommending shows and movies, with an impeccable taste that never disappoints. You can always trust his suggestions to hit the mark. His recommendations are the perfect mix of quality and variety, ensuring every viewing experience is top-notch.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Professional Roaster",
      description:
        "Sri is not just the sweetest guy, but also the biggest bully when it comes to roasting me. He never holds back. His talent for roasting is unmatched, and while it may leave me rolling my eyes, I secretly love every moment of it.",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-navy-blue mb-12"
      >
        Services Sri provides
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-mint-green mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-navy-blue mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

