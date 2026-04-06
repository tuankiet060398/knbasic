import { Mail } from "lucide-react";

export default function App() {
  return (
    <div className="text-white bg-black font-sans scroll-smooth selection:bg-white selection:text-black">
      {/* NAVBAR - Thêm backdrop-blur để nhìn sang trọng hơn khi cuộn */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 border-b border-gray-900 fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
        <img src="/img/logo_2026.jpg" className="h-10 md:h-12 lg:h-14 object-contain" alt="KN Logo" />
        
        {/* Menu ẩn trên mobile rất nhỏ hoặc điều chỉnh khoảng cách linh hoạt */}
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

      {/* HERO - Tối ưu typography linh hoạt */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/img/hero.jpg')] bg-cover bg-center opacity-50 transition-transform duration-1000 hover:scale-105"></div>
        <div className="relative text-center px-4 space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter">
            DEFINE YOUR STYLE
          </h1>
          <p className="text-gray-400 tracking-[0.3em] text-[10px] md:text-sm uppercase">
            KN BASIC — Keep It Simple, Next Level Minimal.
          </p>
        </div>
      </section>

      {/* ABOUT - Cân đối lại khoảng cách */}
      <section id="about" className="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-8 tracking-widest font-light">ABOUT</h2>
        <div className="text-gray-400 space-y-6 leading-relaxed text-sm md:text-base">
          <p>KN is built on simplicity with purpose.</p>
          <p>
            We design with intention to shape your silhouette, conceal imperfections,
            and elevate what truly matters.
          </p>
          <p>Every piece is made to complement your presence — never overpower it.</p>
          <p className="text-white font-medium">Because true style is felt, not forced.</p>
        </div>
      </section>

      {/* LOOKBOOK GRID - Responsive Grid thông minh hơn */}
      <section id="lookbook" className="py-12 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl mb-12 text-center tracking-widest font-light">LOOKBOOK</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {[
              "/img/look1.jpg",
              "/img/look2.jpg",
              "/img/look3.jfif",
              "/img/look4.jpg",
              "/img/look5.jpg",
              "/img/look6.png",
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden group bg-zinc-900 aspect-[3/4]"
            >
              <img
                src={img}
                alt={`Look ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="py-24 px-6 text-center border-t border-gray-900"
      >
        <h2 className="text-2xl md:text-3xl mb-10 tracking-widest font-light">CONTACT</h2>

        <div className="flex flex-col items-center space-y-8">
          <div className="group">
            <a
              href="mailto:kn.gubasic@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-all text-sm md:text-base"
            >
              <Mail size={18} strokeWidth={1.5} />
              <span className="tracking-wider">kn.gubasic@gmail.com</span>
            </a>
          </div>

          {/* SOCIAL - Responsive links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 uppercase text-[10px] md:text-xs tracking-[0.2em]">
            {["Shopee", "TikTok", "Instagram"].map((platform) => (
               <a
               key={platform}
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
               <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
             </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-[10px] uppercase tracking-[0.3em] text-gray-600 border-t border-gray-900 text-center">
        © 2026 KN Basic Brand. All rights reserved.
      </footer>
    </div>
  );
}