"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/hooks/useAuth";
import { ReviewForm } from "./reviews/ReviewForm";
import { ReviewList } from "./reviews/ReviewList";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import { submitReview, getReviews, Review, updateReview, deleteReview } from "@/lib/firebase/reviewUtils";
import Image from 'next/image';
import { StarRating } from "./reviews/StarRating";
import { ReviewCard } from "./reviews/ReviewCard";
import { motion } from 'framer-motion';

export default function ReviewsSection() {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | undefined>();
  const [isEditing, setIsEditing] = useState(false);
  const [editReview, setEditReview] = useState<Review | null>(null);

  // Calculate average and total
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews) : 0;

  // Find current user's review
  const userReview = user ? reviews.find(r => r.userId === user.uid) : null;

  const loadInitialReviews = async () => {
    console.log('Loading initial reviews...');
    try {
      const { reviews: initialReviews, lastDoc: newLastDoc, hasMore: more } = await getReviews(undefined, selectedRating);
      console.log('Initial reviews loaded:', initialReviews);
      setReviews(initialReviews);
      setLastDoc(newLastDoc);
      setHasMore(more);
    } catch (err) {
      console.error('Error loading reviews:', err);
      setError('Napaka pri nalaganju ocen');
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreReviews = async () => {
    try {
      const { reviews: newReviews, lastDoc: newLastDoc, hasMore: more } = await getReviews(lastDoc, selectedRating);
      setLastDoc(newLastDoc);
      setHasMore(more);
      return newReviews;
    } catch (err) {
      console.error('Napaka pri nalaganju dodatnih ocen:', err);
      throw err;
    }
  };

  const handleSubmitReview = async (review: {
    rating: number;
    comment: string;
  }) => {
    if (!user) return;
    console.log('Submitting review from ReviewsSection:', { user, review });
    try {
      if (isEditing && editReview) {
        await updateReview(editReview.id, review);
        setIsEditing(false);
        setEditReview(null);
      } else {
        await submitReview(
          user.uid,
          user.displayName || 'Anonimno',
          user.photoURL,
          review
        );
      }
      console.log('Review submitted, reloading reviews...');
      await loadInitialReviews();
      console.log('Reviews reloaded after submission');
    } catch (error) {
      console.error('Error in handleSubmitReview:', error);
      setError('Napaka pri oddaji ocene');
    }
  };

  const handleEdit = () => {
    if (userReview) {
      setIsEditing(true);
      setEditReview(userReview);
    }
  };

  const handleDelete = async () => {
    if (userReview) {
      await deleteReview(userReview.id);
      setIsEditing(false);
      setEditReview(null);
      await loadInitialReviews();
    }
  };

  useEffect(() => {
    loadInitialReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRating]);

  return (
    <section className="min-h-[60vh] bg-gray-50 py-12 relative overflow-hidden" id="ocene">
      {/* Animated floating blurred circles */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 bg-pink-200 rounded-full filter blur-3xl opacity-40"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 -right-32 w-80 h-80 bg-[#e9b6ce] rounded-full filter blur-3xl opacity-30"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#8b2d5d] rounded-full filter blur-3xl opacity-20 -translate-x-1/2"
        animate={{ y: [0, 50, 0], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* End animated circles */}
      {/* Summary Bar */}
      <div className="max-w-3xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between rounded-2xl p-4 relative overflow-hidden shadow-lg w-full">
          {/* Gradient background */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6b2243] via-[#8b2d5d] to-[#6b2243] animate-gradient-x" />
          <div className="absolute inset-0 rounded-2xl bg-[#6b2243]/90 backdrop-blur-sm" />
          {/* Content */}
          <div className="relative flex items-center justify-between w-full">
            <div className="flex-1 flex items-center">
              <Image src="/logonobg.png" alt="Nohtki.si Logo" width={80} height={30} className="h-12 w-auto" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-2xl font-bold text-white">{averageRating.toFixed(1)}</span>
              {/* Static stars showing the average rating */}
              <StarRating value={Math.round(averageRating)} onChange={() => {}} readonly size="md" />
            </div>
            <div className="flex-1 flex justify-end items-center">
              <span className="text-white/80 text-sm md:text-base">Skupaj ocen: <span className="font-semibold text-white">{totalReviews}</span></span>
            </div>
          </div>
        </div>
      </div>
      {/* End Summary Bar */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-2">Ocene strank</h2>
          <p className="text-lg text-gray-600">Preberite mnenja ali dodajte svojo izkušnjo!</p>
        </div>
        <div className="mb-8">
          {user ? (
            userReview && !isEditing ? (
              <div className="relative">
                <div className="mb-2">
                  <ReviewCard review={userReview} />
                </div>
                <div className="flex gap-2 justify-end">
                  <button onClick={handleEdit} className="px-4 py-1 text-sm bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition">Uredi</button>
                  <button onClick={handleDelete} className="px-4 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition">Izbriši</button>
                </div>
              </div>
            ) : (
              <>
                <ReviewForm
                  onSubmit={handleSubmitReview}
                  {...(isEditing && editReview ? { initialRating: editReview.rating, initialComment: editReview.comment } : {})}
                />
                {isEditing && (
                  <div className="flex justify-end mt-2">
                    <button onClick={() => { setIsEditing(false); setEditReview(null); }} className="px-4 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition">Prekliči</button>
                  </div>
                )}
                <div className="flex justify-end mt-2 relative z-10 pointer-events-auto">
                  <SignOutButton />
                </div>
              </>
            )
          ) : (
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-700">Za oddajo ocene se prijavite.</p>
              <SignInButton />
            </div>
          )}
        </div>
        <ReviewList initialReviews={reviews} onLoadMore={loadMoreReviews} hasMore={hasMore} />
        {user && (
          <div className="flex justify-end mt-8 relative z-10 pointer-events-auto">
            <SignOutButton />
          </div>
        )}
      </div>
    </section>
  );
} 