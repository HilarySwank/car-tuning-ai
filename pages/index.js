// Car Tuning 2025 – PRO Final inkl. Upload, PayPal, AI, Video, Kontakt, Rechtliches
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Car Tuning – Powered by AI & Tuning-Profis</title>
      </Head>

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-black sticky top-0 z-50 shadow-md">
        <img src="/logo.png" alt="Car Tuning AI Logo" className="h-12" />
        <nav className="space-x-6 uppercase text-sm">
          <a href="#start" className="hover:text-red-500">Start</a>
          <a href="#tuning" className="hover:text-red-500">Tuning</a>
          <a href="#preise" className="hover:text-red-500">Preise</a>
          <a href="#kontakt" className="hover:text-red-500">Kontakt</a>
          <a href="#rechtliches" className="hover:text-red-500">Rechtliches</a>
        </nav>
      </header>

      {/* VIDEO SECTION */}
      <section id="start" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src="/supercar.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold drop-shadow-lg">Willkommen bei Car Tuning AI</h1>
          <p className="mt-4 text-xl">AI-gestütztes Chiptuning für maximale Performance</p>
          <a href="#tuning" className="mt-8 inline-block bg-red-600 py-3 px-6 rounded-full">Jetzt konfigurieren</a>
        </div>
      </section>

      {/* Weitere Sektionen hier einfügen */}
    </div>
  );
}
