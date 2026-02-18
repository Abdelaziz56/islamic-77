'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { auth } from '@/lib/auth';
import { articles, getArticleById } from '@/lib/data';
import Button from '@/components/ui/Button';
import ArticleCard from '@/components/ArticleCard';
import { LogOut, Bookmark, Settings } from 'lucide-react';

export default function DashboardPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [user, setUser] = useState(auth.getCurrentUser());
  const [bookmarkedArticles, setBookmarkedArticles] = useState<typeof articles>([]);
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'profile'>('bookmarks');

  useEffect(() => {
    if (!user) {
      router.push(`/${locale}/login`);
      return;
    }

    // Load bookmarked articles
    const bookmarkIds = auth.getBookmarks(user.id);
    const marked = bookmarkIds
      .map(id => getArticleById(id))
      .filter((article): article is typeof articles[0] => article !== undefined);
    setBookmarkedArticles(marked);
  }, [user, locale, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    auth.logout();
    router.push(`/${locale}`);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">{t('dashboard.title')}</h1>
          <p className="text-muted-foreground">Welcome back, {user.name}!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'bookmarks'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Bookmark size={18} className="inline mr-2" />
            {t('dashboard.bookmarks')} ({bookmarkedArticles.length})
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'profile'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Settings size={18} className="inline mr-2" />
            {t('dashboard.profile')}
          </button>
        </div>

        {/* Bookmarks Tab */}
        {activeTab === 'bookmarks' && (
          <div>
            {bookmarkedArticles.length > 0 ? (
              <div>
                <p className="text-muted-foreground mb-6">
                  You have {bookmarkedArticles.length} bookmarked article{bookmarkedArticles.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bookmarkedArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} locale={locale} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <Bookmark size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('dashboard.empty')}</h3>
                <p className="text-muted-foreground mb-6">
                  Start exploring articles and bookmark your favorites to see them here.
                </p>
                <Button onClick={() => router.push(`/${locale}/library`)}>
                  Explore Articles
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t('dashboard.profile')}</h2>

              <div className="space-y-6">
                {/* Profile Info */}
                <div>
                  <label className="text-sm text-muted-foreground">Name</label>
                  <p className="text-lg font-medium">{user.name}</p>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <p className="text-lg font-medium">{user.email}</p>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Member Since</label>
                  <p className="text-lg font-medium">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground">Role</label>
                  <p className="text-lg font-medium capitalize">{user.role}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-border">
                  <div>
                    <p className="text-2xl font-bold text-primary">{bookmarkedArticles.length}</p>
                    <p className="text-sm text-muted-foreground">Bookmarks</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">{articles.length}</p>
                    <p className="text-sm text-muted-foreground">Articles Available</p>
                  </div>
                </div>

                {/* Logout */}
                <Button
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full"
                >
                  <LogOut size={18} className="mr-2" />
                  {t('nav.logout')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
