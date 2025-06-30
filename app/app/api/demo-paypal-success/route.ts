
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`
  
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('session')
    const email = searchParams.get('email')

    if (!sessionId) {
      return NextResponse.redirect(`${baseUrl}/payment?error=invalid_session`)
    }

    // Find and update the payment session
    // const paymentSession = await prisma.paymentSession.findUnique({
    //   where: { sessionId },
    // })

    // if (!paymentSession) {
    //   return NextResponse.redirect(`${baseUrl}/payment?error=session_not_found`)
    // }

    // Update session as completed
    // await prisma.paymentSession.update({
    //   where: { sessionId },
    //   data: {
    //     status: 'completed',
    //     paypalTransactionId: `DEMO_TXN_${Date.now()}`,
    //   },
    // })

    // Generate access token for upload page
    const token = Buffer.from(`${sessionId}:${Date.now()}`).toString('base64')

    // Redirect to upload page with token
    const uploadUrl = `${baseUrl}/upload-docs?token=${token}&session=${sessionId}`
    return NextResponse.redirect(uploadUrl)

  } catch (error) {
    console.error('Error processing demo PayPal success:', error)
    return NextResponse.redirect(`${baseUrl}/payment?error=processing_error`)
  }
}
