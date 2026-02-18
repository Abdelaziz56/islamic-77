'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { articles, categories, searchArticles, getArticlesByCategory } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import Button from '@/components/ui/Button';
import { Search, X } from 'lucide-react';

export default function LibraryPage() {
  const t = useTranslations();
  const locale = useLocale();
  const searchParams = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');

  const filteredArticles = useMemo(() => {
    let results = articles.filter(a => a.published);

    if (selectedCategory) {
      results = results.filter(a => a.category === selectedCategory);
    }

    if (searchQuery) {
      results = searchArticles(searchQuery, locale).filter(a => 
        !selectedCategory || a.category === selectedCategory
      );
    }

    return results;
  }, [searchQuery, selectedCategory, locale]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('library.title')}</h1>
          <p className="text-lg text-muted-foreground">
            Discover {filteredArticles.length} articles
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              {/* Search Input */}
              <div>
                <label className="text-sm font-medium mb-2 block">{t('library.search')}</label>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={t('library.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="text-sm font-medium mb-3 block">{t('library.filter')}</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      !selectedCategory
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted border border-border'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === category.slug
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted border border-border'
                      }`}
                    >
                      {category.translations[locale as 'en' | 'ar'].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory) && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleClearFilters}
                >
                  {t('common.close')} Filters
                </Button>
              )}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} locale={locale} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('library.noResults')}</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filters
                </p>
                <Button variant="outline" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
