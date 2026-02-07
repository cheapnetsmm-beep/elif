"use client";

import { useState } from "react";
import { Calendar, Clock, CheckCircle2, ArrowLeft, ArrowRight, User, FileText, Loader2 } from "lucide-react";
import Toast from "@/components/Toast";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [quickForm, setQuickForm] = useState({ isim: "", soyisim: "", telefon: "", email: "" });
  const [isQuickSubmitting, setIsQuickSubmitting] = useState(false);
  const [quickFormSuccess, setQuickFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Kişisel Bilgiler
    fullName: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    maritalStatus: "",
    occupation: "",
    email: "",
    phone: "",
    city: "",
    
    // Sağlık Bilgileri
    diagnosedDisease: "",
    familyHistory: "",
    medications: "",
    surgeries: "",
    allergies: "",
    diuretics: "",
    sleepPattern: "",
    menstrualCycle: "",
    
    // Sindirim Sistemi
    bowelHabits: "",
    digestiveProblems: "",
    foodIntolerances: "",
    
    // Alışkanlıklar
    mealPattern: "",
    skippedMeals: "",
    snackHabits: "",
    favoriteFood: "",
    avoidedFood: "",
    eatingOut: "",
    nightEating: "",
    fastEating: "",
    psychologicalImpact: "",
    
    // Günlük Tüketim
    water: "",
    teaCoffee: "",
    soda: "",
    sugar: "",
    sweetener: "",
    alcohol: "",
    
    // Kilo Öyküsü
    weightChangeStart: "",
    maxMinWeight: "",
    weightChangeReason: "",
    previousDiets: "",
    regainedWeight: "",
    targetWeight: "",
    
    // Fiziksel Aktivite
    physicalActivity: "",
    
    // Dünün Beslenmesi
    breakfast: "",
    morningSnack: "",
    lunch: "",
    afternoonSnack: "",
    dinner: "",
    eveningSnack: "",
    
    // Notlar
    notes: "",
  });

  const services = [
    "Online Diyetisyen",
    "Online Psikolog",
    "Psikonütrisyon",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedService,
          formData,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToast({ message: data.message, type: "success" });
        // Reset form after successful submission
        setTimeout(() => {
          setStep(1);
          setSelectedService("");
          setFormData({
            fullName: "",
            gender: "",
            age: "",
            weight: "",
            height: "",
            maritalStatus: "",
            occupation: "",
            email: "",
            phone: "",
            city: "",
            diagnosedDisease: "",
            familyHistory: "",
            medications: "",
            surgeries: "",
            allergies: "",
            diuretics: "",
            sleepPattern: "",
            menstrualCycle: "",
            bowelHabits: "",
            digestiveProblems: "",
            foodIntolerances: "",
            mealPattern: "",
            skippedMeals: "",
            snackHabits: "",
            favoriteFood: "",
            avoidedFood: "",
            eatingOut: "",
            nightEating: "",
            fastEating: "",
            psychologicalImpact: "",
            water: "",
            teaCoffee: "",
            soda: "",
            sugar: "",
            sweetener: "",
            alcohol: "",
            weightChangeStart: "",
            maxMinWeight: "",
            weightChangeReason: "",
            previousDiets: "",
            regainedWeight: "",
            targetWeight: "",
            physicalActivity: "",
            breakfast: "",
            morningSnack: "",
            lunch: "",
            afternoonSnack: "",
            dinner: "",
            eveningSnack: "",
            notes: "",
          });
        }, 2000);
      } else {
        setToast({ message: data.error || "Bir hata oluştu.", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Bir hata oluştu. Lütfen tekrar deneyin.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuickSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${quickForm.isim} ${quickForm.soyisim}`.trim(),
          email: quickForm.email,
          phone: quickForm.telefon,
          message: "Randevu hakkında bilgi almak istiyorum.",
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setQuickFormSuccess(true);
        setQuickForm({ isim: "", soyisim: "", telefon: "", email: "" });
      } else {
        setToast({ message: data.error || "Bir hata oluştu.", type: "error" });
      }
    } catch {
      setToast({ message: "Bir hata oluştu. Lütfen tekrar deneyin.", type: "error" });
    } finally {
      setIsQuickSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Randevu Al
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Size uygun zamanı seçin ve randevunuzu oluşturun
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-elegant-lg p-8 md:p-12">
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Hizmet Seçin
              </h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => {
                      setSelectedService(service);
                      setStep(2);
                    }}
                    className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-primary-600 hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-gray-900">{service}</span>
                      <CheckCircle2 className="text-primary-600" size={24} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Hızlı İletişim */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-6">
                  Detaylı formu doldurmak istemiyorsanız, lütfen aşağıdaki bilgileri doldurunuz; en kısa sürede size dönüş yapacağız.
                </p>
                {quickFormSuccess ? (
                  <div className="text-center py-12 px-6 bg-green-50 rounded-2xl border-2 border-green-200">
                    <CheckCircle2 className="mx-auto text-green-600 mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Talebiniz alındı! </h3>
                    <p className="text-lg text-gray-700">En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-4 max-w-md mx-auto">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="quick-isim" className="block text-sm font-semibold text-gray-700 mb-1">İsim</label>
                        <input
                          id="quick-isim"
                          type="text"
                          required
                          value={quickForm.isim}
                          onChange={(e) => setQuickForm((p) => ({ ...p, isim: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Adınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="quick-soyisim" className="block text-sm font-semibold text-gray-700 mb-1">Soyisim</label>
                        <input
                          id="quick-soyisim"
                          type="text"
                          required
                          value={quickForm.soyisim}
                          onChange={(e) => setQuickForm((p) => ({ ...p, soyisim: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Soyadınız"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="quick-telefon" className="block text-sm font-semibold text-gray-700 mb-1">Telefon</label>
                      <input
                        id="quick-telefon"
                        type="tel"
                        required
                        value={quickForm.telefon}
                        onChange={(e) => setQuickForm((p) => ({ ...p, telefon: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="quick-email" className="block text-sm font-semibold text-gray-700 mb-1">E-posta</label>
                      <input
                        id="quick-email"
                        type="email"
                        required
                        value={quickForm.email}
                        onChange={(e) => setQuickForm((p) => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isQuickSubmitting}
                      className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isQuickSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Gönderiliyor...
                        </>
                      ) : (
                        "Gönder"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Tarih ve Saat Seçin
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Calendar className="inline mr-2" size={20} />
                    Tarih
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Clock className="inline mr-2" size={20} />
                    Saat
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => setStep(3)}
                    className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Devam Et
                    <ArrowRight size={20} />
                  </button>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="w-full px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Geri Dön
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="text-primary-600" size={32} />
                  Anamnez Formu
                </h2>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                >
                  <ArrowLeft size={20} />
                  Geri
                </button>
              </div>

              {/* Kişisel Bilgiler */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="text-primary-600" size={24} />
                  Kişisel Bilgiler
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Adınız ve Soyadınız *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Cinsiyet *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Seçiniz</option>
                      <option value="kadın">Kadın</option>
                      <option value="erkek">Erkek</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Yaş *</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Kilo (kg) *</label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Boy (cm) *</label>
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Medeni Durum</label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Seçiniz</option>
                      <option value="bekar">Bekar</option>
                      <option value="evli">Evli</option>
                      <option value="boşanmış">Boşanmış</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Meslek</label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">E-Posta *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Şehir / Ülke</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Sağlık Bilgileri */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sağlık Bilgileri</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Tanısı Konulmuş Hastalığınız</label>
                    <textarea
                      name="diagnosedDisease"
                      value={formData.diagnosedDisease}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Varsa belirtiniz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Birinci Derece Akrabanızda Kronik Hastalık</label>
                    <textarea
                      name="familyHistory"
                      value={formData.familyHistory}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Varsa belirtiniz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Düzenli Kullandığınız İlaç(lar)</label>
                    <textarea
                      name="medications"
                      value={formData.medications}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Varsa belirtiniz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Geçirdiğiniz İşlem / Ameliyat</label>
                    <textarea
                      name="surgeries"
                      value={formData.surgeries}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Varsa belirtiniz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Besin Alerjisi(leri)</label>
                    <textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Varsa belirtiniz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">İdrar Söktürücü/Laksatif/Zayıflama İlacı/Kusma Öyküsü</label>
                    <textarea
                      name="diuretics"
                      value={formData.diuretics}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Varsa belirtiniz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Günlük Uyku Düzeniniz</label>
                    <input
                      type="text"
                      name="sleepPattern"
                      value={formData.sleepPattern}
                      onChange={handleInputChange}
                      placeholder="Örn: 23:00-07:00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Regl Düzeniniz (Kadınsanız)</label>
                    <input
                      type="text"
                      name="menstrualCycle"
                      value={formData.menstrualCycle}
                      onChange={handleInputChange}
                      placeholder="Düzenli/Düzensiz, süre vb."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Sindirim Sistemi */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sindirim Sistemi</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Düzenli Tuvalet Alışkanlığınız</label>
                    <input
                      type="text"
                      name="bowelHabits"
                      value={formData.bowelHabits}
                      onChange={handleInputChange}
                      placeholder="Günde kaç kez, düzenli/düzensiz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Sindirim Sistemi Probleminiz</label>
                    <input
                      type="text"
                      name="digestiveProblems"
                      value={formData.digestiveProblems}
                      onChange={handleInputChange}
                      placeholder="Kabızlık, ishal, ülser, reflü, bulantı, yutma güçlüğü..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Midenize Rahatsızlık Veren Yiyecek/İçecek</label>
                    <input
                      type="text"
                      name="foodIntolerances"
                      value={formData.foodIntolerances}
                      onChange={handleInputChange}
                      placeholder="Varsa belirtiniz..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Alışkanlıklar */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Alışkanlıklarınız</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Öğün Düzeni</label>
                    <input
                      type="text"
                      name="mealPattern"
                      value={formData.mealPattern}
                      onChange={handleInputChange}
                      placeholder="Kaç öğün yiyorsunuz?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Atlanan Öğün</label>
                    <input
                      type="text"
                      name="skippedMeals"
                      value={formData.skippedMeals}
                      onChange={handleInputChange}
                      placeholder="Hangi öğünleri atlıyorsunuz?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Ara Öğün Alışkanlığı</label>
                    <input
                      type="text"
                      name="snackHabits"
                      value={formData.snackHabits}
                      onChange={handleInputChange}
                      placeholder="Ara öğün yapıyor musunuz?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Vazgeçilmez Besin</label>
                    <input
                      type="text"
                      name="favoriteFood"
                      value={formData.favoriteFood}
                      onChange={handleInputChange}
                      placeholder="Her gün tükettiğiniz besinler..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Tüketmediğiniz Besin</label>
                    <input
                      type="text"
                      name="avoidedFood"
                      value={formData.avoidedFood}
                      onChange={handleInputChange}
                      placeholder="Hiç yemediğiniz besinler..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Dışarıda Yemek Yeme Alışkanlığı</label>
                    <input
                      type="text"
                      name="eatingOut"
                      value={formData.eatingOut}
                      onChange={handleInputChange}
                      placeholder="Haftada kaç kez?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Gece Yemek Yeme Alışkanlığı</label>
                    <input
                      type="text"
                      name="nightEating"
                      value={formData.nightEating}
                      onChange={handleInputChange}
                      placeholder="Var mı? Ne zaman?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Hızlı Yemek Yeme Alışkanlığı</label>
                    <input
                      type="text"
                      name="fastEating"
                      value={formData.fastEating}
                      onChange={handleInputChange}
                      placeholder="Var mı?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Psikolojik Durumunuz Beslenmeyi Etkiler Mi?</label>
                    <textarea
                      name="psychologicalImpact"
                      value={formData.psychologicalImpact}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Stres, üzüntü, kaygı gibi durumlarda yeme davranışınız değişiyor mu?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Günlük Tüketim */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Günlük Tüketim Miktarınız</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Su (litre/gün)</label>
                    <input
                      type="text"
                      name="water"
                      value={formData.water}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Çay / Kahve (fincan/gün)</label>
                    <input
                      type="text"
                      name="teaCoffee"
                      value={formData.teaCoffee}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Maden Suyu</label>
                    <input
                      type="text"
                      name="soda"
                      value={formData.soda}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Şeker (çay kaşığı/gün)</label>
                    <input
                      type="text"
                      name="sugar"
                      value={formData.sugar}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Tatlandırıcı</label>
                    <input
                      type="text"
                      name="sweetener"
                      value={formData.sweetener}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Alkol</label>
                    <input
                      type="text"
                      name="alcohol"
                      value={formData.alcohol}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Kilo Öyküsü */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kilo Alma / Verme Öykünüz</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Ne Zaman Kilo Almaya/Vermeye Başladınız?</label>
                    <input
                      type="text"
                      name="weightChangeStart"
                      value={formData.weightChangeStart}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Şu Ana Kadar Görülen En Yüksek / En Düşük Kilonuz?</label>
                    <input
                      type="text"
                      name="maxMinWeight"
                      value={formData.maxMinWeight}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Kilo Alma / Verme Sebebiniz Sizce Nedir?</label>
                    <textarea
                      name="weightChangeReason"
                      value={formData.weightChangeReason}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Daha Önce Uygulanan Diyet Programı / Süresi / Sonuç?</label>
                    <textarea
                      name="previousDiets"
                      value={formData.previousDiets}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Geri Alındıysa / Verildiyse Kaç Kilo?</label>
                    <input
                      type="text"
                      name="regainedWeight"
                      value={formData.regainedWeight}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Hedeflediğiniz Kilo Nedir?</label>
                    <input
                      type="text"
                      name="targetWeight"
                      value={formData.targetWeight}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Fiziksel Aktivite */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fiziksel Aktivite Öykünüz</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Düzenli Olarak Yaptığınız Bir Fiziksel Aktivite Var Mı? Sıklığı Nedir?</label>
                  <textarea
                    name="physicalActivity"
                    value={formData.physicalActivity}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Yürüyüş, yüzme, fitness, yoga vb. ve haftada kaç kez yaptığınızı belirtiniz..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </section>

              {/* Dünün Beslenmesi */}
              <section className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dün Gün Boyu Beslenmenizin Öğün Saatleri / İçeriği / Porsiyon Miktarları</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Kahvaltı</label>
                    <textarea
                      name="breakfast"
                      value={formData.breakfast}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Saat ve içerik..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Ara Öğün</label>
                    <textarea
                      name="morningSnack"
                      value={formData.morningSnack}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Saat ve içerik..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Öğle Yemeği</label>
                    <textarea
                      name="lunch"
                      value={formData.lunch}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Saat ve içerik..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Ara Öğün</label>
                    <textarea
                      name="afternoonSnack"
                      value={formData.afternoonSnack}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Saat ve içerik..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Akşam Yemeği</label>
                    <textarea
                      name="dinner"
                      value={formData.dinner}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Saat ve içerik..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Ara Öğün</label>
                    <textarea
                      name="eveningSnack"
                      value={formData.eveningSnack}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Saat ve içerik..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Notlar */}
              <section className="pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bunların Dışında Bilmem İstediğiniz Bir Şey Var İse Not Ediniz</h3>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Eklemek istediğiniz başka bilgiler..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </section>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Geri Dön
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Gönderiliyor...
                    </>
                  ) : (
                    "Formu Gönder"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={!!toast}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
