import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "/components/Reveal";

export default function App() {
  return (
    <div className="text-white bg-black font-sans scroll-smooth selection:bg-white selection:text-black">

      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <nav
        aria-label="KN Basic main navigation"
        className="flex justify-between items-center px-6 py-4 md:px-12 border-b border-gray-900 fixed top-0 w-full bg-black/60 backdrop-blur-lg z-50"
      >
        <a href="#home" aria-label="KN Basic – Kylin Novel, back to home">
          <img
            src="/img/logo_2026.jpg"
            className="h-10 md:h-12 lg:h-14 object-contain"
            alt="KN Basic logo – Kylin Novel minimal menswear brand Vietnam"
            width={56}
            height={56}
          />
        </a>

        <ul
          role="list"
          className="flex space-x-4 md:space-x-8 uppercase text-[10px] md:text-xs tracking-[0.2em] list-none m-0 p-0"
        >
          {[
            { label: "home",     href: "#home",     aria: "Home" },
            { label: "about",    href: "#about",    aria: "About KN Basic" },
            { label: "lookbook", href: "#lookbook", aria: "Lookbook collection" },
            { label: "contact",  href: "#contact",  aria: "Contact KN Basic" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                aria-label={item.aria}
                className="relative group transition-colors hover:text-gray-400"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ══════════════════════════════════════════
          HERO – single H1 with primary keywords
      ══════════════════════════════════════════ */}
      <header
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        aria-label="KN Basic – Kylin Novel Minimal Menswear"
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero.jpg')" }}
          role="img"
          aria-label="KN Basic 2026 collection hero – minimal menswear by Kylin Novel"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" aria-hidden="true" />

        <div className="relative text-center px-4 space-y-6">
          <Reveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight">
              KN Basic – Kylin Novel
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-gray-300 font-thin">
                Minimal Menswear · Vietnam
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 tracking-[0.3em] text-[10px] md:text-sm uppercase">
              KN Basic — Keep It Simple, Next Level Minimal. Local Brand Vietnam.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="#lookbook"
              className="inline-block mt-6 px-8 py-3 border border-white text-[10px] tracking-widest hover:bg-white hover:text-black transition-all duration-500 uppercase"
              aria-label="Explore KN Basic 2026 collection"
            >
              Explore Collection
            </a>
          </Reveal>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="py-32 px-6 md:px-12 max-w-6xl mx-auto"
        itemScope
        itemType="https://schema.org/Brand"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="overflow-hidden bg-zinc-900">
              <img
                src="/img/look1.jpg"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 hover:scale-105"
                alt="KN Basic by Kylin Novel – minimal menswear local brand Vietnam, tonal outfit"
                width={600}
                height={600}
                loading="lazy"
                itemProp="image"
              />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <h2
                id="about-heading"
                className="text-2xl md:text-3xl tracking-widest font-light"
                itemProp="name"
              >
                ABOUT KN BASIC – KYLIN NOVEL
              </h2>
            </Reveal>

            <div className="text-gray-400 space-y-6 leading-relaxed text-sm md:text-base" itemProp="description">
              <Reveal delay={0.1}>
                <p>
                  <strong className="text-white font-medium">KN Basic</strong> is built on simplicity with purpose.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  We design with intention — to shape your silhouette, conceal imperfections,
                  and elevate what truly matters.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Every piece from <strong className="text-white font-medium">Kylin Novel</strong> is
                  made to complement your presence — never overpower it.
                </p>
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

      {/* ══════════════════════════════════════════
          SIGNATURE STATEMENT
      ══════════════════════════════════════════ */}
      <section
        aria-label="KN Basic brand statement"
        className="py-40 text-center px-6 bg-zinc-950"
      >
        <Reveal>
          <h2 className="text-2xl md:text-5xl font-extralight leading-tight tracking-wide">
            Minimal is not simple.
            <br />
            <span className="text-gray-500 italic">It is intentional.</span>
          </h2>
          <p className="mt-6 text-gray-600 text-xs tracking-[0.3em] uppercase">
            KN Basic – Minimal Menswear | Kylin Novel Vietnam
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════
          LOOKBOOK
      ══════════════════════════════════════════ */}
      <section
        id="lookbook"
        aria-labelledby="lookbook-heading"
        className="py-24 px-4 md:px-8"
        itemScope
        itemType="https://schema.org/ImageGallery"
      >
        <Reveal>
          <h2
            id="lookbook-heading"
            className="text-2xl md:text-3xl mb-4 text-center tracking-widest font-light"
          >
            LOOKBOOK — KN BASIC 2026
          </h2>
          <p className="text-center text-gray-500 text-xs tracking-[0.25em] uppercase mb-16">
            Minimal Menswear Collection – Kylin Novel
          </p>
        </Reveal>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          role="list"
          aria-label="KN Basic 2026 lookbook gallery"
        >
          {[
            {
              src: "/img/look1.jpg",
              alt: "KN Basic Look 1 – tonal minimal outfit by Kylin Novel Vietnam local brand 2026",
              label: "Look 01",
            },
            {
              src: "/img/look2.jpg",
              alt: "KN Basic Look 2 – minimal menswear set by Kylin Novel, clean silhouette",
              label: "Look 02",
            },
            {
              src: "/img/look3.jfif",
              alt: "KN Basic Look 3 – monochrome minimal outfit KN Atelier 2026",
              label: "Look 03",
            },
            {
              src: "/img/look4.jpg",
              alt: "KN Basic Look 4 – oversized minimal men's fashion by Kylin Novel local brand",
              label: "Look 04",
            },
            {
              src: "/img/look5.jpg",
              alt: "KN Basic Look 5 – black and white minimal menswear KN Basic Vietnam",
              label: "Look 05",
            },
            {
              src: "/img/look6.jpg",
              alt: "KN Basic Look 6 – Kylin Novel minimal menswear collection Vietnam 2026",
              label: "Look 06",
            },
          ].map((item, index) => (
            <Reveal key={index} delay={(index % 3) * 0.1}>
              <figure
                className="relative overflow-hidden group bg-zinc-900 aspect-[3/4] cursor-pointer m-0"
                role="listitem"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-[1.5s] ease-in-out"
                  loading="lazy"
                  itemProp="contentUrl"
                />
                <figcaption className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.4em] border border-white px-4 py-2">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════ */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-32 px-6 text-center border-t border-gray-900"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <Reveal>
          <h2
            id="contact-heading"
            className="text-2xl md:text-3xl mb-4 tracking-widest font-light uppercase"
          >
            Contact KN Basic – Kylin Novel
          </h2>
          <p className="text-gray-500 text-xs tracking-[0.25em] uppercase mb-16">
            Minimal Menswear Brand · Vietnam
          </p>
        </Reveal>

        <div className="flex flex-col items-center space-y-12 max-w-2xl mx-auto">

          <address
            className="not-italic space-y-6"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <Reveal delay={0.1}>
              <a
                href="mailto:kn.gubasic@gmail.com"
                className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-all text-sm md:text-base group"
                aria-label="Email KN Basic at kn.gubasic@gmail.com"
                itemProp="email"
              >
                <Mail size={18} strokeWidth={1} aria-hidden="true" />
                <span className="tracking-wider">kn.gubasic@gmail.com</span>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-start justify-center gap-3 text-gray-400 text-sm md:text-base">
                <MapPin size={18} strokeWidth={1} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="tracking-wide leading-relaxed">
                  <span itemProp="streetAddress">2825 Lý Thái Tổ, Phú Hữu, Đại Phước</span>,{" "}
                  <span itemProp="addressLocality">Nhơn Trạch</span>,{" "}
                  <span itemProp="addressRegion">Đồng Nai</span>
                </p>
              </div>
            </Reveal>
          </address>

          <nav
            aria-label="KN Basic social media"
            className="flex flex-wrap justify-center gap-8 md:gap-16 uppercase text-[10px] md:text-xs tracking-[0.3em]"
          >
            {[
              {
                platform: "Shopee",
                href: "https://shopee.vn/knbasic",
                aria: "Shop KN Basic on Shopee – minimal menswear by Kylin Novel",
              },
              {
                platform: "TikTok",
                href: "https://www.tiktok.com/@kn.atelier",
                aria: "Follow KN Atelier on TikTok",
              },
              {
                platform: "Instagram",
                href: "https://www.instagram.com/kn.gubasic/",
                aria: "Follow KN Basic on Instagram – @kn.gubasic",
              },
            ].map((item, idx) => (
              <Reveal key={item.platform} delay={0.3 + idx * 0.1}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.aria}
                  className="relative group py-2"
                >
                  {item.platform}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}
          </nav>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer
        className="py-12 text-[9px] uppercase tracking-[0.5em] text-gray-700 border-t border-gray-900 text-center"
        role="contentinfo"
      >
        <p>
          © 2026{" "}
          <span itemProp="name">KN Basic</span> –{" "}
          <span>Kylin Novel Brand</span>. Minimal Menswear Vietnam. Designed with Intention.
        </p>
      </footer>
    </div>
  );
}
