"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "#services" },
  { name: "À propos", href: "#about" },
  { name: "Témoignages", href: "#testimonials" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 overflow-hidden py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-1">
            <div className="relative w-14 h-14">
              <Image
                src="/assets/icon-loum-angel.png"
                alt="Professional working with technology"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center font-semibold mt-1">
              <span className="text-green-600">LOUMANOU</span>
              <span className="text-yellow-500">ANGEL</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors font-medium",
                scrolled ? "" : "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
          {/* <ThemeSwitch /> */}
          <Button className="bg-green-600 text-primary-foreground hover:bg-green-600/90 py-5 px-6">
            Contactez-nous
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          {/* <ThemeSwitch /> */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-md md:hidden py-4">
            <nav className="flex flex-col space-y-4 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                Contactez-nous
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}