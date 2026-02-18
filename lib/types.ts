export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface Article {
  id: string;
  slug: string;
  category: string;
  imageUrl: string;
  published: boolean;
  createdAt: string;
  translations: {
    en: ArticleTranslation;
    ar: ArticleTranslation;
  };
}

export interface ArticleTranslation {
  title: string;
  description: string;
  content: string;
}

export interface Bookmark {
  id: string;
  userId: string;
  articleId: string;
  createdAt: string;
}

export interface Category {
  id: string;
  slug: string;
  translations: {
    en: { name: string; description: string };
    ar: { name: string; description: string };
  };
}
