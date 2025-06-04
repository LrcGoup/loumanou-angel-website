"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

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
      <div id="features-section" className="max-w-6xl mx-auto px-4 overflow-hidden scroll-mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            "transition-all duration-1000"
          )}>

            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi choisir <br /> <span className="text-green-600">Loumanou</span> <span className="text-yellow-500">Angel</span>
              </h2>
              <div className="h-1 w-44 bg-green-500"></div>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Nous nous distinguons par notre approche centrée sur le client et notre engagement à fournir des solutions qui dépassent vos attentes.
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
            
            <div className="mt-8">
              <Link href="https://lrcgroupapp.com" target="_blank">
                <Button className="group bg-green-600 text-primary-foreground hover:bg-green-600/90 py-5 px-6">
                  Découvrir nos avantages
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
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