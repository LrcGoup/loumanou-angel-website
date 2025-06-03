"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Award, CheckCircle, TrendingUp } from "lucide-react"

const values = [
  {
    title: "Excellence",
    description: "Nous nous efforçons d'atteindre l'excellence dans tous nos services et interactions."
  },
  {
    title: "Innovation",
    description: "Nous adoptons constamment de nouvelles idées et technologies pour rester à la pointe."
  },
  {
    title: "Intégrité",
    description: "Nous maintenons les plus hauts standards d'éthique et de transparence dans nos relations."
  },
]

export default function AboutSection() {
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
    
    const element = document.getElementById("about-section")
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20">
      <div id="about-section" className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "order-2 lg:order-1",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            "transition-all duration-1000"
          )}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg z-0" />
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Notre équipe" 
                className="rounded-lg object-cover w-full h-auto relative z-10 shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg z-0" />
            </div>
          </div>
          
          <div className={cn(
            "order-1 lg:order-2",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            "transition-all duration-1000 delay-300"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À Propos de <span className="text-primary">Loumanou Angel</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Fondée en 2023, Loumanou Angel s'est rapidement imposée comme un leader dans le domaine du conseil aux entreprises. Notre équipe d'experts possède une vaste expérience dans divers secteurs, nous permettant d'offrir des solutions personnalisées qui répondent aux besoins spécifiques de chaque client.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8">
              Notre mission est d'aider les entreprises à naviguer dans le paysage commercial en constante évolution en leur fournissant des conseils stratégiques et des solutions innovantes.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button>En savoir plus</Button>
          </div>
        </div>
      </div>
    </section>
  )
}