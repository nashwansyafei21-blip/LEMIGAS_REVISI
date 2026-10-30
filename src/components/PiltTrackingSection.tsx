import React, { useState } from 'react';
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Download, 
  FileCheck, 
  FilePlus2, 
  FileSearch, 
  FileText, 
  Layers, 
  Plus, 
  QrCode, 
  Search, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';
import { MOCK_SAMPLES } from '../data/lemigasData';
import { SampleTracking } from '../types';

interface PiltTrackingSectionProps {
  initialCode?: string;
  onOpenShuModal: (sample?: SampleTracking) => void;
}

export const PiltTrackingSection: React.FC<PiltTrackingSectionProps> = ({
  initialCode = 'LMG-2026-BBM-0492',
  onOpenShuModal
}) => {
  const [samplesList, setSamplesList] = useState<SampleTracking[]>(MOCK_SAMPLES);
  const [searchQuery, setSearchQuery] = useState(initialCode);
  const [selectedSample, setSelectedSample] = useState<SampleTracking>(() => {
    return MOCK_SAMPLES.find(s => s.sampleCode === initialCode) || MOCK_SAMPLES[0];
  });
  const [showRequestForm, setShowRequestForm] = useState(false);

  // New Sample Form State
  const [newCompany, setNewCompany] = useState('');
  const [newSampleName, setNewSampleName] = useState('');
  const [newCommodity, setNewCommodity] = useState('Bahan Bakar Minyak (BBM)');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const handleSearch = (codeToSearch: string) => {
    const found = samplesList.find(s => 
      s.sampleCode.toLowerCase().includes(codeToSearch.trim().toLowerCase()) ||
      s.customerName.toLowerCase().includes(codeToSearch.trim().toLowerCase())
    );

    if (found) {
      setSelectedSample(found);
      setSearchQuery(found.sampleCode);
    } else {
      // If not found in mock list, generate a realistic active sample based on query!
      const generatedSample: SampleTracking = {
        sampleCode: codeToSearch.toUpperCase().startsWith('LMG-') ? codeToSearch.toUpperCase() : `LMG-2026-GEN-${Math.floor(1000 + Math.random() * 9000)}`,
        customerName: 'PT Energi Mitra Mandiri Tbk',
        sampleType: 'Sampel Uji Rutin Mutu Migas',
        submissionDate: '29 Oktober 2026',
        estimatedCompletionDate: '04 November 2026',
        currentStep: 3,
        status: 'Pengujian',
        progressPercent: 60,
        notes: 'Sampel telah diterima petugas PILT dan sedang dalam pengujian parameter laboratorium berstandar ASTM.',
        parameters: [
          { name: 'Massa Jenis / Densitas 15°C', method: 'ASTM D4052', result: '842.1 kg/m³', spec: '815 - 860 kg/m³', status: 'Completed' },
          { name: 'Viskositas Kinematik 40°C', method: 'ASTM D445', result: '3.12 cSt', spec: '2.0 - 4.5 cSt', status: 'Completed' },
          { name: 'Titik Nyala Flash Point', method: 'ASTM D93', result: 'Sedang Berlangsung', spec: 'Min. 52.0°C', status: 'In Progress' },
          { name: 'Kandungan Sulfur', method: 'ASTM D4294', result: 'Antrean Instrument', spec: 'Maks. 50 ppm', status: 'Pending' }
        ]
      };
      setSamplesList(prev => [generatedSample, ...prev]);
      setSelectedSample(generatedSample);
      setSearchQuery(generatedSample.sampleCode);
    }
  };

  const handleCreateNewSample = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany || !newSampleName) return;

    const code = `LMG-2026-REQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEntry: SampleTracking = {
      sampleCode: code,
      customerName: newCompany,
      sampleType: `${newCommodity} - ${newSampleName}`,
      submissionDate: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      estimatedCompletionDate: '06 November 2026',
      currentStep: 2,
      status: 'Kaji Ulang',
      progressPercent: 30,
      notes: 'Permohonan berhasil didaftarkan secara online di sistem PILT. Menunggu verifikasi fisik sampel di loket penerimaan.',
      parameters: [
        { name: 'Verifikasi Fisik & Segel Sampel', method: 'Prosedur PILT', result: 'Terverifikasi Lengkap', spec: 'Sesuai SNI/ASTM', status: 'Completed' },
        { name: 'Penjadwalan Alat Uji Laboratorium', method: 'Manajemen Lab', result: 'Dalam Antrean', spec: 'Kaji Ulang Teknis', status: 'In Progress' }
      ]
    };

    setSamplesList(prev => [newEntry, ...prev]);
    setSelectedSample(newEntry);
    setSearchQuery(code);
    setFormSuccess(code);
    setTimeout(() => {
      setShowRequestForm(false);
      setFormSuccess(null);
      // Reset form
      setNewCompany('');
      setNewSampleName('');
    }, 2000);
  };

  const steps = [
    { step: 1, title: 'Penerimaan Sampel', desc: 'Loket PILT & Verifikasi Segel' },
    { step: 2, title: 'Kaji Ulang Teknis', desc: 'Validasi Metode & SPK Lab' },
    { step: 3, title: 'Pengujian Laboratorium', desc: 'Analisis Instrumen Terakreditasi' },
    { step: 4, title: 'Validasi & Penandatanganan', desc: 'Kaji Hasil & E-Sign BSrE' },
    { step: 5, title: 'Penerbitan SHU', desc: 'Selesai & Siap Diunduh' }
  ];

  return (
    <section id="pilt-section" className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-800" />
              <span>Pusat Informasi Layanan Terpadu (PILT) LEMIGAS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              Sistem Pelacakan Sampel Pengujian Online
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mt-1">
              Pantau status pengujian sampel laboratorium Anda secara real-time dari registrasi, analisis instrumen, hingga penerbitan Sertifikat Hasil Uji (SHU) digital.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRequestForm(true)}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <FilePlus2 className="w-4 h-4" />
              <span>Daftar Permohonan Uji Baru</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Sample Presets */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSearch(searchQuery); }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative flex-1 w-full">
              <FileSearch className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Masukkan Nomor Sampel (Contoh: LMG-2026-BBM-0492) atau Nama Perusahaan..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent text-sm text-slate-800 font-mono"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#0B2545] hover:bg-blue-800 text-amber-300 font-bold text-sm rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-xs"
            >
              <Search className="w-4 h-4" />
              <span>Cari Status Sampel</span>
            </button>
          </form>

          {/* Quick Preset Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Contoh Sampel Aktif:</span>
            {samplesList.slice(0, 3).map((item) => (
              <button
                key={item.sampleCode}
                onClick={() => {
                  setSelectedSample(item);
                  setSearchQuery(item.sampleCode);
                }}
                className={`px-3 py-1.5 rounded-lg border font-mono transition-colors ${
                  selectedSample.sampleCode === item.sampleCode
                    ? 'bg-blue-900 text-white border-blue-900 font-bold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {item.sampleCode}
                <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded ${
                  item.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {item.status}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tracking Detail Card */}
        {selectedSample && (
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#0B2545] to-[#133E87] p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs text-amber-300 font-mono mb-1">
                  <span>Nomor Registrasi Sampel:</span>
                  <strong className="text-white bg-blue-950 px-2.5 py-0.5 rounded border border-blue-800">
                    {selectedSample.sampleCode}
                  </strong>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedSample.sampleType}
                </h3>
                <p className="text-sm text-slate-200 mt-1 flex items-center gap-2">
                  <span>Pelanggan / Pemohon:</span>
                  <strong className="text-white underline decoration-amber-400 underline-offset-4">
                    {selectedSample.customerName}
                  </strong>
                </p>
              </div>

              {/* Status Badge & Action */}
              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    selectedSample.status === 'Selesai'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-amber-400 text-slate-950'
                  }`}>
                    Status: {selectedSample.status} ({selectedSample.progressPercent}%)
                  </span>
                </div>

                {selectedSample.status === 'Selesai' && (
                  <button
                    onClick={() => onOpenShuModal(selectedSample)}
                    className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold px-3.5 py-2 rounded-lg transition-colors shadow-xs"
                  >
                    <FileCheck className="w-4 h-4 text-slate-950" />
                    <span>Lihat / Cetak SHU Digital</span>
                  </button>
                )}
              </div>
            </div>

            {/* 5-Step Visual Progress Bar */}
            <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                Alur Tahapan Layanan Pengujian PILT LEMIGAS:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
                {steps.map((st) => {
                  const isDone = selectedSample.currentStep > st.step || (selectedSample.currentStep === 5 && st.step === 5);
                  const isCurrent = selectedSample.currentStep === st.step;

                  return (
                    <div key={st.step} className="flex flex-col items-start sm:items-center text-left sm:text-center relative group">
                      {/* Step Circle Indicator */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all ${
                        isDone
                          ? 'bg-emerald-600 text-white shadow-md'
                          : isCurrent
                          ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-200 font-extrabold shadow-md'
                          : 'bg-slate-200 text-slate-500'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-5 h-5" /> : st.step}
                      </div>

                      {/* Step Details */}
                      <span className={`text-xs font-bold ${
                        isCurrent ? 'text-blue-900 font-extrabold' : 'text-slate-800'
                      }`}>
                        {st.title}
                      </span>
                      <span className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {st.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Progress Line Bar */}
              <div className="w-full bg-slate-200 h-2 rounded-full mt-6 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-700 via-amber-500 to-emerald-500 h-full transition-all duration-700"
                  style={{ width: `${selectedSample.progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Metadata Summary Grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-200 bg-white">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">Tanggal Registrasi PILT:</span>
                <span className="font-bold text-slate-800 text-sm">{selectedSample.submissionDate}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">Estimasi Penerbitan SHU:</span>
                <span className="font-bold text-blue-900 text-sm">{selectedSample.estimatedCompletionDate}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 block">Nomor Sertifikat (SHU):</span>
                <span className="font-mono font-bold text-emerald-700 text-sm">
                  {selectedSample.shuNumber || 'Menunggu Selesai Pengujian'}
                </span>
              </div>
            </div>

            {/* Parameters Table */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-extrabold text-[#0B2545] uppercase tracking-wide flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-800" />
                  <span>Daftar Parameter Uji & Hasil Pengujian Laboratorium</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedSample.parameters.length} Parameter Uji Terdaftar
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-[#0B2545] text-white uppercase text-[11px] font-semibold tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Parameter Uji</th>
                      <th className="py-3 px-4">Metode Standar Acuan</th>
                      <th className="py-3 px-4">Spesifikasi Kepdirjen Migas</th>
                      <th className="py-3 px-4">Hasil Uji Laboratorium</th>
                      <th className="py-3 px-4 text-right">Status Analisis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedSample.parameters.map((param, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900">{param.name}</td>
                        <td className="py-3 px-4 font-mono text-slate-600">{param.method}</td>
                        <td className="py-3 px-4 text-slate-600">{param.spec}</td>
                        <td className="py-3 px-4 font-bold text-blue-900 font-mono">
                          {param.result}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            param.status === 'Completed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : param.status === 'In Progress'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {param.status === 'Completed' ? 'Selesai' : param.status === 'In Progress' ? 'Uji Lab' : 'Antrean'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {selectedSample.notes && (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="font-semibold">Catatan Manajer Teknis PILT: </strong>
                    {selectedSample.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal: Permohonan Pengujian Uji Baru */}
        {showRequestForm && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545]">
                    Pendaftaran Permohonan Pengujian Sampel (FPPU)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pusat Informasi Layanan Terpadu (PILT) LEMIGAS
                  </p>
                </div>
                <button
                  onClick={() => setShowRequestForm(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              {formSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-800">
                    Permohonan Berhasil Terdaftar!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Nomor registrasi sampel Anda adalah: <strong className="font-mono text-blue-900">{formSuccess}</strong>. Silakan serahkan fisik sampel ke loket PILT Cipulir.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleCreateNewSample} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Instansi / Perusahaan Pemohon *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: PT Surya Migas Mandiri"
                      value={newCompany}
                      onChange={(e) => setNewCompany(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Komoditas Pengujian *
                      </label>
                      <select
                        value={newCommodity}
                        onChange={(e) => setNewCommodity(e.target.value)}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
                      >
                        <option>Bahan Bakar Minyak (BBM)</option>
                        <option>Biofuel / Biodiesel (B35 & B40)</option>
                        <option>Minyak Pelumas & Gemuk</option>
                        <option>Gas Bumi & LPG</option>
                        <option>Batuan Reservoir & Core Plug</option>
                        <option>Inhibitor Korosi & Metalurgi</option>
                        <option>Jasa Kalibrasi Alat</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Identitas / Kode Sampel Pemohon *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Tangki 04 - Pertalite"
                        value={newSampleName}
                        onChange={(e) => setNewSampleName(e.target.value)}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email PIC Teknis
                      </label>
                      <input
                        type="email"
                        placeholder="pic@perusahaan.co.id"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        No. Kontak WhatsApp / Telepon
                      </label>
                      <input
                        type="tel"
                        placeholder="0812-XXXX-XXXX"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg text-[11px] text-slate-600 border border-slate-200">
                    ℹ️ <strong>Ketentuan Sampel:</strong> Sampel harus dikemas dalam wadah bersegel rapi sesuai standar keselamatan kerja migas. Kode registrasi resmi akan diterbitkan untuk pelacakan online.
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowRequestForm(false)}
                      className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg text-xs font-bold bg-[#0B2545] hover:bg-blue-800 text-amber-300 shadow-xs"
                    >
                      Kirim Pendaftaran Permohonan
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
