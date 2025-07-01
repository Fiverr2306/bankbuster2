
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Mail, Phone, MapPin, Award, Users, Clock, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          page: 'about'
        }),
      })

      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const stats = [
    { value: '1000+', label: 'Clients Served', icon: Users },
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '24hrs', label: 'Avg Response Time', icon: Clock },
    { value: '$2.5M+', label: 'Total Savings', icon: CheckCircle }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bb-deep-blue to-bb-bright-blue text-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6" style={{ color: '#00008B' }}>
            About BankBuster.net
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" style={{ color: '#000000' }}>
            Professional mortgage consulting service helping consumers nationwide save thousands on fees, rates, and closing costs.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At BankBuster.net, we believe that every homeowner deserves access to expert mortgage guidance without paying thousands in consulting fees. Our mission is to democratize professional mortgage consulting by providing comprehensive analysis and actionable recommendations for just $20.
            </p>
          </div>

          <div className="bg-bb-light-gray p-8 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-bb-deep-blue mb-4">Why We Started BankBuster.net</h3>
            <p className="text-gray-700 mb-4">
              After seeing countless homeowners overpay on mortgages due to lack of professional guidance, we created a service that makes expert mortgage consulting accessible to everyone. Whether you're a first-time buyer or refinancing, our analysis helps you navigate the complex world of mortgage fees, rate locks, and lending requirements.
            </p>
            <p className="text-gray-700">
              We've helped over 1,000 clients save an average of $2,500 each on their mortgages through strategic fee negotiation, optimal rate lock timing, and credit protection strategies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-bb-bright-blue rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-bb-deep-blue mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-bb-light-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive mortgage consulting services designed to save you money
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-professional hover:shadow-professional-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-bb-deep-blue">Fee Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive review of your Loan Estimate and Closing Disclosure to identify negotiable fees and potential savings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-professional hover:shadow-professional-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-bb-deep-blue">Rate Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert guidance on when to lock your rate, float strategies, and float-down options based on market conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-professional hover:shadow-professional-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-bb-deep-blue">Credit Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategies to protect your credit score and privacy from solicitation overload during the mortgage process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-professional hover:shadow-professional-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-bb-deep-blue">Recovery Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Custom roadmaps to turn mortgage denials into approvals with specific improvement timelines and strategies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-bb-deep-blue mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about our services? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-bb-deep-blue mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-bb-bright-blue" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:chuck@bankbuster.net" className="text-bb-bright-blue hover:underline">
                      save@bankbuster.net
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-bb-bright-blue" />
                  <div>
                    <div className="font-medium">Service Area</div>
                    <div className="text-gray-600">Nationwide Service Available</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-bb-bright-blue" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-gray-600">24-48 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-bb-deep-blue mb-3">Ready to Get Started?</h4>
                <p className="text-gray-700 mb-4">
                  Skip the questions and dive right into your professional mortgage analysis.
                </p>
                <Link href="/payment">
                  <Button className="bg-bb-bright-blue hover:bg-bb-deep-blue text-white">
                    Start Your $20 Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-bb-deep-blue">Send us a Message</CardTitle>
                <CardDescription>
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your mortgage situation or questions..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-bb-bright-blue hover:bg-bb-deep-blue text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-bb-light-gray">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold text-bb-deep-blue mb-4">
            Your Privacy & Security
          </h3>
          <p className="text-gray-700">
            All documents and communications are processed securely and confidentially. We are GLBA compliant and never share your personal information with third parties. Your data is encrypted and stored securely throughout our analysis process.
          </p>
        </div>
      </section>
    </div>
  )
}
