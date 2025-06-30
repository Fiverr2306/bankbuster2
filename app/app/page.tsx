
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, DollarSign, Lock, Heart, AlertTriangle, CheckCircle, Shield, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import CountUpStats from '@/components/count-up-stats'
import { color, motion } from 'framer-motion'

export default function HomePage() {
  const services = [
    {
      title: 'Mortgage Fee Analysis',
      description: 'Learn how to understand, negotiate, and save thousands on closing costs and lender fees.',
      icon: DollarSign,
      href: '/mortgage-fees',
      stats: 'Save $2,000-$5,000'
    },
    {
      title: 'Interest Rate Strategy',
      description: 'Master the timing of rate locks and float strategies to secure the best possible rate.',
      icon: Lock,
      href: '/rate-locks',
      stats: 'Optimal timing guidance'
    },
    {
      title: 'Credit Protection',
      description: 'Protect your credit score and privacy while shopping for the best mortgage terms.',
      icon: Heart,
      href: '/credit-repair',
      stats: 'Credit score preservation'
    },
    {
      title: 'Mortgage Recovery',
      description: 'Turn a mortgage denial into approval with our proven step-by-step roadmap.',
      icon: AlertTriangle,
      href: '/turned-down',
      stats: '70% approval rate'
    }
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Pay Consultation Fee',
      description: 'Secure your $20 expert consultation through our safe PayPal payment system.',
      icon: DollarSign
    },
    {
      step: 2,
      title: 'Upload Documents',
      description: 'Securely upload your Loan Estimate, Closing Disclosure, and other mortgage documents.',
      icon: Shield
    },
    {
      step: 3,
      title: 'Get Expert Analysis',
      description: 'Receive professional analysis and actionable recommendations within 24-48 hours.',
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-parallax relative py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bb-deep-blue via-bb-bright-blue to-bb-deep-blue opacity-90"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight mb-6">
              Stop Overpaying on Your <span className="text-bb-gold">Mortgage</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional mortgage consulting service helping consumers save thousands on fees, rates, and closing costs nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/payment">
                <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4 text-lg shadow-professional hover:shadow-professional-hover transition-all duration-200">
                  Get Your $20 Expert Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="text-sm text-blue-200">
                ✓ Professional Analysis ✓ 24-48 Hour Turnaround ✓ Secure & Confidential
              </div>
            </div>

            {/* Stats */}
            <CountUpStats />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-bb-deep-blue mb-4">
              How We Help You Save
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive mortgage consulting covers every aspect of your loan to ensure you get the best possible terms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.href} className="group hover:shadow-professional-hover transition-all duration-300 border-0 shadow-professional bg-gradient-to-br from-white to-blue-50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-bb-bright-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-bb-deep-blue font-poppins text-xl">
                    {service.title}
                  </CardTitle>
                  <div className="text-sm font-semibold text-bb-gold">
                    {service.stats}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 text-gray-600">
                    {service.description}
                  </CardDescription>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full border-bb-bright-blue text-bb-bright-blue hover:bg-bb-bright-blue hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-bb-light-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-bb-deep-blue mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get professional mortgage analysis and start saving in just three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-8">
                  <div className="mx-auto w-20 h-20 bg-bb-bright-blue rounded-full flex items-center justify-center shadow-professional group-hover:shadow-professional-hover transition-all duration-300">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-bb-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-poppins text-bb-deep-blue mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/payment">
              <Button size="lg" className="bg-bb-bright-blue hover:bg-bb-deep-blue text-white font-semibold px-8 py-4">
                Start Your $20 Consultation Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-bb-bright-blue mb-4" />
              <h3 className="font-semibold text-bb-deep-blue mb-2">Secure & Confidential</h3>
              <p className="text-sm text-gray-600">All documents encrypted and processed securely</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-bb-bright-blue mb-4" />
              <h3 className="font-semibold text-bb-deep-blue mb-2">Fast Turnaround</h3>
              <p className="text-sm text-gray-600">Professional analysis within 24-48 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-bb-bright-blue mb-4" />
              <h3 className="font-semibold text-bb-deep-blue mb-2">Expert Consultants</h3>
              <p className="text-sm text-gray-600">Experienced mortgage professionals nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-bb-deep-blue to-bb-bright-blue text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Ready to Save Thousands on Your Mortgage?
          </h2>
          <p className="text-xl mb-8 text-blue-100" style={{ color: '#000000' }}>
            Join thousands of homeowners who have saved money with our professional mortgage consulting service.
          </p>
          <Link href="/payment">
            <Button size="lg" className="bg-bb-gold hover:bg-yellow-500 text-bb-deep-blue font-bold px-8 py-4 text-lg shadow-professional hover:shadow-professional-hover transition-all duration-200">
              Get Started Now - Only $20
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-blue-200 mt-4" style={{ color: '#000000' }}>
            Professional analysis • Money-back guarantee • Secure payment
          </p>
        </div>
      </section>
    </div>
  )
}
