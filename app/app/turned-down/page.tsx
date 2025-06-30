
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, AlertTriangle, TrendingUp, Calendar, FileText, CheckCircle, Target } from 'lucide-react'

export default function TurnedDownPage() {
  const denialReasons = [
    {
      reason: 'Poor Credit Score',
      threshold: 'Below 620 for conventional',
      solution: 'Focus on on-time payments and reducing balances',
      timeframe: '3-6 months',
      icon: TrendingUp
    },
    {
      reason: 'High Debt-to-Income',
      threshold: 'Above 43% DTI ratio',
      solution: 'Pay down existing debt or increase income',
      timeframe: '6-12 months',
      icon: Target
    },
    {
      reason: 'Insufficient Income',
      threshold: 'Unstable employment history',
      solution: 'Maintain stable employment for 2+ years',
      timeframe: '12-24 months',
      icon: Calendar
    }
  ]

  const recoverySteps = [
    'Get written explanation of denial reasons',
    'Create targeted improvement plan',
    'Monitor progress monthly',
    'Consider alternative loan programs',
    'Rebuild credit and savings systematically',
    'Work with mortgage recovery specialist'
  ]

  const loanAlternatives = [
    {
      program: 'FHA Loans',
      requirements: 'Credit score as low as 580, 3.5% down',
      benefits: 'More flexible qualification standards'
    },
    {
      program: 'VA Loans',
      requirements: 'Eligible veterans, $0 down payment',
      benefits: 'No PMI, competitive rates'
    },
    {
      program: 'USDA Loans',
      requirements: 'Rural properties, income limits',
      benefits: '$0 down, reduced mortgage insurance'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bb-deep-blue to-bb-bright-blue text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="mx-auto h-16 w-16 text-bb-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            From Denial to Approval
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{ color: '#000000' }}>
            Turn your mortgage denial into a detailed roadmap for future success. Learn the proven strategies that lead to approval.
          </p>
          <Link href="/payment">
            <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4">
              Get Recovery Strategy Plan - $20
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Good News: Denial Is Not Permanent
                  </h3>
                  <p className="text-green-700">
                    Receiving a mortgage denial is not a final verdict, but a detailed roadmap for future success. Lenders are required to provide specific reasons for denial, giving you the exact information needed to improve your application.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">Understanding Your Denial</h2>
            
            <p className="text-gray-700 mb-6">
              The reasons for mortgage denial are often related to a few key areas that can be systematically addressed. By understanding exactly what led to your rejection, you can create a targeted action plan that significantly strengthens your financial profile for your next application.
            </p>

            <p className="text-gray-700 mb-8">
              Lenders must provide you with a written explanation of why your application was denied. This adverse action notice is your starting point for improvement and contains the specific factors that need to be addressed.
            </p>

            <h2 className="text-2xl font-bold text-bb-deep-blue mb-6">Common Denial Reasons & Solutions</h2>
          </div>
        </div>
      </section>

      {/* Denial Reasons */}
      <section className="py-16 bg-bb-light-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-4">
              Most Common Denial Reasons
            </h2>
            <p className="text-lg text-gray-600">
              Understanding and addressing these key factors that lead to mortgage denial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {denialReasons.map((item, index) => (
              <Card key={index} className="shadow-professional hover:shadow-professional-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bb-bright-blue rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-bb-deep-blue">{item.reason}</CardTitle>
                  <div className="text-sm font-semibold text-red-600">{item.threshold}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    {item.solution}
                  </CardDescription>
                  <div className="text-sm font-semibold text-bb-gold">
                    Timeline: {item.timeframe}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Your Recovery Timeline
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              The timeline for reapplication depends on the severity of the issue. Understanding realistic timeframes helps you set proper expectations and create an effective improvement plan.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-4">Recovery Timeframes:</h3>
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Minor Credit Issues:</strong> 3-6 months of improved payment history</li>
                <li>• <strong>High Debt-to-Income:</strong> 6-12 months to pay down debts</li>
                <li>• <strong>Employment History:</strong> 12-24 months of stable work</li>
                <li>• <strong>Bankruptcy:</strong> 2-4 years depending on loan type</li>
                <li>• <strong>Foreclosure:</strong> 3-7 years depending on circumstances</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                During Your Recovery Period
              </h3>
              <p className="text-green-700">
                It's essential to maintain stable employment and avoid making major financial changes like taking on new debt or making large, undocumented cash deposits. These can be red flags for underwriters when you reapply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Steps */}
      <section className="py-16 bg-yellow-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            6-Step Recovery Process
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recoverySteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-bb-bright-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Programs */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Alternative Loan Programs
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 text-center">
              When you're ready to reapply, consider exploring alternative loan options that may offer more flexible requirements than conventional mortgages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loanAlternatives.map((program, index) => (
              <Card key={index} className="shadow-professional hover:shadow-professional-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-bb-deep-blue text-center">{program.program}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <p className="text-sm text-gray-600">{program.requirements}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <p className="text-sm text-gray-600">{program.benefits}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Help */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-8 text-center">
            Professional Mortgage Recovery Assistance
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Working with a knowledgeable mortgage advisor or broker can be invaluable during your recovery process. They can help you assess your readiness, identify lenders who specialize in your situation, and ensure your new application is complete, accurate, and presents your improved financial standing in the best possible light.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-bb-deep-blue mb-4">How We Help With Recovery:</h3>
              <ul className="text-gray-700 space-y-3">
                <li>• <strong>Denial Analysis:</strong> Review your adverse action notice to identify all improvement areas</li>
                <li>• <strong>Custom Recovery Plan:</strong> Create a timeline and action plan specific to your situation</li>
                <li>• <strong>Progress Monitoring:</strong> Track your improvements and readiness for reapplication</li>
                <li>• <strong>Lender Matching:</strong> Connect you with lenders who specialize in your profile</li>
                <li>• <strong>Application Strategy:</strong> Ensure your next application presents you in the best light</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Success Rate
              </h3>
              <p className="text-green-700">
                Our systematic approach to mortgage recovery has helped over 70% of previously denied applicants achieve approval on their next application, often with better terms than their original denial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bb-deep-blue to-bb-bright-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Turn Your Denial Into Approval
          </h2>
          <p className="text-xl text-blue-100 mb-8" style={{ color: '#000000' }}>
            Get a personalized recovery plan that addresses your specific denial reasons and creates a clear path to mortgage approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/payment">
              <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4">
                Start Your $20 Recovery Plan
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
              <span>Custom Recovery Plan</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>70% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Lender Matching</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
