"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Loumanou Angel a transformé notre approche commerciale avec leurs conseils stratégiques. Notre chiffre d'affaires a augmenté de 40% en seulement six mois.",
    name: "Sophie Martin",
    title: "Directrice Générale, TechFuture",
    stars: 5,
  },
  {
    quote: "L'équipe de Loumanou Angel a fait preuve d'un professionnalisme exceptionnel. Leurs analyses de données nous ont permis d'identifier des opportunités de croissance que nous n'avions pas envisagées.",
    name: "Thomas Dubois",
    title: "PDG, Innovex",
    stars: 5,
  },
  {
    quote: "Le service client de Loumanou Angel est incomparable. Ils sont toujours disponibles pour répondre à nos questions et nous fournir des conseils personnalisés.",
    name: "Marie Lefevre",
    title: "Directrice Marketing, GlobalVision",
    stars: 5,
  },
  {
    quote: "Grâce à Loumanou Angel, nous avons pu optimiser nos processus internes et réduire nos coûts opérationnels de 25%. Un investissement qui a rapidement porté ses fruits.",
    name: "Jean Moreau",
    title: "CFO, EcoSolutions",
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const testimonialsPerView = { base: 1, md: 2, lg: 3 }
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - testimonialsPerView.lg ? prev + 1 : prev))
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div id="testimonials-section" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez comment Loumanou Angel a aidé ses clients à atteindre leurs objectifs commerciaux et à stimuler leur croissance.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100 / testimonials.length}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                >
                  <Card className={cn(
                    "h-full border border-border/40 shadow-sm",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                    "transition-all duration-500"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Précédent</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              disabled={currentIndex >= testimonials.length - testimonialsPerView.lg}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Suivant</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}