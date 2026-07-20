import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Reveal from "/components/Reveal";

const collectionData = {
  "look-01": {
    title: "LOOK 01 — THE SILHOUETTE",
    description: "Tonal minimal outfit emphasizing clean lines and intentional structure. Designed by Kylin Novel.",
    images: ["/img/11112025/1_tt.jpg", "/img/11112025/2_tt.jpg", "/img/11112025/3_tt.jpg",
            "/img/11112025/4_tt.jpg", "/img/11112025/5_tt.jpg", "/img/11112025/6_tt.JPG"
    ] 
  },
  "look-02": {
    title: "LOOK 02 — THE MINIMAL SET",
    description: "Everyday luxury menswear set featuring a clean, tailored silhouette for contemporary presence.",
    images: ["/img/11112025/1_oversize.jpg", "/img/11112025/2_oversize.jpg", "/img/11112025/3_oversize.jpg",
            "/img/11112025/4_oversize.jpg", "/img/11112025/5_oversize.jpg", "/img/11112025/6_oversize.jpg"]
  },
  "look-03": {
    title: "LOOK 03 — MONOCHROME AESTHETIC",
    description: "A stark monochrome statement that celebrates identity through restraint and premium textiles.",
    images: ["/img/29052026/look_3_detail_1.png", "/img/29052026/look_3_detail_2.png"]
  },
  "look-04": {
    title: "LOOK 04 — OVERSIZED LAYERING",
    description: "Intentionally relaxed cuts engineered to flow with movement while maintaining a sharp posture.",
    images: ["/img/11112025/taydai_1.jpg", "/img/11112025/taydai_2.jpg", "/img/11112025/taydai_3.jpg",
            "/img/11112025/taydai_4.jpg"]
  },
  "look-05": {
    title: "LOOK 05 — TONAL ESSENTIALS",
    description: "Timeless black and white curation. The ultimate foundational pieces for the modern wardrobe.",
    images: [
      "/img/29052026/1_slim.jpg", "/img/29052026/2_slim.jpg", "/img/29052026/3_slim.jpg", 
      "/img/29052026/4_slim.jpg", "/img/29052026/5_slim.jpg", "/img/29052026/6_slim.jpg", 
      "/img/29052026/7_slim.jpg", "/img/29052026/8_slim.jpg", "/img/29052026/9_slim.jpg", 
      "/img/29052026/10_slim.jpg", "/img/29052026/11_slim.jpg", "/img/29052026/12_slim.jpg"
    ]
  },
  "look-06": {
    title: "LOOK 06 — NEXT LEVEL MINIMAL",
    description: "Minimal is not simple. It is intentional. The definitive conclusion of the KN Basic 2026 series.",
    images: ["/img/look6.jpg", "/img/look4.jpg", "/img/look5.jpg"]
  }
  ,
  "look-07": {
    title: "LOOK 07 — SUMMER VIBES",
    description: "Lightweight and breathable pieces designed for the warm season, maintaining the brand's signature minimal aesthetic.",
    images: ["/img/summer72026/1.jpg", "/img/summer72026/2.jpg", "/img/summer72026/3.jpg",
            "/img/summer72026/4.jpg", "/img/summer72026/5.jpg", "/img/summer72026/6.jpg",
            "/img/summer72026/7.jpg", "/img/summer72026/8.jpg", "/img/summer72026/9.jpg", "/img/summer72026/10.jpg",
            "/img/summer72026/11.jpg", "/img/summer72026/12.jpg", "/img/summer72026/13.jpg", "/img/summer72026/14.jpg", "/img/summer72026/15.jpg",
            "/img/summer72026/16.jpg", "/img/summer72026/17.jpg", "/img/summer72026/18.jpg", "/img/summer72026/19.jpg", "/img/summer72026/19.1.PNG", "/img/summer72026/20.jpg",
            "/img/summer72026/21.jpg", "/img/summer72026/22.jpg", "/img/summer72026/23.jpg", "/img/summer72026/24.jpg", "/img/summer72026/25.jpg",
            "/img/summer72026/26.jpg", "/img/summer72026/27.jpg", "/img/summer72026/28.jpg", "/img/summer72026/29.jpg", "/img/summer72026/30.jpg",
            "/img/summer72026/31.jpg", "/img/summer72026/32.jpg", "/img/summer72026/33.jpg", "/img/summer72026/34.jpg", "/img/summer72026/35.jpg",
            "/img/summer72026/36.jpg", "/img/summer72026/37.jpg", "/img/summer72026/38.jpg", "/img/summer72026/39.jpg", "/img/summer72026/40.jpg",
            "/img/summer72026/41.jpg", "/img/summer72026/42.jpg", "/img/summer72026/43.jpg", "/img/summer72026/44.jpg", "/img/summer72026/45.jpg",
             "/img/summer72026/46.jpg", "/img/summer72026/47.jpg", "/img/summer72026/48.jpg", "/img/summer72026/49.jpg", "/img/summer72026/50.jpg","/img/summer72026/51.jpg"]
  }
};

export default function CollectionDetail() {
  const { id } = useParams();
  
  const collection = collectionData[id] || collectionData["look-01"];

  useEffect(() => {
    document.title = `${collection.title} | KN Basic – Kylin Novel`;
  }, [collection]);

  return (
    <div className="min-h-screen text-white bg-black font-sans px-6 py-24 md:px-12 max-w-7xl mx-auto selection:bg-white selection:text-black">
      
      {/* ══════════════════════════════════════════
          BACK TO HOME NAVIGATION
      ══════════════════════════════════════════ */}
      <div className="mb-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-all duration-300 relative group py-1"
        >
          <ArrowLeft size={13} strokeWidth={1.5} className="transform group-hover:-translate-x-1 transition-transform" /> 
          Back to home
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>

      {/* ══════════════════════════════════════════
          COLLECTION HEADER
      ══════════════════════════════════════════ */}
      <header className="max-w-3xl mb-24 space-y-4">
        <Reveal>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.15em] uppercase leading-tight">
            {collection.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light tracking-wide max-w-xl">
            {collection.description}
          </p>
        </Reveal>
      </header>

{/* ══════════════════════════════════════════
    GALLERY GRID
══════════════════════════════════════════ */}
<main 
  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
  role="list"
  aria-label="Collection detailed images"
>
  {collection.images.map((imgSrc, index) => {

    const isHeroImage = imgSrc.includes("hero_slim_1") || imgSrc.includes("wide");

    return (
      <Reveal key={index} delay={(index % 2) * 0.1}>
        <div 

          className={`overflow-hidden bg-zinc-950 relative group ${
            isHeroImage 
              ? "col-span-1 md:col-span-2 aspect-auto md:aspect-[3/2]" 
              : "aspect-[3/4]"
          }`}
          role="listitem"
        >
          <img
            src={imgSrc}
            alt={`${collection.title} - Detail Editorial View ${index + 1}`}

            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[1.2s] ease-in-out scale-100 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Reveal>
    );
  })}
</main>

    </div>
  );
}