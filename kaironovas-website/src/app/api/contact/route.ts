import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Here you would integrate with your email service (SendGrid, Nodemailer, etc.)
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Implement email sending logic
    // TODO: Save to Supabase database
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}