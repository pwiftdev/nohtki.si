"use client";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

export default function SignInButton() {
  const handleSignIn = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider());
  };

  return (
    <button
      onClick={handleSignIn}
      className="flex items-center gap-2 px-6 py-2 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-100 transition font-semibold text-lg border border-gray-300"
    >
      <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.64 2.36 30.74 0 24 0 14.82 0 6.73 5.48 2.69 13.44l7.98 6.2C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.66 7.01l7.19 5.6C43.98 37.13 46.1 31.36 46.1 24.55z"/><path fill="#FBBC05" d="M9.67 28.09c-1.13-3.36-1.13-6.98 0-10.34l-7.98-6.2C-1.06 16.36-1.06 31.64 1.69 39.11l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.74 0 12.41-2.23 16.54-6.07l-7.19-5.6c-2.01 1.35-4.6 2.17-7.35 2.17-6.38 0-11.87-3.63-14.33-8.89l-7.98 6.2C6.73 42.52 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
      Prijava z Google
    </button>
  );
} 