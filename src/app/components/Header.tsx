'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { useAuth } from '@/lib/hooks/useAuth';
import SignOutButton from './SignOutButton';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="relative">
          {/* Animated gradient background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#6b2243] via-[#8b2d5d] to-[#6b2243] animate-gradient-x" />
          <div className="absolute inset-0 rounded-3xl bg-[#6b2243]/90 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative flex items-center justify-between px-6 py-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logonobg.png"
                alt="Nohtki.si Logo"
                width={225}
                height={75}
                className="h-[4.6rem] md:h-[5.2rem] w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-white hover:text-pink-200 transition-colors"
              >
                Domov
              </Link>
              <Link 
                href="/ideje" 
                className="text-white hover:text-pink-200 transition-colors"
              >
                Ideje
              </Link>
              <a
                href="#storitve"
                className="text-white hover:text-pink-200 transition-colors"
              >
                Storitve
              </a>
              <a
                href="#galerija"
                className="text-white hover:text-pink-200 transition-colors"
              >
                Galerija
              </a>
              <a
                href="#ocene"
                className="text-white hover:text-pink-200 transition-colors"
              >
                Ocene
              </a>
              <a
                href="#kontakt"
                className="text-white hover:text-pink-200 transition-colors"
              >
                Kontakt
              </a>
              <a 
                href="https://wa.me/38630357237"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-white text-[#6b2243] px-8 py-2 rounded-full hover:bg-pink-100 transition-colors"
              >
                <motion.div
                  className="absolute inset-0"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8b2d5d]/80 to-transparent blur-sm" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e9b6ce]/60 to-transparent" />
                </motion.div>
                <span className="relative z-10 font-semibold">NAROČI SE</span>
              </a>
              {user && (
                <div className="ml-4">
                  <SignOutButton />
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 relative z-[60]"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
} 