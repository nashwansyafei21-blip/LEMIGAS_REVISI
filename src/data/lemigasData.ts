import { Laboratory, NewsItem, PublicationItem, SampleTracking, TestParameter } from '../types';

export const LEMIGAS_INFO = {
  fullName: 'Balai Besar Pengujian Minyak dan Gas Bumi "LEMIGAS"',
  ministry: 'Kementerian Energi dan Sumber Daya Mineral Republik Indonesia',
  directorate: 'Direktorat Jenderal Minyak dan Gas Bumi',
  status: 'Badan Layanan Umum (BLU)',
  foundedDate: '11 Juni 1965',
  address: 'Jl. Ciledug Raya Kav. 109, Cipulir, Kebayoran Lama, Jakarta Selatan 12230',
  phone: '+62 (021) 7394422 / 7246150',
  fax: '+62 (021) 7246150',
  email: 'info.lemigas@esdm.go.id',
  callCenter: '136 (Contact Center ESDM)',
  operatingHours: 'Senin - Jumat: 08.00 - 15.30 WIB (Pusat Informasi Layanan Terpadu - PILT)',
  headOfLemigas: 'Mustafid Gunawan, S.T., M.T.',
  accreditations: [
    { code: 'LP-001-IDN', org: 'KAN', standard: 'SNI ISO/IEC 17025:2017', desc: 'Laboratorium Pengujian Pertama di Indonesia' },
    { code: 'LK-001-IDN', org: 'KAN', standard: 'SNI ISO/IEC 17025:2017', desc: 'Laboratorium Kalibrasi Pertama di Indonesia' },
    { code: 'LSPro-031-IDN', org: 'KAN', standard: 'SNI ISO/IEC 17065:2012', desc: 'Lembaga Sertifikasi Produk Pelumas & Migas' },
    { code: 'PUP-005-IDN', org: 'KAN', standard: 'SNI ISO/IEC 17043:2010', desc: 'Penyelenggara Uji Profisiensi Migas' },
    { code: 'ISO 9001:2015', org: 'TUV / BSI', standard: 'Sistem Manajemen Mutu', desc: 'Pelayanan Publik & PILT Prima' }
  ],
  stats: {
    samplesTestedYearly: '52.400+',
    accreditedLabs: '36 Unit',
    expertScientists: '240+',
    customerSatisfactionIndex: '4.89 / 5.00',
    onTimeRate: '98.6%',
    partnerIndustries: '850+ Perusahaan'
  }
};

export const LABORATORIES_DATA: Laboratory[] = [
  {
    id: 'lab-bbm',
    name: 'Laboratorium Bahan Bakar Minyak & Biofuel',
    division: 'hilir',
    description: 'Laboratorium pengujian kualitas dan spesifikasi seluruh jenis BBM komersial, bensin, minyak solar, avtur, kerosene, bioetanol, dan biodiesel (FAME B35 & B40) sesuai Kepdirjen Migas dan standar internasional.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LP-001-IDN (Metode ASTM & SNI)',
    instruments: ['CFR F1 & F2 Engine (Octane / Cetane Rating)', 'Automatic Distillation Units ASTM D86', 'Karl Fischer Coulometer', 'Densimeter Anton Paar DMA 4500M', 'GC-SCD Sulfur Analyzer'],
    capabilities: ['Pengujian Angka Oktan Riset (RON) & Motor (MON)', 'Angka Setana & Indeks Setana Mesin Diesel', 'Distilasi Fraksi Ringan & Berat', 'Kandungan Belerang Ultra-Low Sulfur (ULSD)', 'Stabilitas Oksidasi Biofuel FAME'],
    head: 'Dr. Ir. Hendra Wardhana, M.Si.'
  },
  {
    id: 'lab-pelumas',
    name: 'Laboratorium Minyak Pelumas & Gemuk (Lubricants)',
    division: 'hilir',
    description: 'Pusat pengujian dan sertifikasi mutu pelumas mesin kendaraan bermotor, pelumas industri, transmisi, hidrolik, dan gemuk lumas (grease) untuk penerbitan NPT (Nomor Pelumas Terdaftar) dan SNI Wajib.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LP-001-IDN & LSPro-031-IDN',
    instruments: ['Viskometer Kinematik Otomatis ASTM D445', 'ICP-OES Spectrometer (Wear & Additive Metals)', 'Cold Cranking Simulator (CCS)', 'Noack Volatility Evaporation Tester', 'Four-Ball Wear Test Machine'],
    capabilities: ['Viskositas Kinematik 40°C & 100°C serta Indeks Viskositas', 'Total Base Number (TBN) & Total Acid Number (TAN)', 'Uji Unsur Aditif Logam (Zn, Ca, Mg, P, Mo)', 'Titik Nyala Flash Point & Titik Tuang Pour Point', 'Uji Karakteristik Busa & Stabilitas Geser'],
    head: 'Ir. Ratna Kusumaningsih, M.Eng.'
  },
  {
    id: 'lab-gas',
    name: 'Laboratorium Gas Bumi & Petrokimia',
    division: 'hilir',
    description: 'Pengujian komposisi gas bumi pipa, LNG, LPG subsidi & non-subsidi, CNG, serta produk turunan petrokimia untuk penentuan nilai kalor, impuritas, dan kesesuaian transaksi komersial (custody transfer).',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LP-001-IDN (GPA 2261 & ASTM D1945)',
    instruments: ['Gas Chromatograph (GC-TCD, GC-FID, GC-FPD)', 'Dew Point Analyzer (Hydrocarbon & Water)', 'Bomb Calorimeter Isoperibol', 'Total Sulfur Gas Analyzer TS-100', 'Mass Spectrometer'],
    capabilities: ['Analisis Komposisi Gas C1 s/d C6+ (Methane, Ethane, Propane, Butane)', 'Gross Heating Value (GHV) & Wobbe Index', 'Kandungan H2S, Mercaptans & Total Sulfur', 'Titik Embun Hidrokarbon & Kadar Air Gas Pipa', 'Komposisi LPG Campuran Komersial'],
    head: 'Drs. Agus Budiono, M.T.'
  },
  {
    id: 'lab-korosi',
    name: 'Laboratorium Korosi & Metalurgi Migas',
    division: 'penunjang',
    description: 'Solusi riset dan penanggulangan korosi pada sistem perpipaan migas, instalasi geothermal, fasilitas lepas pantai (offshore), evaluasi inhibitor korosi, serta Failure Analysis struktur logam.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LP-001-IDN (NACE / AMPP Standards)',
    instruments: ['High Pressure High Temperature (HPHT) Autoclave', 'Rotating Cylinder Electrode (RCE)', 'Bubble Test Apparatus', 'Potentiostat / Galvanostat VersaSTAT', 'Scanning Electron Microscope (SEM-EDX)'],
    capabilities: ['Evaluasi Efisiensi Inhibitor Korosi CO2 & H2S', 'Uji Korosi Celah & Pitting Corrosion Logam', 'Pengukuran Ketebalan Material & Ultrasonic Testing', 'Analisis Kegagalan Komponen (Failure Analysis)', 'Pemodelan Laju Korosi Jalur Pipa'],
    head: 'Dr. Taufik Hidayat, S.T., M.T.'
  },
  {
    id: 'lab-eksplorasi',
    name: 'Laboratorium Eksplorasi Migas (Sedimentologi & Geokimia)',
    division: 'hulu',
    description: 'Analisis stratigrafi, sedimentologi batuan reservoir, geokimia minyak mentah dan gas bumi, biostratigrafi mikrofosil, serta karakterisasi batuan induk (source rock) untuk studi potensi migas cekungan.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LP-001-IDN',
    instruments: ['Rock-Eval 6 Pyrolyzer', 'X-Ray Diffraction (XRD) Rigaku', 'Petrographic Polarizing Microscope', 'Gas Chromatography - Mass Spectrometry (GC-MS Biomarker)', 'Total Organic Carbon (TOC) Analyzer'],
    capabilities: ['Pirolisis Rock-Eval & Penentuan Tipe Kerogen', 'Analisis Biomarker Sterana & Terpana Minyak Bumi', 'Petrografi Batuan Sayatan Tipis & Komposisi Mineral XRD', 'Biostratigrafi Foraminifera & Nannoplankton', 'Analisis Isotop Stabil Karbon & Hidrogen'],
    head: 'Prof. Dr. Ir. Wahyudi Pratama, M.Sc.'
  },
  {
    id: 'lab-eksploitasi',
    name: 'Laboratorium Eksploitasi & Core Analysis (Reservoir)',
    division: 'hulu',
    description: 'Pengujian sifat fisik batuan reservoir inti bor (core plug), fluida reservoir PVT (Pressure-Volume-Temperature), simulasi Enhanced Oil Recovery (EOR), serta evaluasi lumpur pemboran (drilling mud).',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LP-001-IDN (API RP 40 & RP 13B)',
    instruments: ['Core Flooding System HPHT EOR', 'Helium Porosimeter & Gas Permeameter', 'Mercury Injection Capillary Pressure (MICP)', 'PVT Mercury-Free Fluid Analysis Cell', 'HPHT Filter Press & Fann VG Meter'],
    capabilities: ['Porositas, Permeabilitas Rutin & Khusus (RCAL & SCAL)', 'Analisis PVT Minyak Mentah (CCE, Flash, DLE, Viscosity)', 'Uji Injeksi Kimia Polimer & Surfaktan EOR', 'Tekanan Kapiler & Wetabilitas Batuan Reservoir', 'Reologi & Sifat Fisik Lumpur Pemboran'],
    head: 'Ir. Bambang Triyono, M.Eng.'
  },
  {
    id: 'lab-kalibrasi',
    name: 'Laboratorium Kalibrasi & Instrumentasi Metrologi',
    division: 'penunjang',
    description: 'Layanan kalibrasi alat ukur industri migas, instrumen laboratorium, serta sistem metering custody transfer yang tertelusur ke Standar Nasional Satuan Ukuran (SNSU) dan BIPM internasional.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LK-001-IDN (ISO/IEC 17025:2017)',
    instruments: ['Dead Weight Tester (DWT) Desgranges & Huot', 'Temperature Bath Fluke Calibration Hart Scientific', 'Microbalance Mettler Toledo 6 Desimal', 'Volumetric Prover Tank Standard', 'Precision Digital Multimeter Fluke 8508A'],
    capabilities: ['Kalibrasi Tekanan (Gauge, Barometer, Transmitter)', 'Kalibrasi Suhu (Thermometer, Sensor RTD/TC, Oven, Incubator)', 'Kalibrasi Massa & Timbangan Analitik Presisi', 'Kalibrasi Alat Ukur Volume (Pipet, Buret, Labu Ukur)', 'Kalibrasi Flowmeter & Prover Loop Migas'],
    head: 'Suryo Danu, S.Si., M.T.'
  },
  {
    id: 'lab-lingkungan',
    name: 'Laboratorium Lingkungan & Keselamatan Migas',
    division: 'penunjang',
    description: 'Pengujian sampel limbah air terproduksi (produced water), emisi gas buang cerobong genset/flare, sludge minyak, dan kualitas udara ambien di area kerja operasional hulu maupun hilir migas.',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    kanAccreditation: 'KAN LP-001-IDN & Rekomendasi KLHK',
    instruments: ['Flue Gas Analyzer Testo 350', 'Atomic Absorption Spectrophotometer (AAS)', 'Oil & Grease IR Spectrophotometer', 'Sound Level Meter & Dust Sampler High Volume', 'UV-Vis Spectrophotometer Double Beam'],
    capabilities: ['Kadar Minyak & Lemak (Oil & Grease) Air Buangan', 'Kandungan Logam Berat (Pb, Cd, Cr, As, Hg, Ni)', 'Chemical Oxygen Demand (COD) & BOD5', 'Emisi Gas Buang SO2, NOx, CO, O2, Opasitas', 'Karakterisasi Limbah B3 Sludge Migas'],
    head: 'Dra. Endang Sulistyowati, M.Sc.'
  }
];

export const TARIFF_PARAMETERS: TestParameter[] = [
  // BBM
  { id: 'bbm-01', name: 'Angka Oktan Riset (RON) Mesin CFR', method: 'ASTM D2699', price: 1650000, unit: 'Sampel', durationDays: 3, category: 'bbm' },
  { id: 'bbm-02', name: 'Angka Setana (Cetane Number) Mesin CFR', method: 'ASTM D613', price: 1850000, unit: 'Sampel', durationDays: 3, category: 'bbm' },
  { id: 'bbm-03', name: 'Distilasi Atmosferik ASTM D86', method: 'ASTM D86', price: 450000, unit: 'Sampel', durationDays: 2, category: 'bbm' },
  { id: 'bbm-04', name: 'Massa Jenis / Densitas pada 15°C', method: 'ASTM D4052', price: 275000, unit: 'Sampel', durationDays: 1, category: 'bbm' },
  { id: 'bbm-05', name: 'Kandungan Belerang (Sulfur Content)', method: 'ASTM D4294 / D5453', price: 650000, unit: 'Sampel', durationDays: 2, category: 'bbm' },
  { id: 'bbm-06', name: 'Kadar Bioetanol / Etanol dalam Bensin', method: 'ASTM D4815 / GC', price: 850000, unit: 'Sampel', durationDays: 3, category: 'bbm' },
  { id: 'bbm-07', name: 'Kadar Biodiesel (FAME Content B35/B40)', method: 'EN 14078 / FT-IR', price: 750000, unit: 'Sampel', durationDays: 2, category: 'bbm' },
  { id: 'bbm-08', name: 'Titik Nyala Flash Point Abel / PMCC', method: 'ASTM D93 / IP 170', price: 350000, unit: 'Sampel', durationDays: 1, category: 'bbm' },
  
  // Pelumas
  { id: 'lub-01', name: 'Viskositas Kinematik 40°C & 100°C + VI', method: 'ASTM D445', price: 550000, unit: 'Sampel', durationDays: 2, category: 'pelumas' },
  { id: 'lub-02', name: 'Total Base Number (TBN)', method: 'ASTM D2896', price: 420000, unit: 'Sampel', durationDays: 2, category: 'pelumas' },
  { id: 'lub-03', name: 'Total Acid Number (TAN)', method: 'ASTM D664', price: 420000, unit: 'Sampel', durationDays: 2, category: 'pelumas' },
  { id: 'lub-04', name: 'Kandungan Logam Keausan & Aditif (ICP 22 Unsur)', method: 'ASTM D5185', price: 950000, unit: 'Sampel', durationDays: 3, category: 'pelumas' },
  { id: 'lub-05', name: 'Kecenderungan Berbusa (Foaming Tendency)', method: 'ASTM D892', price: 480000, unit: 'Sampel', durationDays: 2, category: 'pelumas' },
  { id: 'lub-06', name: 'Titik Tuang (Pour Point)', method: 'ASTM D97', price: 320000, unit: 'Sampel', durationDays: 1, category: 'pelumas' },
  { id: 'lub-07', name: 'Kadar Air Karl Fischer Coulo', method: 'ASTM D6304', price: 380000, unit: 'Sampel', durationDays: 1, category: 'pelumas' },

  // Gas Bumi & LPG
  { id: 'gas-01', name: 'Analisis Komposisi Gas C1 - C6+ (Kromatografi Gas)', method: 'GPA 2261 / ASTM D1945', price: 1250000, unit: 'Sampel', durationDays: 3, category: 'gas' },
  { id: 'gas-02', name: 'Gross Heating Value (GHV) & Relative Density', method: 'GPA 2172 / ISO 6976', price: 650000, unit: 'Perhitungan', durationDays: 1, category: 'gas' },
  { id: 'gas-03', name: 'Kandungan H2S & Total Sulfur Gas Bumi', method: 'ASTM D5504 / GC-FPD', price: 950000, unit: 'Sampel', durationDays: 3, category: 'gas' },
  { id: 'gas-04', name: 'Komposisi Campuran LPG (Propana & Butana)', method: 'ASTM D2163', price: 1100000, unit: 'Sampel', durationDays: 2, category: 'gas' },
  { id: 'gas-05', name: 'Tekanan Uap Relatif LPG pada 37.8°C', method: 'ASTM D1267', price: 420000, unit: 'Sampel', durationDays: 2, category: 'gas' },

  // Reservoir
  { id: 'res-01', name: 'Porositas & Permeabilitas Batuan (Routine Core)', method: 'API RP 40', price: 650000, unit: 'Core Plug', durationDays: 4, category: 'reservoir' },
  { id: 'res-02', name: 'Saturasi Fluida Inti Batuan (Dean-Stark)', method: 'API RP 40', price: 580000, unit: 'Core Plug', durationDays: 3, category: 'reservoir' },
  { id: 'res-03', name: 'Petrografi Sayatan Tipis Batuan & Diagenesis', method: 'Visual & Point Counting', price: 950000, unit: 'Sayatan', durationDays: 5, category: 'reservoir' },
  { id: 'res-04', name: 'Analisis Fluida PVT Minyak Mentah (Full Package)', method: 'SPE / OEM Cell', price: 18500000, unit: 'Paket PVT', durationDays: 14, category: 'reservoir' },

  // Korosi & Material
  { id: 'cor-01', name: 'Uji Laju Korosi Bubble Test Inhibitor CO2', method: 'NACE 1D182', price: 2850000, unit: 'Titik Uji', durationDays: 5, category: 'korosi' },
  { id: 'cor-02', name: 'Rotating Cylinder Electrode (RCE) Simulasi Aliran', method: 'ASTM G185', price: 4200000, unit: 'Parameter', durationDays: 6, category: 'korosi' },
  { id: 'cor-03', name: 'Pengujian Autoclave HPHT Korosi H2S/CO2', method: 'NACE TM0177', price: 7800000, unit: 'Spesimen', durationDays: 10, category: 'korosi' },

  // Kalibrasi
  { id: 'cal-01', name: 'Kalibrasi Pressure Gauge / Pressure Transmitter', method: 'DWT & Deadweight Standar', price: 450000, unit: 'Alat', durationDays: 3, category: 'kalibrasi' },
  { id: 'cal-02', name: 'Kalibrasi Sensor Suhu RTD / Thermocouple', method: 'Fluke Dry Well Calibrator', price: 420000, unit: 'Titik', durationDays: 3, category: 'kalibrasi' },
  { id: 'cal-03', name: 'Kalibrasi Timbangan Digital / Analitik Presisi', method: 'Anak Timbang Kelas E2/F1', price: 550000, unit: 'Unit', durationDays: 3, category: 'kalibrasi' }
];

export const MOCK_SAMPLES: SampleTracking[] = [
  {
    sampleCode: 'LMG-2026-BBM-0492',
    customerName: 'PT Pertamina Patra Niaga Regional WBB',
    sampleType: 'Bahan Bakar Minyak - Biosolar B35 (Terminal BBM Plumpang)',
    submissionDate: '24 Oktober 2026',
    estimatedCompletionDate: '29 Oktober 2026',
    currentStep: 5,
    status: 'Selesai',
    progressPercent: 100,
    shuNumber: 'SHU-BBM/LEMIGAS/10/2026/0492',
    notes: 'Seluruh parameter memenuhi Kepdirjen Migas No. 146.K/10/DJM/2020. Sertifikat Hasil Uji telah diterbitkan secara digital dengan QR-Code terverifikasi.',
    parameters: [
      { name: 'Angka Setana (Cetane Number)', method: 'ASTM D613', result: '53.2', spec: 'Min. 51.0', status: 'Completed' },
      { name: 'Massa Jenis pada 15°C', method: 'ASTM D4052', result: '838.4 kg/m³', spec: '815 - 860 kg/m³', status: 'Completed' },
      { name: 'Kandungan Biodiesel FAME', method: 'EN 14078', result: '35.1% vol', spec: '34.0 - 36.0% vol', status: 'Completed' },
      { name: 'Titik Nyala PMCC', method: 'ASTM D93', result: '62.0°C', spec: 'Min. 52.0°C', status: 'Completed' },
      { name: 'Kadar Air', method: 'ASTM D6304', result: '240 mg/kg', spec: 'Maks. 350 mg/kg', status: 'Completed' },
      { name: 'Kandungan Sulfur', method: 'ASTM D4294', result: '42.8 mg/kg', spec: 'Maks. 50.0 mg/kg (Euro 4)', status: 'Completed' }
    ]
  },
  {
    sampleCode: 'LMG-2026-LUB-1088',
    customerName: 'PT Shell Indonesia Lubricants Supply',
    sampleType: 'Pelumas Mesin Kendaraan Bensin SAE 0W-20 API SP Fully Synthetic',
    submissionDate: '27 Oktober 2026',
    estimatedCompletionDate: '02 November 2026',
    currentStep: 3,
    status: 'Pengujian',
    progressPercent: 65,
    shuNumber: 'Draft In-Progress',
    notes: 'Pengujian instrumen ICP-OES dan Viskositas Kinematik telah selesai. Tahap uji Foaming dan Noack Volatility sedang berlangsung.',
    parameters: [
      { name: 'Viskositas Kinematik pada 100°C', method: 'ASTM D445', result: '8.45 cSt', spec: '6.9 - 9.3 cSt', status: 'Completed' },
      { name: 'Indeks Viskositas (VI)', method: 'ASTM D2270', result: '172', spec: 'Min. 150', status: 'Completed' },
      { name: 'Cold Cranking Simulator (-35°C)', method: 'ASTM D5293', result: '5420 mPa.s', spec: 'Maks. 6200 mPa.s', status: 'Completed' },
      { name: 'Logam Aditif (Zn, P, Ca)', method: 'ASTM D5185', result: 'Sesuai Formulasi', spec: 'Memenuhi Syarat API SP', status: 'Completed' },
      { name: 'Penguapan Noack', method: 'ASTM D5800', result: 'Sedang Berlangsung', spec: 'Maks. 14.0%', status: 'In Progress' },
      { name: 'Kecenderungan Berbusa', method: 'ASTM D892', result: 'Dalam Antrean Mesin', spec: 'Maks. 10/0 ml', status: 'Pending' }
    ]
  },
  {
    sampleCode: 'LMG-2026-GAS-0315',
    customerName: 'PT Perusahaan Gas Negara Tbk (PGN SOR II)',
    sampleType: 'Gas Bumi Pipa Transmisi (Natural Gas Pipeline)',
    submissionDate: '28 Oktober 2026',
    estimatedCompletionDate: '31 Oktober 2026',
    currentStep: 4,
    status: 'Validasi SHU',
    progressPercent: 88,
    shuNumber: 'SHU-GAS/LEMIGAS/10/2026/0315-VAL',
    notes: 'Seluruh analisis kromatografi gas dan Gross Heating Value telah selesai dihitung. Menunggu tanda tangan elektronik Manajer Teknis.',
    parameters: [
      { name: 'Metana (Methane C1)', method: 'GPA 2261', result: '91.42% mol', spec: 'Min. 85.0% mol', status: 'Completed' },
      { name: 'Etana (Ethane C2)', method: 'GPA 2261', result: '4.85% mol', spec: 'Maks. 7.0% mol', status: 'Completed' },
      { name: 'Karbon Dioksida (CO2)', method: 'GPA 2261', result: '2.14% mol', spec: 'Maks. 3.0% mol', status: 'Completed' },
      { name: 'Gross Heating Value (GHV)', method: 'ISO 6976', result: '1042 BTU/scf', spec: '950 - 1150 BTU/scf', status: 'Completed' },
      { name: 'H2S Content', method: 'ASTM D5504', result: '< 2.0 ppmv', spec: 'Maks. 4.0 ppmv', status: 'Completed' }
    ]
  }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-01',
    title: 'LEMIGAS Pastikan Kualitas B40 Siap Diterapkan Penuh untuk Sektor Transportasi dan Pembangkit',
    category: 'Siaran Pers',
    date: '28 Oktober 2026',
    summary: 'Hasil uji komprehensif pada uji jalan kendaraan dan uji statis genset menunjukkan stabilitas oksidasi serta kinerja filter bahan bakar memenuhi standar mutu tertinggi.',
    content: 'Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) Direktorat Jenderal Minyak dan Gas Bumi Kementerian ESDM menegaskan kesiapan uji mutu program mandatori Biodiesel 40% (B40). Selama masa uji coba, laboratorium BBM & Biofuel LEMIGAS melakukan monitoring berkala terhadap ratusan parameter bahan bakar, mulai dari filter blocking tendency (FBT), kandungan monogliserida, hingga stabilitas termal pada suhu rendah. Hasil uji menunjukkan performa optimal tanpa kendala signifikan pada komponen injektor mesin modern.',
    author: 'Biro Komunikasi, Layanan Informasi Publik, dan Kerja Sama ESDM',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    readTime: '4 menit baca'
  },
  {
    id: 'news-02',
    title: 'Perkuat Peran BLU, LEMIGAS Dampingi Pengawasan Kualitas Pengadaan Minyak Mentah Nasional',
    category: 'Berita',
    date: '25 Oktober 2026',
    summary: 'Sesuai regulasi terbaru, LEMIGAS berperan strategis mengawal verifikasi kualitas crude oil impor dan domestik guna mengamankan keandalan kilang minyak dalam negeri.',
    content: 'Sebagai Badan Layanan Umum (BLU) terdepan di lingkungan Kementerian ESDM, LEMIGAS terus memperkuat perannya dalam mendukung ketahanan energi nasional. LEMIGAS dipercaya mengawal pengujian kualitas dan verifikasi teknis pengadaan minyak mentah (crude oil assay). Dengan dukungan instrumen modern seperti ICP-MS, TBP Distillation, dan High-Resolution Sulfur Analyzer, LEMIGAS menjamin pasokan minyak mentah yang masuk ke kilang nasional memenuhi parameter yield dan bebas dari kontaminan logam berat berbahaya.',
    author: 'Tim Humas LEMIGAS',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    readTime: '3 menit baca'
  },
  {
    id: 'news-03',
    title: 'Diseminasi Teknologi: Inovasi Penanggulangan Korosi Fasilitas Panas Bumi dan Pipa Migas Lepas Pantai',
    category: 'Kegiatan',
    date: '21 Oktober 2026',
    summary: 'Laboratorium Korosi dan Metalurgi LEMIGAS memaparkan riset mutakhir pemanfaatan inhibitor korosi ramah lingkungan untuk sumur geotermal bersuhu tinggi.',
    content: 'LEMIGAS sukses menyelenggarakan Forum Ilmiah dan Knowledge Sharing bertajuk "Strategi Manajemen Integritas Aset dan Mitigasi Korosi pada Fasilitas Migas & Geothermal". Acara yang dihadiri para kontraktor migas (KKKS), operator panas bumi, serta akademisi ini menyoroti pentingnya simulasi laboratorium bertekanan dan bertemperatur tinggi (HPHT Autoclave) untuk memprediksi umur sisa pipa sebelum terjadi kebocoran yang berisiko merusak lingkungan.',
    author: 'Laboratorium Korosi LEMIGAS',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    readTime: '5 menit baca'
  },
  {
    id: 'news-04',
    title: 'KAN Perpanjang Akreditasi ISO/IEC 17025 LEMIGAS dengan Penambahan 42 Ruang Lingkup Pengujian Baru',
    category: 'Pengumuman',
    date: '15 Oktober 2026',
    summary: 'Komite Akreditasi Nasional (KAN) mengukuhkan status LP-001-IDN dan LK-001-IDN LEMIGAS dengan rekam jejak konsistensi mutu tak terputus selama puluhan tahun.',
    content: 'Kementerian ESDM mengapresiasi pencapaian Balai Besar Pengujian Minyak dan Gas Bumi LEMIGAS yang berhasil mempertahankan predikat akreditasi KAN LP-001-IDN dan LK-001-IDN. Penambahan 42 parameter baru mencakup pengujian bahan bakar penerbangan berkelanjutan (Sustainable Aviation Fuel / SAF), analisis gas hidrogen murni, dan uji kompatibilitas elastomer pelumas ramah lingkungan (biolubricant).',
    author: 'Subbagian Humas & Publikasi',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    readTime: '3 menit baca'
  }
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: 'pub-01',
    title: 'Evaluasi Stabilitas Oksidasi dan Karakteristik Deposit Campuran Bahan Bakar B40 pada Ruang Bakar Mesin Diesel Heavy Duty',
    journal: 'LPMGB',
    volume: 'Vol. 58 No. 2 (2026)',
    year: 2026,
    authors: ['Hendra Wardhana', 'Rian Anggoro', 'Budi Santoso'],
    abstract: 'Kajian ini menganalisis pengaruh penambahan FAME 40% pada bahan bakar solar terhadap laju pembentukan deposit pada injektor dan stabilitas penyimpanan selama 180 hari. Pengujian menggunakan instrumen Rancimat dan rig engine dyno LEMIGAS membuktikan bahwa formulasi aditif antioksidan berbasis fenolik menjaga induction period di atas 20 jam.',
    doi: '10.29017/LPMGB.58.2.1482',
    downloadCount: 428
  },
  {
    id: 'pub-02',
    title: 'Characterization of CO2 Corrosion Kinetics on API 5L X65 Carbon Steel Pipelines under High Shear Stress Using Rotating Cylinder Electrode',
    journal: 'SCOG',
    volume: 'Vol. 47 No. 1 (2026)',
    year: 2026,
    authors: ['Taufik Hidayat', 'Nurul Aini', 'Bambang Soegijono'],
    abstract: 'This paper evaluates the inhibition efficiency of imidazoline derivative corrosion inhibitor in multiphase flow conditions simulating deepwater gas pipelines. Polarization resistance and EIS methods show the protective film stability up to 3000 RPM equivalent linear velocity.',
    doi: '10.29017/SCOG.47.1.982',
    downloadCount: 651
  },
  {
    id: 'pub-03',
    title: 'Geochemical Characterization and Source Rock Potential in Pre-Tertiary Strata of Western Arafura Basin',
    journal: 'LPMGB',
    volume: 'Vol. 57 No. 3 (2025)',
    year: 2025,
    authors: ['Wahyudi Pratama', 'Siti Rahmawati', 'Dedi Mulyadi'],
    abstract: 'Studi geokimia organik menggunakan Rock-Eval Pyrolysis dan kromatografi gas biomarker terhadap 32 sampel inti batuan mengungkap indikasi kematangan termal puncak pada Formasi Kembelangan dengan kerogen Tipe II/III, mengindikasikan potensi hidrokarbon kondensat dan gas basah.',
    doi: '10.29017/LPMGB.57.3.1390',
    downloadCount: 814
  },
  {
    id: 'pub-04',
    title: 'Development of Standard Reference Gas Mixtures for High-Accuracy Fiscal Metering Verification in Indonesia',
    journal: 'SCOG',
    volume: 'Vol. 46 No. 2 (2025)',
    year: 2025,
    authors: ['Agus Budiono', 'Suryo Danu', 'Achmad Faisal'],
    abstract: 'A gravimetric preparation method was developed at LEMIGAS Gas Metrology Division to produce primary natural gas calibration mixtures certified according to ISO 6142-1, yielding relative expanded uncertainties lower than 0.05%.',
    doi: '10.29017/SCOG.46.2.871',
    downloadCount: 390
  }
];

export const PROFILE_HISTORY = {
  milestones: [
    { year: '1965', title: 'Pendirian LEMIGAS', desc: 'Didirikan pada 11 Juni 1965 dengan nama Lembaga Minyak dan Gas Bumi oleh Dr. Ibnu Sutowo, dirancang sebagai pusat riset dan keahlian migas nasional pertama di tanah air.' },
    { year: '1977', title: 'Pusat Pengembangan Teknologi Minyak & Gas Bumi', desc: 'Bertransformasi menjadi PPTMGB LEMIGAS di bawah Departemen Pertambangan dan Energi, menjadi kiblat riset hulu hingga hilir minyak dan gas bumi.' },
    { year: '1990', title: 'Akreditasi Pertama di Indonesia', desc: 'Laboratorium LEMIGAS dinobatkan sebagai institusi pengujian dan kalibrasi pertama yang memperoleh akreditasi KAN dengan kode LP-001-IDN dan LK-001-IDN.' },
    { year: '2008', title: 'Penetapan Pola Pengelolaan Keuangan BLU', desc: 'Berdasarkan Keputusan Menteri Keuangan RI, LEMIGAS resmi mengadopsi status Badan Layanan Umum (BLU) untuk mempercepat dan meningkatkan mutu pelayanan komersial serta publik.' },
    { year: '2021', title: 'Restrukturisasi Balai Besar Pengujian Migas', desc: 'Sesuai Permen ESDM No. 6 Tahun 2021, ditetapkan sebagai Balai Besar Pengujian Minyak dan Gas Bumi (LEMIGAS) di bawah Direktorat Jenderal Minyak dan Gas Bumi.' },
    { year: '2026', title: 'Era Modern & Transisi Energi', desc: 'Memperluas kapasitas laboratorium untuk pengujian Biofuel B35-B40, SAF (Sustainable Aviation Fuel), hidrogen, geothermal, CCS/CCUS, dan perkuatan pengawasan pasokan energi nasional.' }
  ],
  vision: 'Menjadi Balai Besar Pengujian dan Lembaga Layanan Ilmiah Minyak dan Gas Bumi yang Terkemuka, Terpercaya, dan Berdaya Saing Global.',
  mission: [
    'Menyelenggarakan layanan pengujian laboratorium, kalibrasi, inspeksi teknis, dan sertifikasi produk minyak dan gas bumi yang profesional, akurat, dan berbasis standar internasional.',
    'Mendukung ketahanan energi nasional dan kepastian mutu komoditas energi melalui pengawasan kualitas produk migas dan bahan bakar nabati.',
    'Mengembangkan kapabilitas teknologi, metodologi pengujian mutakhir, dan kompetensi sumber daya manusia di sektor minyak, gas bumi, dan energi baru terbarukan.',
    'Memberikan pelayanan publik yang transparan, akuntabel, bebas korupsi, dan berorientasi pada kepuasan pelanggan sebagai Badan Layanan Umum (BLU).'
  ],
  values: [
    { letter: 'Ber', word: 'Berorientasi Pelayanan', desc: 'Berkomitmen memberikan pelayanan prima demi kepuasan pelanggan dan masyarakat.' },
    { letter: 'A', word: 'Akuntabel', desc: 'Bertanggung jawab atas kepercayaan yang diberikan dengan integritas tinggi dan transparan.' },
    { letter: 'K', word: 'Kompeten', desc: 'Terus belajar dan mengembangkan kapabilitas ilmiah serta teknologi pengujian.' },
    { letter: 'H', word: 'Harmonis', desc: 'Saling peduli dan menghargai keberagaman serta menjalin kolaborasi positif.' },
    { letter: 'L', word: 'Loyal', desc: 'Berdedikasi dan mengutamakan kepentingan bangsa, negara, dan kedaulatan energi.' },
    { letter: 'A', word: 'Adaptif', desc: 'Terus berinovasi dan antusias dalam menggerakkan ataupun menghadapi perubahan teknologi.' },
    { letter: 'K', word: 'Kolaboratif', desc: 'Membangun kerja sama yang sinergis dengan seluruh pemangku kepentingan industri energi.' }
  ]
};

export const FAQ_LIST = [
  {
    q: 'Bagaimana alur pengiriman sampel pengujian ke PILT LEMIGAS?',
    a: 'Pelanggan dapat membawa sampel langsung ke Pusat Informasi Layanan Terpadu (PILT) di Kampus LEMIGAS Cipulir, atau mengirimkan melalui jasa kurir terpercaya yang dilengkapi Formulir Permohonan Pengujian (FPPU) online serta Safety Data Sheet (SDS) bahan. PILT akan memverifikasi volume dan kemasan sampel sebelum menerbitkan nomor registrasi bukti terima sampel.'
  },
  {
    q: 'Berapa volume minimal sampel BBM dan Pelumas yang harus diserahkan?',
    a: 'Untuk pengujian spesifikasi lengkap BBM komersial dibutuhkan minimal 5 liter (dalam wadah kaleng tertutup khusus atau botol kaca amber). Untuk sampel pelumas dibutuhkan 1 hingga 2 liter tergantung paket parameter yang dipilih.'
  },
  {
    q: 'Bagaimana cara memeriksa keaslian Sertifikat Hasil Uji (SHU) LEMIGAS?',
    a: 'Setiap SHU resmi yang diterbitkan LEMIGAS memiliki kode unik dan QR Code bertanda tangan elektronik tersertifikasi BSrE / BSSN. Pindai QR Code tersebut pada portal resmi lemigas.esdm.go.id untuk memvalidasi nomor dokumen, nama pelanggan, tanggal pengesahan, dan rincian parameter uji.'
  },
  {
    q: 'Apakah LEMIGAS melayani kalibrasi alat ukur langsung di lokasi (on-site)?',
    a: 'Ya, Laboratorium Kalibrasi LEMIGAS (KAN LK-001-IDN) melayani kalibrasi in-situ / on-site untuk instrumen stasiun metering migas, prover tank, tangki timbun, dan instrumen industri yang tidak memungkinkan dikirim ke laboratorium Cipulir.'
  },
  {
    q: 'Bagaimana mekanisme pembayaran biaya pengujian BLU LEMIGAS?',
    a: 'Pembayaran dilakukan secara non-tunai melalui sistem SIMPONI (Sistem Informasi PNBP Online) Kementerian Keuangan menggunakan Kode Billing yang diterbitkan oleh Bagian Keuangan LEMIGAS, dan dapat dibayarkan melalui seluruh bank persepsi, ATM, atau mobile banking.'
  }
];
