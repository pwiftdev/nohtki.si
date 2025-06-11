"use client";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut(auth)}
      className="px-4 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition"
    >
      Odjava
    </button>
  );
} 