"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/5 dark:from-primary/5 dark:to-background z-0" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Solutions de conseil <span className="text-primary">innovantes</span> pour votre entreprise
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Chez Loumanou Angel, nous proposons des solutions de conseil stratégiques pour aider votre entreprise à se développer et à atteindre ses objectifs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Nos services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          )}>
            <div className="relative bg-gradient-to-br from-primary/80 to-primary p-1 rounded-2xl shadow-xl">
              <div className="bg-background dark:bg-card rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Équipe de professionnels" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}