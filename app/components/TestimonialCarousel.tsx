"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    content:
      "A11yHelper has revolutionized the way I approach web accessibility. It's now an integral part of my development process.",
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    content:
      "The AI-powered tools have saved me countless hours. A11yHelper is a game-changer for creating inclusive designs.",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    content:
      "Implementing accessibility has never been easier. A11yHelper has helped our team meet and exceed compliance standards.",
  },
]

export default function TestimonialCarousel() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

