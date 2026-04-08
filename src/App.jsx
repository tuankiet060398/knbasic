import { Mail } from "lucide-react";
import { motion } from "framer-motion"; 
import Reveal from "/components/Reveal";

export default function App() {
  return (
    <div className="text-white bg-black font-sans scroll-smooth selection:bg-white selection:text-black">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 border-b border-gray-900 fixed top-0 w-full bg-black/60 backdrop-blur-lg z-50">
        <img src="/img/logo_2026.jpg" className="h-10 md:h-12 lg:h-14 object-contain" alt="KN Logo" />

        <div className="flex space-x-4 md:space-x-8 uppercase text-[10px] md:text-xs tracking-[0.2em]">
          {["home", "about", "lookbook", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group transition-colors hover:text-gray-400"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero.jpg')" }}
        />
        
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative text-center px-4 space-y-6">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight">
              Minimal Fashion - KN Basic
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-gray-400 tracking-[0.3em] text-[10px] md:text-sm uppercase">
              KN BASIC — Keep It Simple, Next Level Minimal.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <button className="mt-6 px-8 py-3 border border-white text-[10px] tracking-widest hover:bg-white hover:text-black transition-all duration-500 uppercase">
              Explore Collection
            </button>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="overflow-hidden bg-zinc-900">
                <img
                    src="/img/look1.jpg"
                    className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 hover:scale-105"
                    alt="About KN"
                />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl tracking-widest font-light">ABOUT</h2>
            </Reveal>
            
            <div className="text-gray-400 space-y-6 leading-relaxed text-sm md:text-base">
              <Reveal delay={0.1}>
                <p>KN is built on simplicity with purpose.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  We design with intention to shape your silhouette, conceal imperfections,
                  and elevate what truly matters.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>Every piece is made to complement your presence — never overpower it.</p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-white font-medium text-lg mt-8 border-l-2 border-white pl-4">
                  Because true style is felt, not forced.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE STATEMENT */}
      <section className="py-40 text-center px-6 bg-zinc-950">
        <Reveal>
          <h2 className="text-2xl md:text-5xl font-extralight leading-tight tracking-wide">
            Minimal is not simple.
            <br />
            <span className="text-gray-500 italic">It is intentional.</span>
          </h2>
        </Reveal>
      </section>

      {/* LOOKBOOK SECTION */}
      <section id="lookbook" className="py-24 px-4 md:px-8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl mb-16 text-center tracking-widest font-light">
            LOOKBOOK
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            "/img/look1.jpg", "/img/look2.jpg", "/img/look3.jfif",
            "/img/look4.jpg", "/img/look5.jpg", "/img/look6.jpg",
          ].map((img, index) => (
            <Reveal key={index} delay={(index % 3) * 0.1}>
              <div className="relative overflow-hidden group bg-zinc-900 aspect-[3/4] cursor-pointer">
                <img
                  src={img}
                  alt={`Look ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-[1.5s] ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.4em] border border-white px-4 py-2">VIEW</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 text-center border-t border-gray-900">
        <Reveal>
          <h2 className="text-2xl md:text-3xl mb-12 tracking-widest font-light">CONTACT</h2>
        </Reveal>

        <div className="flex flex-col items-center space-y-12">
          <Reveal delay={0.2}>
            <a
              href="mailto:kn.gubasic@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-all text-sm md:text-lg group"
            >
              <Mail size={20} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
              <span className="tracking-wider">kn.gubasic@gmail.com</span>
            </a>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 uppercase text-[10px] md:text-xs tracking-[0.3em]">
            {["Shopee", "TikTok", "Instagram"].map((platform, idx) => (
              <Reveal key={platform} delay={0.3 + (idx * 0.1)}>
                <a
                  href={
                    platform === "Shopee" ? "https://shopee.vn/knbasic" :
                    platform === "TikTok" ? "https://www.tiktok.com/@kn.atelier" :
                    "https://www.instagram.com/kn.gubasic/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group py-2"
                >
                  {platform}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-[9px] uppercase tracking-[0.5em] text-gray-700 border-t border-gray-900 text-center">
        © 2026 KN Basic Brand. Designed with Intention.
      </footer>
    </div>
  );
}