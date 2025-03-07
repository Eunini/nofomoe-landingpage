import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function SubscribeSection() {
  return (
    <section className="bg-[#0A0628] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Subscribe & Get Update on New Courses</h2>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-[#1A1644] border-0 text-white placeholder:text-gray-400"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap">Subscribe Now</Button>
          </div>
        </div>
      </div>

      {/* Profile Images */}
      <div className="absolute inset-0 flex items-center justify-start">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              transform: `rotate(${i * 60}deg) translateY(-180px)`,
            }}
          >
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt={`Profile ${i + 1}`}
              width={50}
              height={50}
              className="rounded-full border-2 border-white"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

