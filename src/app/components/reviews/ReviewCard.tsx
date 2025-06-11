'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarRating } from './StarRating';

interface ReviewCardProps {
  review: {
    id: string;
    userName: string;
    userPhoto?: string;
    rating: number;
    comment: string;
    createdAt: Date;
    imageUrl?: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  const formattedDate = new Date(review.createdAt).toLocaleDateString('sl-SI', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm p-6 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          {review.userPhoto ? (
            <Image
              src={review.userPhoto}
              alt={review.userName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                {review.userName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{review.userName}</h3>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>

      <div>
        <StarRating value={review.rating} onChange={() => {}} readonly size="sm" />
      </div>

      <p className="text-gray-700 whitespace-pre-wrap">{review.comment}</p>

      {review.imageUrl && (
        <div className="w-full flex justify-center">
          <img src={review.imageUrl} alt="Review" className="max-h-48 rounded-lg shadow" />
        </div>
      )}
    </motion.div>
  );
} 