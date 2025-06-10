'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative">
      {/* Animated gradient background - same as header */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6b2243] via-[#8b2d5d] to-[#6b2243] animate-gradient-x" />
      <div className="absolute inset-0 bg-[#6b2243]/90 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/logonobg.png"
                alt="Nohtki.si Logo"
                width={225}
                height={75}
                className="h-18 w-auto"
              />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left text-white">
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <a 
              href="https://wa.me/38630357237" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-pink-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              +386 30 357 237
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-white/80 text-sm">
            <p>© {new Date().getFullYear()} Nohtki.si</p>
            <p className="mt-2">Vse pravice pridržane</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 