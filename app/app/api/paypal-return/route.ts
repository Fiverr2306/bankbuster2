// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/lib/db'

// export const dynamic = 'force-dynamic'

// export async function GET(request: NextRequest) {
//   const baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`
  
//   try {
//     const { searchParams } = new URL(request.url)
//     const sessionId = searchParams.get('session')
//     const token = searchParams.get('token') // PayPal order ID
//     const payerId = searchParams.get('PayerID')

//     if (!sessionId || !token) {
//       return NextResponse.redirect(`${baseUrl}/payment?error=invalid_parameters`)
//     }

//     // Find the payment session
//     const paymentSession = await prisma.paymentSession.findUnique({
//       where: { sessionId },
//     })

//     if (!paymentSession) {
//       return NextResponse.redirect(`${baseUrl}/payment?error=session_not_found`)
//     }

//     // Capture the PayPal payment
//     const paypalClientId = process.env.PAYPAL_CLIENT_ID
//     const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET
//     const paypalMode = process.env.PAYPAL_MODE || 'sandbox'
    
//     const authUrl = paypalMode === 'live' 
//       ? 'https://api-m.paypal.com/v1/oauth2/token'
//       : 'https://api-m.sandbox.paypal.com/v1/oauth2/token'
    
//     const paypalApiUrl = paypalMode === 'live'
//       ? 'https://api-m.paypal.com'
//       : 'https://api-m.sandbox.paypal.com'

//     try {
//       // Get access token
//       const authResponse = await fetch(authUrl, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Accept-Language': 'en_US',
//           'Authorization': `Basic ${Buffer.from(`${paypalClientId}:${paypalClientSecret || ''}`).toString('base64')}`,
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: 'grant_type=client_credentials',
//       })

//       if (!authResponse.ok) {
//         throw new Error('Failed to get PayPal access token')
//       }

//       const authData = await authResponse.json()
//       const accessToken = authData.access_token

//       // Capture the payment
//       const captureResponse = await fetch(`${paypalApiUrl}/v2/checkout/orders/${token}/capture`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${accessToken}`,
//         },
//       })

//       if (!captureResponse.ok) {
//         throw new Error('Failed to capture PayPal payment')
//       }

//       const captureData = await captureResponse.json()
      
//       if (captureData.status === 'COMPLETED') {
//         // Update session as completed
//         await prisma.paymentSession.update({
//           where: { sessionId },
//           data: {
//             status: 'completed',
//             paypalTransactionId: captureData.id,
//             paypalOrderId: token,
//           },
//         })

//         // Generate access token for upload page
//         const uploadToken = Buffer.from(`${sessionId}:${Date.now()}`).toString('base64')

//         // Redirect to upload page with token
//         const uploadUrl = `${baseUrl}/upload-docs?token=${uploadToken}&session=${sessionId}`
//         return NextResponse.redirect(uploadUrl)
//       } else {
//         throw new Error(`Payment capture failed with status: ${captureData.status}`)
//       }

//     } catch (paypalError) {
//       console.error('PayPal capture error:', paypalError)
//       return NextResponse.redirect(`${baseUrl}/payment?error=capture_failed`)
//     }

//   } catch (error) {
//     console.error('Error processing PayPal return:', error)
//     return NextResponse.redirect(`${baseUrl}/payment?error=processing_error`)
//   }
// }
