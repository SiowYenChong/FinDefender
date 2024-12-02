'use client'

import * as React from "react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    id: 1,
    title: "New Phishing Scam Targeting Online Banking Users",
    description: "Be aware of emails claiming to be from your bank asking for personal information.",
    url: "https://example.com/phishing-scam",
  },
  {
    id: 2,
    title: "FakeBank Corp Reported for Fraudulent Activities",
    description: "Multiple users have reported suspicious transactions from FakeBank Corp.",
    url: "https://example.com/fakebank-fraud",
  },
  {
    id: 3,
    title: "Protect Yourself from SMS Scams",
    description: "Learn how to identify and avoid SMS scams pretending to be your bank.",
    url: "https://example.com/sms-scams",
  },
]

export default function BannerCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel 
      className="w-full bg-yellow-100 p-4" 
      opts={{ loop: true }}
      setApi={setApi}
    >
      <CarouselContent>
        {newsItems.map((item) => (
          <CarouselItem key={item.id}>
            <Link href={item.url} target="_blank" rel="noopener noreferrer">
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex items-center p-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold text-yellow-800">{item.title}</h2>
                    <p className="text-sm text-yellow-700">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className="flex justify-center mt-4">
        {newsItems.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 rounded-full mx-1 p-0 ${
              index === currentSlide ? 'bg-yellow-600' : 'bg-yellow-300'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}
