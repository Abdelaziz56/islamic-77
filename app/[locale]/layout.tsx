'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
