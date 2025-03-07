import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CareerSection() {
  return (
    <section className="bg-[#F8F6FF] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Kick start your career in Crypto today.</h2>
            <p className="text-gray-600">
              You will soon skills that will help you make the most in the crypto market as you are properly equipped to
              earn from your own work flow. Now will find a community of people like you who are eager to collaborate
              with you on your journey to financial independence.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-900  rounded rounded-2xl hover:bg-blue-800 text-white">Start Us Now</Button>
          </div>
          <div className="relative">
            {/* Dotted pattern decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
              <div className="grid grid-cols-6 gap-1">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-blue-600 rounded-full" />
                ))}
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Person working at desk"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

