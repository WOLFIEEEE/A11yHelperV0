import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Privacy Policy</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          At A11yHelper, we are committed to protecting your privacy and ensuring the security of your personal
          information. This privacy policy outlines how we collect, use, and safeguard your data.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We collect information that you provide directly to us, such as when you create an account, use our
                tools, or contact our support team. This may include:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Your name and email address</li>
                <li>Information about your website or project</li>
                <li>Usage data and preferences</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Provide and improve our accessibility tools and services</li>
                <li>Communicate with you about your account and our services</li>
                <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                <li>Analyze usage patterns to improve our website and tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information.
                However, no method of transmission over the Internet or method of electronic storage is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You have the right to access, correct, or delete your personal information. If you have any questions
                about this privacy policy or your personal information, please contact us at privacy@a11yhelper.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

