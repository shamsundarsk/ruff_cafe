/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Coffee, 
  Dog, 
  Music, 
  Utensils, 
  Star, 
  Heart, 
  Zap, 
  Sun, 
  Moon, 
  ArrowRight,
  ChevronRight,
  Info,
  Clock,
  MapPin,
  Smile,
  RefreshCcw,
  Camera,
  Scissors,
  Flame,
  Layers,
  Package,
  Heart as HeartIcon
} from "lucide-react";

// --- Illustration Assets ---
const IMAGES = {
  PANCAKES: "/pancakes.png",
  BURGER: "/burger.png",
  FAVORITES: "/favorites.png",
  HERO_MASCOT: "/mascot_hero.png",
  PANCAKE_COMIC: "/pancake_comic.png",
  MASCOT_BURGER: "/mascot_burger.png"
};

// --- Food Illustrations (Hand-Drawn Style) ---

const BurgerIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className}>
    <path d="M15 45 Q15 15 50 15 Q85 15 85 45" fill="#E67E22" stroke="black" strokeWidth="3" />
    <path d="M15 45 Q20 40 25 45 Q30 50 35 45 Q40 40 45 45 Q50 50 55 45 Q60 40 65 45 Q70 50 75 45 Q80 40 85 45 L85 52 L15 52 Z" fill="#2ECC71" stroke="black" strokeWidth="3" />
    <path d="M15 52 L85 52 L80 62 L20 62 Z" fill="#F1C40F" stroke="black" strokeWidth="3" />
    <rect x="15" y="62" width="70" height="12" rx="4" fill="#603813" stroke="black" strokeWidth="3" />
    <path d="M15 74 L85 74 Q85 85 50 85 Q15 85 15 74 Z" fill="#E67E22" stroke="black" strokeWidth="3" />
    <motion.path animate={{ opacity: [0, 1, 0], y: [0, -5, -10] }} transition={{ repeat: Infinity, duration: 2 }} d="M40 10 Q45 5 50 10" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <motion.path animate={{ opacity: [0, 1, 0], y: [0, -5, -10] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} d="M55 8 Q60 3 65 8" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </motion.svg>
);

const PizzaIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className}>
    <path d="M50 10 Q92 14 88 52 Q92 88 50 92 Q8 88 12 52 Q8 14 50 10" fill="#D35400" stroke="black" strokeWidth="3" />
    <path d="M50 20 Q80 24 76 52 Q80 78 50 82 Q20 78 24 52 Q20 24 50 20" fill="#F1C40F" stroke="black" strokeWidth="3" />
    <circle cx="45" cy="35" r="6" fill="#C0392B" stroke="black" strokeWidth="2" />
    <circle cx="65" cy="48" r="6" fill="#C0392B" stroke="black" strokeWidth="2" />
    <circle cx="40" cy="65" r="6" fill="#C0392B" stroke="black" strokeWidth="2" />
    <circle cx="58" cy="72" r="5" fill="#C0392B" stroke="black" strokeWidth="2" />
  </motion.svg>
);

const ShakeIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className}>
    <line x1="60" y1="5" x2="50" y2="40" stroke="black" strokeWidth="4" strokeLinecap="round" />
    <path d="M30 35 Q30 15 50 10 Q70 15 70 35" fill="white" stroke="black" strokeWidth="3" />
    <path d="M30 35 L38 88 Q40 95 50 95 Q60 95 62 88 L70 35" fill="#FDFEFE" fillOpacity="0.5" stroke="black" strokeWidth="3" />
    <path d="M32 45 L38 88 Q40 95 50 95 Q60 95 62 88 L68 45 Z" fill="#E74C3C" stroke="black" strokeWidth="2" />
  </motion.svg>
);

const PancakeIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className}>
    <ellipse cx="50" cy="80" rx="35" ry="8" fill="#F39C12" stroke="black" strokeWidth="3" />
    <ellipse cx="50" cy="70" rx="35" ry="8" fill="#F39C12" stroke="black" strokeWidth="3" />
    <ellipse cx="50" cy="60" rx="35" ry="8" fill="#F39C12" stroke="black" strokeWidth="3" />
    <path d="M25 60 Q50 68 75 60 L75 52 Q50 60 25 52 Z" fill="#D35400" stroke="black" strokeWidth="2" />
    <path d="M45 60 Q45 82 50 82 Q55 82 55 60" fill="#D35400" stroke="black" strokeWidth="2" />
    <circle cx="42" cy="52" r="4" fill="#C0392B" stroke="black" strokeWidth="2" />
    <circle cx="58" cy="54" r="4" fill="#C0392B" stroke="black" strokeWidth="2" />
  </motion.svg>
);

const SnacksIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className}>
    <path d="M30 45 L38 90 L62 90 L70 45 Z" fill="#E74C3C" stroke="black" strokeWidth="3" />
    <rect x="35" y="15" width="6" height="40" fill="#F1C40F" stroke="black" strokeWidth="2" />
    <rect x="42" y="5" width="6" height="50" fill="#F1C40F" stroke="black" strokeWidth="2" />
    <rect x="50" y="20" width="6" height="35" fill="#F1C40F" stroke="black" strokeWidth="2" />
    <rect x="58" y="10" width="6" height="45" fill="#F1C40F" stroke="black" strokeWidth="2" />
    <motion.line animate={{ opacity: [0, 1, 0], x: [0, 10] }} transition={{ repeat: Infinity, duration: 1.5 }} x1="10" y1="50" x2="25" y2="50" stroke="black" strokeWidth="2" />
  </motion.svg>
);

const SandwichIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className}>
    <path d="M10 70 L90 70 L50 20 Z" fill="#E67E22" stroke="black" strokeWidth="3" />
    <path d="M10 70 L90 70 L90 80 L10 80 Z" fill="#F39C12" stroke="black" strokeWidth="3" />
    <path d="M20 60 Q30 50 40 60 Q50 70 60 60 Q70 50 80 60" fill="none" stroke="#2ECC71" strokeWidth="4" />
  </motion.svg>
);

const BitesIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className}>
    <path d="M20 40 Q25 30 35 40 Q45 50 50 40 Q55 30 65 40 Q75 50 80 40" fill="none" stroke="#603813" strokeWidth="8" strokeLinecap="round" />
    <circle cx="20" cy="40" r="5" fill="#F39C12" stroke="black" strokeWidth="2" />
    <circle cx="50" cy="40" r="5" fill="#F39C12" stroke="black" strokeWidth="2" />
    <circle cx="80" cy="40" r="5" fill="#F39C12" stroke="black" strokeWidth="2" />
  </motion.svg>
);

// --- Components ---

const Sticker = ({ children, color = "bg-white", rotate = 0, className = "" }: { children: React.ReactNode, color?: string, rotate?: number, className?: string }) => (
  <motion.div 
    whileHover={{ scale: 1.1, rotate: rotate + 5 }}
    style={{ rotate }}
    className={`inline-block px-3 py-1 border-2 border-black font-mono text-[10px] font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${color} ${className}`}
  >
    {children}
  </motion.div>
);

const Stamp = ({ icon: Icon, color = "text-black", className = "" }: { icon: any, color?: string, className?: string }) => (
  <div className={`p-2 border-2 border-dashed border-current rounded-full ${color} ${className}`}>
    <Icon size={16} strokeWidth={3} />
  </div>
);

const Panel = ({ children, className = "", innerClassName = "", noBorder = false, halftone = false }: { children: React.ReactNode, className?: string, innerClassName?: string, noBorder?: boolean, halftone?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`relative bg-transparent ${!noBorder ? "border-2 border-black hand-drawn" : ""} ${className}`}
  >
    {halftone && <div className="absolute inset-0 halftone pointer-events-none" />}
    <div className={`relative z-10 h-full w-full ${innerClassName}`}>
      {children}
    </div>
  </motion.div>
);

const SpeechBubble = ({ children, className = "" }: { children: string, className?: string }) => (
  <div className={`relative bg-white border-2 border-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${className}`}>
    {children}
    <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black" />
    <div className="absolute -bottom-[6px] left-4 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white" />
  </div>
);

const ComicBurst = ({ className = "", children }: { className?: string, children: React.ReactNode }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-yellow-400 border-4 border-black hand-drawn scale-110 rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="paper-texture min-h-screen p-4 md:p-8 max-w-[1200px] mx-auto space-y-4 md:space-y-8">
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[200] bg-[#F2F0E4] flex items-center justify-center p-8"
          >
            <div className="relative">
              <ComicBurst className="scale-[2] md:scale-[3]">
                <div className="px-4 py-2 font-black text-2xl md:text-4xl uppercase tracking-tighter text-center">
                  RUFF<br/>CAFE
                </div>
              </ComicBurst>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2"
              >
                <RefreshCcw size={32} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG Filter for Hand-Drawn Effect */}
      <svg className="hidden">
        <filter id="rough-edges">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </svg>

      {/* Comic-style Scroll Progress */}
      <div className="fixed top-4 right-4 z-[100] w-32 h-4 border-2 border-black bg-white hand-drawn overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <motion.div 
          className="h-full bg-[#FF4E00]"
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        />
        <div className="absolute inset-0 flex justify-between px-1">
          {[...Array(4)].map((_, i) => <div key={i} className="w-[2px] h-full bg-black/20" />)}
        </div>
      </div>

      {/* 1. HERO PANEL (TOP) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        {/* Left Sidebar Info */}
        <Panel className="md:col-span-1 flex flex-col items-center justify-between py-8 bg-white/50">
          <div className="vertical-text font-black text-4xl uppercase tracking-tighter leading-none">
            MENU
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <Stamp icon={Star} color="text-[#FF4E00]" />
            <div className="vertical-text font-mono text-[10px] font-bold opacity-40">
              EST. 2026 / TOKYO
            </div>
          </div>
        </Panel>

        {/* Main Hero Content */}
        <Panel className="md:col-span-11 bg-white overflow-hidden border-2 border-black" innerClassName="grid grid-cols-1 lg:grid-cols-2" halftone>
          <div className="p-8 md:p-12 flex flex-col justify-between relative border-b-2 lg:border-b-0 lg:border-r-2 border-black z-20">
            <div className="space-y-6">
              <div className="flex gap-2">
                <Sticker color="bg-[#FF4E00] text-white">New Arrival</Sticker>
                <Sticker color="bg-[#2D5A27] text-white">Special</Sticker>
              </div>
              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-4">
                RUFF<br/>CAFE
              </h1>
              <p className="text-sm font-bold uppercase tracking-widest opacity-60 max-w-xs">
                A scrolling illustrated feast / comic menu experience for the most stylish cafe-goers.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-yellow-400 shadow-[2px_2px_0px_rgba(0,0,0,1)] hand-drawn">
                <Dog className="w-6 h-6" />
              </div>
              <div>
                <div className="font-black text-xs uppercase">Signature Menu</div>
                <div className="font-mono text-[10px] opacity-40 uppercase">Victoria Cafe & Kitchen</div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] flex items-center justify-center bg-yellow-400 overflow-hidden group">
             {/* Beautiful massive comic image covering the whole right half */}
             <img 
                src={IMAGES.HERO_MASCOT} 
                className="absolute inset-0 w-[120%] h-[120%] left-[-10%] bottom-[-10%] object-cover object-bottom mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Hero Mascot"
             />
             <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
             
             {/* Circular badge in corner */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4 }}
               className="absolute bottom-12 right-12 z-20 hidden md:block"
             >
               <div className="w-32 h-32 md:w-48 md:h-48 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hand-drawn group-hover:-translate-y-2 group-hover:scale-105 transition-all">
                 <Dog className="w-20 h-20 md:w-32 md:h-32 text-black" strokeWidth={1.5} />
               </div>
               <SpeechBubble className="absolute -top-4 -right-2">Woof!</SpeechBubble>
               <div className="absolute -bottom-4 -left-4 bg-white border-2 border-black p-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hand-drawn">
                 <div className="flex gap-1 mb-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-yellow-400 text-yellow-400" />)}
                 </div>
                 <div className="font-black text-[10px] uppercase">Best Breakfast</div>
               </div>
             </motion.div>
          </div>
        </Panel>
      </div>

      {/* 2. HOW IT'S MADE (BURGER PROCESS) */}
      <div className="space-y-4 relative">
        <div className="flex items-center gap-4 relative z-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter">HOW IT’S MADE</h2>
          <div className="h-1 flex-1 bg-black" />
          <Sticker color="bg-yellow-400">Signature Burger</Sticker>
        </div>
        
        {/* Large Burger Background Illustration */}
        <div className="absolute -right-12 -top-12 w-64 h-64 opacity-20 pointer-events-none z-0 overflow-hidden hidden md:block">
           <motion.img 
             animate={{ rotate: [0, 2, -2, 0] }}
             transition={{ repeat: Infinity, duration: 8 }}
             src={IMAGES.BURGER} 
             className="w-full h-full object-cover grayscale brightness-200"
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {[
            { id: 1, title: "COOKING", icon: Flame, color: "bg-orange-100", text: "Flame-grilling our premium beef patty.", halftone: true, extra: <div className="absolute top-2 right-2 scale-75 rotate-12 font-black italic opacity-20">SIZZLE!</div> },
            { id: 2, title: "LAYERING", icon: Layers, color: "bg-green-100", text: "Fresh lettuce, cheese, and tomatoes.", halftone: false, extra: <SpeechBubble className="absolute -top-4 -right-2 scale-75">Fresh!</SpeechBubble> },
            { id: 3, title: "ASSEMBLING", icon: Package, color: "bg-blue-100", text: "Stacked to perfection with toasted buns.", halftone: true, extra: <div className="absolute bottom-10 right-2 rotate-45"><Star className="text-yellow-400 fill-yellow-400" size={20} /></div> },
            { id: 4, title: "HAPPY", icon: Utensils, color: "bg-red-100", text: "Messy. Worth it. Delivered for you.", halftone: false, extra: <div className="absolute top-1/2 left-4 -translate-y-1/2 -rotate-12 font-black text-2xl opacity-10">CHOMP!</div> }
          ].map((panel) => (
            <Panel key={panel.id} halftone={panel.halftone} className={`${panel.color} p-6 h-64 flex flex-col justify-between group overflow-hidden`}>
              <div className="flex justify-between items-start relative z-20">
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-black text-sm bg-white">
                  {panel.id}
                </div>
                <Sticker rotate={-5} className="group-hover:bg-black group-hover:text-white transition-colors">
                  {panel.title}
                </Sticker>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="relative z-10"
                >
                  <panel.icon size={48} strokeWidth={1.5} />
                </motion.div>
                {panel.extra}
                
                {/* Subtle Background Ghosting for Step 4 */}
                {panel.id === 4 && (
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={IMAGES.BURGER} 
                    className="absolute inset-0 w-full h-full object-contain mix-blend-multiply opacity-30 -rotate-3 scale-110 md:translate-x-4"
                  />
                )}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute top-1/4 left-0 w-8 h-1 bg-black -translate-y-1/2" />
                  <div className="absolute bottom-1/4 right-0 w-8 h-1 bg-black -translate-y-1/2" />
                </div>
              </div>
              
              <p className="font-mono text-[10px] font-bold uppercase tracking-tight text-center relative z-20">
                {panel.text}
              </p>
            </Panel>
          ))}
        </div>
      </div>

      {/* 3. FEATURE PANEL (DESSERT) */}
      <Panel className="bg-white overflow-hidden group border-2 border-black" innerClassName="grid grid-cols-1 lg:grid-cols-2" halftone>
        <div className="p-8 md:p-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between bg-[#F9FAFB]/90 backdrop-blur-sm relative z-20">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF4E00] rounded-full" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Dessert Selection</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mix-blend-multiply">
              CREAMY<br/>PANCAKES
            </h2>
            <p className="text-sm font-medium leading-relaxed max-w-sm opacity-70">
              Stacked high, drizzled with syrup, and topped with fresh berries. Too good to share.
            </p>
          </div>
          
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-[#FF4E00] text-white border-2 border-black font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              ORDER NOW
            </button>
            <Sticker color="bg-yellow-400" rotate={3}>Stack 'em High!</Sticker>
          </div>
        </div>
        
        <div className="p-0 flex items-center justify-center relative bg-orange-100 font-sans min-h-[400px] overflow-hidden group-hover:bg-orange-200 transition-colors duration-500">
          <img 
            src={IMAGES.PANCAKE_COMIC} 
            className="absolute inset-0 w-full h-full object-cover object-center grayscale mix-blend-multiply group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
            alt="Pancakes Feature"
          />
          <div className="absolute top-8 right-8 z-20 rotate-12 hidden md:block">
            <Sticker color="bg-blue-200" className="scale-125">Extra Syrup!</Sticker>
          </div>
          <div className="absolute top-4 left-4 z-20 hidden md:block"><Star className="text-yellow-400 fill-yellow-400" size={32} /></div>
          
          <ComicBurst className="absolute bottom-8 right-8 scale-125 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="px-4 py-2 font-black text-xl text-black drop-shadow-[2px_2px_0px_#fff]">
              $12.9
            </div>
          </ComicBurst>
        </div>
      </Panel>

      {/* 4. PIZZA & SHAKES PANELS */}
      {/* 4. PIZZA & SHAKES PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pizza Panel */}
        <Panel className="bg-white overflow-hidden border-2 border-black group" innerClassName="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black relative z-20">
            <div className="space-y-4">
              <Sticker color="bg-red-500 text-white">Loaded Pizza</Sticker>
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                CLASSIC<br/>PIZZA
              </h3>
              <p className="text-[10px] font-mono font-bold uppercase opacity-60">Pepperoni, Olives, & Extra Cheese.</p>
            </div>
            <div className="mt-4">
               <div className="font-black text-xs uppercase italic">"Too good to share."</div>
            </div>
          </div>
          <div className="bg-yellow-300 flex items-center justify-center relative overflow-hidden min-h-[300px]">
             <img 
              src={IMAGES.MASCOT_BURGER} 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              alt="Classic Pizza Comic"
             />
             <div className="absolute bottom-4 right-4 z-20">
              <Sticker color="bg-red-500 text-white" rotate={-10} className="scale-125">HOT!</Sticker>
             </div>
          </div>
        </Panel>

        {/* Shake Panel */}
        <Panel className="bg-[#FF4E00] text-white overflow-hidden border-2 border-black group" innerClassName="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-blue-300 flex items-center justify-center relative overflow-hidden min-h-[300px] border-b-2 lg:border-b-0 lg:border-r-2 border-black order-2 lg:order-1">
             <img 
              src={IMAGES.FAVORITES} 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              alt="Mascot Shake Comic"
             />
             <div className="absolute top-4 left-4 z-20">
              <Sticker color="bg-white text-black" rotate={12}>SLURP!</Sticker>
             </div>
          </div>
          <div className="p-8 flex flex-col justify-between relative z-20 order-1 lg:order-2">
            <div className="space-y-4">
              <Sticker color="bg-white text-black" rotate={-5}>Thick Shake</Sticker>
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                COLD<br/>COFFEE
              </h3>
              <p className="text-[10px] font-mono font-bold uppercase opacity-60 text-white/80">Creamy top & ice cubes.</p>
            </div>
            <ArrowRight size={32} className="text-white self-end relative z-30" />
          </div>
        </Panel>
      </div>

      {/* 5. SNACKS & CHAOTIC GRID */}
      <Panel className="p-8 bg-white overflow-hidden relative min-h-[500px]" halftone>
        <div className="absolute inset-x-0 top-0 h-24 flex items-center justify-center pointer-events-none">
          <div className="text-[15vw] font-black text-black/5 uppercase tracking-tighter leading-none select-none">
            SAVORY SNACKS
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full pt-12">
          <div className="md:col-span-4 flex flex-col items-center relative group">
             {/* Featured Snack with Image Backdrop */}
             <div className="relative z-10 flex flex-col items-center">
                <div className="relative group">
                   <SnacksIcon className="w-48 h-48 md:w-64 md:h-64 hand-drawn relative z-10" />
                   <div className="absolute -top-4 -right-4 z-20">
                      <ComicBurst className="scale-75">
                         <div className="p-2 font-black text-white">$5.99</div>
                      </ComicBurst>
                   </div>
                   <SpeechBubble className="absolute -bottom-4 -left-4 z-20">CRUNCH!</SpeechBubble>
                   
                   {/* Background Illustration Overlap */}
                   <motion.img 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    src={IMAGES.BURGER} 
                    className="absolute -top-12 -left-12 w-48 h-48 object-cover opacity-20 -rotate-12 pointer-events-none grayscale"
                   />
                </div>
                <div className="mt-8 text-center">
                   <h4 className="text-3xl font-black uppercase tracking-tighter">GOLDEN FRIES</h4>
                   <p className="text-xs font-mono font-bold uppercase opacity-60">Simple and playful snacks.</p>
                </div>
             </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
            {[
              { label: "Sandwich", icon: SandwichIcon, color: "bg-green-100" },
              { label: "Chicken", icon: BitesIcon, color: "bg-yellow-100" },
              { label: "Waffles", icon: Star, color: "bg-red-100" },
              { label: "Ice Cream", icon: Moon, color: "bg-blue-100" },
              { label: "Fresh Juice", icon: Sun, color: "bg-orange-100" },
              { label: "Special", icon: Coffee, color: "bg-gray-100" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, rotate: Math.random() * 6 - 3 }}
                className={`${item.color} p-4 border-2 border-black flex flex-col items-center gap-2 hand-drawn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all relative overflow-hidden`}
              >
                {i === 5 && (
                  <img src={IMAGES.FAVORITES} className="absolute inset-0 w-full h-full object-cover opacity-10 scale-150 rotate-45" />
                )}
                <item.icon className="w-8 h-8 relative z-10" size={32} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest relative z-10">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Floating Stickers */}
        <div className="absolute top-1/4 right-8 rotate-12 z-20"><Sticker color="bg-[#FF4E00] text-white">Hot!</Sticker></div>
        <div className="absolute bottom-1/4 left-8 -rotate-6 z-20"><Sticker color="bg-yellow-400">Yummy</Sticker></div>
        <div className="absolute bottom-4 right-1/4 rotate-3 opacity-30 pointer-events-none md:block hidden">
           <img src={IMAGES.PANCAKES} className="w-32 h-32 object-contain grayscale" />
        </div>
      </Panel>

      {/* 6. CTA PANEL (BOTTOM) */}
      <Panel className="bg-[#FF4E00] p-12 md:p-24 overflow-hidden" halftone>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-20">
          
          <div className="hidden lg:block w-full h-80 bg-green-200 border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-6 hand-drawn transform hover:rotate-0 transition-transform duration-500">
            <img src={IMAGES.HERO_MASCOT} className="w-full h-full object-cover object-bottom mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500" alt="Dog Mascot" />
          </div>
          
          <div className="text-center space-y-8 flex flex-col items-center justify-center col-span-1 lg:col-span-1">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
              <h2 className="text-7xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                JOIN THE<br/>PACK
              </h2>
            </motion.div>
            
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <button className="w-full px-8 py-5 bg-white text-black border-4 border-black font-black text-xl md:text-2xl uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all hand-drawn text-center whitespace-nowrap">
                COME AGAIN
              </button>
              <div className="flex gap-4">
                <Stamp icon={Heart} className="bg-white text-red-500 scale-125" />
                <Stamp icon={Star} className="bg-white text-yellow-500 scale-125" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-full h-80 bg-purple-200 border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-6 hand-drawn transform hover:rotate-0 transition-transform duration-500">
            <img src={IMAGES.MASCOT_BURGER} className="w-full h-full object-cover object-bottom mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-500" alt="Burger Mascot" />
          </div>

        </div>

        {/* Comic Burst Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none z-0">
          <div className="w-full h-full bg-white rotate-12 scale-150" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
        </div>
        
        {/* Decorative Background Text */}
        <div className="absolute -bottom-8 left-0 w-full text-[15vw] font-black text-white/10 uppercase tracking-tighter leading-none select-none pointer-events-none">
          RUFF RUFF RUFF
        </div>
      </Panel>

      {/* Footer / Colophon */}
      <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t-2 border-black font-mono text-[10px] font-bold uppercase tracking-widest gap-4">
        <div className="flex gap-8">
          <span>© 2026 RUFF CAFE</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#2D5A27] rounded-full animate-pulse" />
          <span>System Status: Optimal</span>
        </div>
      </div>
    </div>
  );
}
