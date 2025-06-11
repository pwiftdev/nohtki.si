"use client";
import { FaPaintBrush, FaRedo, FaEraser, FaHandSparkles, FaPlus, FaSync, FaCut } from 'react-icons/fa';

const storitve = [
  {
    title: 'Permanentno lakiranje',
    desc: 'Dolgotrajna obstojnost in sijaj.'
  },
  {
    title: 'Korekcija permanentno lakiranje',
    desc: 'Obnova in osvežitev barve.'
  },
  {
    title: 'Odstranjevanje permanentnega laka + urejanje nohtov',
    desc: 'Nežno odstranjevanje in nega.'
  },
  {
    title: 'Geliranje naravnih nohtov',
    desc: 'Naraven videz in dodatna moč.'
  },
  {
    title: 'Podaljševanje nohtov',
    desc: 'Za popolno dolžino in obliko.'
  },
  {
    title: 'Korekcija geliranih nohtov',
    desc: 'Vzdrževanje lepote in obstojnosti.'
  },
  {
    title: 'Odstranjevanje gela + urejanje nohtov',
    desc: 'Varno odstranjevanje in nega.'
  },
];

export default function StoritveSection() {
  return (
    <section className="py-20 bg-[#faf5f7] text-[#6b2243]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Storitve</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storitve.map((storitev) => (
            <li key={storitev.title} className="flex flex-col bg-white rounded-xl shadow p-6 hover:bg-pink-50 transition">
              <h3 className="text-xl font-semibold mb-1">{storitev.title}</h3>
              <p className="text-[#8b2d5d] text-sm">{storitev.desc}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <p className="text-[#8b2d5d] text-base font-semibold mb-4">Za cenik naših storitev, vas prosimo da nam napišete sporočilo na WhatsApp z klikom na ta gumb.</p>
          <a
            href="https://wa.me/38630357237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6b2243] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#8b2d5d] transition-colors"
          >
            Pišite na WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
} 