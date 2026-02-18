'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Search } from 'lucide-react';
import { categories, articles } from '@/lib/data';
import Button from '@/components/ui/Button';
import ArticleCard from '@/components/ArticleCard';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const featuredArticles = articles.filter(a => a.published).slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 text-foreground">
              {t('home.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/library`}>
                <Button size="lg" className="w-full sm:w-auto">
                  {t('home.explore')} <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href={`/${locale}/library`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {t('home.getStarted')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('home.categories')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.id}
                href={`/${locale}/library?category=${category.slug}`}
                className="group p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                      {category.translations[locale as 'en' | 'ar'].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.translations[locale as 'en' | 'ar'].description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">{t('home.featured')}</h2>
            <Link href={`/${locale}/library`}>
              <Button variant="outline">
                {t('home.explore')} <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Start your journey of Islamic learning today with our comprehensive knowledge base.
          </p>
          <Link href={`/${locale}/library`}>
            <Button size="lg" variant="outline" className="hover:bg-white hover:text-primary">
              {t('home.explore')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
