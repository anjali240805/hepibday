"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-navy-blue mb-12"
      >
        Connect with me today!
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-mint-green mb-4">Contact</h3>
          <p className="text-navy-blue">teleport to me</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-mint-green mb-4">Location</h3>
          <p className="text-navy-blue flex items-center justify-center">
            in your heart <Heart className="w-4 h-4 ml-1 text-red-500" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-mint-green mb-4">Open hours</h3>
          <p className="text-navy-blue">24/7 for my baby</p>
        </motion.div>
      </div>
    </div>
  )
}

