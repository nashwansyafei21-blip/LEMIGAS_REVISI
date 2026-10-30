export type NavigationTab = 
  | 'beranda'
  | 'profil'
  | 'layanan'
  | 'laboratorium'
  | 'tarif'
  | 'pilt'
  | 'publikasi'
  | 'berita'
  | 'ppid'
  | 'kontak';

export interface TestParameter {
  id: string;
  name: string;
  method: string;
  price: number;
  unit: string;
  durationDays: number;
  category: 'bbm' | 'pelumas' | 'gas' | 'reservoir' | 'korosi' | 'lingkungan' | 'kalibrasi';
}

export interface Laboratory {
  id: string;
  name: string;
  division: 'hulu' | 'hilir' | 'penunjang';
  description: string;
  image: string;
  kanAccreditation: string;
  instruments: string[];
  capabilities: string[];
  head: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Berita' | 'Siaran Pers' | 'Kegiatan' | 'Pengumuman';
  date: string;
  summary: string;
  content: string;
  author: string;
  image: string;
  readTime: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  journal: 'LPMGB' | 'SCOG' | 'Prosiding';
  volume: string;
  year: number;
  authors: string[];
  abstract: string;
  doi: string;
  downloadCount: number;
}

export interface SampleTracking {
  sampleCode: string;
  customerName: string;
  sampleType: string;
  submissionDate: string;
  estimatedCompletionDate: string;
  currentStep: number; // 1 to 5
  status: 'Penerimaan' | 'Kaji Ulang' | 'Pengujian' | 'Validasi SHU' | 'Selesai';
  progressPercent: number;
  parameters: {
    name: string;
    method: string;
    result: string;
    spec: string;
    status: 'Pending' | 'In Progress' | 'Completed';
  }[];
  notes?: string;
  shuNumber?: string;
}
