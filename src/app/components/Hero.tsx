'use client';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Manicure_Close-Up_fhd_584194.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pozornost. Natančnost. Eleganca.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Vsak noht obdelan s pozornostjo. Vsak noht dodelan z natančnostjo. Vse iz udobja tvojega doma.
          </p>
          <a
            href="https://wa.me/38630357237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6b2243] text-white px-8 py-3 rounded-full text-lg hover:bg-[#8b2d5d] transition-colors"
          >
            Naroči se zdaj
          </a>
        </div>
      </div>
    </section>
  );
} 