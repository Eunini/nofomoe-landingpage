"use client"

import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

const courses = [
  {
    title: "Introduction to Crypto",
    department: "English Department",
    description:
      "This will enable the individual to learn the basics of Crypto Currency, Going over definitions, Blockchain, Crypto and so much more",
    price: 6.48,
    originalPrice: 12.99,
    sales: 15,
    duration: 25,
    lessons: 54,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=400",
    onSale: true,
  },
  {
    title: "Graphic Design",
    department: "English Department",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: 6.48,
    originalPrice: 12.99,
    sales: 15,
    duration: 25,
    lessons: 54,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=400",
    onSale: false,
  },
  {
    title: "Graphic Design Advanced",
    department: "English Department",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: 6.48,
    originalPrice: 12.99,
    sales: 15,
    duration: 25,
    lessons: 54,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=400",
    onSale: true,
  },
  {
    title: "UI/UX Fundamentals",
    department: "English Department",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    price: 6.48,
    originalPrice: 12.99,
    sales: 15,
    duration: 25,
    lessons: 54,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=400",
    onSale: true,
  },
]

export function TopCourses() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
            style={{
              WebkitTextStroke: "1px currentColor",
              WebkitTextFillColor: "transparent",
            }}
          >
            TOP COURSES
          </h2>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    currentPage === i + 1 ? "bg-blue-500" : "bg-gray-300",
                  )}
                  onClick={() => setCurrentPage(i + 1)}
                />
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="link" className="text-blue-600 hover:text-blue-700">
                See all
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="md:hidden">
          <Carousel>
            <CarouselContent>
              {courses.map((course, index) => (
                <CarouselItem key={index}>
                  <CourseCard {...course} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

