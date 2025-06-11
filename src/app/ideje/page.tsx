"use client";

import React, { useState } from 'react';

const categories = [
  {
    key: 'klasicna',
    label: 'Klasična eleganca',
  },
  {
    key: 'trendovski',
    label: 'Trendovski dizajni',
  },
  {
    key: 'umetniski',
    label: 'Umetniški izrazi',
  },
];

const placeholderImages = Array(6).fill('https://res.cloudinary.com/dawawdluc/image/upload/v1710000000/placeholder-image.png');

export default function IdejePage() {
  const [selected, setSelected] = useState('klasicna');

  return (
    <main className="min-h-screen bg-[#faf5f7] pb-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex flex-col justify-end pb-10 text-center text-white mb-10 rounded-b-3xl shadow-lg overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/idejehero.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b2d5d]/30 via-[#e9b6ce]/20 to-[#8b2d5d]/30 z-10" />
        {/* Content */}
        <div className="relative z-20 pb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">Ideje za Nohtke</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 px-4 md:px-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">Poiščite navdih za svoj naslednji obisk! Izberite kategorijo in preglejte galerijo idej za popolne nohte.</p>
        </div>
      </section>

      {/* Category Selector */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setSelected(cat.key)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors shadow-md text-lg
              ${selected === cat.key ? 'bg-[#8b2d5d] text-white' : 'bg-white text-[#8b2d5d] hover:bg-pink-100'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Galleries */}
      <div className="container mx-auto px-4">
        {categories.map(cat => (
          <div
            key={cat.key}
            className={`transition-all duration-500 ${selected === cat.key ? 'block' : 'hidden'}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#8b2d5d] mb-6 text-center">{cat.label}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {placeholderImages.map((src, idx) => (
                <div key={idx} className="aspect-[4/5] bg-pink-50 rounded-xl flex items-center justify-center shadow-md overflow-hidden">
                  <img src={src} alt="Placeholder" className="object-cover w-full h-full opacity-40" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 