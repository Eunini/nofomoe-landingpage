import Image from "next/image"
import { Icons } from "@/components/icons"
import { cn } from "@/lib"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface CourseCardProps {
  title: string
  department: string
  description: string
  price: number
  originalPrice?: number
  sales: number
  duration: number
  lessons: number
  rating: number
  image: string
  onSale: boolean
}

export function CourseCard({
  title,
  department,
  description,
  price,
  originalPrice,
  sales,
  duration,
  lessons,
  rating,
  image,
  onSale,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <Image src={image || "/placeholder.svg"} alt={title} width={400} height={200} className="w-full object-cover" />
        {onSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-600 font-medium">{department}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Icons.Star
                key={i}
                className={cn("w-4 h-4", i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300")}
              />
            ))}
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Download className="w-4 h-4 text-gray-700" />
            <span>{sales} sales</span>
            <span>•</span>
            <span>{duration}h</span>
            <span>•</span>
            <span>{lessons} lessons</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
            {onSale && originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0">
            Learn More →
          </Button>
        </div>
      </div>
    </div>
  )
}

