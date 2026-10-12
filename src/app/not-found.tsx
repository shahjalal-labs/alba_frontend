// src/app/404.tsx
"use client";

import image_404 from "@/assets/404 Error-rafiki.svg";
import Image from "next/image";
import Link from "next/link";
// import logo from "@/assets/home/c-logo.jpeg";
// import Image from "next/image";

// import Link from "next/link";

// import Link from &apos;next/link&apos;;

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="text-center">
        <Image
          src={image_404}
          alt="404-Fehler Illustration"
          width={320}
          height={320}
          className="mx-auto shadow-xl rounded-lg"
          style={{ animation: "floatImage 3.2s ease-in-out infinite" }}
        />
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 mt-6">
          Sieht aus, als wären Sie verloren!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-2">
          Wir können die gesuchte Seite leider nicht finden.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
        >
          Zur Startseite
        </Link>
      </div>
      <style jsx>{`
        @keyframes floatImage {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
