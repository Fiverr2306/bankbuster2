'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DollarSign, Shield, Clock, CheckCircle, CreditCard } from 'lucide-react'
import { toast } from 'sonner'

export default function PaymentPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handlePayPalPayment = async () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }
  
    setIsLoading(true)
  
    try {
      // Redirect to static PayPal link instead of hitting backend
      window.location.href = 'https://www.paypal.com/ncp/payment/L4BA7CDB6BRP4'
    } catch (error) {
      toast.error('Error redirecting to PayPal. Please try again.')
      console.error('Payment error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const features = [
    {
      icon: CheckCircle,
      title: 'Professional Analysis',
      description: 'Expert review of your mortgage documents'
    },
    {
      icon: Clock,
      title: '24-48 Hour Turnaround',
      description: 'Fast, comprehensive analysis delivered quickly'
    },
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'GLBA compliant document processing'
    },
    {
      icon: DollarSign,
      title: 'Money-Back Guarantee',
      description: 'Satisfaction guaranteed or full refund'
    }
  ]

  return (
    <div className="min-h-screen bg-bb-light-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bb-deep-blue to-bb-bright-blue text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <DollarSign className="mx-auto h-16 w-16 text-bb-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            Start Your Professional Analysis
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{ color: '#000000' }}>
            Get expert mortgage consulting for just $20. Our analysis typically saves clients $2,000-$5,000 on their mortgage.
          </p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <Card className="shadow-professional">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-bb-deep-blue">Secure Payment</CardTitle>
                <CardDescription>
                  Pay safely with PayPal - No account required
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-bb-deep-blue mb-2">$20</div>
                  <div className="text-gray-600">One-time consultation fee</div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                    <p className="text-xs text-gray-500">
                      We'll send your analysis results to this email
                    </p>
                  </div>

                  <Button
                    onClick={handlePayPalPayment}
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
                  >
                    {isLoading ? (
                      'Processing...'
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-5 w-5" />
                        Pay with PayPal
                      </>
                    )}
                  </Button>

                  <div className="text-xs text-gray-500 text-center">
                    Secure payment processing by PayPal
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">What happens next:</h4>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Complete secure payment via PayPal</li>
                    <li>2. Upload your mortgage documents</li>
                    <li>3. Receive expert analysis in 24-48 hours</li>
                    <li>4. Start saving on your mortgage!</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-bb-deep-blue">What You Get</h2>
              
              {features.map((feature, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 bg-bb-bright-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-800 mb-2">Money-Back Guarantee</h3>
                  <p className="text-green-700 text-sm">
                    If you're not completely satisfied with our analysis, we'll refund your $20 consultation fee, no questions asked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>GLBA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
