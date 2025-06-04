"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BarChart4, BrainCircuit, BarChartHorizontal, Users, Lightbulb, TrendingUp } from "lucide-react"

const services = [
  {
    title: "Conseil Stratégique",
    description: "Développez votre entreprise avec nos solutions de conseil stratégique personnalisées pour votre secteur d'activité.",
    icon: TrendingUp,
  },
  {
    title: "Analyse de Données",
    description: "Transformez vos données en insights actionnables grâce à nos méthodes d'analyse avancées.",
    icon: BarChart4,
  },
  {
    title: "Intelligence Artificielle",
    description: "Intégrez l'IA dans vos processus pour automatiser et optimiser vos opérations quotidiennes.",
    icon: BrainCircuit,
  },
  {
    title: "Développement Organisationnel",
    description: "Améliorez l'efficacité de votre entreprise avec nos stratégies de développement organisationnel.",
    icon: Users,
  },
  {
    title: "Innovation & R&D",
    description: "Restez à la pointe de l'innovation avec nos services de recherche et développement personnalisés.",
    icon: Lightbulb,
  },
  {
    title: "Analyse de Performance",
    description: "Mesurez et optimisez la performance de votre entreprise avec nos outils d'analyse spécialisés.",
    icon: BarChartHorizontal,
  },
]

export default function ServicesSection() {
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
    
    const element = document.getElementById("services-section")
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-muted/50 scroll-mt-14">
      <div id="services-section" className="max-w-6xl mx-auto px-4 overflow-hidden">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Découvrez notre gamme complète de services de conseil conçus pour propulser votre entreprise vers de nouveaux sommets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={cn(
                "border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 h-full",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                "transition-all duration-500"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle className="text-xl text-gray-600">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}