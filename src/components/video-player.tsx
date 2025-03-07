import Image from "next/image"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  thumbnailUrl: string
  videoUrl: string
}

export function VideoPlayer({ thumbnailUrl, videoUrl }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden">
      <Image src={thumbnailUrl || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-black/30 hover:bg-black/50 transition-colors rounded-full p-4" aria-label="Play video">
          <Play className="h-10 w-10 text-white" fill="white" />
        </button>
      </div>
    </div>
  )
}

