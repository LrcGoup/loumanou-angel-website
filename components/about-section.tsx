"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Award, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

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
    <section id="about" className="py-20 scroll-mt-14">
      <div id="about-section" className="max-w-6xl mx-auto px-4 overflow-hidden">
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
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                À Propos de <span className="text-green-600">Loumanou</span> <span className="text-yellow-500">Angel</span>
              </h2>
              <div className="h-1 w-44 bg-green-500"></div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Créée le 3 février 2023 à Abidjan, en Côte d'Ivoire, Loumanou Angel est une succursale du groupe Loumanou Ruchty Cadol Group SARL. Depuis sa fondation, elle s’est imposée comme un acteur incontournable dans le domaine du conseil aux entreprises.
            </p>

            <p className="text-muted-foreground mb-8">
              Forte de l’expertise de son équipe multidisciplinaire, Loumanou Angel accompagne les entreprises à chaque étape de leur développement, en leur apportant des solutions stratégiques sur mesure pour faire face aux défis d’un environnement en constante mutation.
            </p>
            
            <Link href="https://lrcgroupapp.com" target="_blank">
              <Button className="bg-green-600 text-primary-foreground hover:bg-green-600/90 py-5 px-6">En savoir plus</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}