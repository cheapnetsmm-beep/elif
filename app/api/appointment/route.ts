import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RANDEVU_EMAIL = 'dyt.psk.elifnazoksuz@gmail.com';

function buildEmailHtml(selectedService: string, formData: Record<string, string>) {
  const section = (title: string, keys: string[]) => {
    const rows = keys
      .filter((k) => formData[k] != null && String(formData[k]).trim() !== '')
      .map((k) => {
        const label = k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
        return `<tr><td style="padding:6px 12px;border:1px solid #e5e7eb;color:#374151;"><strong>${label}</strong></td><td style="padding:6px 12px;border:1px solid #e5e7eb;color:#111;">${String(formData[k]).trim()}</td></tr>`;
      })
      .join('');
    if (!rows) return '';
    return `<h3 style="margin:16px 0 8px;color:#111;">${title}</h3><table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>`;
  };

  const kisisel = ['fullName', 'gender', 'age', 'weight', 'height', 'maritalStatus', 'occupation', 'email', 'phone', 'city'];
  const saglik = ['diagnosedDisease', 'familyHistory', 'medications', 'surgeries', 'allergies', 'diuretics', 'sleepPattern', 'menstrualCycle'];
  const sindirim = ['bowelHabits', 'digestiveProblems', 'foodIntolerances'];
  const aliskanlik = ['mealPattern', 'skippedMeals', 'snackHabits', 'favoriteFood', 'avoidedFood', 'eatingOut', 'nightEating', 'fastEating', 'psychologicalImpact'];
  const tuketim = ['water', 'teaCoffee', 'soda', 'sugar', 'sweetener', 'alcohol'];
  const kilo = ['weightChangeStart', 'maxMinWeight', 'weightChangeReason', 'previousDiets', 'regainedWeight', 'targetWeight', 'physicalActivity'];
  const gunluk = ['breakfast', 'morningSnack', 'lunch', 'afternoonSnack', 'dinner', 'eveningSnack'];
  const notlar = ['notes'];

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Yeni Randevu</title></head>
<body style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f9fafb;">
  <div style="background:#fff;border-radius:12px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <h1 style="margin:0 0 8px;color:#111;">Yeni Randevu Talebi</h1>
    <p style="margin:0 0 20px;color:#6b7280;font-size:14px;">${new Date().toLocaleString('tr-TR')}</p>
    <p style="margin:0 0 20px;padding:12px;background:#eff6ff;border-radius:8px;color:#1e40af;"><strong>Hizmet:</strong> ${selectedService}</p>
    ${section('Kişisel Bilgiler', kisisel)}
    ${section('Sağlık Bilgileri', saglik)}
    ${section('Sindirim', sindirim)}
    ${section('Beslenme Alışkanlıkları', aliskanlik)}
    ${section('Günlük Tüketim', tuketim)}
    ${section('Kilo Öyküsü & Aktivite', kilo)}
    ${section('Dünün Beslenmesi', gunluk)}
    ${section('Notlar', notlar)}
    <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;">Bu e-posta randevu formu üzerinden otomatik gönderilmiştir.</p>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.formData || !body.selectedService) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    const { formData, selectedService } = body;

    // Gmail App Password tanımlıysa e-posta gönder
    const appPassword = process.env.GMAIL_APP_PASSWORD;
    if (appPassword) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: RANDEVU_EMAIL,
          pass: appPassword,
        },
      });

      await transporter.sendMail({
        from: `"Randevu Formu" <${RANDEVU_EMAIL}>`,
        to: RANDEVU_EMAIL,
        replyTo: formData.email || undefined,
        subject: `[Randevu] ${selectedService} - ${formData.fullName || 'İsimsiz'}`,
        html: buildEmailHtml(selectedService, formData),
      });
    } else {
      console.log('Randevu (e-posta gönderilmedi, GMAIL_APP_PASSWORD tanımlı değil):', {
        service: selectedService,
        formData: { fullName: formData.fullName, email: formData.email, phone: formData.phone },
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Anamnez formunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Appointment form error:', error);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
