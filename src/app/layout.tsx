import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DecorativeElements from "./components/DecorativeElements";
import { AuthProvider } from "@/lib/contexts/AuthContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nohtki.si - Profesionalni Nail Studio",
  description: "Profesionalni nail studio v Sloveniji. Delamo v studiu ali pri vas doma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl">
      <body className="bg-[#faf5f7]">
        <AuthProvider>
          <DecorativeElements />
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
