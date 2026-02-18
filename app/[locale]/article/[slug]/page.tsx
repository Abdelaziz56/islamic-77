'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getArticleBySlug, getCategoryBySlug } from '@/lib/data';
import { auth } from '@/lib/auth';
import Button from '@/components/ui/Button';
import { Bookmark, Share2, ArrowLeft } from 'lucide-react';

export default function ArticlePage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const slug = params.slug as string;

  const article = getArticleBySlug(slug);
  const category = article ? getCategoryBySlug(article.category) : null;
  const translation = article?.translations[locale as 'en' | 'ar'];

  const [user, setUser] = useState(auth.getCurrentUser());
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (user && article) {
      setIsBookmarked(auth.isBookmarked(user.id, article.id));
    }
  }, [user, article]);

  const handleBookmark = () => {
    if (!user) {
      window.location.href = `/${locale}/login`;
      return;
    }

    if (article) {
      if (isBookmarked) {
        auth.removeBookmark(user.id, article.id);
      } else {
        auth.addBookmark(user.id, article.id);
      }
      setIsBookmarked(!isBookmarked);
    }
  };

  if (!article || !translation) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href={`/${locale}/library`}>
            <Button variant="outline">
              <ArrowLeft size={18} className="mr-2" />
              Back to Library
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}/library`} className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft size={18} />
            {t('common.back')}
          </Link>
          <h1 className="text-4xl font-bold mb-4">{translation.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {category && (
              <Link
                href={`/${locale}/library?category=${category.slug}`}
                className="text-primary hover:underline"
              >
                {category.translations[locale as 'en' | 'ar'].name}
              </Link>
            )}
            <span>•</span>
            <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Image */}
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="text-6xl mb-2">📖</div>
                <p className="text-muted-foreground">{translation.title}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {translation.description}
            </p>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {translation.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base leading-8 mb-6 text-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm font-medium mb-4">Share this article</p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const text = `Check out: ${translation.title}`;
                    const url = typeof window !== 'undefined' ? window.location.href : '';
                    if (navigator.share) {
                      navigator.share({ title: translation.title, url });
                    } else {
                      navigator.clipboard.writeText(`${text}\n${url}`);
                    }
                  }}
                >
                  <Share2 size={18} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <Button
                onClick={handleBookmark}
                variant={isBookmarked ? 'default' : 'outline'}
                className="w-full"
              >
                <Bookmark size={18} className="mr-2" fill={isBookmarked ? 'currentColor' : 'none'} />
                {isBookmarked ? 'Bookmarked' : 'Bookmark'}
              </Button>

              {!user && (
                <div className="p-4 rounded-lg bg-muted border border-border text-sm">
                  <p className="mb-3">
                    <strong>Login</strong> to bookmark articles and save your progress.
                  </p>
                  <Link href={`/${locale}/login`}>
                    <Button variant="outline" size="sm" className="w-full">
                      {t('nav.login')}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
