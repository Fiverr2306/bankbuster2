
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Heart, Shield, Phone, CreditCard, AlertCircle, CheckCircle } from 'lucide-react'

export default function CreditRepairPage() {
  const protectionSteps = [
    {
      title: 'OptOutPrescreen.com',
      description: 'Remove your name from credit offer lists sold to marketing companies',
      timing: 'Before applying',
      icon: Shield
    },
    {
      title: 'Do Not Call Registry',
      description: 'Register at DoNotCall.gov to reduce telemarketing calls',
      timing: 'Before applying',
      icon: Phone
    },
    {
      title: 'Strategic Shopping',
      description: 'Shop for mortgages within 14-45 days to minimize credit impact',
      timing: 'During shopping',
      icon: CreditCard
    }
  ]

  const creditImprovementTips = [
    'Pay down high-balance credit cards to lower utilization',
    'Ensure consistent history of on-time payments',
    'Dispute any inaccuracies on all three credit reports',
    'Avoid opening new credit accounts during mortgage process'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bb-deep-blue to-bb-bright-blue text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="mx-auto h-16 w-16 text-bb-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Protect Your Credit & Privacy
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{ color: '#000000' }}>
            Learn how to shield your credit score and personal information from the flood of solicitations that follow mortgage applications.
          </p>
          <Link href="/payment">
            <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4">
              Get Credit Protection Strategy - $20
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Warning: Mortgage Credit Pulls Trigger Solicitation Flood
                  </h3>
                  <p className="text-red-700">
                    When you apply for a mortgage, credit bureaus sell your information as "trigger leads" to other lenders and marketing companies. This is why applicants suddenly experience a surge in spam calls, texts, and junk mail.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">The Credit Pull Problem</h2>
            
            <p className="text-gray-700 mb-6">
              Securing a mortgage is intrinsically linked to your credit health, but the process of having your credit pulled can unfortunately open the door to a barrage of unwanted solicitations. When you apply for a mortgage, lenders perform a "hard pull" on your credit report, and this inquiry can trigger a process where credit bureaus sell your information as a "trigger lead" to other lenders and marketing companies.
            </p>

            <p className="text-gray-700 mb-8">
              This practice is why many applicants suddenly experience a surge in spam calls, texts, and junk mail from companies eager to offer competing loans. Fortunately, there are proactive steps you can take to protect both your credit score and your personal privacy.
            </p>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">Build Your Defense Before You Apply</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Critical: Take These Steps BEFORE Applying</h3>
              <p className="text-green-700 mb-4">
                The single most effective step is to visit <strong>OptOutPrescreen.com</strong>, the official website managed by the major credit bureaus. Here, you can request to have your name removed from the lists that are sold to companies for pre-screened credit offers, either for five years or permanently.
              </p>
              <p className="text-green-700">
                Additionally, registering your phone number with the <strong>National Do Not Call Registry</strong> at DoNotCall.gov will significantly reduce telemarketing calls from legitimate companies, who are legally required to honor the registry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Steps */}
      <section className="py-16 bg-bb-light-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-4">
              Essential Protection Steps
            </h2>
            <p className="text-lg text-gray-600">
              Three critical actions to shield yourself from solicitation overload
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {protectionSteps.map((step, index) => (
              <Card key={index} className="shadow-professional hover:shadow-professional-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bb-bright-blue rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-bb-deep-blue">{step.title}</CardTitle>
                  <div className="text-sm font-semibold text-bb-gold">{step.timing}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Shopping Strategy */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Smart Credit Shopping Strategy
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              When you are actively shopping for a mortgage, it is wise to do so in a way that minimizes the impact on your credit score. Credit scoring models like FICO understand that consumers shop for the best rates on large loans.
            </p>

            <div className="bg-blue-50 border-l-4 border-bb-bright-blue p-6 mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-3">
                The Credit Shopping Window
              </h3>
              <p className="text-gray-700 mb-4">
                Credit scoring models typically treat multiple mortgage-related inquiries made within a short period—usually <strong>14 to 45 days</strong>—as a single inquiry. This allows you to compare offers from several lenders without causing significant damage to your credit score.
              </p>
              <p className="text-gray-700">
                Many lenders also offer a pre-qualification process, which often involves a "soft pull" that does not affect your score at all, giving you a preliminary idea of what you can afford.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">Optimal Shopping Timeline:</h3>
              <ol className="text-yellow-700 space-y-2">
                <li>1. <strong>Pre-qualify</strong> with multiple lenders (soft pulls)</li>
                <li>2. <strong>Choose top 3-5 lenders</strong> for formal applications</li>
                <li>3. <strong>Submit all applications within 14-45 days</strong></li>
                <li>4. <strong>Compare final terms</strong> and select best option</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Improvement */}
      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Credit Improvement Before Applying
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              If your credit score is not where you want it to be, engaging in credit repair before applying for a mortgage can lead to much better loan terms. A higher credit score not only improves your chances of approval but directly translates into a lower interest rate, potentially saving you tens of thousands of dollars over the life of the loan.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-4">Proven Credit Improvement Steps:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {creditImprovementTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                The Financial Impact
              </h3>
              <p className="text-green-700">
                <strong>Example:</strong> On a $300,000 mortgage, improving your credit score from 650 to 750 could lower your interest rate by 0.5-1.0%, saving you $75-$150 per month and $27,000-$54,000 over the life of the loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Protection */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Advanced Privacy Protection
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-4">Additional Privacy Measures:</h3>
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Use a dedicated email</strong> for mortgage applications</li>
                <li>• <strong>Consider a Google Voice number</strong> for lender communications</li>
                <li>• <strong>Review privacy policies</strong> of all lenders before applying</li>
                <li>• <strong>Ask about opt-out policies</strong> for marketing communications</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                What to Do If Solicitations Start
              </h3>
              <p className="text-red-700 mb-3">
                If you start receiving unwanted calls and mail despite your precautions:
              </p>
              <ul className="text-red-700 space-y-2">
                <li>• Do not engage with unsolicited offers</li>
                <li>• Report violations to the FTC</li>
                <li>• Block and report spam numbers</li>
                <li>• Consider credit monitoring services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bb-deep-blue to-bb-bright-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Protect Your Credit & Privacy
          </h2>
          <p className="text-xl text-blue-100 mb-8" style={{ color: '#000000' }}>
            Get personalized guidance on protecting your credit score and privacy throughout the mortgage process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/payment">
              <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4">
                Start Your $20 Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-bb-deep-blue" style={{ color: '#000000' }}>
                Have Questions? Contact Us
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-blue-200" style={{ color: '#00008B' }}>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Credit Protection</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Privacy Strategy</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Score Improvement</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
