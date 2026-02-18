'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">{t('nav.library')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${locale}/library?category=quran`} className="hover:text-foreground transition">
                  {t('categories.quran')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/library?category=hadith`} className="hover:text-foreground transition">
                  {t('categories.hadith')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/library?category=history`} className="hover:text-foreground transition">
                  {t('categories.history')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={`/${locale}`} className="hover:text-foreground transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Join our community of learners exploring Islamic knowledge.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Islamic Knowledge Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
