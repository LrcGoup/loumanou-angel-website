import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
          <div className="h-1 w-24 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet
                  </label>
                  <Input id="name" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <Input id="subject" placeholder="Sujet de votre message" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Votre message" rows={5} />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Envoyer le message</Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              <p className="text-gray-600 mb-8">
                N'hésitez pas à nous contacter directement. Notre équipe est prête à vous aider.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Notre adresse</h4>
                    <p className="text-gray-600 mt-1">123 Rue de l'Innovation, 75000 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-gray-600 mt-1">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 mt-1">contact@lrcgroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
              {/* This would be a map component in a real implementation */}
              <div className="h-full w-full flex items-center justify-center text-gray-500">Carte interactive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}