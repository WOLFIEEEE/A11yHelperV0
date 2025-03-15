import Link from "next/link"

export const metadata = {
  title: "Cancellation & Refund Policy | A11yHelper",
  description: "A11yHelper's official cancellation and refund policy in compliance with Indian laws",
}

export default function CancellationRefundPolicy() {
  return (
    <div className="container max-w-3xl py-12 mx-auto">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cancellation & Refund Policy</h1>
          <p className="mt-2 text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            This Cancellation & Refund Policy outlines the terms and conditions regarding cancellations and refunds for
            digital subscriptions and products offered by A11yHelper ("we," "us," or "our"). This policy is in
            compliance with the Consumer Protection Act, 2019, and the Consumer Protection (E-Commerce) Rules, 2020 of
            India.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Cancellation Policy</h2>

          <h3 className="text-xl font-medium">2.1 Cancellation by Customer</h3>
          <p>Customers may cancel their subscription or digital product purchase under the following conditions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              For digital products: Cancellation requests must be made within 24 hours of purchase, provided the digital
              content has not been downloaded or accessed.
            </li>
            <li>
              For subscription services: Cancellation requests can be made at any time. The subscription will remain
              active until the end of the current billing cycle, and no further charges will be made.
            </li>
          </ul>

          <h3 className="text-xl font-medium">2.2 Cancellation Process</h3>
          <p>To cancel a subscription or digital product purchase, customers must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Log into their A11yHelper account and navigate to the subscription/purchase section</li>
            <li>Select the subscription/purchase they wish to cancel</li>
            <li>Click on the "Cancel" button and follow the instructions</li>
            <li>
              Alternatively, customers can contact our customer support team at kgpkhushwant1@gmail.com with their
              purchase details
            </li>
          </ul>

          <h3 className="text-xl font-medium">2.3 Cancellation by A11yHelper</h3>
          <p>We reserve the right to cancel subscriptions or purchases under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Suspected fraudulent transactions</li>
            <li>Errors in pricing or product information</li>
            <li>Violation of our Terms of Service</li>
            <li>Abuse of the service or platform</li>
          </ul>
          <p>
            In such cases, we will notify the customer promptly and process a full or partial refund as appropriate.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Refund Policy</h2>

          <h3 className="text-xl font-medium">3.1 Eligibility for Refunds</h3>
          <p>Refunds may be issued under the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cancellation of digital product purchase as per Section 2.1</li>
            <li>
              Technical issues that significantly impair the functionality of the digital product or subscription
              service
            </li>
            <li>Services or products significantly different from their description</li>
            <li>Duplicate charges or billing errors</li>
          </ul>

          <h3 className="text-xl font-medium">3.2 Refund Process</h3>
          <p>To request a refund, customers must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact our customer support team at kgpkhushwant1@gmail.com within 7 days of the purchase</li>
            <li>Provide order/subscription details and reason for the refund request</li>
            <li>Provide any relevant information or evidence supporting the refund request</li>
          </ul>

          <h3 className="text-xl font-medium">3.3 Refund Timeline</h3>
          <p>Once a refund request is approved:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>For credit/debit card payments: Refunds will be processed within 5-7 business days</li>
            <li>For digital wallets: Refunds will be processed within 3-5 business days</li>
            <li>For bank transfers: Refunds will be processed within 7-10 business days</li>
          </ul>
          <p>
            Please note that the actual time for the refund to reflect in your account may vary depending on your bank
            or payment provider.
          </p>

          <h3 className="text-xl font-medium">3.4 Refund Amount</h3>
          <p>The refund amount will include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The full purchase price of the digital product (if eligible)</li>
            <li>For subscriptions: a prorated refund based on the unused portion of the service, if applicable</li>
            <li>Applicable taxes</li>
          </ul>
          <p>Any promotional discounts or coupons applied to the original purchase may not be refunded.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Subscription-Specific Policies</h2>

          <h3 className="text-xl font-medium">4.1 Subscription Billing</h3>
          <p>
            Our subscription services are billed on a recurring basis (monthly, quarterly, or annually) until cancelled.
            By subscribing to our services, you authorize us to charge your payment method on a recurring basis.
          </p>

          <h3 className="text-xl font-medium">4.2 Subscription Cancellation</h3>
          <p>When you cancel a subscription:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You will continue to have access to the subscription services until the end of your current billing period
            </li>
            <li>No refund will be provided for the current billing period unless specified otherwise in this policy</li>
            <li>You will not be charged for subsequent billing periods</li>
          </ul>

          <h3 className="text-xl font-medium">4.3 Subscription Changes</h3>
          <p>
            If you upgrade your subscription plan, the new rate will be charged immediately, and the billing date will
            reset to the date of the upgrade. If you downgrade your subscription, the new rate will apply at the start
            of the next billing cycle.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Non-Refundable Items/Services</h2>
          <p>The following items/services are not eligible for refunds:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Digital products that have been downloaded, accessed, or used</li>
            <li>Subscription services that have been used for more than 7 days</li>
            <li>Custom development or consulting services that have been delivered</li>
            <li>Gift cards or promotional credits</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Contact Information</h2>
          <p>For any queries regarding our Cancellation & Refund Policy, please contact us at:</p>
          <address className="not-italic">
            A11yHelper
            <br />
            Bangalore, India
            <br />
            Email: kgpkhushwant1@gmail.com
            <br />
          </address>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Policy Updates</h2>
          <p>
            We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting
            on our website. It is the responsibility of the customers to review this policy periodically.
          </p>
        </section>

        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground">
            This Cancellation & Refund Policy is in compliance with the Consumer Protection Act, 2019, and the Consumer
            Protection (E-Commerce) Rules, 2020 of India.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <Link href="/" className="underline underline-offset-4 hover:text-primary">
              Return to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

