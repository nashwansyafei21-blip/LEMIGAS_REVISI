import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Clock, 
  Download, 
  FileCheck, 
  FileSpreadsheet, 
  HelpCircle, 
  Info, 
  Minus, 
  Plus, 
  Printer, 
  RotateCcw, 
  Search, 
  ShieldAlert, 
  Sliders, 
  Sparkles, 
  Trash2 
} from 'lucide-react';
import { TARIFF_PARAMETERS } from '../data/lemigasData';
import { TestParameter } from '../types';

interface TarifCalculatorSectionProps {
  onOpenSampleTracker?: () => void;
  onOpenShuModal?: () => void;
}

export const TarifCalculatorSection: React.FC<TarifCalculatorSectionProps> = ({
  onOpenSampleTracker
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchParam, setSearchParam] = useState('');
  const [selectedParams, setSelectedParams] = useState<string[]>(['bbm-01', 'bbm-04', 'bbm-05']);
  const [sampleQuantity, setSampleQuantity] = useState<number>(1);
  const [showQuotationModal, setShowQuotationModal] = useState(false);

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(number);
  };

  const filteredTariffs = TARIFF_PARAMETERS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      item.method.toLowerCase().includes(searchParam.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleSelect = (id: string) => {
    if (selectedParams.includes(id)) {
      setSelectedParams(selectedParams.filter(item => item !== id));
    } else {
      setSelectedParams([...selectedParams, id]);
    }
  };

  const selectAllFiltered = () => {
    const idsToAdd = filteredTariffs.map(t => t.id);
    const combined = Array.from(new Set([...selectedParams, ...idsToAdd]));
    setSelectedParams(combined);
  };

  const clearSelection = () => {
    setSelectedParams([]);
  };

  // Calculations
  const selectedObjects = TARIFF_PARAMETERS.filter(t => selectedParams.includes(t.id));
  const baseSubtotal = selectedObjects.reduce((acc, curr) => acc + curr.price, 0);
  const totalAmount = baseSubtotal * sampleQuantity;
  const maxDays = selectedObjects.length > 0 ? Math.max(...selectedObjects.map(o => o.durationDays)) : 0;

  return (
    <section id="tarif-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3.5 py-1 rounded-full mb-3 border border-blue-200">
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span>Transparansi Tarif BLU LEMIGAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Kalkulator Simulasi Biaya Pengujian
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Berpedoman resmi pada Peraturan Menteri Keuangan RI No. 171/PMK.05/2018 tentang Tarif Layanan Badan Layanan Umum LEMIGAS Kementerian ESDM.
          </p>
        </div>

        {/* Main Grid: Selector on left, Sticky Cart Summary on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Parameter Selection (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Filter & Search Toolbar */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Search input */}
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari parameter uji (misal: RON, sulfur, pelumas)..."
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                </div>

                {/* Bulk selection buttons */}
                <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={selectAllFiltered}
                    className="text-xs px-3 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold transition-colors"
                  >
                    Pilih Semua ({filteredTariffs.length})
                  </button>
                  <button
                    onClick={clearSelection}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold transition-colors flex items-center space-x-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-200/80 text-xs">
                {[
                  { id: 'all', label: 'Semua Komoditas' },
                  { id: 'bbm', label: 'BBM & Biofuel' },
                  { id: 'pelumas', label: 'Minyak Pelumas' },
                  { id: 'gas', label: 'Gas Bumi & LPG' },
                  { id: 'reservoir', label: 'Batuan & Core' },
                  { id: 'korosi', label: 'Korosi & Pipa' },
                  { id: 'kalibrasi', label: 'Kalibrasi Alat' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#0B2545] text-amber-300 font-bold'
                        : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Parameters List Table / Cards */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
              {filteredTariffs.length === 0 ? (
                <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  Parameter uji tidak ditemukan. Coba gunakan kata kunci lain.
                </div>
              ) : (
                filteredTariffs.map((tariff) => {
                  const isChecked = selectedParams.includes(tariff.id);
                  return (
                    <div
                      key={tariff.id}
                      onClick={() => toggleSelect(tariff.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-blue-50/70 border-blue-600 ring-1 ring-blue-500/30'
                          : 'bg-white hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        {/* Checkbox */}
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors flex-shrink-0 ${
                          isChecked
                            ? 'bg-blue-900 border-blue-900 text-white'
                            : 'border-slate-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        {/* Name & Method */}
                        <div className="truncate">
                          <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                            {tariff.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-[11px] text-slate-500 mt-0.5">
                            <span className="font-mono bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
                              {tariff.method}
                            </span>
                            <span>•</span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              <span>{tariff.durationDays} hari kerja</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Price Tag */}
                      <div className="text-right flex-shrink-0">
                        <span className="font-extrabold text-blue-900 text-xs sm:text-sm font-mono block">
                          {formatRupiah(tariff.price)}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          per {tariff.unit}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Sticky Estimation Cart (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-[#0B2545] text-white rounded-2xl shadow-xl p-6 border border-blue-900">
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/60">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">
                  Ringkasan Estimasi Biaya
                </span>
                <span className="bg-blue-950 px-2.5 py-0.5 rounded text-[11px] font-mono text-emerald-400 font-bold border border-blue-800">
                  {selectedObjects.length} Parameter Dipilih
                </span>
              </div>

              {/* Quantity Counter */}
              <div className="py-4 border-b border-blue-900/60 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">Jumlah Sampel Uji:</span>
                <div className="flex items-center space-x-2 bg-blue-950 rounded-lg p-1 border border-blue-800">
                  <button
                    onClick={() => setSampleQuantity(Math.max(1, sampleQuantity - 1))}
                    className="w-6 h-6 rounded bg-blue-900 hover:bg-blue-800 flex items-center justify-center text-xs font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-xs px-2 text-amber-300">
                    {sampleQuantity}
                  </span>
                  <button
                    onClick={() => setSampleQuantity(sampleQuantity + 1)}
                    className="w-6 h-6 rounded bg-blue-900 hover:bg-blue-800 flex items-center justify-center text-xs font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Items List Preview */}
              <div className="py-4 border-b border-blue-900/60 space-y-2 max-h-44 overflow-y-auto text-xs">
                {selectedObjects.length === 0 ? (
                  <p className="text-slate-400 text-center py-4 italic">
                    Belum ada parameter uji yang dipilih.
                  </p>
                ) : (
                  selectedObjects.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-slate-300 gap-2">
                      <span className="truncate text-[11px]">{item.name}</span>
                      <span className="font-mono text-white text-[11px] font-semibold flex-shrink-0">
                        {formatRupiah(item.price)}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Lead Time & Total Price */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Estimasi Pengerjaan:</span>
                  </span>
                  <span className="font-bold text-white">
                    {maxDays > 0 ? `${maxDays} Hari Kerja` : '-'}
                  </span>
                </div>

                <div className="pt-2 border-t border-blue-900/80">
                  <span className="text-[11px] text-slate-400 block">Total Estimasi Tarif Resmi:</span>
                  <div className="text-2xl font-extrabold text-amber-400 font-mono tracking-tight mt-0.5">
                    {formatRupiah(totalAmount)}
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    *Termasuk PPN & PNBP Kementerian Keuangan (SIMPONI)
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => setShowQuotationModal(true)}
                  disabled={selectedObjects.length === 0}
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:pointer-events-none text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-1.5"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Cetak Surat Simulasi Penawaran</span>
                </button>

                {onOpenSampleTracker && (
                  <button
                    onClick={onOpenSampleTracker}
                    className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white font-semibold text-xs rounded-xl border border-blue-800 transition-colors"
                  >
                    Buka PILT Online Tracker
                  </button>
                )}
              </div>
            </div>

            {/* Note box */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <div className="font-bold text-slate-800 flex items-center space-x-1">
                <ShieldAlert className="w-3.5 h-3.5 text-blue-900" />
                <span>Tata Cara Pembayaran PNBP:</span>
              </div>
              <p>
                Pembayaran menggunakan Surat Setoran Bukan Pajak (SIMPONI) melalui kode billing Bank Persepsi. Bebas biaya calo dan pungutan liar.
              </p>
            </div>
          </div>
        </div>

        {/* Modal: Simulasi Surat Penawaran Resmi */}
        {showQuotationModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
              {/* Header Surat */}
              <div className="border-b-2 border-slate-900 pb-4 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    KEMENTERIAN ENERGI DAN SUMBER DAYA MINERAL REPUBLIK INDONESIA
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0B2545]">
                    BALAI BESAR PENGUJIAN MINYAK DAN GAS BUMI "LEMIGAS"
                  </h3>
                  <p className="text-[10px] text-slate-600">
                    Jl. Ciledug Raya Kav. 109, Cipulir, Jakarta Selatan 12230 | Telp: (021) 7394422 | Email: info.lemigas@esdm.go.id
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-mono font-bold bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    BLU-SIM/2026/088
                  </span>
                </div>
              </div>

              {/* Title Surat */}
              <div className="text-center my-4">
                <h4 className="font-bold text-sm text-slate-900 uppercase underline underline-offset-4">
                  RINCIAN ESTIMASI BIAYA PENGUJIAN LABORATORIUM
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Berdasarkan PMK No. 171/PMK.05/2018 tentang Tarif Layanan BLU LEMIGAS
                </p>
              </div>

              {/* Table of parameters */}
              <div className="overflow-x-auto my-4 border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs text-slate-800">
                  <thead className="bg-slate-100 text-[11px] font-bold text-slate-700 uppercase">
                    <tr>
                      <th className="p-2.5">No</th>
                      <th className="p-2.5">Parameter Pengujian</th>
                      <th className="p-2.5">Metode Uji</th>
                      <th className="p-2.5 text-right">Tarif Satuan</th>
                      <th className="p-2.5 text-right">Waktu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedObjects.map((item, idx) => (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="p-2.5 text-slate-500">{idx + 1}</td>
                        <td className="p-2.5 font-semibold text-slate-900">{item.name}</td>
                        <td className="p-2.5 font-mono text-slate-600">{item.method}</td>
                        <td className="p-2.5 text-right font-mono font-bold">{formatRupiah(item.price)}</td>
                        <td className="p-2.5 text-right">{item.durationDays} Hari</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-slate-50 font-bold border-t border-slate-200">
                    <tr>
                      <td colSpan={3} className="p-2.5 text-slate-700">Subtotal Per Sampel</td>
                      <td className="p-2.5 text-right font-mono text-blue-900">{formatRupiah(baseSubtotal)}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td colSpan={3} className="p-2.5 text-slate-700">
                        Total Estimasi ({sampleQuantity} Sampel)
                      </td>
                      <td className="p-2.5 text-right font-mono text-emerald-700 text-sm">
                        {formatRupiah(totalAmount)}
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Signature simulation */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-xs text-slate-700 border-t border-slate-200">
                <div>
                  <p className="font-semibold text-slate-600">Catatan Administratif:</p>
                  <p className="text-[11px] text-slate-500">
                    Estimasi ini dapat digunakan sebagai dasar pengajuan Purchase Order (PO) atau Surat Perintah Kerja (SPK).
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-[11px] text-slate-500">Jakarta, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <p className="font-bold text-slate-900">Pusat Informasi Layanan Terpadu (PILT)</p>
                  <div className="h-10"></div>
                  <p className="font-semibold text-blue-900 text-xs">[E-Verified BLU LEMIGAS]</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-2 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setShowQuotationModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    alert('Simulasi cetak berkas penawaran berhasil disiapkan.');
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-900 hover:bg-blue-800 text-white flex items-center space-x-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Dokumen</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
