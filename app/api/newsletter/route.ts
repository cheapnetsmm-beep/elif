import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Lütfen e-posta adresinizi giriniz.' },
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

    // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, we'll just log it and return success
    
    console.log('Newsletter Subscription:', {
      email,
      name: name || 'Anonymous',
      timestamp: new Date().toISOString(),
      source: 'website',
    });

    // TODO: Replace with actual email service integration
    // Example with Mailchimp:
    // await mailchimp.lists.addListMember('your-list-id', {
    //   email_address: email,
    //   status: 'subscribed',
    //   merge_fields: {
    //     FNAME: name || '',
    //   }
    // });

    return NextResponse.json(
      { 
        success: true,
        message: 'Başarıyla abone oldunuz! İlk abonelere özel indirim kodunuz e-posta adresinize gönderildi.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}




