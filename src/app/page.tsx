import { SiteHeader } from "@/components/site-header"
import { CareerSection } from "@/components/career-section"
import { CoachesSection } from "@/components/coaches-section"
import { SubscribeSection } from "@/components/subscribe-section"
import { TopCourses } from "@/components/top-courses"
import { FeatureSection } from "@/components/feature-section"
import { VideoPlayer } from "@/components/video-player"
import { FeatureCard } from "@/components/feature-card"
import { SearchIcon, VideoIcon, ClockIcon, CertificateIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-1 relative min-h-[600px] rounded rounded-xl flex items-center justify-start overflow-hidden bg-[url('/Union.png')] bg-cover bg-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Hero Content Container */}
        <div className="relative sm:py-10 py-3 z-10 text-white px-4 sm:px-6 md:px-8 lg:px-16 w-full sm:max-w-4xl absolute left-0 pl-6">
          <div className="bg-black sm:py-10 py-3 border-0 rounded-2xl bg-opacity-70 shadow-lg p-6 md:p-10 lg:p-16 py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to NOFOMOE</h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6">
              Learn What You Love And Live For It. Find Out How To Leverage Resources That Will Help You Change Your
              Life.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto border-0 outline-0 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      <FeatureSection />
      {/* About Us Section */}
<section className="w-full py-16 relative ">
  {/* Pink Background - Only visible on larger screens */}
  <div className="absolute top-0 right-0 md:w-1/3 md:h-1/2 w-1/2 h-1/4 bg-pink-100 rounded-md z-0" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-sm text-gray-600 mb-2">ABOUT US</div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Video Section */}
      <div className="relative rounded-3xl">
        {/* Blue Background - Adjusted for responsiveness */}
        <div className="absolute -bottom-6 -left-6 w-2/3 h-1/2 sm:h-2/3 md:w-3/4 md:h-3/4 overflow-hidden bg-blue-500 rounded-xl z-0"></div>
        {/* Video Player with responsive thumbnail */}
        <div className="relative z-10 rounded-3xl overflow-hidden">
          <VideoPlayer 
            thumbnailUrl="/banner2.png?height=400&width=600" 
            videoUrl="#" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
          What We Do At
          <br />
          NOFOMOE
        </h2>

        <div className="space-y-4">
          <p className="text-gray-700">
            At NOFOMOE we understand the gap between you and the knowledge of crypto. We will bridge this gap.
          </p>

          <p className="text-gray-700">
            We are pleased to help you earn from your knowledge of crypto while learning the ropes. You will learn
            skills that will help you earn from crypto like thousands of people just like you are already doing.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 rounded-full p-1 mt-1">
                <div className="bg-blue-600 rounded-full w-2 h-2" />
              </div>
              <p className="text-gray-700">
                Connect with educators and become an educator through the crypto ecosystem.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-600 rounded-full p-1 mt-1">
                <div className="bg-blue-600 rounded-full w-2 h-2" />
              </div>
              <p className="text-gray-700">
                Prompt conversation and collaboration within your community of learners and earners and help you
                achieve more.
              </p>
            </div>
          </div>

          <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-6">Learn more</Button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Learning Process Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Process</h2>
            <p className="text-gray-600">
              Get to know how to gain knowledge with BITCOIN CAMPUS AFRICA, with this simple instruction that you can
              follow
            </p>
          </div>

          {/* Desktop and Tablet View */}
          <div className="hidden sm:grid sm:grid-cols-2 p-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto bg-[#f1f1f1]">
            <FeatureCard
              icon={<SearchIcon className="w-6 h-6 text-white" />}
              iconBg="bg-[#40BFFF]"
              title="Find Course"
              description="Find what do you want to learn by searching class name, category or instructor"
            />

            <FeatureCard
              icon={<VideoIcon className="w-6 h-6 text-white" />}
              iconBg="bg-[#2EC5CE]"
              title="Watch Video"
              description="Watch all the video on the class that you selected. Take a note for a better understanding"
            />

            <FeatureCard
              icon={<ClockIcon className="w-6 h-6 text-white" />}
              iconBg="bg-[#8C3FFF]"
              title="Do Assignments"
              description="To prove that you passed the class, do the assignments. Get your teacher review and get the best score"
            />

            <FeatureCard
              icon={<CertificateIcon className="w-6 h-6 text-white" />}
              iconBg="bg-[#FF3F3F]"
              title="Get Certificate"
              description="Well done! you have passed that you already understand about every subject on class"
            />
          </div>

          {/* Mobile View with Carousel */}
          <div className="sm:hidden">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <FeatureCard
                    icon={<SearchIcon className="w-6 h-6 text-white" />}
                    iconBg="bg-[#40BFFF]"
                    title="Find Course"
                    description="Find what do you want to learn by searching class name, category or instructor"
                  />
                </CarouselItem>
                <CarouselItem>
                  <FeatureCard
                    icon={<VideoIcon className="w-6 h-6 text-white" />}
                    iconBg="bg-[#2EC5CE]"
                    title="Watch Video"
                    description="Watch all the video on the class that you selected. Take a note for a better understanding"
                  />
                </CarouselItem>
                <CarouselItem>
                  <FeatureCard
                    icon={<ClockIcon className="w-6 h-6 text-white" />}
                    iconBg="bg-[#8C3FFF]"
                    title="Do Assignments"
                    description="To prove that you passed the class, do the assignments. Get your teacher review and get the best score"
                  />
                </CarouselItem>
                <CarouselItem>
                  <FeatureCard
                    icon={<CertificateIcon className="w-6 h-6 text-white" />}
                    iconBg="bg-[#FF3F3F]"
                    title="Get Certificate"
                    description="Well done! you have passed that you already understand about every subject on class"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      <CareerSection />
      <CoachesSection />
      <TopCourses />
      <SubscribeSection />
    </div>
  )
}