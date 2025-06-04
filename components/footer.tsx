'use client'

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import NewsletterForm from "./newsletter-form"

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-6xl mx-auto px-4 overflow-hidden py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="">
            <Link href="/" className="flex items-center space-x-1 mb-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/assets/icon-loum-angel.png"
                  alt="Professional working with technology"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center text-3xl font-semibold mt-1">
                <span className="text-green-600">LOUMANOU</span>
                <span className="text-yellow-500">ANGEL</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              LRC Group est votre partenaire de confiance pour l'innovation technologique et la transformation digitale.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="lg:ml-10">
            <h3 className="text-lg font-bold mb-6">Nos partenaires</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://www.lrcgroupapp.com/detailsFiliale.html#3" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Pro Ecole
                </Link>
              </li>
              <li>
                <Link href="https://www.lrcgroupapp.com/detailsFiliale.html#2" target="_blank" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Candide
                </Link>
              </li>
              <li>
                <Link href="https://www.ridecongo.com" target="_blank" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Ride Congo
                </Link>
              </li>
              <li>
                <Link href="https://directransfert.com" target="_blank" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Direct Transfert
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-bold mb-6">Nos Contacts</h3>
            <ul className="space-y-3">
              <li>
                <Link href="tel:+225 07 99 01 69 20" className="text-gray-300 hover:text-yellow-400 transition-colors">
                 +225 07 99 01 69 20
                </Link>
              </li>
              <li>
                <Link href="tel:+225 66 69 95 60" className="text-gray-300 hover:text-yellow-400 transition-colors">
                 +225 66 69 95 60
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@loumanouangel.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                 contact@loumanouangel.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-green-900">
        <div className="max-w-6xl mx-auto px-4 overflow-hidden py-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Loumanou Angel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}