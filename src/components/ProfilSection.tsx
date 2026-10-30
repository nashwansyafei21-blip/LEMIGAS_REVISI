import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Building2, 
  CheckCircle, 
  Clock, 
  FileCheck, 
  HeartHandshake, 
  Milestone, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Users 
} from 'lucide-react';
import { LEMIGAS_INFO, PROFILE_HISTORY } from '../data/lemigasData';

export const ProfilSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sejarah' | 'visimisi' | 'tusi' | 'struktur' | 'akreditasi' | 'maklumat'>('sejarah');

  return (
    <section id="profil-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3.5 py-1 rounded-full mb-3 border border-blue-200">
            <Building2 className="w-3.5 h-3.5 text-blue-800" />
            <span>Mengenal LEMIGAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Profil Balai Besar Pengujian Minyak dan Gas Bumi
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Lembaga pengujian dan layanan ilmiah minyak dan gas bumi tertua dan terlengkap di Indonesia, berdedikasi menjaga kedaulatan dan kualitas energi nasional sejak 1965.
          </p>

          {/* Profil Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 text-xs">
            {[
              { id: 'sejarah', label: 'Sejarah & Kilas Balik' },
              { id: 'visimisi', label: 'Visi, Misi & BerAKHLAK' },
              { id: 'tusi', label: 'Tugas & Fungsi (TUSI)' },
              { id: 'struktur', label: 'Struktur Organisasi' },
              { id: 'akreditasi', label: 'Akreditasi KAN' },
              { id: 'maklumat', label: 'Maklumat Pelayanan' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0B2545] text-amber-300 shadow-md scale-105'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Body */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
          {/* 1. SEJARAH */}
          {activeTab === 'sejarah' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl font-bold text-[#0B2545]">
                    6 Dekade Melayani Negeri Menjaga Mutu Energi Nasional
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) didirikan pada tanggal <strong>11 Juni 1965</strong> atas prakarsa tokoh migas nasional Dr. Ibnu Sutowo. Awalnya didirikan sebagai Lembaga Minyak dan Gas Bumi yang bertugas merintis kemampuan bangsa dalam teknologi pengujian serta riset hidrokarbon.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Dalam perjalanannya selama lebih dari enam dasawarsa, LEMIGAS telah menjadi kiblat standarisasi laboratorium perminyakan di Indonesia. Mulai dari perumusan spesifikasi bahan bakar pertama di tanah air, penemuan lapangan migas, investigasi kegagalan fasilitas industri, hingga pengawalan program transisi energi seperti pemanfaatan B35/B40 dan Sustainable Aviation Fuel (SAF).
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B2545] to-[#133E87] text-white space-y-4 shadow-lg border border-amber-400/30">
                    <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>Fakta Bersejarah</span>
                    </div>
                    <div className="text-3xl font-extrabold text-amber-400 font-mono">
                      11 Juni 1965
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      Lembaga pengujian pertama di Indonesia yang diakreditasi oleh Komite Akreditasi Nasional (KAN) dengan nomor registrasi <strong>LP-001-IDN</strong> (Laboratorium Pengujian) dan <strong>LK-001-IDN</strong> (Laboratorium Kalibrasi).
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Milestones */}
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-6 flex items-center space-x-2">
                  <Milestone className="w-4 h-4 text-blue-900" />
                  <span>Kilas Balik Transformasi LEMIGAS:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PROFILE_HISTORY.milestones.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors">
                      <div className="text-lg font-extrabold text-blue-900 font-mono">
                        {m.year}
                      </div>
                      <h5 className="font-bold text-slate-900 text-xs mt-1">
                        {m.title}
                      </h5>
                      <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. VISI & MISI */}
          {activeTab === 'visimisi' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="bg-gradient-to-r from-blue-900 to-[#0B2545] text-white p-6 sm:p-8 rounded-2xl shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Visi LEMIGAS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-2 leading-relaxed">
                  "{PROFILE_HISTORY.vision}"
                </h3>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center space-x-2">
                  <Target className="w-4 h-4 text-blue-900" />
                  <span>Misi LEMIGAS:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROFILE_HISTORY.mission.map((misi, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                      <span className="w-6 h-6 rounded-full bg-blue-900 text-amber-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {misi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tata Nilai BerAKHLAK */}
              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center space-x-2">
                  <HeartHandshake className="w-4 h-4 text-rose-600" />
                  <span>Tata Nilai Budaya Kerja ASN Kementerian ESDM: BerAKHLAK</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {PROFILE_HISTORY.values.map((val, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-amber-500 font-extrabold text-sm font-mono block">
                        {val.letter}
                      </span>
                      <h5 className="font-bold text-slate-900 text-xs mt-0.5">{val.word}</h5>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. TUSI */}
          {activeTab === 'tusi' && (
            <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 font-medium">
                <strong>Dasar Regulasi: </strong>
                Peraturan Menteri Energi dan Sumber Daya Mineral No. 6 Tahun 2021 tentang Organisasi dan Tata Kerja Kementerian Energi dan Sumber Daya Mineral.
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-2">
                  Tugas Pokok Balai Besar Pengujian Minyak dan Gas Bumi:
                </h4>
                <p>
                  Melaksanakan pengujian, kalibrasi, inspeksi teknis, dan sertifikasi produk di bidang minyak dan gas bumi serta menyelenggarakan pelayanan teknis dan pengelolaan keuangan Badan Layanan Umum (BLU).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase mb-3">
                  Fungsi Utama Organisasi:
                </h4>
                <ul className="space-y-2">
                  {[
                    'Penyusunan rencana kerja, program, anggaran, dan pelaporan di bidang pengujian migas;',
                    'Pelaksanaan pengujian laboratorium kualitas bahan bakar, pelumas, gas, batuan, fluida reservoir, korosi, dan lingkungan migas;',
                    'Pelaksanaan kalibrasi instrumen metrologi dan fasilitas metering migas;',
                    'Pelaksanaan sertifikasi produk pelumas (LSPro) dan penyelenggaraan uji profisiensi laboratorium;',
                    'Pelaksanaan studi kaji tindak, pengkajian teknologi, dan konsultansi teknis migas;',
                    'Pengelolaan sarana laboratorium, keselamatan kerja, mutu, dan perlindungan lingkungan;',
                    'Pengelolaan urusan tata usaha, kepegawaian, keuangan BLU, serta pelayanan informasi dan pengaduan masyarakat (PILT).'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 4. STRUKTUR */}
          {activeTab === 'struktur' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Kepala Balai Besar Pengujian Minyak dan Gas Bumi
                </span>
                <h3 className="text-xl font-extrabold text-[#0B2545] mt-1">
                  {LEMIGAS_INFO.headOfLemigas}
                </h3>
                <p className="text-xs text-slate-500">
                  Direktorat Jenderal Minyak dan Gas Bumi - Kementerian ESDM
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-blue-900 uppercase text-xs mb-1">
                    Bagian Tata Usaha
                  </h5>
                  <p className="text-slate-600 text-[11px]">
                    Mengelola urusan kepegawaian, keuangan BLU, perlengkapan, hukum, serta Pusat Informasi Layanan Terpadu (PILT).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-blue-900 uppercase text-xs mb-1">
                    Koordinator Pengujian Eksplorasi & Eksploitasi
                  </h5>
                  <p className="text-slate-600 text-[11px]">
                    Membawahi Laboratorium Sedimentologi, Geokimia, Biostratigrafi, Core Analysis, PVT, dan EOR Lumpur Pemboran.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-blue-900 uppercase text-xs mb-1">
                    Koordinator Pengujian Aplikasi Produk & Gas
                  </h5>
                  <p className="text-slate-600 text-[11px]">
                    Membawahi Laboratorium BBM, Biofuel, Minyak Pelumas, Uji Mesin CFR, Gas Bumi, dan Petrokimia.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-blue-900 uppercase text-xs mb-1">
                    Koordinator Penunjang Teknis & Kalibrasi
                  </h5>
                  <p className="text-slate-600 text-[11px]">
                    Membawahi Laboratorium Korosi, Metalurgi, Laboratorium Kalibrasi (LK-001), dan Uji Lingkungan Migas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-blue-900 uppercase text-xs mb-1">
                    Lembaga Sertifikasi Produk (LSPro-031)
                  </h5>
                  <p className="text-slate-600 text-[11px]">
                    Sertifikasi kesesuaian produk pelumas terhadap standar SNI Wajib serta penerbitan SPPT SNI.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-blue-900 uppercase text-xs mb-1">
                    Kelompok Jabatan Fungsional
                  </h5>
                  <p className="text-slate-600 text-[11px]">
                    Didukung ratusan Peneliti, Perekayasa, Penguji Mutu Barang (PMB), dan Pranata Laboratorium tersertifikasi.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. AKREDITASI */}
          {activeTab === 'akreditasi' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Pengakuan Standar Mutu Internasional & Akreditasi Resmi KAN:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LEMIGAS_INFO.accreditations.map((acc, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono font-bold text-blue-900 text-sm">{acc.code}</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded font-bold uppercase">
                          {acc.org}
                        </span>
                      </div>
                      <h5 className="font-bold text-slate-900 text-xs mt-1">{acc.standard}</h5>
                      <p className="text-xs text-slate-600 mt-0.5">{acc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. MAKLUMAT */}
          {activeTab === 'maklumat' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-amber-50 border-2 border-amber-300 p-6 sm:p-8 rounded-2xl text-center space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
                  MAKLUMAT PELAYANAN PUBLIK LEMIGAS
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2545] max-w-xl mx-auto leading-relaxed">
                  "Dengan ini, kami pimpinan dan segenap pegawai Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS menyatakan sanggup menyelenggarakan pelayanan pengujian dan kalibrasi sesuai standar pelayanan yang telah ditetapkan, memberikan pelayanan yang berkualitas, cepat, transparan, bebas dari korupsi dan gratifikasi, serta apabila tidak menepati janji layanan ini, kami siap menerima sanksi sesuai ketentuan peraturan perundang-undangan yang berlaku."
                </h3>
                <div className="pt-2 text-xs font-semibold text-slate-600">
                  Jakarta, Ditandatangani oleh Kepala Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS
                </div>
              </div>

              {/* Nilai IKM */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold">Indeks Kepuasan Masyarakat</span>
                  <div className="text-2xl font-extrabold text-blue-900 font-mono mt-1">
                    {LEMIGAS_INFO.stats.customerSatisfactionIndex}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold">Kategori: SANGAT BAIK</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold">Ketepatan Waktu Layanan</span>
                  <div className="text-2xl font-extrabold text-blue-900 font-mono mt-1">
                    {LEMIGAS_INFO.stats.onTimeRate}
                  </div>
                  <span className="text-[10px] text-slate-500">Sesuai Service Level Agreement</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-semibold">Zona Integritas</span>
                  <div className="text-lg font-extrabold text-amber-600 mt-1">
                    WBK / WBBM
                  </div>
                  <span className="text-[10px] text-slate-500">Wilayah Bebas dari Korupsi</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
