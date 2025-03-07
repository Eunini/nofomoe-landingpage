import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CoachesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-coral-500/20 rounded-full transform -translate-x-1/4" />
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Crypto coach"
              width={400}
              height={400}
              className="relative z-10"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Learn from the best crypto coaches around the world.
            </h2>
            <p className="text-gray-600">
              Expert crypto coaches teach around the world that are ready to teach millions of students on NOFOMOE. Get
              guidance at your pace and resources to help you achieve your goals.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-900 rounded rounded-2xl text-white">Get Free</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

