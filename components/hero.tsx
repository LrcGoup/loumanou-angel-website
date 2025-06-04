'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <section className="relative overflow-hidden bg-green-950 py-20 md:py-36">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transition-all duration-1000 transform space-y-6 pt-12 lg:pt-0",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              BIENVENUE CHEZ <br />
              <span className="text-yellow-400">LOUMANOU ANGEL</span>
            </h1>
            <div className="h-1 w-24 bg-green-500"></div>
            <p className="text-gray-200 mb-8 max-w-xl">
              Chez Loumanou Angel, nous proposons des solutions de conseil stratégiques pour aider votre entreprise à se développer et à atteindre ses objectifs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group bg-green-600">
                Nos services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
          <div className={cn(
            "transition-all duration-1000 delay-300 transform relative",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          )}>
            <div className="relative h-[250px] md:h-[400px] w-full">
              <Image
                src="/assets/loum-angel-team.png"
                alt="Professional working with technology"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-[-30px] right-[20%] h-16 w-16 bg-green-500 rounded-md"></div>
            <div className="absolute bottom-[-20px] left-[10%] h-20 w-20 bg-yellow-500 rounded-md"></div>
            <div className="absolute bottom-[30%] right-[-30px] h-14 w-14 bg-red-500 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Background decorative dots */}
      <div className="absolute top-1/4 right-8 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
        ))}
      </div>
      <div className="absolute bottom-1/4 left-8 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-green-500/50"></div>
        ))}
      </div>

      {/* Wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full text-white"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,141.14,213.2,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}