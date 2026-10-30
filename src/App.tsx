/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  ChevronRight, 
  Clock, 
  Droplet, 
  FileCheck2, 
  FileSearch, 
  Flame, 
  FlaskConical, 
  Home, 
  Layers, 
  MessageSquare, 
  Microscope, 
  PhoneCall, 
  Search, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { PiltTrackingSection } from './components/PiltTrackingSection';
import { ServicesSection } from './components/ServicesSection';
import { LaboratoriesSection } from './components/LaboratoriesSection';
import { TarifCalculatorSection } from './components/TarifCalculatorSection';
import { NewsSection } from './components/NewsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ProfilSection } from './components/ProfilSection';
import { PpidSection } from './components/PpidSection';
import { Footer } from './components/Footer';
import { ShuModal } from './components/ShuModal';
import { LEMIGAS_INFO, MOCK_SAMPLES } from './data/lemigasData';
import { NavigationTab, SampleTracking } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('beranda');
  const [activeSampleCode, setActiveSampleCode] = useState<string>('LMG-2026-BBM-0492');
  const [isShuModalOpen, setIsShuModalOpen] = useState(false);
  const [shuSampleData, setShuSampleData] = useState<SampleTracking | null>(null);
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');

  const handleOpenSampleTracker = (sampleCode?: string) => {
    if (sampleCode) {
      setActiveSampleCode(sampleCode);
    }
    setCurrentTab('pilt');
    // Scroll to pilt section smoothly
    setTimeout(() => {
      const el = document.getElementById('pilt-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenTarifModal = () => {
    setCurrentTab('tarif');
    setTimeout(() => {
      const el = document.getElementById('tarif-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenShuModal = (sample?: SampleTracking) => {
    setShuSampleData(sample || MOCK_SAMPLES[0]);
    setIsShuModalOpen(true);
  };

  // Font size class based on level
  const fontClass = fontSizeLevel === 1 ? 'text-[105%]' : fontSizeLevel === 2 ? 'text-[112%]' : '';

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-800 transition-all ${fontClass}`}>
      {/* 1. Header with Government Topbar and Responsive Navbar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenSampleTracker={handleOpenSampleTracker}
        onOpenTarifModal={handleOpenTarifModal}
        fontSizeLevel={fontSizeLevel}
        setFontSizeLevel={setFontSizeLevel}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Render for Tab: BERANDA (Home Page with full composite sections) */}
        {currentTab === 'beranda' && (
          <div>
            {/* Hero Banner Carousel */}
            <HeroSlider
              onOpenSampleTracker={handleOpenSampleTracker}
              onOpenTarifModal={handleOpenTarifModal}
              onNavigateTab={(tab) => setCurrentTab(tab)}
              onOpenShuModal={() => handleOpenShuModal()}
            />

            {/* Key Statistics Ribbon (ESDM Authority Proof) */}
            <section className="bg-gradient-to-r from-[#0B2545] via-[#133E87] to-[#0B2545] text-white py-8 border-y border-amber-400/40">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                  <div className="p-3">
                    <span className="text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono block">
                      {LEMIGAS_INFO.stats.samplesTestedYearly}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">Sampel Diuji per Tahun</span>
                  </div>

                  <div className="p-3 border-l border-white/10">
                    <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono block">
                      {LEMIGAS_INFO.stats.accreditedLabs}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">Laboratorium KAN LP-001</span>
                  </div>

                  <div className="p-3 border-l border-white/10">
                    <span className="text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono block">
                      {LEMIGAS_INFO.stats.customerSatisfactionIndex}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">Indeks Kepuasan (IKM)</span>
                  </div>

                  <div className="p-3 border-l border-white/10">
                    <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono block">
                      {LEMIGAS_INFO.stats.onTimeRate}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">Ketepatan Waktu SHU</span>
                  </div>

                  <div className="p-3 border-l border-white/10">
                    <span className="text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono block">
                      {LEMIGAS_INFO.stats.expertScientists}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">Tenaga Ahli & Peneliti</span>
                  </div>

                  <div className="p-3 border-l border-white/10">
                    <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono block">
                      60+ Thn
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">Sejak 11 Juni 1965</span>
                  </div>
                </div>
              </div>
            </section>

            {/* PILT Live Tracking Widget */}
            <PiltTrackingSection
              initialCode={activeSampleCode}
              onOpenShuModal={handleOpenShuModal}
            />

            {/* Services Grid */}
            <ServicesSection
              onOpenTarifModal={handleOpenTarifModal}
              onOpenSampleTracker={() => handleOpenSampleTracker()}
            />

            {/* Laboratories Showcase */}
            <LaboratoriesSection
              onOpenTarifModal={handleOpenTarifModal}
              onOpenSampleTracker={() => handleOpenSampleTracker()}
            />

            {/* Interactive Tariff Calculator PMK 171/2018 */}
            <TarifCalculatorSection
              onOpenSampleTracker={() => handleOpenSampleTracker()}
              onOpenShuModal={() => handleOpenShuModal()}
            />

            {/* News and Announcements */}
            <NewsSection />

            {/* Scientific Publications (LPMGB & SCOG) */}
            <PublicationsSection />

            {/* PPID & Public Services */}
            <PpidSection />
          </div>
        )}

        {/* Render for Tab: PROFIL */}
        {currentTab === 'profil' && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>Profil LEMIGAS</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Profil Lembaga Balai Besar Pengujian Minyak dan Gas Bumi
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Sejarah, visi misi, tugas pokok dan fungsi (TUSI), struktur organisasi, serta akreditasi mutu standar internasional.
                </p>
              </div>
            </div>
            <ProfilSection />
          </div>
        )}

        {/* Render for Tab: LAYANAN */}
        {currentTab === 'layanan' && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>Layanan Pengujian</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Layanan Pengujian & Sertifikasi Produk Migas
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Pengujian BBM, Biofuel (B35 & B40), pelumas NPT, gas bumi, fluida reservoir, korosi, dan kalibrasi tertelusur.
                </p>
              </div>
            </div>
            <ServicesSection
              onOpenTarifModal={handleOpenTarifModal}
              onOpenSampleTracker={() => handleOpenSampleTracker()}
            />
          </div>
        )}

        {/* Render for Tab: LABORATORIUM */}
        {currentTab === 'laboratorium' && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>Laboratorium</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Laboratorium Pengujian & Kalibrasi Berstandar KAN
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Fasilitas laboratorium hulu, hilir, dan penunjang dengan akreditasi KAN LP-001-IDN dan LK-001-IDN.
                </p>
              </div>
            </div>
            <LaboratoriesSection
              onOpenTarifModal={handleOpenTarifModal}
              onOpenSampleTracker={() => handleOpenSampleTracker()}
            />
          </div>
        )}

        {/* Render for Tab: TARIF */}
        {currentTab === 'tarif' && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>Tarif BLU & Simulasi</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Kalkulator Tarif Layanan BLU LEMIGAS
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Simulasi biaya resmi berdasarkan PMK No. 171/PMK.05/2018 dengan rincian biaya per parameter uji dan waktu estimasi.
                </p>
              </div>
            </div>
            <TarifCalculatorSection
              onOpenSampleTracker={() => handleOpenSampleTracker()}
              onOpenShuModal={() => handleOpenShuModal()}
            />
          </div>
        )}

        {/* Render for Tab: PILT */}
        {currentTab === 'pilt' && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>Pusat Informasi Layanan Terpadu (PILT)</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Pusat Informasi Layanan Terpadu (PILT) Online
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Lacak proses pengujian sampel Anda, ajukan sampel baru secara digital, dan periksa keaslian Sertifikat Hasil Uji (SHU).
                </p>
              </div>
            </div>
            <PiltTrackingSection
              initialCode={activeSampleCode}
              onOpenShuModal={handleOpenShuModal}
            />
          </div>
        )}

        {/* Render for Tab: PUBLIKASI */}
        {currentTab === 'publikasi' && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>Publikasi Ilmiah</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Jurnal Ilmiah & Riset Minyak dan Gas Bumi
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Repositori naskah publikasi resmi LEMIGAS: Jurnal LPMGB (SINTA 2) dan Scientific Contributions Oil and Gas (SCOG).
                </p>
              </div>
            </div>
            <PublicationsSection />
          </div>
        )}

        {/* Render for Tab: BERITA */}
        {currentTab === 'berita' && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>Berita & Agenda</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  Kabar Terkini, Kegiatan & Siaran Pers
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Pembaruan informasi terkini kegiatan riset, pengujian energi nasional, serta kerja sama strategis LEMIGAS.
                </p>
              </div>
            </div>
            <NewsSection />
          </div>
        )}

        {/* Render for Tab: PPID & KONTAK */}
        {(currentTab === 'ppid' || currentTab === 'kontak') && (
          <div>
            <div className="bg-[#0B2545] text-white py-10 px-4 sm:px-8 border-b border-blue-900">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 text-xs text-amber-300 mb-2">
                  <button onClick={() => setCurrentTab('beranda')} className="hover:underline">Beranda</button>
                  <span>/</span>
                  <span>{currentTab === 'ppid' ? 'PPID & Informasi Publik' : 'Kontak Layanan'}</span>
                </div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">
                  {currentTab === 'ppid' ? 'Pejabat Pengelola Informasi & Dokumentasi' : 'Hubungi PILT LEMIGAS'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Informasi layanan publik, pengaduan SP4N LAPOR!, sistem pelaporan pelanggaran WBS, serta kontak langsung kantor Cipulir.
                </p>
              </div>
            </div>
            <PpidSection />
          </div>
        )}
      </main>

      {/* Floating Action Button (Quick PILT & Call Center 136) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
        <button
          onClick={() => handleOpenSampleTracker()}
          className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all border-2 border-white group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
          </span>
          <FileSearch className="w-4 h-4 text-slate-950" />
          <span className="hidden sm:inline">Lacak Sampel PILT</span>
        </button>

        <a
          href="tel:136"
          className="flex items-center space-x-1.5 bg-[#0B2545] hover:bg-blue-900 text-white font-bold text-xs px-3.5 py-2 rounded-full shadow-lg border border-blue-700 transition-colors"
          title="Hubungi Call Center ESDM 136"
        >
          <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          <span>Call 136</span>
        </a>
      </div>

      {/* Official Certificate of Analysis (SHU) Modal */}
      {isShuModalOpen && (
        <ShuModal
          sample={shuSampleData}
          onClose={() => setIsShuModalOpen(false)}
        />
      )}

      {/* 11. Government Footer */}
      <Footer
        onNavigateTab={(tab) => setCurrentTab(tab)}
        onOpenSampleTracker={() => handleOpenSampleTracker()}
        onOpenTarifModal={handleOpenTarifModal}
      />
    </div>
  );
}
