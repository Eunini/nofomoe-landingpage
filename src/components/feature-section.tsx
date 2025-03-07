import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  buttonText: string
}

function FeatureCard({ title, description, imageSrc, buttonText }: FeatureCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <button className="bg-transparent rounded rounded-3xl text-white">{buttonText}</button>
      </div>
    </div>
  )
}

export function FeatureSection() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Learn Crypto With NOFOMOE</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Explore skills to help you earn from crypto mining and trading"
          description="Learn the fundamentals"
          imageSrc="/placeholder.svg?height=300&width=400"
          buttonText="Explore Skills"
        />
        <FeatureCard
          title="See market trends and learn the scope of crypto market"
          description="Stay updated"
          imageSrc="/placeholder.svg?height=300&width=400"
          buttonText="Market Insights"
        />
        <FeatureCard
          title="Explore crypto community and join affiliate programs"
          description="Join the community"
          imageSrc="/placeholder.svg?height=300&width=400"
          buttonText="Join Community"
        />
      </div>
    </section>
  )
}

