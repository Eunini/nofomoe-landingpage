import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  description: string
}

export function FeatureCard({ icon, iconBg, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all ">
      <div className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

