import Link from "next/link";
import Gallery from './components/Gallery';
import Roadmap from './components/Roadmap';
import Features from './components/Features';
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import DecorativeElements from "./components/DecorativeElements";
import LoadingScreen from "./components/LoadingScreen";
import ReviewsSection from './components/ReviewsSection';
import StoritveSection from './components/StoritveSection';

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

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <div className="relative">
        <DecorativeElements />
        <div className="relative z-10">
          <Hero />
          <Features />
          <Gallery />
          <ReviewsSection />
          <Contact />
          <StoritveSection />
          <Roadmap />
        </div>
      </div>
    </main>
  );
}
