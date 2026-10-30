import React from 'react';
import { CheckCircle2, Download, Printer, QrCode, ShieldCheck, X } from 'lucide-react';
import { SampleTracking } from '../types';
import { MOCK_SAMPLES } from '../data/lemigasData';

interface ShuModalProps {
  sample?: SampleTracking | null;
  onClose: () => void;
}

export const ShuModal: React.FC<ShuModalProps> = ({ sample, onClose }) => {
  const activeSample = sample || MOCK_SAMPLES[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[95vh] overflow-y-auto border border-slate-300 animate-in fade-in duration-200">
        {/* Top Control Bar */}
        <div className="bg-[#0B2545] text-white px-6 py-3 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center space-x-2 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verifikasi Sertifikat Hasil Uji (SHU Digital)</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => alert('Fitur cetak dokumen SHU sedang disiapkan ke format PDF.')}
              className="p-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-amber-300 text-xs flex items-center space-x-1"
              title="Cetak"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Layout (Formal Letterhead) */}
        <div className="p-6 sm:p-10 space-y-6 text-slate-900 text-xs">
          {/* Header ESDM LEMIGAS */}
          <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between gap-4">
            <div className="w-16 h-16 flex-shrink-0 bg-blue-950 p-2 rounded-xl flex items-center justify-center border-2 border-amber-400">
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400" fill="currentColor">
                <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke="#FFC700" strokeWidth="6" />
                <polygon points="50,18 78,34 78,66 50,82 22,66 22,34" fill="#0B2545" stroke="#FFC700" strokeWidth="3" />
                <circle cx="50" cy="50" r="14" fill="#FFC700" />
              </svg>
            </div>

            <div className="text-center flex-1">
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest block">
                KEMENTERIAN ENERGI DAN SUMBER DAYA MINERAL REPUBLIK INDONESIA
              </span>
              <span className="text-[11px] font-semibold text-slate-700 block">
                DIREKTORAT JENDERAL MINYAK DAN GAS BUMI
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-[#0B2545] tracking-tight">
                BALAI BESAR PENGUJIAN MINYAK DAN GAS BUMI "LEMIGAS"
              </h2>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Jl. Ciledug Raya Kav. 109, Cipulir, Jakarta Selatan 12230 | Telp: (021) 7394422 | www.lemigas.esdm.go.id
              </p>
            </div>

            {/* KAN Badge */}
            <div className="w-16 flex-shrink-0 text-center border-2 border-slate-800 p-1 rounded">
              <span className="font-extrabold text-[12px] block text-red-700">KAN</span>
              <span className="text-[9px] font-mono block leading-tight">LP-001-IDN</span>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="text-center py-2">
            <h3 className="text-base sm:text-lg font-extrabold uppercase underline underline-offset-4 tracking-wider text-slate-900">
              SERTIFIKAT HASIL UJI
            </h3>
            <span className="text-xs font-mono font-bold text-blue-900 block mt-1">
              NOMOR: {activeSample.shuNumber || 'SHU-BBM/LEMIGAS/10/2026/0492'}
            </span>
          </div>

          {/* Sample Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-[11px]">
            <div>
              <span className="text-slate-500 block">Nama Pemohon / Pelanggan:</span>
              <strong className="text-slate-900">{activeSample.customerName}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Nomor Kode Contoh:</span>
              <strong className="font-mono text-blue-900">{activeSample.sampleCode}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Deskripsi Contoh:</span>
              <strong className="text-slate-900">{activeSample.sampleType}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Tanggal Penerimaan di PILT:</span>
              <strong className="text-slate-900">{activeSample.submissionDate}</strong>
            </div>
          </div>

          {/* Table of Results */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wide text-slate-800 block mb-2">
              HASIL PENGUJIAN LABORATORIUM:
            </span>
            <div className="overflow-x-auto border border-slate-300 rounded-lg">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-slate-100 uppercase text-[10px] font-bold text-slate-800 border-b border-slate-300">
                  <tr>
                    <th className="p-2.5">No</th>
                    <th className="p-2.5">Parameter Uji</th>
                    <th className="p-2.5">Metode Uji</th>
                    <th className="p-2.5">Spesifikasi Kepdirjen Migas</th>
                    <th className="p-2.5 text-right">Hasil Uji</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {activeSample.parameters.map((param, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-2 text-slate-500">{i + 1}</td>
                      <td className="p-2 font-semibold text-slate-900">{param.name}</td>
                      <td className="p-2 font-mono text-slate-600">{param.method}</td>
                      <td className="p-2 text-slate-600">{param.spec}</td>
                      <td className="p-2 text-right font-mono font-bold text-blue-900">
                        {param.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notes */}
          <div className="text-[10px] text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p><strong>Catatan & Kesimpulan Teknis:</strong> {activeSample.notes || 'Hasil pengujian hanya berlaku untuk contoh yang diuji di laboratorium LEMIGAS sesuai permohonan tertulis pelanggan.'}</p>
            <p>* Sertifikat ini sah dan diterbitkan secara elektronik dengan tanda tangan digital tersertifikasi BSrE.</p>
          </div>

          {/* Signature & QR Validation */}
          <div className="pt-4 flex items-end justify-between border-t border-slate-200">
            {/* QR Code */}
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-slate-100 p-2 rounded-lg border border-slate-300 flex items-center justify-center">
                <QrCode className="w-16 h-16 text-slate-800" />
              </div>
              <div className="text-[10px] text-slate-500 max-w-[200px]">
                <span className="font-bold text-emerald-700 block">TERVERIFIKASI DIGITAL</span>
                <span>Pindai QR-Code untuk memeriksa keabsahan dokumen di portal resmi lemigas.esdm.go.id</span>
              </div>
            </div>

            {/* Manajer Teknis */}
            <div className="text-right space-y-1">
              <span className="text-[10px] text-slate-500">Jakarta, {activeSample.estimatedCompletionDate}</span>
              <p className="font-bold text-slate-900">Manajer Teknis Laboratorium LEMIGAS</p>
              <div className="h-12 flex items-center justify-end text-blue-900 font-serif italic text-xs">
                [Ditandatangani secara elektronik]
              </div>
              <p className="font-bold text-slate-800 underline">Dr. Ir. Hendra Wardhana, M.Si.</p>
              <span className="text-[10px] text-slate-500 block">NIP. 19740815 199903 1 002</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-between rounded-b-2xl border-t border-slate-200 text-xs">
          <span className="text-slate-500 text-[11px]">
            Sertifikat Hasil Uji Resmi BLU LEMIGAS &bull; Terakreditasi KAN LP-001-IDN
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold"
          >
            Tutup Pratinjau
          </button>
        </div>
      </div>
    </div>
  );
};
