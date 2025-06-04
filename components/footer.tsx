'use client'

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
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

          <div>
            <h3 className="text-lg font-bold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/nos-filiales" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Nos filiales
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Nos services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Développement Logiciel
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Innovation Technologique
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Conseil & Stratégie
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Analyse de Données
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Solutions Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Cybersécurité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités.
            </p>
            <form className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-r-md font-medium"
                >
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-green-900">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} LRC Group. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}