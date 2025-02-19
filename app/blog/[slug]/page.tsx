import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Script from "next/script"

const blogPosts = [
  {
    slug: "understanding-wcag-2-2",
    title: "Understanding WCAG 2.2: What's New and How to Prepare",
    date: "2023-07-15",
    content: `
      <h1>Understanding WCAG 2.2: What's New and How to Prepare</h1>
      <p>The Web Content Accessibility Guidelines (WCAG) 2.2 is set to become the new standard for web accessibility. This update brings several new success criteria and changes to existing ones, aiming to address the evolving landscape of web technologies and user needs.</p>
      <h2>Key Changes in WCAG 2.2</h2>
      <ul>
        <li><strong>2.4.11 Focus Appearance (Minimum) (AA):</strong> Ensures that keyboard focus indicators are clearly visible and meet minimum contrast requirements.</li>
        <li><strong>2.5.7 Dragging Movements (AA):</strong> Requires that all functionality that uses dragging movements can be operated by single pointer without dragging, unless dragging is essential.</li>
        <li><strong>2.5.8 Target Size (Minimum) (AA):</strong> Specifies that interactive targets should be at least 24 by 24 CSS pixels, with some exceptions.</li>
        <li><strong>3.2.6 Consistent Help (A):</strong> Mandates that help mechanisms (like contact information or human assistance) are provided consistently across a set of web pages.</li>
        <li><strong>3.3.7 Accessible Authentication (A):</strong> Aims to make user authentication processes more accessible, especially for users with cognitive disabilities.</li>
        <li><strong>3.3.8 Redundant Entry (A):</strong> Requires websites to remember information that users have already entered to avoid unnecessary repetition.</li>
      </ul>
      <h2>How to Prepare for WCAG 2.2</h2>
      <ol>
        <li><strong>Audit Your Current Site:</strong> Use A11yHelper's accessibility checker to identify areas that may not comply with the new guidelines.</li>
        <li><strong>Focus on New Criteria:</strong> Pay special attention to the new success criteria, particularly those at Level A and AA.</li>
        <li><strong>Update Design Systems:</strong> Ensure your design systems and component libraries are updated to meet the new requirements, especially for focus indicators and target sizes.</li>
        <li><strong>Enhance Authentication Processes:</strong> Review and update your authentication methods to ensure they're accessible and comply with the new guidelines.</li>
        <li><strong>Test with Users:</strong> Conduct usability testing with people with disabilities to ensure your implementations are effective.</li>
      </ol>
      <p>By staying ahead of these changes and implementing them proactively, you can ensure that your websites remain accessible to all users and compliant with the latest standards.</p>
    `,
  },
  {
    slug: "ai-in-web-accessibility",
    title: "The Role of AI in Improving Web Accessibility",
    date: "2023-07-02",
    content: `
      <h1>The Role of AI in Improving Web Accessibility</h1>
      <p>Artificial Intelligence (AI) is revolutionizing many aspects of web development, and accessibility is no exception. AI-powered tools are making it easier than ever to create, test, and maintain accessible websites.</p>
      <h2>How AI is Enhancing Web Accessibility</h2>
      <ol>
        <li><strong>Automated Accessibility Testing:</strong> AI algorithms can scan websites and applications to identify accessibility issues much faster and more comprehensively than manual testing alone.</li>
        <li><strong>Intelligent Content Generation:</strong> AI can generate accessible alternatives for content, such as automatically creating accurate alt text for images or providing real-time closed captions for videos.</li>
        <li><strong>Personalized User Experiences:</strong> AI can adapt website interfaces based on individual user needs, enhancing accessibility on a per-user basis.</li>
        <li><strong>Predictive Analysis:</strong> By analyzing user behavior, AI can predict potential accessibility issues before they become problematic.</li>
      </ol>
      <h2>AI-Powered Accessibility Tools</h2>
      <ul>
        <li><strong>A11yHelper's AI Accessibility Checker:</strong> Our tool uses machine learning algorithms to provide comprehensive accessibility audits and suggestions for improvement.</li>
        <li><strong>Intelligent Alt Text Generator:</strong> Automatically generates descriptive alt text for images, ensuring that visual content is accessible to screen reader users.</li>
        <li><strong>AI-Enhanced Color Contrast Analyzer:</strong> Goes beyond simple contrast ratios to consider context and user preferences for more nuanced accessibility recommendations.</li>
      </ul>
      <h2>The Future of AI in Web Accessibility</h2>
      <p>As AI technology continues to advance, we can expect even more sophisticated tools and techniques for improving web accessibility. Some potential future developments include:</p>
      <ul>
        <li>Real-time accessibility adjustments based on user interaction and preferences</li>
        <li>More accurate and context-aware automated remediation of accessibility issues</li>
        <li>Advanced natural language processing to improve the accessibility of complex web applications</li>
      </ul>
      <p>While AI is a powerful tool in the quest for web accessibility, it's important to remember that human oversight and testing with real users remain crucial. AI should be seen as a complement to, not a replacement for, human expertise in creating truly inclusive web experiences.</p>
    `,
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)
  if (!post) {
    return {
      title: "Post Not Found - A11yHelper Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - A11yHelper Blog`,
    description: `Read about ${post.title} and learn how to improve web accessibility for all users.`,
    openGraph: {
      title: post.title,
      description: `Read about ${post.title} and learn how to improve web accessibility for all users.`,
      type: "article",
      publishedTime: post.date,
      authors: ["A11yHelper Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `Read about ${post.title} and learn how to improve web accessibility for all users.`,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "A11yHelper Team",
    },
    publisher: {
      "@type": "Organization",
      name: "A11yHelper",
      logo: {
        "@type": "ImageObject",
        url: "https://a11yhelper.com/logo.png",
      },
    },
    description: `Read about ${post.title} and learn how to improve web accessibility for all users.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://a11yhelper.com/blog/${post.slug}`,
    },
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>
      <article className="prose lg:prose-xl mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="text-center mt-12">
        <Button asChild>
          <Link href="/tools">Explore Our Accessibility Tools</Link>
        </Button>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

