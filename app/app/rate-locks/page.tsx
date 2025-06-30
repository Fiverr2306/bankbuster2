
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Lock, TrendingUp, TrendingDown, Clock, AlertCircle, CheckCircle } from 'lucide-react'

export default function RateLocksPage() {
  const lockStrategies = [
    {
      title: 'Standard Rate Lock',
      description: 'Lock your rate when you have a firm closing date within 30-90 days',
      bestFor: 'Stable/Rising Market',
      icon: Lock
    },
    {
      title: 'Float Strategy',
      description: 'Keep rate unlocked if economic trends suggest rates will decline',
      bestFor: 'Declining Market',
      icon: TrendingDown
    },
    {
      title: 'Float-Down Option',
      description: 'Lock your rate but capture lower rates if market improves',
      bestFor: 'Volatile Market',
      icon: TrendingUp
    }
  ]

  const marketIndicators = [
    'Inflation data and employment reports',
    'Federal Reserve meeting announcements',
    'Bond market performance and yields',
    'Economic uncertainty and geopolitical events'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bb-deep-blue to-bb-bright-blue text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="mx-auto h-16 w-16 text-bb-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Master Interest Rate Lock Strategy
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{ color: '#000000' }}>
            Learn the optimal timing and strategy for locking your mortgage rate to secure the best possible terms.
          </p>
          <Link href="/payment">
            <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4">
              Get Rate Lock Strategy Review - $20
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 p-6 bg-blue-50 border-l-4 border-bb-bright-blue rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-bb-bright-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-bb-deep-blue mb-2">
                    Critical Decision: When to Lock Your Rate
                  </h3>
                  <p className="text-gray-700">
                    A 0.25% rate difference on a $300,000 mortgage costs you $45 per month or $16,200 over 30 years. Timing your rate lock correctly can save thousands.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">Understanding Rate Locks</h2>
            
            <p className="text-gray-700 mb-6">
              An interest rate lock is a contractual agreement with a lender that guarantees a specific mortgage rate for a defined period, typically between 30 and 90 days. This lock acts as a shield, protecting you from potential rate increases that can occur due to market fluctuations while your loan is being processed.
            </p>

            <p className="text-gray-700 mb-8">
              The decision to lock or to "float" the rate—leaving it unlocked in hope that rates will fall—is a strategic one that depends on market conditions, your timeline, and your personal tolerance for risk.
            </p>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">Optimal Lock Timing</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Best Time to Lock:</h3>
              <p className="text-green-700 mb-4">
                Lock your rate when you are confident that you can close on the home within the specified lock period. For most buyers, this moment arrives after their purchase offer has been accepted and the loan application is moving into final processing and underwriting stages.
              </p>
              <p className="text-green-700">
                <strong>Why this works:</strong> Locking provides peace of mind and allows for precise budgeting, as the principal and interest portion of your monthly payment becomes a known quantity.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">Consider Floating When:</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Economic trends suggest rates are likely to decline</li>
                <li>• You have a flexible closing timeline</li>
                <li>• You have high tolerance for risk</li>
                <li>• Market volatility suggests potential for significant improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Options */}
      <section className="py-16 bg-bb-light-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-4">
              Rate Lock Strategy Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the approach that best fits your situation and market conditions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {lockStrategies.map((strategy, index) => (
              <Card key={index} className="shadow-professional hover:shadow-professional-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bb-bright-blue rounded-full flex items-center justify-center mb-4">
                    <strategy.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-bb-deep-blue">{strategy.title}</CardTitle>
                  <div className="text-sm font-semibold text-bb-gold">{strategy.bestFor}</div>
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

      {/* Market Analysis */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Key Market Indicators to Monitor
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Monitoring economic indicators can provide valuable context for making your rate lock decision. Understanding these signals helps you time your lock for maximum benefit.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {marketIndicators.map((indicator, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-bb-bright-blue mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{indicator}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-bb-bright-blue p-6 mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-3">
                Professional Strategy Consultation
              </h3>
              <p className="text-gray-700">
                Our experts monitor these indicators daily and can provide personalized guidance on whether to lock or float based on current market conditions and your specific timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Float-Down Options */}
      <section className="py-16 bg-green-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Float-Down Options: Best of Both Worlds
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Some lenders offer a <strong>float-down option</strong>, which provides valuable middle ground. This feature allows you to lock in a rate but also take advantage of a lower rate if the market improves before closing.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-4">How Float-Down Works:</h3>
              <ol className="text-gray-700 space-y-2">
                <li>1. <strong>Lock your rate</strong> at current market levels</li>
                <li>2. <strong>Monitor the market</strong> during your lock period</li>
                <li>3. <strong>Exercise the option</strong> if rates drop significantly</li>
                <li>4. <strong>Pay a fee</strong> (typically 0.25-0.50 points) to capture the lower rate</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-bb-gold p-6">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-3">
                Is Float-Down Worth It?
              </h3>
              <p className="text-gray-700">
                Float-down can be worthwhile in volatile markets, but you need to calculate whether the potential savings justify the upfront cost. Our analysis includes float-down evaluation for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Strategy */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Critical: Communication with Your Lender
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Avoid Costly Lock Expiration
                  </h3>
                  <p className="text-red-700">
                    If unforeseen delays threaten the expiration of your lock period, it's often possible to purchase a lock extension. Proactively discussing these options with your loan officer can help you avoid costly penalties.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-bb-deep-blue mb-4">Key Communication Points:</h3>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>• <strong>Ask about float-down options</strong> before locking your rate</li>
              <li>• <strong>Understand extension policies</strong> and associated costs</li>
              <li>• <strong>Get lock confirmations in writing</strong> with exact terms</li>
              <li>• <strong>Discuss market conditions</strong> with your loan officer regularly</li>
              <li>• <strong>Plan for delays</strong> and have extension strategy ready</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Professional Guidance Advantage
              </h3>
              <p className="text-green-700">
                Our mortgage consultants have relationships with multiple lenders and understand their specific lock policies, extension terms, and float-down offerings. This knowledge helps you navigate the process smoothly and secure the most favorable terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bb-deep-blue to-bb-bright-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Get Expert Rate Lock Strategy
          </h2>
          <p className="text-xl text-blue-100 mb-8" style={{ color: '#000000' }}>
            Don't leave your rate lock decision to chance. Get professional analysis of market conditions and personalized timing recommendations.
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
              <span>Market Analysis</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Timing Strategy</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Float-Down Evaluation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
