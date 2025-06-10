'use client';

import { useEffect, useState } from 'react';

const NailIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export default function DecorativeElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none">
      {/* Hero Section Decorations */}
      <div className="relative">
        <div className="absolute top-8 left-8 text-[#8b2d5d]/40 animate-float">
          <NailIcon />
        </div>
        <div className="absolute top-12 right-12 text-[#8b2d5d]/40 animate-float-delayed">
          <SparkleIcon />
        </div>
      </div>

      {/* Features Section Decorations */}
      <div className="relative">
        <div className="absolute top-1/4 left-8 text-[#8b2d5d]/40 animate-float-slow">
          <HeartIcon />
        </div>
        <div className="absolute bottom-1/4 right-8 text-[#8b2d5d]/40 animate-float">
          <NailIcon />
        </div>
      </div>

      {/* Gallery Section Decorations */}
      <div className="relative">
        <div className="absolute top-1/3 left-12 text-[#8b2d5d]/40 animate-float-delayed">
          <SparkleIcon />
        </div>
        <div className="absolute bottom-1/3 right-12 text-[#8b2d5d]/40 animate-float-slow">
          <HeartIcon />
        </div>
      </div>

      {/* Roadmap Section Decorations */}
      <div className="relative">
        <div className="absolute top-1/4 left-8 text-[#8b2d5d]/40 animate-float">
          <NailIcon />
        </div>
        <div className="absolute bottom-1/4 right-8 text-[#8b2d5d]/40 animate-float-delayed">
          <SparkleIcon />
        </div>
      </div>

      {/* Contact Section Decorations */}
      <div className="relative">
        <div className="absolute top-1/3 left-12 text-[#8b2d5d]/40 animate-float-slow">
          <HeartIcon />
        </div>
        <div className="absolute bottom-1/3 right-12 text-[#8b2d5d]/40 animate-float">
          <NailIcon />
        </div>
      </div>
    </div>
  );
} 