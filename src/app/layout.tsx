// app/layout.tsx
import Link from 'next/link';
import './globals.css'; // assuming Tailwind is set up here
import { ReactNode } from 'react';
import type { Viewport, Metadata } from "next";


export const metadata: Metadata = {
  title: 'My PWA',
  description: 'PWA example',
  manifest: '/manifest.json',
  themeColor: '#000000',
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head> 
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="bg-white text-gray-800">
        <nav className="bg-blue-600 p-4 text-white shadow-md">
          <div className="container mx-auto flex gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/form" className="hover:underline">Form</Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};