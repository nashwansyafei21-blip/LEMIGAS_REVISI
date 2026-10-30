import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  FileCheck2, 
  Mail, 
  MapPin, 
  Phone, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';
import { LEMIGAS_INFO } from '../data/lemigasData';
import { NavigationTab } from '../types';

interface FooterProps {
  onNavigateTab: (tab: NavigationTab) => void;
  onOpenSampleTracker: () => void;
  onOpenTarifModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenSampleTracker,
  onOpenTarifModal
}) => {
  return (
    <footer className="bg-[#07172B] text-slate-300 text-xs border-t-4 border-amber-400">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Ministry Info (2 cols width on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] p-2 flex items-center justify-center border-2 border-amber-400 shadow-md">
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400" fill="currentColor">
                  <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke="#FFC700" strokeWidth="6" />
                  <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="#0B2545" stroke="#FFC700" strokeWidth="3" />
                  <circle cx="50" cy="50" r="14" fill="#FFC700" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  KEMENTERIAN ESDM &bull; DITJEN MIGAS
                </span>
                <h4 className="text-base font-extrabold text-white tracking-tight leading-none">
                  LEMIGAS
                </h4>
                <p className="text-[11px] text-slate-300">
                  Balai Besar Pengujian Minyak dan Gas Bumi
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Instansi pemerintah berstatus Badan Layanan Umum (BLU) yang bergerak di bidang pengujian mutu, kalibrasi instrumen, sertifikasi produk, dan penelitian teknologi sektor minyak dan gas bumi sejak 11 Juni 1965.
            </p>

            {/* Accreditation tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-[10px] bg-blue-950 text-amber-300 border border-blue-800 px-2.5 py-1 rounded-md font-mono font-bold">
                KAN LP-001-IDN
              </span>
              <span className="text-[10px] bg-blue-950 text-amber-300 border border-blue-800 px-2.5 py-1 rounded-md font-mono font-bold">
                KAN LK-001-IDN
              </span>
              <span className="text-[10px] bg-blue-950 text-amber-300 border border-blue-800 px-2.5 py-1 rounded-md font-mono font-bold">
                LSPro-031-IDN
              </span>
            </div>
          </div>

          {/* Column 2: Layanan & Fitur Utama */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Layanan Utama
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigateTab('layanan')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Pengujian BBM & Biofuel (B35/B40)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('layanan')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Uji Mutu Pelumas & NPT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('layanan')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Analisis Gas Bumi & LPG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('layanan')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Analisis Batuan & Fluida PVT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('layanan')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Mitigasi Korosi & Pipa
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTarifModal}
                  className="text-amber-400 hover:text-amber-300 font-semibold text-left flex items-center space-x-1"
                >
                  <span>Simulasi Tarif PMK 171</span>
                  <span>↗</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigasi Portal */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Menu Portal
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTab('profil')} className="hover:text-amber-300 transition-colors">
                  Profil Lembaga & Sejarah
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('laboratorium')} className="hover:text-amber-300 transition-colors">
                  Daftar Laboratorium Uji
                </button>
              </li>
              <li>
                <button onClick={onOpenSampleTracker} className="hover:text-amber-300 transition-colors font-semibold text-white">
                  Lacak Sampel PILT Online
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('publikasi')} className="hover:text-amber-300 transition-colors">
                  Jurnal LPMGB & SCOG
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('berita')} className="hover:text-amber-300 transition-colors">
                  Berita & Siaran Pers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('ppid')} className="hover:text-amber-300 transition-colors">
                  PPID & Maklumat Pelayanan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak PILT & Jam Operasional */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              PILT & Kontak
            </h5>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Ciledug Raya Kav. 109, Cipulir, Kebayoran Lama, Jakarta Selatan 12230</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>(021) 7394422 / 7246150</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Call Center ESDM: <strong className="text-white">136</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="truncate">info.lemigas@esdm.go.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tautan Lembaga Terkait ESDM */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-slate-400 font-semibold uppercase text-[11px]">
            Portal Terkait:
          </span>
          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs">
            <a href="https://www.esdm.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
              <span>Kementerian ESDM</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://migas.esdm.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
              <span>Ditjen Migas</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.bphmigas.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
              <span>BPH Migas</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.skkmigas.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
              <span>SKK Migas</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.lapor.go.id" target="_blank" rel="noreferrer" className="hover:text-amber-300 flex items-center space-x-1">
              <span>SP4N LAPOR!</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#040E1B] py-4 px-4 sm:px-8 border-t border-slate-900 text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            &copy; 2026 Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) &bull; Direktorat Jenderal Minyak dan Gas Bumi, Kementerian ESDM RI. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center space-x-3 text-slate-400">
            <span>Standar Pelayanan Publik</span>
            <span>&bull;</span>
            <span>Kebijakan Privasi</span>
            <span>&bull;</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
