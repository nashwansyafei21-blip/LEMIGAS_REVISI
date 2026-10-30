import React, { useState } from 'react';
import { 
  Activity, 
  ArrowRight, 
  Award, 
  CheckCircle, 
  Cog, 
  Droplet, 
  FileCheck2, 
  Flame, 
  FlaskConical, 
  Gauge, 
  Layers, 
  Microscope, 
  ShieldCheck, 
  Sliders 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenTarifModal: () => void;
  onOpenSampleTracker: () => void;
  onSelectLab?: (labId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenTarifModal,
  onOpenSampleTracker,
  onSelectLab
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bbm' | 'pelumas' | 'gas' | 'hulu' | 'kalibrasi'>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<any | null>(null);

  const services = [
    {
      id: 'srv-bbm',
      category: 'bbm',
      title: 'Pengujian Bahan Bakar Minyak (BBM) & Biofuel',
      accreditation: 'KAN LP-001-IDN (ASTM / SNI)',
      icon: Droplet,
      iconColor: 'text-amber-500 bg-amber-50',
      description: 'Layanan pengujian mutu dan spesifikasi bahan bakar bensin (RON 90, 92, 95, 98), minyak solar, biosolar B35 & B40, avtur, kerosene, dan bioetanol sesuai regulasi Kepdirjen Migas.',
      scope: ['Angka Oktan Riset (RON) & Motor (MON)', 'Angka Setana & Indeks Setana Mesin CFR', 'Kadar Biodiesel (FAME Content) B35/B40', 'Distilasi ASTM D86 & Titik Nyala PMCC', 'Kandungan Belerang Ultra Low Sulfur'],
      turnaround: '2 - 4 Hari Kerja',
      labTarget: 'lab-bbm'
    },
    {
      id: 'srv-pelumas',
      category: 'pelumas',
      title: 'Pengujian Pelumas & Sertifikasi LSPro',
      accreditation: 'LSPro-031-IDN & LP-001-IDN',
      icon: Cog,
      iconColor: 'text-blue-600 bg-blue-50',
      description: 'Pengujian fisika-kimia komprehensif untuk pelumas mesin bensin, diesel, transmisi, hidrolik, dan gemuk guna penerbitan Nomor Pelumas Terdaftar (NPT) dan sertifikasi SNI Wajib.',
      scope: ['Viskositas Kinematik 40°C & 100°C serta VI', 'Kandungan Logam Keausan ICP-OES 22 Unsur', 'Total Base Number (TBN) & TAN', 'Kecenderungan Berbusa (Foaming Tendency)', 'Penguapan Noack & Cold Cranking Simulator'],
      turnaround: '3 - 5 Hari Kerja',
      labTarget: 'lab-pelumas'
    },
    {
      id: 'srv-gas',
      category: 'gas',
      title: 'Analisis Gas Bumi, LNG & LPG Komersial',
      accreditation: 'GPA 2261 & ASTM D1945',
      icon: Flame,
      iconColor: 'text-orange-500 bg-orange-50',
      description: 'Penentuan komposisi hidrokarbon C1 sampai C6+, Gross Heating Value (GHV), impuritas sulfur dan H2S untuk keperluan custody transfer pipa transmisi dan distribusi komersial.',
      scope: ['Komposisi Mol Hidrokarbon Gas C1 s/d C6+', 'Gross Heating Value (GHV) & Wobbe Index', 'Kandungan H2S, Mercaptans & Total Sulfur', 'Komposisi Campuran LPG Propana & Butana', 'Titik Embun Hidrokarbon & Kadar Air'],
      turnaround: '2 - 3 Hari Kerja',
      labTarget: 'lab-gas'
    },
    {
      id: 'srv-reservoir',
      category: 'hulu',
      title: 'Analisis Batuan Reservoir & Fluida PVT',
      accreditation: 'API RP 40 & RP 13B',
      icon: Layers,
      iconColor: 'text-emerald-600 bg-emerald-50',
      description: 'Karakterisasi sifat fisik batuan inti bor (core plug routine & special), analisis PVT minyak mentah, uji injeksi surfaktan EOR, serta evaluasi reologi lumpur pemboran sumur migas.',
      scope: ['Porositas & Permeabilitas Rutin Batuan Inti', 'Analisis PVT Minyak Mentah (CCE, Flash, DLE)', 'Uji Injeksi Kimia Polimer & Surfaktan EOR', 'Petrografi Sayatan Tipis & Komposisi Mineral', 'Karakterisasi Tekanan Kapiler Batuan'],
      turnaround: '5 - 14 Hari Kerja',
      labTarget: 'lab-eksploitasi'
    },
    {
      id: 'srv-korosi',
      category: 'hulu',
      title: 'Uji Korosi, Metalurgi & Failure Analysis',
      accreditation: 'NACE / AMPP Standards',
      icon: Activity,
      iconColor: 'text-rose-600 bg-rose-50',
      description: 'Evaluasi laju korosi fasilitas perpipaan migas dan panas bumi, simulasi aliran dinamis, pengujian efisiensi inhibitor korosi dalam lingkungan CO2/H2S suhu tinggi, dan analisis patahan logam.',
      scope: ['Uji Bubble Test & Efisiensi Inhibitor Korosi', 'Rotating Cylinder Electrode (RCE) Simulasi Aliran', 'Uji Autoclave HPHT Suhu & Tekanan Ekstrem', 'Analisis Kegagalan Material (Failure Analysis)', 'Pengukuran Ketebalan Pipa & Sisa Umur Aset'],
      turnaround: '5 - 10 Hari Kerja',
      labTarget: 'lab-korosi'
    },
    {
      id: 'srv-kalibrasi',
      category: 'kalibrasi',
      title: 'Jasa Kalibrasi & Metrologi Tertelusur (LK-001)',
      accreditation: 'KAN LK-001-IDN (ISO/IEC 17025)',
      icon: Gauge,
      iconColor: 'text-purple-600 bg-purple-50',
      description: 'Layanan kalibrasi presisi instrumen pengukuran tekanan, suhu, massa, volume, serta meter arus migas baik di laboratorium maupun di lokasi fasilitas operasional pelanggan (on-site).',
      scope: ['Kalibrasi Pressure Gauge & DWT Standar', 'Kalibrasi Sensor Suhu RTD & Thermocouple', 'Kalibrasi Timbangan Analitik & Massa Standar', 'Kalibrasi Labu Ukur, Pipet & Buret Volumetrik', 'Verifikasi Custody Metering Flow & Prover Tank'],
      turnaround: '3 - 5 Hari Kerja',
      labTarget: 'lab-kalibrasi'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="layanan-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-100">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Layanan Pengujian & Jasa Teknis BLU LEMIGAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Solusi Mutu & Pengujian Migas Terlengkap
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Didukung puluhan laboratorium berstandar internasional, akreditasi KAN LP-001-IDN & LK-001-IDN, serta tenaga ahli berpengalaman di sektor hulu dan hilir minyak dan gas bumi.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'Semua Layanan' },
              { id: 'bbm', label: 'BBM & Biofuel' },
              { id: 'pelumas', label: 'Pelumas & NPT' },
              { id: 'gas', label: 'Gas Bumi & LPG' },
              { id: 'hulu', label: 'Reservoir & Korosi' },
              { id: 'kalibrasi', label: 'Kalibrasi (LK-001)' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0B2545] text-amber-300 shadow-md scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${srv.iconColor} shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-2.5 py-1 rounded-full">
                      {srv.accreditation}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Scope bullets */}
                  <div className="mt-4 pt-4 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide block mb-2">
                      Ruang Lingkup Parameter Utama:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {srv.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    Waktu Uji: <strong className="text-slate-800 font-semibold">{srv.turnaround}</strong>
                  </div>
                  <button
                    onClick={() => setSelectedServiceModal(srv)}
                    className="flex items-center space-x-1 text-xs font-bold text-blue-900 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Detail & Tarif</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Simulasi Biaya & Ajukan Sampel */}
        <div className="mt-12 bg-gradient-to-r from-[#0B2545] via-[#133E87] to-[#0B2545] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Transparansi Tarif Badan Layanan Umum (BLU)
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ingin Mengetahui Estimasi Biaya Pengujian Resmi?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Gunakan Kalkulator Tarif Interaktif LEMIGAS berpedoman pada Peraturan Menteri Keuangan (PMK) No. 171/PMK.05/2018.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenTarifModal}
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center space-x-2"
            >
              <Sliders className="w-4 h-4" />
              <span>Simulasi Tarif PMK Sekarang</span>
            </button>
            <button
              onClick={onOpenSampleTracker}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
            >
              Lacak Sampel PILT
            </button>
          </div>
        </div>

        {/* Modal: Detail Layanan */}
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${selectedServiceModal.iconColor}`}>
                    <selectedServiceModal.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2545]">
                      {selectedServiceModal.title}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {selectedServiceModal.accreditation}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 py-4 text-xs text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-1">
                    Deskripsi Layanan & Standar Acuan:
                  </h4>
                  <p>{selectedServiceModal.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide mb-2">
                    Ruang Lingkup Pengujian & Analisis:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    {selectedServiceModal.scope.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start space-x-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-amber-900">
                  <strong className="block font-bold mb-1">Ketentuan Pengiriman Sampel ke PILT:</strong>
                  <p>
                    Wadah sampel harus bebas kontaminasi, tersegel rapat, serta disertai Formulir Permohonan Pengujian Uji (FPPU) dan lembar Safety Data Sheet (SDS).
                  </p>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-4 py-2 rounded-lg font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setSelectedServiceModal(null);
                    onOpenTarifModal();
                  }}
                  className="px-5 py-2 rounded-lg font-bold bg-[#0B2545] hover:bg-blue-800 text-amber-300"
                >
                  Hitung Estimasi Biaya
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
