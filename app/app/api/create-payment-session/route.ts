import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = body.email;

  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_SECRET) {
    console.error('⚠️ PayPal credentials are missing from .env.local');
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  try {
    const res = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(
          `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
        ).toString('base64')}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '20.00',
            },
            custom_id: email, // optional
          },
        ],
        application_context: {
          return_url: 'http://localhost:3000/success',
          cancel_url: 'http://localhost:3000/cancel',
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('❌ PayPal API error:', data);
      return NextResponse.json({ error: 'PayPal API call failed', details: data }, { status: 500 });
    }

    const approvalUrl = data.links?.find((link: any) => link.rel === 'approve')?.href;

    if (!approvalUrl) {
      console.error('❌ Approval URL not found in PayPal response:', data);
      return NextResponse.json({ error: 'Approval URL missing from PayPal response' }, { status: 500 });
    }

    return NextResponse.json({ approvalUrl });
  } catch (err) {
    console.error('❌ Exception caught while creating payment:', err);
    return NextResponse.json({ error: 'Server exception' }, { status: 500 });
  }
}
