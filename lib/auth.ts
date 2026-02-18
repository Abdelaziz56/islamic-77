import { User } from './types';

const STORAGE_KEY = 'ikp_user';
const STORAGE_BOOKMARKS_KEY = 'ikp_bookmarks';

export const auth = {
  // Get current user from localStorage
  getCurrentUser: (): User | null => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem(STORAGE_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Login user (mock authentication)
  login: (email: string, password: string): { success: boolean; user?: User; error?: string } => {
    if (!email || !password) {
      return { success: false, error: 'Email and password are required' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    // Mock user - in production, this would authenticate with a backend
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }

    return { success: true, user };
  },

  // Signup user (mock authentication)
  signup: (email: string, name: string, password: string): { success: boolean; user?: User; error?: string } => {
    if (!email || !name || !password) {
      return { success: false, error: 'All fields are required' };
    }

    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    }

    return { success: true, user };
  },

  // Logout user
  logout: (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem(STORAGE_KEY);
  },

  // Add bookmark
  addBookmark: (userId: string, articleId: string): boolean => {
    if (typeof window === 'undefined') return false;
    
    const bookmarks = JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS_KEY) || '[]');
    const exists = bookmarks.some((b: any) => b.userId === userId && b.articleId === articleId);
    
    if (!exists) {
      bookmarks.push({
        id: Math.random().toString(36).substr(2, 9),
        userId,
        articleId,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify(bookmarks));
    }
    
    return true;
  },

  // Remove bookmark
  removeBookmark: (userId: string, articleId: string): boolean => {
    if (typeof window === 'undefined') return false;
    
    const bookmarks = JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS_KEY) || '[]');
    const filtered = bookmarks.filter((b: any) => !(b.userId === userId && b.articleId === articleId));
    localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify(filtered));
    
    return true;
  },

  // Get user bookmarks
  getBookmarks: (userId: string): string[] => {
    if (typeof window === 'undefined') return [];
    
    const bookmarks = JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS_KEY) || '[]');
    return bookmarks
      .filter((b: any) => b.userId === userId)
      .map((b: any) => b.articleId);
  },

  // Check if article is bookmarked
  isBookmarked: (userId: string, articleId: string): boolean => {
    if (typeof window === 'undefined') return false;
    
    const bookmarks = JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS_KEY) || '[]');
    return bookmarks.some((b: any) => b.userId === userId && b.articleId === articleId);
  },
};
