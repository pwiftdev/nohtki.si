'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: [1, 1, 0],
            scale: [1, 0.5, 0.5],
            y: [0, 0, -200],
            transition: {
              duration: 1,
              times: [0, 0.5, 1],
              ease: [0.4, 0, 0.2, 1]
            }
          }}
          className="fixed inset-0 bg-gradient-to-b from-[#6b2243] to-[#8b2d5d] z-50 flex flex-col items-center justify-center"
        >
          <motion.div 
            className="flex flex-col items-center"
            exit={{
              y: [0, 0, -200],
              transition: {
                duration: 1,
                times: [0, 0.5, 1],
                ease: [0.4, 0, 0.2, 1]
              }
            }}
          >
            <Image
              src="/logonobg.png"
              alt="Nohtki.si Logo"
              width={400}
              height={400}
              className="w-auto h-40"
              priority
            />
            <div className="flex space-x-2 mt-8">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-[#e9b6ce] rounded-full animate-bounce"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: '0.6s'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 