'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/hooks/useAuth';
import { StarRating } from './StarRating';

interface ReviewFormProps {
  onSubmit: (review: {
    rating: number;
    comment: string;
    imageUrl?: string;
  }) => Promise<void>;
}

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [imageUploading, setImageUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'unsigned_reviews');
    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dawawdluc/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.secure_url);
    } catch (err) {
      setError('Napaka pri nalaganju slike.');
    } finally {
      setImageUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setImageUrl(undefined);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('Prosimo, prijavite se za oddajo ocene');
      return;
    }

    if (!rating) {
      setError('Prosimo, izberite oceno');
      return;
    }

    if (!comment.trim()) {
      setError('Prosimo, napišite komentar');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit({
        rating,
        comment: comment.trim(),
        imageUrl,
      });

      // Reset form
      setRating(0);
      setComment('');
      setImageUrl(undefined);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      setError('Napaka pri oddaji ocene. Prosimo, poskusite ponovno.');
      console.error('Error submitting review:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white rounded-lg shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ocena
        </label>
        <StarRating value={rating} onChange={setRating} size="lg" />
      </div>

      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Vaša ocena
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          rows={4}
          placeholder="Delite svojo izkušnjo..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Slika (neobvezno)</label>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
        />
        {imageUploading && <p className="text-xs text-gray-500 mt-2">Nalaganje slike...</p>}
        {imageUrl && (
          <div className="mt-2 relative">
            <img src={imageUrl} alt="Naložena slika" className="max-h-32 rounded shadow" />
            <button type="button" onClick={handleRemoveImage} className="absolute top-1 right-1 bg-white/80 rounded-full px-2 py-1 text-xs text-pink-700 hover:bg-pink-100">Odstrani</button>
          </div>
        )}
      </div>

      {error && (
        <motion.p
          className="text-sm text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting || !rating || !comment.trim()}
        className={`w-full py-2 px-4 rounded-md text-white font-medium
          ${isSubmitting || !rating || !comment.trim()
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
          } transition-colors`}
        whileHover={!isSubmitting && rating && comment.trim() ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting && rating && comment.trim() ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? 'Oddajanje...' : 'Oddaj oceno'}
      </motion.button>
    </motion.form>
  );
} 