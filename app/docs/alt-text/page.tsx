import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AltTextGuidePage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        Writing Effective Alt Text
      </h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Alternative text (alt text) is crucial for making images accessible to users with visual impairments. This guide
        will help you write effective alt text for your images.
      </p>
      <div className="space-y-8 max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>What is Alt Text?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Alt text is a written description of an image that screen readers can read aloud to users who are visually
              impaired. It's also displayed in place of an image if the image fails to load.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Why is Alt Text Important?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Alt text is important for several reasons:</CardDescription>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Makes images accessible to visually impaired users</li>
              <li>Improves SEO by helping search engines understand image content</li>
              <li>Provides context when images fail to load</li>
              <li>Helps users decide whether to download images on slow connections</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Best Practices for Writing Alt Text</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Follow these best practices when writing alt text:</CardDescription>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Be specific and concise</li>
              <li>Describe the content and function of the image</li>
              <li>Keep it under 125 characters when possible</li>
              <li>Don't start with "Image of" or "Picture of"</li>
              <li>Include text that's part of the image</li>
              <li>Consider the context of the image</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Examples of Good Alt Text</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Here are some examples of effective alt text for different types of images:
            </CardDescription>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <strong>For a logo:</strong> "Company Name logo"
              </li>
              <li>
                <strong>For a product photo:</strong> "Red leather wallet with multiple card slots and coin purse"
              </li>
              <li>
                <strong>For a graph:</strong> "Bar chart showing sales growth from 2010 to 2020, with a 50% increase"
              </li>
              <li>
                <strong>For a button:</strong> "Download PDF report"
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>When to Use Empty Alt Text</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Use empty alt text (alt="") for decorative images that don't convey content or when the image content is
              already described in the surrounding text. This tells screen readers to skip the image.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

