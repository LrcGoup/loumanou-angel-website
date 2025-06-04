"use client"
import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setMessage({ type: "success", text: "Merci pour votre inscription !" })
        setEmail("")
      } else {
        throw new Error(data.message || "Une erreur s'est produite.")
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          className="w-52 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
          required
        />
        <div className="">
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-r-md font-medium"
          >
            {loading ? "..." : "OK"}
          </button>
        </div>
      </div>

      {message && (
        <p className={`${message.type === "success" ? "text-green-600" : "text-red-600"} text-sm`}>
          {message.type === "success" ? '✅' : '❌'} {message.text}
        </p>
      )}
    </form>
  )
}
