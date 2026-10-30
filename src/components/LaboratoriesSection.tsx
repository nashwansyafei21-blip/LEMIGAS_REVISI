import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Cpu, 
  FlaskConical, 
  Info, 
  Layers, 
  Microscope, 
  Search, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';
import { LABORATORIES_DATA } from '../data/lemigasData';
import { Laboratory } from '../types';

interface LaboratoriesSectionProps {
  onOpenTarifModal: () => void;
  onOpenSampleTracker: () => void;
}

export const LaboratoriesSection: React.FC<LaboratoriesSectionProps> = ({
  onOpenTarifModal,
  onOpenSampleTracker
}) => {
  const [selectedDivision, setSelectedDivision] = useState<'all' | 'hilir' | 'hulu' | 'penunjang'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLabModal, setSelectedLabModal] = useState<Laboratory | null>(null);

  const filteredLabs = LABORATORIES_DATA.filter((lab) => {
    const matchesDiv = selectedDivision === 'all' || lab.division === selectedDivision;
    const matchesQuery = lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.instruments.some(inst => inst.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDiv && matchesQuery;
  });

  return (
    <section id="laboratorium-section" className="py-16 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full mb-3 border border-blue-200">
            <Microscope className="w-3.5 h-3.5 text-blue-800" />
            <span>Fasilitas Pengujian Berstandar Dunia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Laboratorium Pengujian & Kalibrasi LEMIGAS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Mengoperasikan puluhan unit laboratorium terakreditasi KAN LP-001-IDN & LK-001-IDN, dilengkapi instrumen berteknologi tinggi untuk menjamin akurasi data uji sektor migas nasional.
          </p>

          {/* Division Filters & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'Semua Laboratorium' },
                { id: 'hilir', label: 'Divisi Hilir Migas' },
                { id: 'hulu', label: 'Divisi Hulu (Eksplorasi/Eksploitasi)' },
                { id: 'penunjang', label: 'Korosi, Kalibrasi & Lingkungan' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDivision(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedDivision === tab.id
                      ? 'bg-[#0B2545] text-amber-300 shadow-md scale-105'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Quick search input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari alat atau nama lab..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
          </div>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Lab Image & Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3 bg-blue-900/90 text-amber-300 backdrop-blur-xs text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-300/30">
                    {lab.kanAccreditation}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-300 block">
                      {lab.division === 'hilir' ? 'Divisi Hilir Migas' : lab.division === 'hulu' ? 'Divisi Hulu Migas' : 'Divisi Penunjang Teknis'}
                    </span>
                    <h3 className="font-extrabold text-base leading-snug drop-shadow-sm">
                      {lab.name}
                    </h3>
                  </div>
                </div>

                {/* Lab Content */}
                <div className="p-5">
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {lab.description}
                  </p>

                  {/* Highlights: Instruments */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-800 flex items-center space-x-1.5 mb-2">
                      <Cpu className="w-3.5 h-3.5 text-blue-800" />
                      <span>Instrumen & Peralatan Utama:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {lab.instruments.slice(0, 3).map((inst, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-slate-100 text-slate-700 px-2 py-1 rounded-md font-medium border border-slate-200"
                        >
                          {inst}
                        </span>
                      ))}
                      {lab.instruments.length > 3 && (
                        <span className="text-[10px] bg-blue-50 text-blue-900 px-2 py-1 rounded-md font-bold">
                          +{lab.instruments.length - 3} lainnya
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lab Footer Card */}
              <div className="p-5 pt-0">
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 truncate max-w-[170px]">
                    Kepala Lab: <strong className="text-slate-700 font-semibold">{lab.head}</strong>
                  </div>
                  <button
                    onClick={() => setSelectedLabModal(lab)}
                    className="flex items-center space-x-1 text-xs font-bold text-blue-900 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Eksplorasi Lab</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Detail Laboratorium */}
        {selectedLabModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
              {/* Modal Banner */}
              <div className="relative h-48 w-full bg-slate-900">
                <img
                  src={selectedLabModal.image}
                  alt={selectedLabModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedLabModal(null)}
                  className="absolute top-4 right-4 bg-black/40 text-white hover:bg-black/70 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-amber-300 uppercase">
                    {selectedLabModal.kanAccreditation}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedLabModal.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-5 text-xs text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1">
                    Deskripsi Laboratorium:
                  </h4>
                  <p className="leading-relaxed">{selectedLabModal.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-2">
                    Daftar Peralatan & Instrumen Berteknologi Tinggi:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLabModal.instruments.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-2">
                    Kapabilitas & Ruang Lingkup Analisis:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedLabModal.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-blue-900 font-semibold block">Penanggung Jawab Teknis:</span>
                    <strong className="text-sm text-slate-900">{selectedLabModal.head}</strong>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-blue-900 text-amber-300 font-bold rounded-lg">
                    Standar ASTM / ISO / SNI
                  </span>
                </div>
              </div>

              <div className="flex justify-end space-x-2 p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl">
                <button
                  onClick={() => setSelectedLabModal(null)}
                  className="px-4 py-2 rounded-lg font-semibold text-slate-600 hover:bg-slate-200"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setSelectedLabModal(null);
                    onOpenTarifModal();
                  }}
                  className="px-5 py-2 rounded-lg font-bold bg-[#0B2545] hover:bg-blue-800 text-amber-300"
                >
                  Simulasi Tarif Uji Lab Ini
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
