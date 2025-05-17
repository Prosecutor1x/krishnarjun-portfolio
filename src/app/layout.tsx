// layout.tsx (Client Component)
"use client";

import ThemeProvider from '@/lib/hooks/use-theme';
import fontVariables from '@/lib/utils/fonts';

import Cursor from '@/components/ui/Cursor';

import '../styles/globals.css';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src="/scripts/no-flash.js" strategy="afterInteractive" />
      </head>
      <body className={`text-text bg-bg ${fontVariables} ${isMounted ? '' : 'opacity-0'}`}>
        {isMounted && <Cursor className="hidden dark:lg:block" />}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
