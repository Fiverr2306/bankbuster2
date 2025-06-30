
// import { NextRequest, NextResponse } from 'next/server'
// import { prisma } from '@/lib/db'
// import nodemailer from 'nodemailer'

// export async function POST(request: NextRequest) {
//   try {
//     const formData = await request.formData()
//     const sessionId = formData.get('sessionId') as string

//     if (!sessionId) {
//       return NextResponse.json({ error: 'Session ID is required' }, { status: 400 })
//     }

//     // Verify the payment session
//     const paymentSession = await prisma.paymentSession.findUnique({
//       where: { sessionId },
//     })

//     if (!paymentSession || paymentSession.status !== 'completed') {
//       return NextResponse.json({ error: 'Invalid or incomplete payment session' }, { status: 400 })
//     }

//     // Extract files from formData
//     const files: File[] = []
//     for (const [key, value] of formData.entries()) {
//       if (key.startsWith('file_') && value instanceof File) {
//         files.push(value)
//       }
//     }

//     if (files.length === 0) {
//       return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
//     }

//     // Validate file types and sizes
//     for (const file of files) {
//       if (!file.name.toLowerCase().endsWith('.pdf')) {
//         return NextResponse.json({ error: `Invalid file type: ${file.name}` }, { status: 400 })
//       }
//       if (file.size > 10 * 1024 * 1024) { // 10MB limit
//         return NextResponse.json({ error: `File too large: ${file.name}` }, { status: 400 })
//       }
//     }

//     // Convert files to attachments
//     const attachments = await Promise.all(
//       files.map(async (file, index) => {
//         const buffer = Buffer.from(await file.arrayBuffer())
//         return {
//           filename: file.name,
//           content: buffer,
//           contentType: 'application/pdf',
//         }
//       })
//     )

//     // Create email transporter (using a service like Gmail, SendGrid, etc.)
//     const transporter = nodemailer.createTransport({
//       // Configure your email service here
//       // For demo purposes, we'll use a test configuration
//       host: 'smtp.ethereal.email', // Replace with your SMTP settings
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'test@example.com', // Replace with your email
//         pass: 'your-app-password', // Replace with your password
//       },
//     })

//     // Send email with attachments
//     const emailSubject = `BankBuster Document Upload - Session ${sessionId}`
//     const emailBody = `
//       New document upload from BankBuster.net
      
//       Session ID: ${sessionId}
//       Client Email: ${paymentSession.email}
//       Upload Date: ${new Date().toISOString()}
//       Number of Files: ${files.length}
      
//       Files uploaded:
//       ${files.map((file, index) => `${index + 1}. ${file.name} (${(file.size / 1024).toFixed(1)} KB)`).join('\n')}
      
//       Please review the documents and provide analysis within 24-48 hours.
//     `

//     try {
//       await transporter.sendMail({
//         from: '"BankBuster Upload System" <uploads@bankbuster.net>',
//         to: 'chuck@bankbuster.net',
//         subject: emailSubject,
//         text: emailBody,
//         attachments,
//       })

//       // Log the upload in database
//       await Promise.all(
//         files.map(file =>
//           prisma.documentUpload.create({
//             data: {
//               sessionId,
//               fileName: file.name,
//               fileSize: file.size,
//               fileType: file.type,
//               emailSent: true,
//             },
//           })
//         )
//       )

//       // Mark session as having documents uploaded
//       await prisma.paymentSession.update({
//         where: { sessionId },
//         data: { documentsUploaded: true },
//       })

//       return NextResponse.json({
//         success: true,
//         message: 'Documents uploaded successfully',
//         fileCount: files.length,
//       })

//     } catch (emailError) {
//       console.error('Email sending error:', emailError)
      
//       // Still log the upload attempt even if email fails
//       await Promise.all(
//         files.map(file =>
//           prisma.documentUpload.create({
//             data: {
//               sessionId,
//               fileName: file.name,
//               fileSize: file.size,
//               fileType: file.type,
//               emailSent: false,
//             },
//           })
//         )
//       )

//       return NextResponse.json({
//         success: true,
//         warning: 'Documents received but email delivery failed. We will process manually.',
//         fileCount: files.length,
//       })
//     }

//   } catch (error) {
//     console.error('Error uploading documents:', error)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }


