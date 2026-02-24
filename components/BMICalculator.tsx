"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Ruler, Scale, TrendingUp, AlertCircle, CheckCircle2, Info } from "lucide-react";

interface BMICategory {
  label: string;
  color: string;
  bgColor: string;
  description: string;
  recommendation: string;
}

const bmiCategories: BMICategory[] = [
  {
    label: "Zayıf",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Vücut kitle indeksiniz normal aralığın altında.",
    recommendation: "Sağlıklı kilo alımı için beslenme danışmanlığı almanız önerilir.",
  },
  {
    label: "Normal",
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Vücut kitle indeksiniz sağlıklı aralıkta.",
    recommendation: "Mevcut kilonuzu korumak için dengeli beslenme ve düzenli aktivite önerilir.",
  },
  {
    label: "Fazla Kilolu",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    description: "Vücut kitle indeksiniz normal aralığın üzerinde.",
    recommendation: "Sağlıklı kilo verme programı ile ideal kilonuza ulaşabilirsiniz.",
  },
  {
    label: "Obez (1. Derece)",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Vücut kitle indeksiniz obezite sınırında.",
    recommendation: "Profesyonel destek ile sağlıklı kilo verme sürecine başlamanız önerilir.",
  },
  {
    label: "Obez (2. Derece)",
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Vücut kitle indeksiniz yüksek obezite kategorisinde.",
    recommendation: "Acil olarak profesyonel beslenme ve psikolojik destek almanız önerilir.",
  },
  {
    label: "Obez (3. Derece)",
    color: "text-red-700",
    bgColor: "bg-red-100",
    description: "Vücut kitle indeksiniz morbid obezite kategorisinde.",
    recommendation: "Mutlaka profesyonel tıbbi destek ve bütüncül yaklaşım gereklidir.",
  },
];

function calculateBMI(weight: number, heightCm: number): number | null {
  if (weight <= 0 || heightCm <= 0) return null;
  
  // Boyu cm'den metreye çevir
  const heightM = heightCm / 100;
  
  // BMI = kg / (m)²
  const bmi = weight / (heightM * heightM);
  
  // 1 ondalık basamakla yuvarla
  return Math.round(bmi * 10) / 10;
}

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return bmiCategories[0];
  if (bmi < 25) return bmiCategories[1];
  if (bmi < 30) return bmiCategories[2];
  if (bmi < 35) return bmiCategories[3];
  if (bmi < 40) return bmiCategories[4];
  return bmiCategories[5];
}

function getBMIPercentage(bmi: number): number {
  // BMI'yi 0-100 arası yüzdeye çevir (15-50 aralığı için)
  const minBMI = 15;
  const maxBMI = 50;
  const percentage = ((bmi - minBMI) / (maxBMI - minBMI)) * 100;
  return Math.max(0, Math.min(100, percentage));
}

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<BMICategory | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    setError("");
    
    const weightNum = parseFloat(weight.replace(",", "."));
    const heightNum = parseFloat(height.replace(",", "."));

    // Validasyon
    if (!weight || !height) {
      setError("Lütfen boy ve kilo bilgilerinizi giriniz.");
      return;
    }

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setError("Lütfen geçerli sayısal değerler giriniz.");
      return;
    }

    if (weightNum <= 0 || weightNum > 500) {
      setError("Kilo değeri 0 ile 500 kg arasında olmalıdır.");
      return;
    }

    if (heightNum <= 0 || heightNum > 300) {
      setError("Boy değeri 0 ile 300 cm arasında olmalıdır.");
      return;
    }

    const calculatedBMI = calculateBMI(weightNum, heightNum);
    
    if (calculatedBMI === null) {
      setError("Hesaplama yapılamadı. Lütfen değerleri kontrol ediniz.");
      return;
    }

    if (calculatedBMI < 10 || calculatedBMI > 60) {
      setError("Hesaplanan BMI değeri normal aralık dışında. Lütfen değerleri kontrol ediniz.");
      return;
    }

    setBmi(calculatedBMI);
    setCategory(getBMICategory(calculatedBMI));
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory(null);
    setError("");
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14b8a6 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="text-primary-500" size={20} />
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Hesaplayıcı</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Vücut Kitle İndeksi (VKİ) Hesaplayıcı
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Boy ve kilo bilgilerinizi girerek VKİ değerinizi öğrenin
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-elegant-lg p-8 md:p-12 border border-gray-100">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="height" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Ruler className="text-primary-600" size={18} />
                Boy (cm)
              </label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Örn: 170"
                min="50"
                max="300"
                step="0.1"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
              />
            </div>

            <div>
              <label htmlFor="weight" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Scale className="text-primary-600" size={18} />
                Kilo (kg)
              </label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Örn: 70"
                min="10"
                max="500"
                step="0.1"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
            >
              <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-700 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleCalculate}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Calculator size={20} />
              <span>Hesapla</span>
            </button>
            {(bmi !== null || error) && (
              <button
                onClick={handleReset}
                className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Result Section */}
          {bmi !== null && category && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* BMI Value */}
              <div className={`${category.bgColor} p-8 rounded-2xl border-2 ${category.color.replace("text-", "border-")}`}>
                <div className="text-center mb-6">
                  <p className="text-sm font-semibold text-gray-600 mb-2">Vücut Kitle İndeksi</p>
                  <div className="text-6xl md:text-7xl font-bold mb-2" style={{ color: category.color.replace("text-", "") }}>
                    {bmi}
                  </div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${category.bgColor} ${category.color}`}>
                    <TrendingUp size={18} />
                    <span>{category.label}</span>
                  </div>
                </div>

                {/* Visual Indicator */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>Zayıf</span>
                    <span>Normal</span>
                    <span>Fazla Kilolu</span>
                    <span>Obez</span>
                  </div>
                  <div className="relative h-8 bg-gradient-to-r from-blue-200 via-green-200 via-yellow-200 via-orange-200 to-red-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-gray-900 shadow-lg"
                      style={{
                        left: `${getBMIPercentage(bmi)}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>15</span>
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>40</span>
                    <span>50</span>
                  </div>
                </div>

                {/* Category Info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`${category.color} flex-shrink-0 mt-0.5`} size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Durumunuz</p>
                      <p className="text-gray-700 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className={`${category.color} flex-shrink-0 mt-0.5`} size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Öneri</p>
                      <p className="text-gray-700 text-sm">{category.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BMI Categories Reference */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">VKİ Kategorileri</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-200 rounded"></div>
                    <span className="text-gray-700">Zayıf: &lt; 18.5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-200 rounded"></div>
                    <span className="text-gray-700">Normal: 18.5 - 24.9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-200 rounded"></div>
                    <span className="text-gray-700">Fazla Kilolu: 25 - 29.9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-200 rounded"></div>
                    <span className="text-gray-700">Obez (1. derece): 30 - 34.9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-200 rounded"></div>
                    <span className="text-gray-700">Obez (2. derece): 35 - 39.9</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-300 rounded"></div>
                    <span className="text-gray-700">Obez (3. derece): ≥ 40</span>
                  </div>
                </div>
              </div>

              {/* VKİ Alt Notu (çok önemli) */}
              <div className="bg-amber-50 p-5 rounded-xl border-2 border-amber-200">
                <p className="text-sm font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <Info size={18} />
                  VKİ Alt Notu (çok önemli)
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  VKİ; kas kütlesi, yağ dağılımı ve metabolik sağlığı tek başına göstermez.
                  Bu nedenle bel çevresi ve bel/kalça oranı ile birlikte değerlendirilmelidir.
                  Bel çevresi ve bel kalça oranı önemli sağlık göstergelerinden biridir.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bel / Kalça Oranı (WHR) Bölümü */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <WHRCalculator />
        </motion.div>
      </div>
    </section>
  );
}

/* Bel / Kalça Oranı (WHR) Hesaplayıcı */
const whrWomenRisks = [
  { range: "≤ 0,80", level: "Düşük Risk", comment: "Sağlıklı yağ dağılımı" },
  { range: "0,81 – 0,85", level: "Orta Risk", comment: "İnsülin direnci riski artabilir" },
  { range: "> 0,85", level: "Yüksek Risk", comment: "Tip 2 DM, KVH ve inflamasyon riski yüksek" },
];
const whrMenRisks = [
  { range: "≤ 0,90", level: "Düşük Risk", comment: "Metabolik açıdan daha güvenli" },
  { range: "0,91 – 0,99", level: "Orta Risk", comment: "Kardiyovasküler risk artışı" },
  { range: "≥ 1,00", level: "Yüksek Risk", comment: "Visseral yağlanma belirgin" },
];

function WHRCalculator() {
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [gender, setGender] = useState<"kadin" | "erkek">("kadin");
  const [whr, setWhr] = useState<number | null>(null);
  const [whrError, setWhrError] = useState("");
  const [measureGuideOpen, setMeasureGuideOpen] = useState(false);
  const [riskTablesOpen, setRiskTablesOpen] = useState(false);

  const handleWHRCalculate = () => {
    setWhrError("");
    const w = parseFloat(waist.replace(",", "."));
    const h = parseFloat(hip.replace(",", "."));
    if (!waist || !hip || isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setWhrError("Lütfen bel ve kalça çevresini cm cinsinden giriniz.");
      return;
    }
    const value = Math.round((w / h) * 100) / 100;
    setWhr(value);
  };

  const getWHRRisk = (value: number) => {
    if (gender === "kadin") {
      if (value <= 0.8) return whrWomenRisks[0];
      if (value <= 0.85) return whrWomenRisks[1];
      return whrWomenRisks[2];
    }
    if (value <= 0.9) return whrMenRisks[0];
    if (value < 1) return whrMenRisks[1];
    return whrMenRisks[2];
  };

  return (
    <div className="bg-white rounded-3xl shadow-elegant-lg p-8 md:p-12 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Bel / Kalça Oranı (WHR)
        </h3>
        <p className="text-primary-600 font-medium">Kardiyometabolik Risk Değerlendirmesi</p>
        <p className="text-sm text-gray-600 mt-2">
          Hesaplama formülü: Bel / Kalça Oranı = Bel çevresi (cm) / Kalça çevresi (cm)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Bel çevresi (cm)</label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder="Örn: 80"
            min="40"
            max="200"
            step="0.5"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Kalça çevresi (cm)</label>
          <input
            type="number"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            placeholder="Örn: 100"
            min="50"
            max="200"
            step="0.5"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Cinsiyet</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="whr-gender"
              checked={gender === "kadin"}
              onChange={() => setGender("kadin")}
              className="text-primary-600"
            />
            <span>Kadın</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="whr-gender"
              checked={gender === "erkek"}
              onChange={() => setGender("erkek")}
              className="text-primary-600"
            />
            <span>Erkek</span>
          </label>
        </div>
      </div>

      {whrError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle className="text-red-600" size={20} />
          <p className="text-red-700 text-sm">{whrError}</p>
        </div>
      )}

      <button
        onClick={handleWHRCalculate}
        className="w-full sm:w-auto px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg flex items-center justify-center gap-2"
      >
        <Calculator size={20} />
        Bel/Kalça Oranı Hesapla
      </button>

      {whr !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-primary-50 rounded-2xl border border-primary-200"
        >
          <p className="text-sm font-semibold text-gray-700 mb-1">Bel / Kalça Oranınız</p>
          <p className="text-3xl font-bold text-primary-700">{whr}</p>
          <p className="mt-2 text-gray-700">
            <strong>Risk düzeyi:</strong> {getWHRRisk(whr).level} — {getWHRRisk(whr).comment}
          </p>
        </motion.div>
      )}

      {/* Kadınlar / Erkekler risk sınıflandırması — tıklayınca açılır */}
      <div className="mt-10">
        <button
          type="button"
          onClick={() => setRiskTablesOpen((o) => !o)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl border border-gray-200 text-gray-800 font-medium text-sm transition-colors"
        >
          <Info className="w-4 h-4" />
          {riskTablesOpen ? "Risk sınıflandırmalarını gizle" : "Kadın ve erkek için risk sınıflandırması"}
        </button>
        {riskTablesOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  👩 Kadınlar için risk sınıflandırması
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold text-gray-700">Bel/Kalça Oranı</th>
                        <th className="text-left py-2 font-semibold text-gray-700">Risk</th>
                        <th className="text-left py-2 font-semibold text-gray-700">Yorum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {whrWomenRisks.map((r, i) => (
                        <tr key={i} className="border-b border-gray-100">
                          <td className="py-2">{r.range}</td>
                          <td className="py-2">{r.level}</td>
                          <td className="py-2 text-gray-600">{r.comment}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={3} className="pt-3 pb-0 text-xs text-gray-600 border-t border-gray-200">
                          🔎 Kadınlarda özellikle abdominal yağlanma, adet düzensizlikleri ve insülin direnciyle ilişkilidir.
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  👨 Erkekler için risk sınıflandırması
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-semibold text-gray-700">Bel/Kalça Oranı</th>
                        <th className="text-left py-2 font-semibold text-gray-700">Risk</th>
                        <th className="text-left py-2 font-semibold text-gray-700">Yorum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {whrMenRisks.map((r, i) => (
                        <tr key={i} className="border-b border-gray-100">
                          <td className="py-2">{r.range}</td>
                          <td className="py-2">{r.level}</td>
                          <td className="py-2 text-gray-600">{r.comment}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={3} className="pt-3 pb-0 text-xs text-gray-600 border-t border-gray-200">
                          🔎 Erkeklerde bel çevresi artışı, hipertansiyon ve dislipidemi ile güçlü ilişkilidir.
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Nasıl ölçüm yapılır — tıklayınca açılır */}
      <div className="mt-10">
        <button
          type="button"
          onClick={() => setMeasureGuideOpen((o) => !o)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-50/80 hover:bg-primary-100/80 rounded-xl border border-primary-200 text-primary-800 font-medium text-sm transition-colors"
        >
          <Ruler className="w-4 h-4" />
          {measureGuideOpen ? "Ölçüm rehberini gizle" : "Nasıl ölçüm yapılır?"}
        </button>
        {measureGuideOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-6 bg-primary-50/50 rounded-2xl border border-primary-100 overflow-hidden"
          >
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Bel ölçüsü nasıl alınır</p>
                <p className="leading-relaxed">
                  Bel kalınlığını ölçmek için kişi, dik pozisyondayken bir mezura ile kıyafetsiz şekilde belin en ince yerinden ve beli sıkmadan yapılmalıdır. Bu yer, genellikle göbek deliğinin biraz yukarısında bulunmaktadır. Kaburgaların bitimi ile kalça kemiğinin en üst kısmı arasındaki orta noktadan ölçüm alınabilir.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Kalça ölçüsü nasıl alınır</p>
                <p className="leading-relaxed">
                  Kalça ölçüsü alırken yine kişi dik pozisyondayken kalçanın en geniş yerinden ölçü alınmalıdır.
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
