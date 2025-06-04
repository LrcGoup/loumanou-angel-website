'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await res.json()
        setError(data?.message || "Erreur lors de l'envoi du message.")
      }
    } catch (err) {
      setError("Une erreur inattendue s'est produite.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
          <Input id="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
        <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="Sujet de votre message" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Votre message" rows={5} required />
      </div>
      <Button disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white">
        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>

      {success && (
        <p className="text-green-600 text-sm bg-green-100 p-3 rounded-md">
          ✅ Message envoyé avec succès !
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm bg-red-100 p-3 rounded-md">
          ❌ {error}
        </p>
      )}
    </form>
  )
}
