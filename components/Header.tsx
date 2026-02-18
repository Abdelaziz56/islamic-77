'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun, LogOut } from 'lucide-react';
import { auth } from '@/lib/auth';
import Button from '@/components/ui/Button';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(auth.getCurrentUser());

  const handleLogout = () => {
    auth.logout();
    setUser(null);
    router.push(`/${locale}`);
  };

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-lg text-primary">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-sm font-bold">
              IK
            </div>
            <span className="hidden sm:inline">Islamic Knowledge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href={`/${locale}`} className="text-sm text-muted-foreground hover:text-foreground transition">
              {t('nav.home')}
            </Link>
            <Link href={`/${locale}/library`} className="text-sm text-muted-foreground hover:text-foreground transition">
              {t('nav.library')}
            </Link>
            {user && (
              <Link href={`/${locale}/dashboard`} className="text-sm text-muted-foreground hover:text-foreground transition">
                {t('nav.dashboard')}
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link href={`/${locale}/admin`} className="text-sm text-muted-foreground hover:text-foreground transition">
                {t('nav.admin')}
              </Link>
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-accent/10 rounded-lg transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={switchLocale}
              className="hidden sm:inline-flex"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </Button>

            {/* Auth */}
            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-accent/10 rounded-lg transition"
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link href={`/${locale}/login`} className="hidden md:inline">
                <Button size="sm" variant="default">{t('nav.login')}</Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href={`/${locale}`} className="block px-2 py-2 text-sm hover:bg-accent/10 rounded">
              {t('nav.home')}
            </Link>
            <Link href={`/${locale}/library`} className="block px-2 py-2 text-sm hover:bg-accent/10 rounded">
              {t('nav.library')}
            </Link>
            {user && (
              <Link href={`/${locale}/dashboard`} className="block px-2 py-2 text-sm hover:bg-accent/10 rounded">
                {t('nav.dashboard')}
              </Link>
            )}
            {user?.role === 'admin' && (
              <Link href={`/${locale}/admin`} className="block px-2 py-2 text-sm hover:bg-accent/10 rounded">
                {t('nav.admin')}
              </Link>
            )}
            {!user && (
              <Link href={`/${locale}/login`} className="block px-2 py-2 text-sm hover:bg-accent/10 rounded">
                {t('nav.login')}
              </Link>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-2 py-2 text-sm hover:bg-accent/10 rounded"
              >
                {t('nav.logout')}
              </button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={switchLocale}
              className="w-full mt-2"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
