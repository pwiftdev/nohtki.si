import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  serverTimestamp,
  DocumentSnapshot,
  where,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';
import { db } from './firebase';

const REVIEWS_PER_PAGE = 10;

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userPhoto?: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function submitReview(
  userId: string,
  userName: string,
  userPhoto: string | null,
  review: {
    rating: number;
    comment: string;
  }
): Promise<void> {
  console.log('Submitting review:', { userId, userName, userPhoto, review });
  
  try {
    // Add review to Firestore
    const docRef = await addDoc(collection(db, 'reviews'), {
      userId,
      userName,
      userPhoto: userPhoto || null,
      rating: review.rating,
      comment: review.comment,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    console.log('Review submitted successfully with ID:', docRef.id);
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
}

export async function getReviews(
  lastDoc?: DocumentSnapshot,
  filterRating?: number
): Promise<{
  reviews: Review[];
  lastDoc: DocumentSnapshot | null;
  hasMore: boolean;
}> {
  console.log('Fetching reviews with params:', { lastDoc: lastDoc?.id, filterRating });
  
  let q = query(
    collection(db, 'reviews'),
    orderBy('createdAt', 'desc'),
    limit(REVIEWS_PER_PAGE)
  );

  if (filterRating) {
    q = query(q, where('rating', '==', filterRating));
  }

  if (lastDoc) {
    q = query(q, startAfter(lastDoc));
  }

  try {
    const snapshot = await getDocs(q);
    console.log('Fetched reviews count:', snapshot.size);
    
    const reviews: Review[] = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      reviews.push({
        id: doc.id,
        userId: data.userId,
        userName: data.userName,
        userPhoto: data.userPhoto,
        rating: data.rating,
        comment: data.comment,
        createdAt: data.createdAt?.toDate() || new Date(),
        updatedAt: data.updatedAt?.toDate() || new Date()
      });
    });

    console.log('Processed reviews:', reviews);

    return {
      reviews,
      lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
      hasMore: snapshot.docs.length === REVIEWS_PER_PAGE
    };
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}

export async function updateReview(
  reviewId: string,
  updatedFields: { rating: number; comment: string }
): Promise<void> {
  await updateDoc(doc(db, 'reviews', reviewId), {
    ...updatedFields,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteReview(reviewId: string): Promise<void> {
  await deleteDoc(doc(db, 'reviews', reviewId));
} 