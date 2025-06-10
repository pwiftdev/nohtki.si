'use client';

export default function Contact() {
  return (
    <section className="py-16 bg-[#8b2d5d] text-white text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rezervirajte svoj termin!
          </h2>
          <p className="mb-8 text-lg md:text-xl">
            Pošljite nam sporočilo na WhatsApp in si zagotovite svoj termin za popolno manikuro.
          </p>
          <a
            href="https://wa.me/38630357237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#8b2d5d] font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[#e9b6ce] hover:text-[#6b2243] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 12c0 4.556-3.694 8.25-8.25 8.25a8.207 8.207 0 01-4.03-1.07l-4.22 1.12 1.13-4.14A8.25 8.25 0 1120.25 12z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 13.25c-.563.25-1.188.438-1.875.438-2.071 0-3.75-1.679-3.75-3.75 0-.687.188-1.312.438-1.875" />
            </svg>
            Pišite na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
} 