import Image from "next/image";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  className?: string; // Add className prop
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function VideoPlayer({ thumbnailUrl, videoUrl, className }: VideoPlayerProps) {
  return (
    <div className={`relative aspect-video rounded-2xl overflow-hidden ${className || ""}`}>
      <Image src={thumbnailUrl || "/Union.png"} alt="Video thumbnail" fill className="object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-black/30 hover:bg-black/50 transition-colors rounded-full p-4" aria-label="Play video">
          <Play className="h-10 w-10 text-white" fill="white" />
        </button>
      </div>
    </div>
  );
}