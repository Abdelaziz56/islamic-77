# Islamic Knowledge Platform

A comprehensive multi-language Islamic knowledge platform built with Next.js, featuring user authentication, content library, bookmarks system, and admin dashboard.

## Features

- **Multi-Language Support**: Full Arabic and English support with RTL/LTR switching
- **User Authentication**: Secure login and signup with localStorage persistence
- **Content Library**: Browse Islamic articles organized by categories
- **Search & Filtering**: Full-text search across all articles
- **Bookmarks System**: Save favorite articles to your dashboard
- **Dark Mode**: Complete dark mode support with theme persistence
- **Admin Dashboard**: Manage articles, categories, and view platform statistics
- **Responsive Design**: Fully responsive across all devices
- **Mobile Optimized**: Touch-friendly interface with mobile navigation

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Internationalization**: next-intl for multi-language support
- **Theme Management**: next-themes for dark mode
- **Icons**: Lucide React
- **State Management**: React hooks + localStorage

## Project Structure

```
/app
  /[locale]              # Locale-based routing
    /page.tsx           # Home page
    /login              # Authentication pages
    /signup
    /library            # Content library with search
    /article/[slug]     # Article detail page
    /dashboard          # User dashboard with bookmarks
    /admin              # Admin dashboard
  /layout.tsx           # Root layout with theme provider
/components
  /ui                   # Reusable UI components
  /Header.tsx          # Navigation header
  /Footer.tsx          # Footer component
  /ArticleCard.tsx     # Article card component
/lib
  /types.ts            # TypeScript interfaces
  /data.ts             # Articles and categories data
  /auth.ts             # Authentication utilities
  /utils.ts            # Helper functions
/messages               # i18n translation files
  /en.json            # English translations
  /ar.json            # Arabic translations
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

### Home Page
- Browse featured articles
- Explore categories
- Navigate to the full library

### Library
- View all articles organized by category
- Search articles by title or description
- Filter by category for focused browsing

### Authentication
- Create an account or login
- Access your personal dashboard
- Demo credentials: any email with password (6+ characters)

### Dashboard
- View and manage your bookmarks
- See profile information
- Track your reading activity
- Logout from your account

### Admin Dashboard
- Access at `/admin` (admin role required)
- Manage articles (view, edit, publish)
- Manage categories
- View platform statistics
- Demo: Create an account and it will have admin privileges for demo purposes

## Content Categories

The platform includes articles in the following categories:

1. **Quran & Tafseer** - Quranic studies and interpretation
2. **Hadith** - Prophetic traditions
3. **Fiqh** - Islamic jurisprudence
4. **Islamic History** - History of Islam and Islamic civilizations
5. **Islamic Ethics** - Morality and values
6. **Duas & Remembrance** - Daily supplications
7. **Islamic Calendar** - Calendar events and celebrations

## Localization

The platform supports:
- **English** (en) - Full English interface and content
- **Arabic** (ar) - Full Arabic interface with RTL support

Switch languages using the language button in the header or by clicking the language toggle in mobile menu.

## Dark Mode

- Toggle dark mode using the moon/sun icon in the header
- Theme preference is saved to browser storage
- Automatic system preference detection available

## Data Persistence

- **User Authentication**: Stored in browser localStorage
- **Bookmarks**: Persisted in browser localStorage
- **Articles**: In-memory data structure (can be replaced with backend API)
- **Theme Preference**: Managed by next-themes

## API Integration

The platform is currently built with client-side data. To integrate with a backend:

1. Replace the data in `/lib/data.ts` with API calls
2. Update authentication in `/lib/auth.ts` to use backend endpoints
3. Create API routes in `/app/api/` for backend communication
4. Update data fetching patterns to use SWR or React Query

## Security Notes

- This is a demo implementation using localStorage for authentication
- For production use, implement proper backend authentication
- Use secure password hashing (bcrypt) on the backend
- Implement HTTPS and secure session management
- Add rate limiting to authentication endpoints
- Use environment variables for sensitive configuration

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Optimizations

- Next.js Image Optimization
- Code splitting with dynamic imports
- CSS-in-JS with Tailwind
- Server-side rendering where applicable
- Optimized bundle with tree-shaking

## Future Enhancements

- Backend API integration with database
- User comments on articles
- Discussion forums
- Advanced search with filters
- Export articles to PDF
- User contributions/submissions
- Notification system
- Content recommendations
- Mobile app (React Native)
- Analytics dashboard

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please visit the project repository.

---

**Note**: This is a fully functional demo with mock data and localStorage persistence. For production use, integrate with a proper backend database and authentication system.
