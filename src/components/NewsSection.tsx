import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  FileText, 
  Newspaper, 
  Search, 
  Share2, 
  Tag, 
  User 
} from 'lucide-react';
import { NEWS_DATA } from '../data/lemigasData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState<NewsItem | null>(null);

  const filteredNews = NEWS_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="berita-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full mb-2">
              <Newspaper className="w-3.5 h-3.5 text-blue-800" />
              <span>Kabar Terkini & Siaran Pers ESDM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              Informasi & Berita Seputar LEMIGAS
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Ikuti perkembangan riset teknologi, uji komoditas energi, regulasi mutu bahan bakar, dan kegiatan ilmiah sektor minyak dan gas bumi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {['all', 'Siaran Pers', 'Berita', 'Kegiatan', 'Pengumuman'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0B2545] text-amber-300'
                    : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              onClick={() => setReadingArticle(news)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* News Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0B2545]/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                    {news.category}
                  </div>
                </div>

                {/* News Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{news.date}</span>
                    <span>•</span>
                    <span>{news.readTime}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-900 transition-colors line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
              <div className="relative h-60 w-full bg-slate-950">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="absolute top-4 right-4 bg-black/40 text-white hover:bg-black/70 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-amber-300 uppercase">
                    {readingArticle.category} &bull; {readingArticle.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold leading-snug mt-1">
                    {readingArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500">
                  <span>Penulis: <strong className="text-slate-800">{readingArticle.author}</strong></span>
                  <span>Waktu Baca: {readingArticle.readTime}</span>
                </div>

                <div className="font-medium text-slate-800 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
                  "{readingArticle.summary}"
                </div>

                <p>{readingArticle.content}</p>

                <p>
                  Melalui penguatan sarana dan prasarana laboratorium serta kapabilitas sumber daya manusia berstandar internasional, LEMIGAS berkomitmen terus mendampingi pemerintah dan pelaku industri dalam menghadapi dinamika transisi energi serta menjaga ketahanan pasokan energi nasional.
                </p>
              </div>

              <div className="flex justify-between items-center p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl text-xs">
                <span className="text-slate-500">Kementerian ESDM &bull; Ditjen Migas</span>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-4 py-2 rounded-lg font-bold bg-[#0B2545] hover:bg-blue-800 text-amber-300"
                >
                  Tutup Berita
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
