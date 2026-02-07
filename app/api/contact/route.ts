import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // For now, we'll just log it and return success
    // You can integrate with: Resend, SendGrid, Nodemailer, etc.
    
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with actual email sending service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@elifnazoksuz.com',
    //   to: 'dyt.psk.elifnazoksuz@gmail.com',
    //   subject: `Yeni İletişim Formu: ${name}`,
    //   html: `<p>İsim: ${name}</p><p>Email: ${email}</p><p>Telefon: ${phone || 'Belirtilmemiş'}</p><p>Mesaj: ${message}</p>`
    // });

    return NextResponse.json(
      { 
        success: true,
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}


