import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Languages, 
  Zap, 
  ArrowRight,
  Menu,
  X,
  Smartphone,
  Sparkles,
  Search,
  ShoppingCart,
  Layers,
  Globe,
  Star
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

// 30 Kitaplık Zengin Liste - Otheca Kürasyonu
const BOOKS = [
  { id: 1, title: 'Suç ve Ceza', author: 'Fyodor Dostoyevski', category: 'Klasik' },
  { id: 2, title: 'Yabancı', author: 'Albert Camus', category: 'Klasik' },
  { id: 3, title: 'Dönüşüm', author: 'Franz Kafka', category: 'Klasik' },
  { id: 4, title: '1984', author: 'George Orwell', category: 'Klasik' },
  { id: 5, title: 'Satranç', author: 'Stefan Zweig', category: 'Klasik' },
  { id: 6, title: 'Küçük Prens', author: 'Antoine de Saint-Exupéry', category: 'Klasik' },
  { id: 7, title: 'Martin Eden', author: 'Jack London', category: 'Klasik' },
  { id: 8, title: 'Fareler ve İnsanlar', author: 'John Steinbeck', category: 'Klasik' },
  { id: 9, title: 'Saatleri Ayarlama Enstitüsü', author: 'Ahmet Hamdi Tanpınar', category: 'Klasik' },
  { id: 10, title: 'Beyaz Geceler', author: 'Fyodor Dostoyevski', category: 'Klasik' },
  { id: 11, title: 'Cesur Yeni Dünya', author: 'Aldous Huxley', category: 'Bilimkurgu' },
  { id: 12, title: 'Mülksüzler', author: 'Ursula K. Le Guin', category: 'Bilimkurgu' },
  { id: 13, title: 'Vakıf', author: 'Isaac Asimov', category: 'Bilimkurgu' },
  { id: 14, title: 'Fahrenheit 451', author: 'Ray Bradbury', category: 'Bilimkurgu' },
  { id: 15, title: 'Otostopçunun Galaksi Rehberi', author: 'Douglas Adams', category: 'Bilimkurgu' },
  { id: 16, title: 'Androidler Elektrikli Koyun Düşler mi?', author: 'Philip K. Dick', category: 'Bilimkurgu' },
  { id: 17, title: 'Böyle Buyurdu Zerdüşt', author: 'Friedrich Nietzsche', category: 'Felsefe' },
  { id: 18, title: 'Denemeler', author: 'Michel de Montaigne', category: 'Felsefe' },
  { id: 19, title: 'Kendime Düşünceler', author: 'Marcus Aurelius', category: 'Felsefe' },
  { id: 20, title: 'Ütopya', author: 'Thomas More', category: 'Felsefe' },
  { id: 21, title: 'Sokrates\'in Savunması', author: 'Platon', category: 'Felsefe' },
  { id: 22, title: 'Yüzyıllık Yalnızlık', author: 'Gabriel García Márquez', category: 'Modern' },
  { id: 23, title: 'Körlük', author: 'José Saramago', category: 'Modern' },
  { id: 24, title: 'Gülün Adı', author: 'Umberto Eco', category: 'Modern' },
  { id: 25, title: 'Puslu Kıtalar Atlası', author: 'İhsan Oktay Anar', category: 'Modern' },
  { id: 26, title: 'Tutunamayanlar', author: 'Oğuz Atay', category: 'Modern' },
  { id: 27, title: 'Siddhartha', author: 'Hermann Hesse', category: 'Modern' },
  { id: 28, title: 'Varolmanın Dayanılmaz Hafifliği', author: 'Milan Kundera', category: 'Modern' },
  { id: 29, title: 'Simyacı', author: 'Paulo Coelho', category: 'Modern' },
  { id: 30, title: 'Semerkant', author: 'Amin Maalouf', category: 'Modern' },
];

const ModernButton = ({ children, primary = false, className = "", onClick = () => {} }: { children: ReactNode, primary?: boolean, className?: string, onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`relative overflow-hidden px-8 h-14 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
      primary 
      ? 'bg-black text-white shadow-[0_20px_40px_rgba(0,0,0,0.2)]' 
      : 'bg-white text-stone-900 border border-stone-100 shadow-sm'
    } ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
    {children}
  </motion.button>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [category, setCategory] = useState('Tümü');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = category === 'Tümü' ? BOOKS : BOOKS.filter(b => b.category === category);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans selection:bg-orange-100 selection:text-orange-950">
      
      {/* Smart Island Nav */}
      <div className="fixed top-6 left-0 w-full z-[100] px-4">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`max-w-4xl mx-auto flex items-center justify-between p-2 rounded-[2rem] border transition-all duration-700 shadow-2xl backdrop-blur-3xl ${
            scrolled ? 'bg-white/80 border-stone-200 py-3 px-6' : 'bg-stone-50/50 border-stone-100 py-4 px-8'
          }`}
        >
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-xl font-black tracking-[0.3em] uppercase italic group-hover:tracking-[0.4em] transition-all">OTHECΛ</span>
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            {['Octopus', 'AI Engine', 'Kataloğ'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-stone-100 transition-colors">
              <Search size={16} />
            </button>
            <ModernButton primary className="h-11 px-6 text-[9px]">SİPARİŞ</ModernButton>
            <button className="md:hidden w-10 h-10 flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Hero Section */}
      <section id="octopus" className="relative min-h-screen flex items-center pt-32 lg:pt-0">
        <div className="max-w-8xl mx-auto px-8 grid lg:grid-cols-2 gap-12 w-full items-center">
          
          <div className="space-y-12 text-center lg:text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 justify-center lg:justify-start">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-500">Yeni Nesil Kitapçı</span>
               <div className="h-[1px] w-12 bg-orange-100" />
            </motion.div>

            <h1 className="text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.8] text-stone-900 group">
              OCTO<br/>PUS
              <motion.span 
                animate={{ rotate: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block text-orange-500"
              >
                .
              </motion.span>
            </h1>

            <div className="max-w-lg mx-auto lg:mx-0 space-y-8">
              <p className="text-2xl font-light text-stone-500 leading-snug italic">
                3.7 inçlik bir devrim. Cebinizde taşıyın, her an okuyun.
              </p>
              <p className="text-lg text-stone-400 font-light leading-relaxed">
                Otheca'nın AI destekli kütüphanesiyle diller arası sınırları kaldırın. 
                Uygun fiyatlı binlerce e-kitap Octopus'un kağıt hissiyatlı ekranında hayat buluyor.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
                <div className="text-center lg:text-left pr-8 border-r border-stone-100 hidden sm:block">
                  <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest block mb-1">Fiyat</span>
                  <span className="text-4xl font-black">2399 TL</span>
                </div>
                <ModernButton primary className="w-full sm:w-auto h-20 px-12 text-xs">
                  Hemen Satın Al
                  <ArrowRight size={18} />
                </ModernButton>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 5 }} 
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <img 
                src="/input_file_0.png" 
                alt="Octopus Device" 
                className="w-full max-w-xl h-auto drop-shadow-[0_50px_80px_rgba(0,0,0,0.12)] group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000";
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-100/30 blur-[120px] rounded-full -z-10" />
              
              {/* Floating Tooltips */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 bg-white p-5 rounded-2xl shadow-xl hidden lg:block border border-stone-50">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-white"><Layers size={18}/></div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest">3.7 INCH</div>
                      <div className="text-[8px] text-stone-400 font-bold uppercase tracking-widest">TÜM DİLLERDE</div>
                    </div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features */}
      <section id="aiengine" className="py-40 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900"><Languages size={28}/></div>
              <h3 className="text-3xl font-bold tracking-tight">AI Çeviri Motoru</h3>
              <p className="text-stone-400 font-light leading-relaxed">Dünyanın herhangi bir yerindeki kitabı saniyeler içinde edebi bir dille Türkçeye çevirin.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900"><Zap size={28}/></div>
              <h3 className="text-3xl font-bold tracking-tight">Anında Senkronize</h3>
              <p className="text-stone-400 font-light leading-relaxed">Otheca kütüphanesinden aldığınız her eser, anında Octopus cihazınıza kablosuz olarak ulaşır.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900"><Smartphone size={28}/></div>
              <h3 className="text-3xl font-bold tracking-tight">Her Yerde Sizinle</h3>
              <p className="text-stone-400 font-light leading-relaxed">Magnetik yapısı sayesinde mutfağınızdan arabanıza kadar her yüzeye yapıştırın ve okumaya devam edin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Catalog */}
      <section id="kataloğ" className="py-40">
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6 max-w-xl text-center lg:text-left">
              <h2 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none">KATALOG</h2>
              <p className="text-xl text-stone-400 font-light">
                Otheca'nın küratörleri tarafından seçilen 30 başyapıt. Octopus için optimize edilmiş dijital deneyim.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {['Tümü', 'Klasik', 'Bilimkurgu', 'Felsefe', 'Modern'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-8 h-14 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                    category === cat ? 'bg-black text-white shadow-xl' : 'bg-white border border-stone-100 text-stone-400 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-20">
            <AnimatePresence mode='popLayout'>
              {filtered.map((book, idx) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.02 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4.5] bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-700">
                    <div className="absolute inset-0 bg-stone-50 flex flex-col items-center justify-center p-8 text-center">
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-300 mb-6">{book.category}</span>
                       <h4 className="text-xl font-serif italic text-stone-800 leading-tight mb-4">{book.title}</h4>
                       <div className="w-6 h-[1px] bg-stone-200 mb-4" />
                       <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400">{book.author}</p>
                    </div>
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.03] to-transparent pointer-events-none" />
                  </div>
                  <div className="mt-6 flex justify-between items-start gap-4">
                     <div className="flex-1">
                        <h5 className="text-[11px] font-bold tracking-widest uppercase truncate">{book.title}</h5>
                        <p className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">{book.author}</p>
                     </div>
                     <Star size={12} className="text-orange-500 fill-orange-500 mt-1" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 border-t border-stone-100">
        <div className="max-w-5xl mx-auto px-8 text-center space-y-16">
          <h2 className="text-6xl lg:text-9xl font-black tracking-tighter leading-[0.8] italic">BİNLERCE KİTAP,<br/>TEK BİR AVUÇ.</h2>
          <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
            Octopus sadece bir cihaz değil, Otheca ise sadece bir kitapçı değil. Geleceğin okuma kültürü burada başlıyor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <ModernButton primary className="h-20 px-16 text-xs">ŞİMDİ SİPARİŞ VER — 2399 TL</ModernButton>
            <ModernButton className="h-20 px-16 text-xs">ÖZELLİKLERİ İNCELE</ModernButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <div className="grid lg:grid-cols-4 gap-24">
             <div className="space-y-8">
                <span className="text-4xl font-black tracking-[0.2em] uppercase italic">OTHECΛ</span>
                <p className="text-stone-400 font-light leading-relaxed text-sm">
                  İstanbul'dan dünyaya açılan yeni nesil edebiyat ekosistemi. Octopus ile sınırları aşın.
                </p>
             </div>
             <div className="space-y-8">
                <h6 className="text-[10px] font-black uppercase tracking-[0.2em]">Kategorİler</h6>
                <ul className="space-y-4 text-xs font-bold text-stone-400">
                  <li><a href="#" className="hover:text-black transition-colors">Klasikler</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Bilimkurgu</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Modern Edebiyat</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Felsefe</a></li>
                </ul>
             </div>
             <div className="space-y-8">
                <h6 className="text-[10px] font-black uppercase tracking-[0.2em]">Destek</h6>
                <ul className="space-y-4 text-xs font-bold text-stone-400">
                  <li><a href="#" className="hover:text-black transition-colors">Octopus Yardım</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Kargo Takip</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">İade Politikası</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">SSS</a></li>
                </ul>
             </div>
             <div className="space-y-8">
                <h6 className="text-[10px] font-black uppercase tracking-[0.2em]">Bülten</h6>
                <div className="flex gap-2">
                   <input type="email" placeholder="Email adresi" className="bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-xs w-full focus:outline-none focus:border-stone-300" />
                   <button className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center"><ArrowRight size={16}/></button>
                </div>
             </div>
          </div>
          <div className="mt-40 pt-10 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center gap-8">
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-stone-300">© 2026 OTHECA. İSTANBUL.</span>
             <div className="flex gap-12 text-[9px] font-bold uppercase tracking-widest text-stone-300">
                <a href="#">KVKK</a>
                <a href="#">TASARIM</a>
                <a href="#">KULLANIM</a>
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e5e5e0; border-radius: 10px; }
      `}</style>
    </div>
  );
}
