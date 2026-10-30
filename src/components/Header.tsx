import React, { useState } from 'react';
import { 
  Building2, 
  ChevronDown, 
  Clock, 
  FileSearch, 
  Globe, 
  HelpCircle, 
  Layers, 
  Menu, 
  PhoneCall, 
  Search, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  X 
} from 'lucide-react';
import { NavigationTab } from '../types';
import { LEMIGAS_INFO } from '../data/lemigasData';

interface HeaderProps {
  currentTab: NavigationTab;
  setCurrentTab: (tab: NavigationTab) => void;
  onOpenSampleTracker: (sampleCode?: string) => void;
  onOpenTarifModal: () => void;
  fontSizeLevel: number;
  setFontSizeLevel: React.Dispatch<React.SetStateAction<number>>;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenSampleTracker,
  onOpenTarifModal,
  fontSizeLevel,
  setFontSizeLevel,
  lang,
  setLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleFontSize = () => {
    setFontSizeLevel((prev) => (prev >= 2 ? 0 : prev + 1));
  };

  const navItems = [
    { id: 'beranda', label: lang === 'ID' ? 'Beranda' : 'Home' },
    { 
      id: 'profil', 
      label: lang === 'ID' ? 'Profil' : 'Profile',
      dropdown: [
        { label: lang === 'ID' ? 'Sejarah & Kilas Balik LEMIGAS' : 'History & Heritage', anchor: 'sejarah' },
        { label: lang === 'ID' ? 'Visi, Misi & Tata Nilai BerAKHLAK' : 'Vision, Mission & Values', anchor: 'visimisi' },
        { label: lang === 'ID' ? 'Tugas Pokok & Fungsi (TUSI)' : 'Core Duties & Functions', anchor: 'tusi' },
        { label: lang === 'ID' ? 'Struktur Organisasi & Pimpinan' : 'Leadership & Organization', anchor: 'struktur' },
        { label: lang === 'ID' ? 'Akreditasi & Sertifikasi Mutu KAN' : 'Accreditations & KAN Standards', anchor: 'akreditasi' },
        { label: lang === 'ID' ? 'Maklumat Pelayanan Publik' : 'Service Charter', anchor: 'maklumat' }
      ]
    },
    { 
      id: 'layanan', 
      label: lang === 'ID' ? 'Layanan Pengujian' : 'Testing Services',
      dropdown: [
        { label: lang === 'ID' ? 'Pengujian BBM & Biofuel (B35/B40)' : 'Fuel & Biofuel Testing', anchor: 'bbm' },
        { label: lang === 'ID' ? 'Pengujian Minyak Pelumas & Gemuk (NPT)' : 'Lubricants Testing', anchor: 'pelumas' },
        { label: lang === 'ID' ? 'Pengujian Gas Bumi & LPG Pipa' : 'Natural Gas & LPG Analysis', anchor: 'gas' },
        { label: lang === 'ID' ? 'Analisis Batuan & Fluida Reservoir PVT' : 'Core & PVT Reservoir Analysis', anchor: 'reservoir' },
        { label: lang === 'ID' ? 'Pengujian Korosi & Metalurgi Pipa' : 'Corrosion & Pipeline Integrity', anchor: 'korosi' },
        { label: lang === 'ID' ? 'Jasa Kalibrasi & Metrologi Migas (LK-001)' : 'Calibration & Metrology', anchor: 'kalibrasi' },
        { label: lang === 'ID' ? 'Sertifikasi Produk Migas (LSPro-031)' : 'Product Certification (LSPro)', anchor: 'lspro' }
      ]
    },
    { 
      id: 'laboratorium', 
      label: lang === 'ID' ? 'Laboratorium' : 'Laboratories',
      dropdown: [
        { label: lang === 'ID' ? 'Divisi Laboratorium Hilir Migas' : 'Downstream Oil & Gas Labs', anchor: 'hilir' },
        { label: lang === 'ID' ? 'Divisi Laboratorium Hulu Migas' : 'Upstream Exploration Labs', anchor: 'hulu' },
        { label: lang === 'ID' ? 'Divisi Laboratorium Penunjang & Kalibrasi' : 'Support & Calibration Labs', anchor: 'penunjang' },
        { label: lang === 'ID' ? 'Daftar Instrumen Berteknologi Tinggi' : 'High-Tech Instrumentation', anchor: 'instrumen' }
      ]
    },
    { id: 'tarif', label: lang === 'ID' ? 'Tarif BLU & Simulasi' : 'BLU Tariffs' },
    { id: 'pilt', label: lang === 'ID' ? 'PILT Online' : 'PILT Portal' },
    { id: 'publikasi', label: lang === 'ID' ? 'Publikasi Ilmiah' : 'Publications' },
    { id: 'berita', label: lang === 'ID' ? 'Berita & Agenda' : 'News' },
    { id: 'ppid', label: lang === 'ID' ? 'PPID & Informasi' : 'Public Info' },
    { id: 'kontak', label: lang === 'ID' ? 'Kontak' : 'Contact' },
  ];

  const handleSelectNav = (tabId: string) => {
    setCurrentTab(tabId as NavigationTab);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md transition-all">
      {/* 1. Official Government Topbar */}
      <div className="bg-[#0B2545] border-b border-blue-900/40 text-slate-200 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: ESDM RI Identity & Flag */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <span className="inline-block w-4 h-2.5 bg-red-600 rounded-[1px] relative overflow-hidden border border-white/20">
                <span className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></span>
              </span>
              <span className="font-semibold tracking-wide text-white uppercase text-[11px]">
                Republik Indonesia
              </span>
            </div>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              Kementerian Energi dan Sumber Daya Mineral
            </span>
          </div>

          {/* Right: Quick Contacts & Accessibility */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3 text-slate-300">
              <span className="flex items-center space-x-1 hover:text-amber-300 transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Center ESDM: <strong className="text-white">136</strong></span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center space-x-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>PILT: 08.00 - 15.30 WIB</span>
              </span>
            </div>

            <div className="flex items-center space-x-2 pl-2 border-l border-slate-700">
              {/* Font Sizer */}
              <button
                onClick={toggleFontSize}
                title="Sesuaikan Ukuran Teks"
                className="px-2 py-0.5 rounded bg-blue-950 hover:bg-blue-900 text-[11px] font-bold text-amber-300 transition-colors border border-blue-800"
              >
                A{fontSizeLevel === 0 ? '' : fontSizeLevel === 1 ? '+' : '++'}
              </button>

              {/* Language Switch */}
              <button
                onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
                className="flex items-center space-x-1 px-2 py-0.5 rounded bg-blue-950 hover:bg-blue-900 text-[11px] font-semibold text-slate-200 border border-blue-800 transition-colors"
              >
                <Globe className="w-3 h-3 text-sky-400" />
                <span>{lang}</span>
              </button>

              {/* Portal ESDM Link */}
              <a 
                href="https://www.esdm.go.id" 
                target="_blank" 
                rel="noreferrer"
                className="hidden sm:inline-block text-[11px] text-amber-300 hover:text-amber-200 hover:underline font-medium"
              >
                Portal ESDM ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Brand Identity Header */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Institution titles */}
          <div 
            onClick={() => handleSelectNav('beranda')}
            className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group"
          >
            {/* ESDM / LEMIGAS Logo Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#0B2545] to-[#133E87] p-2 flex items-center justify-center shadow-md border-2 border-amber-400 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400" fill="currentColor">
                  {/* Energy Flame / Geometric Hexagon ESDM emblem representation */}
                  <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke="#FFC700" strokeWidth="6" />
                  <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="#0B2545" stroke="#FFC700" strokeWidth="3" />
                  <circle cx="50" cy="50" r="14" fill="#FFC700" />
                  <path d="M50 24 L50 40 M50 60 L50 76 M28 50 L40 50 M60 50 L72 50" stroke="#FFC700" strokeWidth="4" strokeLinecap="round" />
                  <path d="M35 35 L44 44 M56 56 L65 65 M65 35 L56 44 M44 56 L35 65" stroke="#0B2545" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-[#0B2545] text-[9px] font-extrabold px-1.5 py-0.2 rounded-full shadow border border-white">
                BLU
              </div>
            </div>

            {/* Typography */}
            <div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase flex items-center gap-1.5">
                <span>Kementerian ESDM</span>
                <span className="text-slate-300">•</span>
                <span className="text-blue-900 font-bold">Ditjen Migas</span>
              </div>
              <h1 className="text-lg sm:text-2xl font-extrabold text-[#0B2545] tracking-tight leading-none group-hover:text-blue-800 transition-colors">
                LEMIGAS
              </h1>
              <p className="text-[11px] sm:text-xs font-medium text-slate-600 hidden sm:block">
                Balai Besar Pengujian Minyak dan Gas Bumi
              </p>
            </div>
          </div>

          {/* Accreditation Pills & PILT Quick Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Accreditation badges */}
            <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="text-[11px] leading-tight">
                <span className="font-bold text-slate-800 block">Akreditasi KAN</span>
                <span className="text-slate-500 font-medium">LP-001-IDN &bull; LK-001-IDN</span>
              </div>
            </div>

            {/* Button: Lacak Sampel PILT */}
            <button
              onClick={() => onOpenSampleTracker()}
              className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-3.5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <FileSearch className="w-4 h-4 text-slate-950" />
              <span>Lacak Sampel PILT</span>
            </button>

            {/* Button: Simulasi Tarif */}
            <button
              onClick={onOpenTarifModal}
              className="flex items-center space-x-1.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs px-3.5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Sliders className="w-4 h-4 text-amber-300" />
              <span>Kalkulator Tarif</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => onOpenSampleTracker()}
              className="bg-amber-500 text-slate-950 p-2 rounded-lg text-xs font-bold flex items-center shadow-xs"
              title="Lacak Sampel"
            >
              <FileSearch className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Navigation Bar (Dark Blue Corporate ESDM Style) */}
      <nav className="bg-[#0B2545] border-t border-b border-blue-950 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ul className="flex items-center space-x-1 py-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const hasDropdown = item.dropdown && item.dropdown.length > 0;

              return (
                <li 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleSelectNav(item.id)}
                    className={`flex items-center space-x-1 px-3.5 py-2 rounded-md font-medium text-xs lg:text-sm tracking-wide transition-all ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' 
                        : 'text-slate-100 hover:bg-blue-900/80 hover:text-amber-300'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasDropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.id ? 'rotate-180 text-amber-300' : 'text-slate-400'
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 w-72 bg-white text-slate-800 rounded-b-xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-4 py-1.5 border-b border-slate-100 text-[10px] uppercase font-bold text-blue-900 tracking-wider">
                        {item.label} LEMIGAS
                      </div>
                      {item.dropdown?.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectNav(item.id)}
                          className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors flex items-center justify-between"
                        >
                          <span>{sub.label}</span>
                          <span className="text-slate-400 text-[10px]">→</span>
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* 4. Mobile Off-Canvas Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[110px] bg-slate-900/60 backdrop-blur-xs z-50">
          <div className="bg-white w-5/6 max-w-sm h-full overflow-y-auto p-5 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Navigasi LEMIGAS
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                  Online 24/7
                </span>
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSampleTracker();
                  }}
                  className="p-2.5 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs flex flex-col items-center text-center justify-center gap-1 shadow-xs"
                >
                  <FileSearch className="w-5 h-5" />
                  <span>Lacak Sampel</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTarifModal();
                  }}
                  className="p-2.5 bg-blue-900 text-white font-bold rounded-lg text-xs flex flex-col items-center text-center justify-center gap-1 shadow-xs"
                >
                  <Sliders className="w-5 h-5 text-amber-300" />
                  <span>Kalkulator Tarif</span>
                </button>
              </div>

              {/* Nav links */}
              <ul className="space-y-1 pt-2">
                {navItems.map((item) => {
                  const isActive = currentTab === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSelectNav(item.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-blue-900 text-amber-300'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">Pusat Layanan Terpadu (PILT)</p>
              <p>Jl. Ciledug Raya Kav. 109, Jakarta Selatan</p>
              <p className="text-blue-900 font-bold pt-1">Call Center ESDM: 136</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
