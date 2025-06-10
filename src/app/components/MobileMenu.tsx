'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { href: '/o-nas', label: 'O nas' },
    { href: '/ideje', label: 'Ideje' },
    { href: 'https://wa.me/38630357237', label: 'NAROČI SE', isExternal: true },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <nav className="w-full">
              <ul className="flex flex-col items-center space-y-8">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className={`text-2xl font-medium transition-colors ${
                          item.label === 'NAROČI SE'
                            ? 'bg-white text-[#6b2243] px-8 py-2 rounded-full hover:bg-pink-100'
                            : 'text-white hover:text-pink-200'
                        }`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`text-2xl font-medium transition-colors ${
                          item.label === 'NAROČI SE'
                            ? 'bg-white text-[#6b2243] px-8 py-2 rounded-full hover:bg-pink-100'
                            : 'text-white hover:text-pink-200'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 