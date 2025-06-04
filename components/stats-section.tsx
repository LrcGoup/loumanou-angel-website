"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const stats = [
  {
    value: "98%",
    label: "Satisfaction client",
  },
  {
    value: "250+",
    label: "Projets réalisés",
  },
  {
    value: "15+",
    label: "Années d'expérience",
  },
  {
    value: "25+",
    label: "Experts consultants",
  },
]

export default function StatsSection() {
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
    
    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-green-950 text-primary-foreground">
      <div id="stats-section" className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={cn(
                "text-center",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                "transition-all duration-700"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}