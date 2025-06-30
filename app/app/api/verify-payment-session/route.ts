
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { token, sessionId } = await request.json()

    if (!token || !sessionId) {
      return NextResponse.json({ valid: false, error: 'Missing token or session ID' }, { status: 400 })
    }

    // Verify the token (in production, use proper JWT verification)
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8')
      const [tokenSessionId] = decoded.split(':')
      
      if (tokenSessionId !== sessionId) {
        return NextResponse.json({ valid: false, error: 'Invalid token' }, { status: 400 })
      }
    } catch (error) {
      return NextResponse.json({ valid: false, error: 'Invalid token format' }, { status: 400 })
    }

    // Check if payment session exists and is completed
    const paymentSession = await prisma.paymentSession.findUnique({
      where: { sessionId },
    })

    if (!paymentSession) {
      return NextResponse.json({ valid: false, error: 'Session not found' }, { status: 404 })
    }

    if (paymentSession.status !== 'completed') {
      return NextResponse.json({ valid: false, error: 'Payment not completed' }, { status: 400 })
    }

    if (paymentSession.expiresAt < new Date()) {
      return NextResponse.json({ valid: false, error: 'Session expired' }, { status: 400 })
    }

    return NextResponse.json({ valid: true, session: paymentSession })

  } catch (error) {
    console.error('Error verifying payment session:', error)
    return NextResponse.json({ valid: false, error: 'Internal server error' }, { status: 500 })
  }
}
