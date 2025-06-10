'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/g1.jpeg',
  '/g2.jpeg',
  '/g3.jpeg',
  '/g4.jpeg',
  '/g5.jpeg',
  '/g6.jpeg'
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = imageRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6,
      rootMargin: '-10% 0px -10% 0px'
    });

    // Observe all images
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-[#faf5f7]">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#8b2d5d]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#6b2243]/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#6b2243]">
          Naše delo
        </h2>
        <p className="text-center text-lg text-[#6b2243]/80 max-w-2xl mx-auto mb-12">
          Vsak noht je umetniško delo, ki ga ustvarimo s pozornostjo do detajlov. 
          Naša galerija prikazuje različne tehnike in stile, ki jih uporabljamo za 
          ustvarjanje popolnih nohtov za vsako stranko.
        </p>
        
        <div className="space-y-24">
          {images.map((src, idx) => (
            <div
              key={src}
              ref={(el) => {
                imageRefs.current[idx] = el;
              }}
              className={`relative w-full transition-all duration-700 ${
                activeIndex === idx 
                  ? 'scale-100 opacity-100 z-20' 
                  : 'scale-75 opacity-20 z-10'
              }`}
            >
              <div className="relative w-full max-w-5xl mx-auto aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-xl transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 