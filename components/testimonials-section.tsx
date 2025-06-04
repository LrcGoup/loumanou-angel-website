"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Loumanou Angel a transformé notre approche commerciale...",
    name: "Sophie Martin",
    title: "Directrice Générale, TechFuture",
    stars: 5,
  },
  {
    quote: "L'équipe de Loumanou Angel a fait preuve d'un professionnalisme...",
    name: "Thomas Dubois",
    title: "PDG, Innovex",
    stars: 5,
  },
  {
    quote: "Le service client de Loumanou Angel est incomparable...",
    name: "Marie Lefevre",
    title: "Directrice Marketing, GlobalVision",
    stars: 5,
  },
  {
    quote: "Grâce à Loumanou Angel, nous avons pu optimiser nos processus...",
    name: "Jean Moreau",
    title: "CFO, EcoSolutions",
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: "left" | "right") => {
    const container = containerRef.current
    if (container) {
      const cardWidth = container.offsetWidth / getCardsPerView()
      container.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" })
    }
  }

  const getCardsPerView = () => {
    if (typeof window === "undefined") return 1
    const width = window.innerWidth
    if (width >= 1024) return 3
    if (width >= 768) return 2
    return 1
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/50 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Découvrez comment Loumanou Angel a aidé ses clients à atteindre leurs objectifs commerciaux et à stimuler leur croissance.
          </p>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-4 scroll-smooth pb-4 hide-scrollbar"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              >
                <Card className="h-full border border-border/40 shadow-sm transition-all duration-500">
                  <CardHeader className="pb-2">
                    <div className="flex space-x-1 mb-2">
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic mb-6">"{t.quote}"</p>
                  </CardContent>
                  <CardFooter>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.title}</p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button variant="outline" size="icon" onClick={() => scrollByCard("left")} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scrollByCard("right")} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
