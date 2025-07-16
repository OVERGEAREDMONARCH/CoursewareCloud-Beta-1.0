# Courseware Cloud

Courseware Cloud is a modern web platform for centralized academic resource management. It enables students, lecturers, heads of departments, and administrators to access, share, and manage academic materials in one place, with role-based access and a beautiful, responsive UI.

## Features
- **Centralized resource repository**: All academic files in one place, organized by department and level
- **Role-based access control**: Students, lecturers, HODs, and admins have different permissions and customized dashboards
- **Easy uploads and downloads**: Supports common academic formats (PDF, PPT, DOCX, XLSX, images, videos) up to 2GB per file
- **Real-time updates**: Instant notifications when materials are added or updated
- **Advanced search**: Quick resource finding by course, date, file type, or keywords
- **Mobile-friendly**: Responsive design with collapsible sidebars and adaptive layouts
- **Dark mode**: Smart theme system with light, dark, and system preferences
- **Modern UI Components**: Beautiful interface built with shadcn/ui and Lucide icons
- **Version Control**: Track changes and updates to course materials
- **Analytics**: Monitor resource access and usage patterns
- **Course Organization**: Intuitive structure by semester, course, and type
- **LMS Integration**: Support for integration with existing educational systems

## Tech Stack
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) for type-safe development
- [Vite](https://vitejs.dev/) for fast development and optimized builds
- [Tailwind CSS](https://tailwindcss.com/) for modern, responsive styling
- [React Router](https://reactrouter.com/) v7 for client-side routing
- [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
- [Lucide Icons](https://lucide.dev/) for consistent iconography
- Context API for state management
  - Authentication and user roles
  - Theme preferences
  - Sidebar state
  - Notifications

## Project Structure
- `src/` — Main source code
  - `components/` — Reusable UI components
    - `ui/` — shadcn/ui components (buttons, cards, dialogs, etc.)
  - `context/auth/` — Authentication context and provider
  - `dashboards/` — Role-specific dashboards
    - `admins/` — Admin dashboard and management tools
    - `head-of-departments/` — HOD dashboard and faculty management
    - `lecturers/` — Lecturer dashboard and course management
    - `student/` — Student dashboard and learning resources
  - `hooks/` — Custom React hooks
    - `useAuth` — Authentication state management
    - `useSidebar` — Responsive sidebar controls
    - `useMobile` — Mobile device detection
    - `useToast` — Toast notifications
  - `layouts/` — Layout components
    - `AppSidebar` — Main application sidebar
    - `DashboardLayout` — Common dashboard layout
    - `Header` — Application header
  - `lib/` — Utility functions
  - `pages/` — Main pages (Login, Landing)
  - `routes/` — App routing and protected routes

## Authentication & Roles
- JWT-based authentication system (currently simulated)
- Role-based permissions:
  - `student` - Access to course materials and assignments
  - `lecturer` - Course management and material uploads
  - `hod` - Department oversight and faculty management
  - `admin` - System administration and user management
- Protected routes based on user roles
- Persistent authentication with local storage
- Token refresh mechanism

## UI/UX Features
- Responsive design with mobile-first approach
- Smart sidebar that collapses to icons on smaller screens
- Dark mode with system preference detection
- Custom scrollbars and smooth animations
- Beautiful gradients and glassmorphism effects
- Loading states and skeleton screens
- Toast notifications for user feedback
- Form validation and error handling

## Development
1. Clone and install dependencies:
```powershell
git clone <your-repo-url>
cd CoursewareCloud
npm install
```

2. Start development server:
```powershell
npm run dev
```
Access the app at `http://localhost:5173`

3. Available commands:
```powershell
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
MIT

---

**Note:** This project is actively under development. For questions, bug reports, or feature requests, please open an issue.