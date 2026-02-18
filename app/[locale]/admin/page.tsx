'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { auth } from '@/lib/auth';
import { articles, categories, Article } from '@/lib/data';
import Button from '@/components/ui/Button';
import { Edit2, Trash2, Plus, CheckCircle, Circle } from 'lucide-react';

export default function AdminPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [user, setUser] = useState(auth.getCurrentUser());
  const [activeTab, setActiveTab] = useState<'articles' | 'categories'>('articles');
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      router.push(`/${locale}`);
      return;
    }
    setUser(currentUser);
  }, [locale, router]);

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">{t('admin.title')}</h1>
          <p className="text-muted-foreground">Manage your platform content and settings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'articles'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('admin.articles')}
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-4 py-3 font-medium border-b-2 transition ${
              activeTab === 'categories'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {t('admin.categories')}
          </button>
        </div>

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Articles ({articles.length})</h2>
              <Button>
                <Plus size={18} className="mr-2" />
                {t('admin.addArticle')}
              </Button>
            </div>

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Title</th>
                      <th className="px-4 py-3 text-left font-semibold">Category</th>
                      <th className="px-4 py-3 text-left font-semibold">Status</th>
                      <th className="px-4 py-3 text-left font-semibold">Created</th>
                      <th className="px-4 py-3 text-right font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-muted/50 transition">
                        <td className="px-4 py-3">
                          <div className="font-medium">
                            {article.translations[locale as 'en' | 'ar'].title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {article.slug}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {categories.find(c => c.slug === article.category)
                            ?.translations[locale as 'en' | 'ar'].name}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            {article.published ? (
                              <CheckCircle size={18} className="text-green-600" />
                            ) : (
                              <Circle size={18} className="text-muted-foreground" />
                            )}
                            <span>{article.published ? 'Published' : 'Draft'}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(article.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-2 hover:bg-muted rounded transition">
                              <Edit2 size={18} />
                            </button>
                            <button className="p-2 hover:bg-destructive/10 rounded transition text-destructive">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Total articles: <strong>{articles.length}</strong> | 
              Published: <strong>{articles.filter(a => a.published).length}</strong> | 
              Drafts: <strong>{articles.filter(a => !a.published).length}</strong>
            </p>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Categories ({categories.length})</h2>
              <Button>
                <Plus size={18} className="mr-2" />
                Add Category
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="border border-border rounded-lg p-6 hover:border-primary transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {category.translations[locale as 'en' | 'ar'].name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.translations[locale as 'en' | 'ar'].description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-muted rounded transition">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 rounded transition text-destructive">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Slug: <code className="bg-muted px-2 py-1 rounded">{category.slug}</code>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm">
                      <strong>{articles.filter(a => a.category === category.slug).length}</strong> articles in this category
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
