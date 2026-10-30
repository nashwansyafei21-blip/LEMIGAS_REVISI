import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  FileText, 
  HelpCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  ShieldAlert, 
  ShieldCheck 
} from 'lucide-react';
import { FAQ_LIST, LEMIGAS_INFO } from '../data/lemigasData';

export const PpidSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackName('');
      setFeedbackEmail('');
      setFeedbackMsg('');
    }, 4000);
  };

  return (
    <section id="ppid-kontak-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* 1. PPID & Keterbukaan Informasi */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3.5 py-1 rounded-full mb-3 border border-blue-200">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-800" />
              <span>Pejabat Pengelola Informasi dan Dokumentasi (PPID)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Layanan Informasi Publik & Pengaduan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Sesuai amanat Undang-Undang No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik, LEMIGAS berkomitmen memberikan kemudahan akses informasi bagi seluruh masyarakat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="p-2.5 rounded-xl bg-blue-100 text-blue-900 w-fit mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Permohonan Informasi Publik</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Masyarakat dapat mengajukan permohonan data hasil kajian publik, regulasi tarif pengujian BLU, atau laporan kinerja balai.
              </p>
              <a
                href="https://ppid.esdm.go.id"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center space-x-1"
              >
                <span>Portal PPID ESDM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="p-2.5 rounded-xl bg-red-100 text-red-700 w-fit mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">SP4N LAPOR!</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Sampaikan aspirasi dan keluhan pelayanan publik secara resmi, terintegrasi langsung dengan Kantor Staf Presiden dan Ombudsman RI.
              </p>
              <a
                href="https://www.lapor.go.id"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-red-700 hover:text-red-600 flex items-center space-x-1"
              >
                <span>Kirim Laporan di SP4N</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 w-fit mb-4">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Whistleblowing System (WBS)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Saluran pelaporan dugaan tindak pidana korupsi, suap, gratifikasi, atau pelanggaran disiplin dengan jaminan kerahasiaan identitas pelapor.
              </p>
              <a
                href="https://wbs.esdm.go.id"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-amber-800 hover:text-amber-700 flex items-center space-x-1"
              >
                <span>Portal WBS ESDM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. FAQ Interaktif */}
        <div className="bg-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Pertanyaan yang Sering Diajukan (FAQ)
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] mt-1">
              Informasi Pelayanan PILT & Laboratorium
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-900 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-900 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-2" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Kontak Resmi & Form Pengaduan / Konsultasi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Pusat Informasi Layanan Terpadu (PILT)
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B2545] mt-1">
                Kunjungi Kampus LEMIGAS
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Loket penerimaan sampel pengujian, konsultasi teknis laboratorium, dan pengambilan sertifikat hasil uji berada di Gedung Pelayanan Terpadu.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <MapPin className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold mb-0.5">Alamat Kantor Pusat:</strong>
                  <span>{LEMIGAS_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold mb-0.5">Telepon & Call Center:</strong>
                  <span>{LEMIGAS_INFO.phone} | Contact Center ESDM: 136</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold mb-0.5">Email Resmi Layanan:</strong>
                  <span>{LEMIGAS_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message / Consultation Box */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base mb-1">
              Kirim Pesan, Konsultasi Teknis, atau Pertanyaan
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Tim PILT LEMIGAS akan merespons permohonan Anda dalam 1x24 jam kerja.
            </p>

            {feedbackSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-emerald-900 text-sm">Pesan Berhasil Terkirim!</h5>
                <p className="text-xs text-emerald-700">
                  Terima kasih telah menghubungi Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS. Petugas layanan kami akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap / Instansi *
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                      placeholder="Nama Anda atau Perusahaan"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Alamat Email Aktif *
                    </label>
                    <input
                      type="email"
                      required
                      value={feedbackEmail}
                      onChange={(e) => setFeedbackEmail(e.target.value)}
                      placeholder="nama@email.com"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Isi Pertanyaan / Topik Konsultasi Uji *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={feedbackMsg}
                    onChange={(e) => setFeedbackMsg(e.target.value)}
                    placeholder="Tuliskan kebutuhan pengujian, jumlah sampel, atau pertanyaan lainnya..."
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#0B2545] hover:bg-blue-800 text-amber-300 font-bold text-xs shadow-md transition-colors flex items-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pesan ke PILT</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
