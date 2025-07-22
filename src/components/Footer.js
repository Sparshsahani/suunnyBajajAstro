"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-white text-sm py-6 px-4 md:px-10 lg:px-20 mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <p>© {new Date().getFullYear()} Suunny Bajaj Astrology</p>
          <Link
            href="/policy"
            className="underline hover:text-quant-yellow transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </>
  );
}
