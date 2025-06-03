import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Conseil Stratégique", href: "#" },
      { name: "Analyse de Données", href: "#" },
      { name: "Intelligence Artificielle", href: "#" },
      { name: "Développement Organisationnel", href: "#" },
      { name: "Innovation & R&D", href: "#" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { name: "À propos", href: "#about" },
      { name: "Équipe", href: "#" },
      { name: "Carrières", href: "#" },
      { name: "Témoignages", href: "#testimonials" },
      { name: "Partenaires", href: "#" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Études de cas", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="font-bold text-2xl text-primary mb-4 inline-block">
              Loumanou Angel
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Fournisseur leader de solutions de conseil stratégique et d'analyse de données pour aider les entreprises à se développer et à prospérer.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Loumanou Angel. Tous droits réservés.
            </p>
            
            <div className="flex space-x-6">
              <Link 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Mentions légales
              </Link>
              <Link 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="#" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}