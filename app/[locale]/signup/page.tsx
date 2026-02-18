'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import Button from '@/components/ui/Button';
import { AlertCircle } from 'lucide-react';

export default function SignupPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    const result = auth.signup(email, name, password);

    if (result.success) {
      router.push(`/${locale}`);
    } else {
      setError(result.error || 'Signup failed');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
            <span className="text-lg font-bold">IK</span>
          </div>
          <h1 className="text-3xl font-bold">{t('auth.signup')}</h1>
          <p className="mt-2 text-muted-foreground">
            {t('auth.haveAccount')}
            <Link href={`/${locale}/login`} className="text-primary hover:underline ml-1">
              {t('auth.login')}
            </Link>
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/50 flex gap-3">
            <AlertCircle className="text-destructive flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t('auth.email')}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t('auth.password')}</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t('auth.confirmPassword')}</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Loading...' : t('auth.submit')}
          </Button>
        </form>

        {/* Demo Info */}
        <div className="p-4 rounded-lg bg-muted/50 border border-border text-sm text-muted-foreground">
          <p className="font-medium mb-2">Quick Demo:</p>
          <p>Create an account with any email and password (min 6 characters) to get started.</p>
        </div>
      </div>
    </div>
  );
}
