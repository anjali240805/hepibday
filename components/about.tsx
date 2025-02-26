"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-navy-blue mb-6">About the Birthday Boy</h1>
        <div className="relative">
          <div className="absolute right-0 top-0 w-32 h-32">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(14)-NC7zpvf1L5ocJhzlsRu7KtpLvYCrRI.png"
              alt="Decorative eye"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <div className="prose prose-lg max-w-none text-navy-blue">
            <p>
              Sri is the cutest little baby with the goofiest personality. He has the weirdest sense of humour whose
              wavelength matches exactly with mine. Sri is also a very hardworking individual who gets really upset when
              he can&apos;t get something done(cries too, sometimes lol).
            </p>
            <p>Above all, he&apos;s a nice guy. It&apos;s rare to come across people like him.</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

