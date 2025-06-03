"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const features = [
  {
    title: "Solutions Personnalisées",
    description: "Nous développons des solutions adaptées aux besoins spécifiques de votre entreprise pour maximiser votre efficacité."
  },
  {
    title: "Expertise Sectorielle",
    description: "Notre équipe possède une expertise approfondie dans de nombreux secteurs, garantissant des conseils pertinents et efficaces."
  },
  {
    title: "Approche Orientée Résultats",
    description: "Nous nous concentrons sur l'obtention de résultats tangibles et mesurables pour nos clients."
  },
  {
    title: "Support Continu",
    description: "Nous offrons un support continu après l'implémentation pour assurer le succès à long terme de nos solutions."
  }
]

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)

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
    
    const element = document.getElementById("features-section")
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20">
      <div id="features-section" className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            "transition-all duration-1000"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi choisir <span className="text-primary">Loumanou Angel</span> ?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Nous nous distinguons par notre approche centrée sur le client et notre engagement à fournir des solutions qui dépassent vos attentes.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "bg-accent/50 p-6 rounded-lg border border-border/40",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
                    "transition-all duration-500"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="group">
                Découvrir nos avantages
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className={cn(
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            "transition-all duration-1000 delay-300"
          )}>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/5 rounded-full z-0" />
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full z-0" />
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Équipe de consultants" 
                className="rounded-xl object-cover w-full h-auto relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}