
'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, FileText, Shield, AlertCircle, CheckCircle, Lock } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

function UploadDocsContent() {
  const [isValid, setIsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isUploading, setIsUploading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [sessionId, setSessionId] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const token = searchParams?.get('token')
    const session = searchParams?.get('session')

    if (token && session) {
      // Verify the payment session
      verifyPaymentSession(token, session)
    } else {
      setIsLoading(false)
    }
  }, [searchParams])

  const verifyPaymentSession = async (token: string, session: string) => {
    try {
      const response = await fetch('/api/verify-payment-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, sessionId: session }),
      })

      const data = await response.json()

      if (response.ok && data.valid) {
        setIsValid(true)
        setSessionId(session)
      } else {
        setIsValid(false)
      }
    } catch (error) {
      console.error('Session verification error:', error)
      setIsValid(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || [])
    
    // Validate file types and sizes
    const validFiles = selectedFiles.filter(file => {
      const isValidType = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
      const isValidSize = file.size <= 10 * 1024 * 1024 // 10MB limit
      
      if (!isValidType) {
        toast.error(`${file.name} is not a valid PDF file`)
        return false
      }
      
      if (!isValidSize) {
        toast.error(`${file.name} is too large (max 10MB)`)
        return false
      }
      
      return true
    })

    setFiles(prev => [...prev, ...validFiles])
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error('Please select at least one document to upload')
      return
    }

    if (!sessionId) {
      toast.error('Invalid session. Please try again.')
      return
    }

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append('sessionId', sessionId)
      
      files.forEach((file, index) => {
        formData.append(`file_${index}`, file)
      })

      const response = await fetch('/api/upload-documents', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Documents uploaded successfully! You will receive your analysis within 24-48 hours.')
        setFiles([])
      } else {
        throw new Error(data.error || 'Upload failed')
      }
    } catch (error) {
      toast.error('Error uploading documents. Please try again.')
      console.error('Upload error:', error)
    } finally {
      setIsUploading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bb-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bb-bright-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying payment session...</p>
        </div>
      </div>
    )
  }

  if (!isValid) {
    return (
      <div className="min-h-screen bg-bb-light-gray">
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <Card className="shadow-professional">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-red-600">Access Restricted</CardTitle>
                <CardDescription>
                  Please complete the $20 payment to unlock the secure document upload portal.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium mb-1">Payment Required</p>
                      <p>This page is only accessible after completing your $20 consultation payment through our secure PayPal system.</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/payment">
                  <Button className="w-full bg-bb-bright-blue hover:bg-bb-deep-blue text-white">
                    Complete Payment to Proceed
                  </Button>
                </Link>
                
                <p className="text-xs text-gray-500">
                  After payment, you'll be automatically redirected to this secure upload page.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bb-light-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bb-deep-blue to-bb-bright-blue text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto h-16 w-16 text-bb-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Secure Document Upload
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Upload your mortgage documents securely. We'll analyze them and send you a comprehensive report within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Upload Form */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-bb-deep-blue flex items-center">
                  <Upload className="h-6 w-6 mr-2" />
                  Upload Your Documents
                </CardTitle>
                <CardDescription>
                  Upload PDF files only (max 10MB each)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    multiple
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      Click to upload documents
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF files only, up to 10MB each
                    </p>
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Selected Files:</h4>
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-medium">{file.name}</span>
                          <span className="text-xs text-gray-500">
                            ({(file.size / 1024 / 1024).toFixed(1)} MB)
                          </span>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  onClick={handleUpload}
                  disabled={files.length === 0 || isUploading}
                  className="w-full bg-bb-bright-blue hover:bg-bb-deep-blue text-white"
                >
                  {isUploading ? 'Uploading...' : 'Submit Documents for Analysis'}
                </Button>
              </CardContent>
            </Card>

            {/* Instructions */}
            <div className="space-y-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Payment Confirmed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    Your $20 consultation payment has been confirmed. You can now securely upload your mortgage documents for professional analysis.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-bb-deep-blue">Recommended Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Loan Estimate (LE)</strong> - Required for fee analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Closing Disclosure (CD)</strong> - If available</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Credit Report</strong> - For credit strategy</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Denial Letter</strong> - If previously denied</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Other Mortgage Documents</strong> - Any relevant paperwork</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm text-blue-700">
                    <li>1. <strong>Upload Complete:</strong> Your documents are securely encrypted</li>
                    <li>2. <strong>Expert Review:</strong> Our mortgage specialists analyze your documents</li>
                    <li>3. <strong>Detailed Report:</strong> You receive comprehensive recommendations</li>
                    <li>4. <strong>Email Delivery:</strong> Analysis sent within 24-48 hours</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-bb-deep-blue mb-4">
              Your Documents Are Secure
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-bb-bright-blue mb-2" />
                <div className="font-medium">End-to-End Encryption</div>
                <div>All uploads are encrypted in transit and at rest</div>
              </div>
              <div className="flex flex-col items-center">
                <FileText className="h-8 w-8 text-bb-bright-blue mb-2" />
                <div className="font-medium">GLBA Compliant</div>
                <div>Financial privacy protection standards</div>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="h-8 w-8 text-bb-bright-blue mb-2" />
                <div className="font-medium">Confidential Processing</div>
                <div>Documents never shared with third parties</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function UploadDocsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bb-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bb-bright-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <UploadDocsContent />
    </Suspense>
  )
}
