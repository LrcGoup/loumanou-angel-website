import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import ContactForm from "./contact-form"

export function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
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
            <ContactForm />
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
                    <p className="text-gray-600 mt-1">2 plateaux premier étage Moov</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-gray-600 mt-1">+225 07 99 01 69 20</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 mt-1">contact@loumanouangel.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
              <div className="h-full w-full flex items-center justify-center text-gray-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.536684849258!2d15.266293!3d-4.263431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a34c655e82061%3A0x19c06667630bfa6b!2sTon%20Lieu!5e0!3m2!1sfr!2scg!4v1689442671580!5m2!1sfr!2scg"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}