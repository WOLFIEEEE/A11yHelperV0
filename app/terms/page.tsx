import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Terms of Service
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          By using A11yHelper's website and tools, you agree to comply with and be bound by the following terms and
          conditions of use.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                By accessing or using A11yHelper's services, you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any part of these terms, you may not use our
                services.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>2. Use of Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You agree to use A11yHelper's services only for lawful purposes and in a way that does not infringe the
                rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior
                includes harassing or causing distress or inconvenience to any other user, transmitting obscene or
                offensive content, or disrupting the normal flow of dialogue within our services.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>3. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and
                other matters related to the A11yHelper website and tools are protected under applicable copyrights,
                trademarks, and other proprietary rights. Copying, redistributing, use, or publication by you of any
                such matters or any part of the website, except as allowed by these Terms of Service, is strictly
                prohibited.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>4. Disclaimer of Warranties</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A11yHelper's services are provided "as is" without any representations or warranties, express or
                implied. A11yHelper makes no representations or warranties in relation to this website or the
                information and materials provided on this website.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>5. Limitations of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A11yHelper will not be liable to you in relation to the contents of, or use of, or otherwise in
                connection with, this website for any indirect, special, or consequential loss; or for any business
                losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business
                relationships, loss of reputation or goodwill, or loss or corruption of information or data.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>6. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A11yHelper reserves the right to modify these terms at any time. We do so by posting and drawing
                attention to the updated terms on the website. Your decision to continue to visit and make use of the
                website after such changes have been made constitutes your formal acceptance of the new Terms of
                Service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

