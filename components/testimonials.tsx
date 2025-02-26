"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      title: "Sri's Chai-making skills",
      content:
        "When it comes to making chai, precision is clearly not my strong suit. I have a talent for completely ignoring measurements, which often leads to a 'unique' flavor that no one asked for. But hey, at least it's memorable... just not in the way I intended.",
    },
    {
      title: "Sri's Sense of Humour",
      content:
        "I've mastered the art of making incredibly lame jokes that only I find funny, usually at the expense of my beloved. Whether it's roasting her over the most trivial things or laughing at my own punchlines before anyone else can react, I keep the comedy flowing. My humor may be questionable, but my charm? Unmatched.",
    },
    {
      title: "Srijan's Bank Account",
      content:
        "I may not have the funds to buy flowers for Anjali (😐) or the metro card, yet somehow, I always find a way to splurge at cafes. My bank account is well aware of my financial situation, but I prioritize good food over budgeting.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-4xl mx-auto relative">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-8 text-center relative"
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-mint-green/10 hover:bg-mint-green/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-navy-blue" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-mint-green/10 hover:bg-mint-green/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-navy-blue" />
          </button>
        </div>

        <h3 className="text-2xl font-bold text-navy-blue mb-4">{testimonials[currentSlide].title}</h3>
        <p className="text-gray-600 text-lg">{testimonials[currentSlide].content}</p>

        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-mint-green" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

