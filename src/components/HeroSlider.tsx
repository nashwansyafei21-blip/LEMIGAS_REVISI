import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  FileCheck2, 
  FileSearch, 
  Flame, 
  FlaskConical, 
  Microscope, 
  ShieldCheck, 
  Sliders, 
  Sparkles 
} from 'lucide-react';
import { LEMIGAS_INFO } from '../data/lemigasData';

interface HeroSliderProps {
  onOpenSampleTracker: (sampleCode?: string) => void;
  onOpenTarifModal: () => void;
  onNavigateTab: (tab: any) => void;
  onOpenShuModal: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenSampleTracker,
  onOpenTarifModal,
  onNavigateTab,
  onOpenShuModal
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quickSearchCode, setQuickSearchCode] = useState('');

  const slides = [
    {
      badge: 'Badan Layanan Umum (BLU) Kementerian ESDM',
      title: 'Pilar Terpercaya Pengujian & Mutu Minyak dan Gas Bumi Nasional',
      subtitle: 'Didirikan sejak 11 Juni 1965, mengoperasikan puluhan laboratorium pengujian dan kalibrasi terakreditasi KAN LP-001-IDN & LK-001-IDN berstandar internasional.',
      ctaPrimary: 'Jelajahi Laboratorium',
      ctaAction: () => onNavigateTab('laboratorium'),
      ctaSecondary: 'Simulasi Tarif BLU',
      ctaSecondaryAction: onOpenTarifModal,
      bgImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80',
      tag: 'Akreditasi KAN LP-001-IDN'
    },
    {
      badge: 'Dukungan Ketahanan & Transisi Energi',
      title: 'Kesiapan Pengujian Mandatori Biofuel B35 & B40 untuk Indonesia',
      subtitle: 'Memastikan stabilitas penyimpanan, titik tuang, dan uji kinerja mesin CFR diesel berteknologi tinggi untuk menjamin mutu bahan bakar ramah lingkungan.',
      ctaPrimary: 'Layanan Uji BBM & Biofuel',
      ctaAction: () => onNavigateTab('layanan'),
      ctaSecondary: 'Lacak Sampel PILT',
      ctaSecondaryAction: () => onOpenSampleTracker(),
      bgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
      tag: 'Uji Kinerja Mesin & Biofuel'
    },
    {
      badge: 'Transformasi Pelayanan Digital PILT',
      title: 'Pusat Informasi Layanan Terpadu (PILT) Berbasis Digital & Real-Time',
      subtitle: 'Kemudahan registrasi sampel uji, pelacakan proses laboratorium 24/7, serta penerbitan Sertifikat Hasil Uji (SHU) digital ber-QR Code terverifikasi.',
      ctaPrimary: 'Cek Status Sampel Anda',
      ctaAction: () => onOpenSampleTracker(),
      ctaSecondary: 'Verifikasi Sertifikat (SHU)',
      ctaSecondaryAction: onOpenShuModal,
      bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80',
      tag: 'Pusat Informasi Terpadu'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearchCode.trim()) {
      onOpenSampleTracker(quickSearchCode.trim());
    } else {
      onOpenSampleTracker('LMG-2026-BBM-0492');
    }
  };

  return (
    <div className="relative bg-[#07172B] overflow-hidden text-white">
      {/* Background Slides with overlay */}
      <div className="relative h-[530px] sm:h-[580px] lg:h-[620px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Dark Vignette Gradient */}
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse/10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07172B] via-[#0B2545]/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#07172B] via-transparent to-black/40"></div>

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-8 flex flex-col justify-center pb-24 sm:pb-28">
              <div className="max-w-2xl sm:max-w-3xl space-y-4">
                {/* Government badge */}
                <div className="inline-flex items-center space-x-2 bg-blue-900/80 backdrop-blur-md border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{slide.badge}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {slide.title}
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed text-shadow-sm">
                  {slide.subtitle}
                </p>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={slide.ctaAction}
                    className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all text-sm"
                  >
                    <span>{slide.ctaPrimary}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={slide.ctaSecondaryAction}
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl backdrop-blur-md border border-white/20 hover:border-white/40 transition-all text-sm"
                  >
                    <span>{slide.ctaSecondary}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel controls (Left / Right) */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-sm transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-sm transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-28 sm:bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Quick Action Cards (Overlapping bottom edge) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 -mt-16 sm:-mt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Live Sample Tracker Input */}
          <div className="bg-white text-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-amber-100 text-amber-700">
                  <FileSearch className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Live Tracking
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Lacak Sampel Pengujian</h3>
              <p className="text-xs text-slate-500 mt-1">
                Masukkan nomor pendaftaran sampel PILT (contoh: LMG-2026-BBM-0492)
              </p>
            </div>

            <form onSubmit={handleQuickSearchSubmit} className="mt-3 flex items-center gap-1.5">
              <input
                type="text"
                placeholder="Kode Sampel..."
                value={quickSearchCode}
                onChange={(e) => setQuickSearchCode(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-blue-600 bg-slate-50 text-slate-800 font-mono"
              />
              <button
                type="submit"
                className="bg-[#0B2545] hover:bg-blue-800 text-amber-300 p-2 rounded-lg text-xs font-bold transition-colors flex-shrink-0"
                title="Lacak"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Card 2: Kalkulator Tarif BLU */}
          <div 
            onClick={onOpenTarifModal}
            className="bg-white text-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-blue-100 text-blue-800 group-hover:bg-blue-900 group-hover:text-amber-300 transition-colors">
                  <Sliders className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase text-blue-900 bg-blue-50 px-2 py-0.5 rounded-full">
                  PMK 171/2018
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-900 transition-colors">
                Kalkulator Tarif Layanan
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Hitung estimasi resmi pengujian BBM, pelumas, gas bumi, dan core analysis.
              </p>
            </div>
            <div className="mt-3 text-xs font-bold text-blue-900 flex items-center space-x-1">
              <span>Buka Kalkulator Simulasi</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3: Verifikasi Sertifikat SHU */}
          <div 
            onClick={onOpenShuModal}
            className="bg-white text-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-emerald-100 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <FileCheck2 className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  QR Validasi
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors">
                Validasi Sertifikat (SHU)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Verifikasi keaslian Sertifikat Hasil Uji dengan tanda tangan elektronik BSrE.
              </p>
            </div>
            <div className="mt-3 text-xs font-bold text-emerald-700 flex items-center space-x-1">
              <span>Lihat Format Digital SHU</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 4: Akreditasi & Maklumat Pelayanan */}
          <div 
            onClick={() => onNavigateTab('profil')}
            className="bg-white text-slate-800 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-lg bg-indigo-100 text-indigo-800 group-hover:bg-indigo-900 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
                  ISO/IEC 17025
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-900 transition-colors">
                Akreditasi & Standar
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                LP-001-IDN, LK-001-IDN, dan LSPro-031 terakreditasi penuh oleh KAN Nasional.
              </p>
            </div>
            <div className="mt-3 text-xs font-bold text-indigo-900 flex items-center space-x-1">
              <span>Profil & Sertifikasi</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
