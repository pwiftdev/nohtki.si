'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReviewCard } from './ReviewCard';

interface Review {
  id: string;
  userName: string;
  userPhoto?: string;
  rating: number;
  comment: string;
  photoUrl?: string;
  createdAt: Date;
}

interface ReviewListProps {
  initialReviews: Review[];
  onLoadMore: () => Promise<Review[]>;
  hasMore: boolean;
}

export function ReviewList({ initialReviews, onLoadMore, hasMore }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMore = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError(null);

    try {
      const newReviews = await onLoadMore();
      setReviews(prev => [...prev, ...newReviews]);
    } catch (err) {
      setError('Failed to load more reviews');
      console.error('Error loading more reviews:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = document.getElementById('load-more-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [hasMore, isLoading]);

  useEffect(() => {
    setReviews(initialReviews);
  }, [initialReviews]);

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </AnimatePresence>

      {error && (
        <motion.p
          className="text-center text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}

      {isLoading && (
        <motion.div
          className="flex justify-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}

      {hasMore && (
        <div id="load-more-sentinel" className="h-4" />
      )}

      {!hasMore && reviews.length > 0 && (
        <motion.p
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Ni več ocen za prikaz
        </motion.p>
      )}

      {reviews.length === 0 && (
        <motion.p
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Trenutno še ni ocen. Bodite prvi, ki boste oddali oceno!
        </motion.p>
      )}
    </div>
  );
} 