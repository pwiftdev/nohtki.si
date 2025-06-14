"use client";

import React, { useState } from 'react';

const categories = [
  {
    key: 'klasicna',
    label: 'Klasična eleganca',
    folder: 'klasicnaeleganca',
    images: [
      'IMAGE 2025-06-14 15:50:19.jpg',
      'IMAGE 2025-06-14 15:50:30.jpg',
      'IMAGE 2025-06-14 15:50:33.jpg',
      'IMAGE 2025-06-14 15:50:34.jpg',
      'IMAGE 2025-06-14 15:50:35.jpg'
    ]
  },
  {
    key: 'trendovski',
    label: 'Trendovski dizajni',
    folder: 'trendosvskidizajni',
    images: [
      'IMAGE 2025-06-14 15:50:55.jpg',
      'IMAGE 2025-06-14 15:50:56.jpg',
      'IMAGE 2025-06-14 15:50:58.jpg',
      'IMAGE 2025-06-14 15:50:59.jpg',
      'IMAGE 2025-06-14 15:51:00.jpg'
    ]
  },
  {
    key: 'umetniski',
    label: 'Umetniški izrazi',
    folder: 'umetniskiizrazi',
    images: [
      'IMAGE 2025-06-14 15:51:15.jpg',
      'IMAGE 2025-06-14 15:51:16.jpg',
      'IMAGE 2025-06-14 15:51:17.jpg',
      'IMAGE 2025-06-14 15:51:18.jpg',
      'IMAGE 2025-06-14 15:51:20.jpg'
    ]
  },
];

export default function IdejePage() {
  const [selected, setSelected] = useState('klasicna');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setZoom(1);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {cat.images.map((imageName, idx) => (
                <div 
                  key={idx} 
                  className="aspect-[4/5] bg-pink-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handleImageClick(`/idejephotos/${cat.folder}/${imageName}`, `${cat.label} - Primer ${idx + 1}`)}
                >
                  <img 
                    src={`/idejephotos/${cat.folder}/${imageName}`}
                    alt={`${cat.label} - Primer ${idx + 1}`}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
            <button
              onClick={handleZoomOut}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <button
              onClick={handleZoomIn}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoom})` }}
            />
          </div>
        </div>
      )}
    </main>
  );
} 