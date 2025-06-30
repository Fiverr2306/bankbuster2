import { Resend } from 'resend';

const resend = new Resend('re_8GzQyaBr_5F1eUFsSW9WPsvPt1D5C57Qz');

async function sendTest() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'devopswithudemy@gmail.com',
      subject: 'Test from Resend',
      html: '<p>This is a test email</p>',
    });
    console.log('✅ Success:', data);
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

sendTest();
