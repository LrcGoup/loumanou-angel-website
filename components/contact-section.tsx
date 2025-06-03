"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
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
    
    const element = document.getElementById("contact-section")
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20">
      <div id="contact-section" className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prêt à propulser votre entreprise vers de nouveaux sommets ? Notre équipe est à votre disposition pour répondre à vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={cn(
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            "transition-all duration-1000"
          )}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet
                  </label>
                  <Input id="name" placeholder="Votre nom" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez votre projet ou votre demande..." 
                  className="min-h-32" 
                  required 
                />
              </div>
              
              <Button className="w-full md:w-auto" size="lg">
                Envoyer le message
              </Button>
            </form>
          </div>
          
          <div className={cn(
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            "transition-all duration-1000 delay-300"
          )}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Informations de contact</h3>
                <p className="text-muted-foreground mb-8">
                  N'hésitez pas à nous contacter directement. Notre équipe reviendra vers vous dans les plus brefs délais.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border border-border/40">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">contact@loumanou-angel.fr</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/40">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Téléphone</h4>
                      <p className="text-muted-foreground">+33 (0)1 23 45 67 89</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/40">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="text-muted-foreground">
                        123 Avenue de la République<br />
                        75011 Paris, France
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}