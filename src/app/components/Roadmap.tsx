'use client';

import { motion as m } from 'framer-motion';

const steps = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#8b2d5d]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    text: (
      <>Pišite ali pokličite na <a href="https://wa.me/38630357237" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8b2d5d]">WhatsApp številko</a>.</>
    ),
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#8b2d5d]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    text: (
      <>Lahko izberete, če bi storitev imeli v našem salonu ali v udobju vašega doma.</>
    ),
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#8b2d5d]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    text: (
      <>Dogovorimo se za prosti termin.</>
    ),
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#8b2d5d]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    text: (
      <>Poskrbimo da bodo vaši nohtki PERFEKTNI.</>
    ),
  },
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-[#faf5f7] text-[#6b2243]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kako poteka storitev?</h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-[#e9b6ce] z-0 rounded-full" />
          <ol className="relative z-10 w-full space-y-12">
            {steps.map((step, idx) => (
              <m.li
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.6 }}
                className="flex items-center gap-6 w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-2 border-4 border-[#e9b6ce]">
                    {step.icon}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex-1 w-1 bg-[#e9b6ce] h-8" />
                  )}
                </div>
                <div className="flex-1 text-lg md:text-xl bg-white/80 rounded-xl px-6 py-4 shadow-md">
                  {step.text}
                </div>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
} 