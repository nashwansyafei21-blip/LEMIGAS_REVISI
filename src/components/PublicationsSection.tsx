import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  FileCheck2, 
  FileText, 
  Layers, 
  Search, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { PUBLICATIONS_DATA } from '../data/lemigasData';
import { PublicationItem } from '../types';

export const PublicationsSection: React.FC = () => {
  const [selectedJournal, setSelectedJournal] = useState<'all' | 'LPMGB' | 'SCOG'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPaper, setSelectedPaper] = useState<PublicationItem | null>(null);
  const [downloads, setDownloads] = useState<Record<string, number>>({});

  const filteredPubs = PUBLICATIONS_DATA.filter((pub) => {
    const matchesJournal = selectedJournal === 'all' || pub.journal === selectedJournal;
    const matchesQuery = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesJournal && matchesQuery;
  });

  const handleDownload = (id: string) => {
    setDownloads(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    alert('Simulasi pengunduhan manuskrip jurnal ilmiah LEMIGAS (PDF) berhasil diproses.');
  };

  return (
    <section id="publikasi-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full mb-2">
              <BookOpen className="w-3.5 h-3.5 text-blue-800" />
              <span>Publikasi Ilmiah & Riset Minyak dan Gas Bumi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              Jurnal Ilmiah Terakreditasi Nasional
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              LEMIGAS menerbitkan dua jurnal ilmiah bereputasi: <strong>Lembaran Publikasi Minyak dan Gas Bumi (LPMGB - Terakreditasi SINTA 2)</strong> dan <strong>Scientific Contributions Oil and Gas (SCOG - Open Access English)</strong>.
            </p>
          </div>

          {/* Journal Switcher */}
          <div className="flex items-center gap-1.5 text-xs">
            {[
              { id: 'all', label: 'Semua Publikasi' },
              { id: 'LPMGB', label: 'Jurnal LPMGB (SINTA 2)' },
              { id: 'SCOG', label: 'Jurnal SCOG (Internasional)' }
            ].map((j) => (
              <button
                key={j.id}
                onClick={() => setSelectedJournal(j.id as any)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedJournal === j.id
                    ? 'bg-[#0B2545] text-amber-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {j.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari judul paper, penulis, atau topik riset (misal: B40, korosi, biomarker, shale gas)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-800"
          />
        </div>

        {/* Papers List */}
        <div className="space-y-4">
          {filteredPubs.map((pub) => {
            const count = (downloads[pub.id] || 0) + pub.downloadCount;
            return (
              <div
                key={pub.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase ${
                      pub.journal === 'LPMGB' 
                        ? 'bg-blue-100 text-blue-900' 
                        : 'bg-emerald-100 text-emerald-900'
                    }`}>
                      {pub.journal}
                    </span>
                    <span className="text-slate-500 font-medium">{pub.volume}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-mono text-slate-500">DOI: {pub.doi}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedPaper(pub)}
                    className="font-bold text-slate-900 text-sm sm:text-base hover:text-blue-900 cursor-pointer transition-colors leading-snug"
                  >
                    {pub.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Penulis: <strong>{pub.authors.join(', ')}</strong></span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {pub.abstract}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200 flex-shrink-0">
                  <button
                    onClick={() => setSelectedPaper(pub)}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 underline underline-offset-4"
                  >
                    Lihat Abstrak Lengkap
                  </button>

                  <button
                    onClick={() => handleDownload(pub.id)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0B2545] hover:bg-blue-800 text-amber-300 font-bold text-xs shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh PDF ({count})</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Abstrak Paper */}
        {selectedPaper && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full font-bold bg-blue-100 text-blue-900">
                    {selectedPaper.journal}
                  </span>
                  <span className="text-slate-500">{selectedPaper.volume}</span>
                </div>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-4 text-xs text-slate-700">
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] leading-snug">
                  {selectedPaper.title}
                </h3>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="text-slate-500">Penulis:</div>
                  <div className="font-semibold text-slate-800">{selectedPaper.authors.join('; ')}</div>
                  <div className="text-slate-500 mt-1">Institusi: Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS)</div>
                  <div className="text-blue-900 font-mono mt-1">DOI: {selectedPaper.doi}</div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-xs mb-1">
                    Abstrak (Abstract):
                  </h4>
                  <p className="leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedPaper.abstract}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-200 text-xs">
                <span className="text-slate-400">Open Access Journal LEMIGAS</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedPaper(null)}
                    className="px-4 py-2 rounded-lg font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Tutup
                  </button>
                  <button
                    onClick={() => handleDownload(selectedPaper.id)}
                    className="px-4 py-2 rounded-lg font-bold bg-[#0B2545] hover:bg-blue-800 text-amber-300 flex items-center space-x-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Naskah Lengkap</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
