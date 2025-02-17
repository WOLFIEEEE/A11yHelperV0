import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    title: "Accessibility in Web Design Workshop",
    description: "A hands-on workshop covering the basics of accessible web design.",
    date: "2023-08-15",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    slug: "accessibility-workshop",
  },
  {
    title: "A11y Meetup: ARIA and Beyond",
    description: "Join us for a discussion on advanced ARIA techniques and their practical applications.",
    date: "2023-09-05",
    time: "6:30 PM - 8:30 PM",
    location: "TechHub, New York",
    slug: "a11y-meetup-aria",
  },
  {
    title: "Inclusive Design Conference",
    description: "A two-day conference featuring talks from leading experts in accessibility and inclusive design.",
    date: "2023-10-20 - 2023-10-21",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, San Francisco",
    slug: "inclusive-design-conference",
  },
  {
    title: "Webinar: Automated Accessibility Testing",
    description: "Learn how to integrate automated accessibility testing into your development workflow.",
    date: "2023-11-10",
    time: "11:00 AM - 12:30 PM",
    location: "Online",
    slug: "automated-testing-webinar",
  },
]

export default function EventsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Upcoming Events</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Join us for workshops, meetups, and conferences focused on web accessibility and inclusive design.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>
                {event.date} • {event.time}
                <br />
                {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{event.description}</p>
              <Button asChild>
                <Link href={`/events/${event.slug}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

