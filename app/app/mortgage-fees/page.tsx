
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, DollarSign, Calculator, FileText, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react'

export default function MortgageFeesPage() {
  const savingStrategies = [
    {
      title: 'Shop Lender Fees',
      description: 'Compare origination, underwriting, and admin fees across multiple lenders',
      potential: 'Save $500-$1,500',
      icon: Calculator
    },
    {
      title: 'Negotiate Title Insurance',
      description: 'You have the right to choose your title insurance provider',
      potential: 'Save $200-$800',
      icon: FileText
    },
    {
      title: 'Seller Contributions',
      description: 'Negotiate for seller to pay portion of your closing costs',
      potential: 'Save $1,000-$3,000',
      icon: TrendingDown
    }
  ]

  const commonMistakes = [
    'Accepting the first Good Faith Estimate without shopping around',
    'Not understanding which fees are negotiable vs. fixed',
    'Failing to ask about seller concessions in purchase offers',
    'Not reviewing closing disclosure for unexpected fee increases'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bb-deep-blue to-bb-bright-blue text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <DollarSign className="mx-auto h-16 w-16 text-bb-gold mb-6" />
          <h1 className="text-6xl md:text-4xl font-bold font-poppins mb-4" style={{ color: '#00008B' }}>
            Master Mortgage Fees & Closing Costs
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{ color: '#000000' }}>
            Learn how to understand, negotiate, and save thousands on the fees that can add 2-5% to your home purchase price.
          </p>
          <Link href="/payment">
            <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4"  >
              Get Professional Fee Analysis - $20
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 p-6 bg-yellow-50 border-l-4 border-bb-gold rounded-r-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-bb-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-bb-deep-blue mb-2">
                    Critical: Closing costs can add $5,000-$25,000 to your home purchase
                  </h3>
                  <p className="text-gray-700">
                    But with the right knowledge and strategy, you can save thousands through careful negotiation and smart shopping.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">Understanding Mortgage Fee Categories</h2>
            
            <p className="text-gray-700 mb-6">
              Navigating the financial landscape of a mortgage involves more than just securing a loan; it requires a deep understanding of the various fees that constitute closing costs. These costs typically range from two to five percent of the home's purchase price, but savvy consumers can mitigate these costs through careful review, strategic shopping, and effective negotiation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-bb-bright-blue/20">
                <CardHeader>
                  <CardTitle className="text-bb-deep-blue">Lender Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Origination fees</li>
                    <li>• Underwriting charges</li>
                    <li>• Administrative costs</li>
                    <li>• Processing fees</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-bb-bright-blue/20">
                <CardHeader>
                  <CardTitle className="text-bb-deep-blue">Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Appraisal fees</li>
                    <li>• Credit report costs</li>
                    <li>• Inspection fees</li>
                    <li>• Survey charges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-bb-bright-blue/20">
                <CardHeader>
                  <CardTitle className="text-bb-deep-blue">Title & Settlement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Title insurance</li>
                    <li>• Settlement fees</li>
                    <li>• Recording costs</li>
                    <li>• Transfer taxes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">Smart Shopping Strategies</h2>
            
            <p className="text-gray-700 mb-6">
              Federal law mandates that lender-specific fees must be uniform for all customers, but this doesn't prevent you from shopping around. By obtaining Loan Estimates from multiple lenders, you can compare costs and select the institution offering the most competitive terms.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-4">Key Shopping Strategy:</h3>
              <p className="text-gray-700 mb-4">
                <strong>Title insurance is mandatory, but the provider is not.</strong> You have the right to shop for your own title insurance provider, which can lead to lower premiums. Similarly, settlement or closing fees can sometimes be negotiated with the closing agent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Saving Strategies */}
      <section className="py-16 bg-bb-light-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-4">
              Proven Money-Saving Strategies
            </h2>
            <p className="text-lg text-gray-600">
              Three powerful approaches that can save you thousands on your mortgage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {savingStrategies.map((strategy, index) => (
              <Card key={index} className="shadow-professional hover:shadow-professional-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bb-bright-blue rounded-full flex items-center justify-center mb-4">
                    <strategy.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-bb-deep-blue">{strategy.title}</CardTitle>
                  <div className="text-sm font-semibold text-bb-gold">{strategy.potential}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {strategy.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Negotiation Tactics */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Effective Negotiation Tactics
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Effective negotiation is a powerful tool for reducing the overall burden of closing costs. Here are the most impactful strategies:
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                #1 Most Effective: Seller Contributions
              </h3>
              <p className="text-green-700">
                Even after a purchase price has been agreed upon, there may be room for the seller to contribute toward your closing costs. This is particularly viable in a buyer's market or when a property has been on the market for an extended period.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-bb-bright-blue p-6 mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-3">
                Real Estate Agent Contributions
              </h3>
              <p className="text-gray-700">
                If your agent is representing you in both the sale of your current home and the purchase of a new one, they are earning two commissions and may be willing to contribute a portion toward your costs to facilitate the deal.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                Important Disclosure Requirement
              </h3>
              <p className="text-red-700">
                Any contributions from the seller or agent must be disclosed during the underwriting process and cannot exceed the total actual closing costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-red-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Avoid These Costly Mistakes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bb-deep-blue to-bb-bright-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Get Professional Fee Analysis
          </h2>
          <p className="text-xl text-blue-100 mb-8" style={{ color: '#000000' }}>
            Let our experts review your Loan Estimate and Closing Disclosure to identify every opportunity for savings.
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
              <span>Professional Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>24-48 Hour Turnaround</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Confidential Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
