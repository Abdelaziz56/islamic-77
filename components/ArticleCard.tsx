'use client';

import Link from 'next/link';
import { Article } from '@/lib/types';
import { BookOpen } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  locale: string;
}

export default function ArticleCard({ article, locale }: ArticleCardProps) {
  const translation = article.translations[locale as 'en' | 'ar'];

  return (
    <Link href={`/${locale}/article/${article.slug}`}>
      <div className="group rounded-lg border border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all cursor-pointer h-full flex flex-col bg-card">
        {/* Image */}
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden group-hover:from-primary/30 group-hover:to-accent/30 transition">
          <BookOpen size={64} className="text-primary/40 group-hover:text-primary/60 transition" />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition line-clamp-2">
            {translation.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {translation.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">
              {new Date(article.createdAt).toLocaleDateString()}
            </span>
            <span className="text-xs font-medium text-primary group-hover:translate-x-1 transition">
              → {locale === 'en' ? 'Read' : 'اقرأ'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
