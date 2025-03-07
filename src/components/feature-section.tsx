"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  buttonText: string
}

function FeatureCard({ title, description, imageSrc, buttonText }: FeatureCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
      <Image
        src={imageSrc || "/Union.png"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <button className="bg-transparent text-white rounded-3xl px-4 py-2 text-sm w-40 border-white-500 border font-medium">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export function FeatureSection() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Learn Crypto With NOFOMOE</h2>

      {/* Desktop Grid (Visible on md and larger) */}
      <div className="hidden md:flex justify-center gap-6">
        <FeatureCard
          title="Explore skills to help you earn from crypto mining and trading"
          description="Learn the fundamentals"
          imageSrc="/Union.png?height=300&width=400"
          buttonText="Explore Skills"
        />
        <FeatureCard
          title="See market trends and learn the scope of crypto market"
          description="Stay updated"
          imageSrc="/banner.png?height=300&width=400"
          buttonText="Market Insights"
        />
        <FeatureCard
          title="Explore crypto community and join affiliate programs"
          description="Join the community"
          imageSrc="/banner2.png?height=300&width=400"
          buttonText="Join Community"
        />
      </div>

      {/* Mobile Swiper (Visible only on small screens) */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <FeatureCard
              title="Explore skills to help you earn from crypto mining and trading"
              description="Learn the fundamentals"
              imageSrc="/Union.png?height=300&width=400"
              buttonText="Explore Skills"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard
              title="See market trends and learn the scope of crypto market"
              description="Stay updated"
              imageSrc="/banner.png?height=300&width=400"
              buttonText="Market Insights"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard
              title="Explore crypto community and join affiliate programs"
              description="Join the community"
              imageSrc="/banner2.png?height=300&width=400"
              buttonText="Join Community"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
