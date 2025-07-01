# Courseware Cloud

Courseware Cloud is a modern web platform for centralized academic resource management. It enables students, lecturers, heads of departments, and administrators to access, share, and manage academic materials in one place, with role-based access and a beautiful, responsive UI.

## Features
- **Centralized resource repository**: All academic files in one place, organized by department and level.
- **Role-based access control**: Students, lecturers, HODs, and admins have different permissions.
- **Easy uploads and downloads**: Supports all common academic file formats (PDF, PPT, DOCX, XLSX, images, videos).
- **Real-time updates**: Instantly see new or updated materials.
- **Advanced search**: Quickly find resources by course, date, file type, or keywords.
- **Mobile-friendly**: Fully responsive design for desktop and mobile.
- **Dark mode**: Toggle between light and dark themes.

## Tech Stack
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development and builds
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for routing
- Context API for authentication and role management

## Getting Started

### 1. Clone the repository
```powershell
git clone <your-repo-url>
cd CoursewareCloud
```

### 2. Install dependencies
```powershell
npm install
```

### 3. Install React Router DOM (if not already installed)
```powershell
npm install react-router-dom
```

### 4. Run the development server
```powershell
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### 5. Build for production
```powershell
npm run build
```

## Tailwind CSS Configuration
This project uses Tailwind CSS v3.3.5 for styling. The configuration is set up in the following files:

- `tailwind.config.js` - Main configuration file
- `postcss.config.js` - PostCSS configuration with Tailwind CSS plugin
- `src/index.css` - Contains the Tailwind directives

If you encounter any issues with Tailwind CSS:

1. Ensure you have the correct dependencies installed:
   ```powershell
   npm install --save-dev tailwindcss@3.3.5 postcss autoprefixer
   ```

2. Check that your `postcss.config.js` uses the standard plugin name:
   ```javascript
   export default {
     plugins: {
       'postcss-import': {},
       'tailwindcss': {},
       autoprefixer: {},
     },
   }
   ```

## Project Structure
- `src/` — Main source code
  - `components/` — Reusable UI components
  - `context/auth/` — Authentication context and provider
  - `dashboards/` — Dashboard pages for each user role
  - `hooks/` — Custom React hooks
  - `layouts/` — Layout components
  - `pages/` — Main pages (e.g., Login)
  - `routes/` — App routing and protected routes
  - `utils/` — Utility functions
- `public/` — Static assets

## Authentication & Roles
- Uses React Context to manage authentication state and user roles.
- Simulated login for demo purposes (no backend integration yet).
- Roles: `student`, `lecturer`, `hod`, `admin`.

## Dashboards
- Each user role will have a dedicated dashboard (structure in `src/dashboards/`).
- Access is protected by role-based routing (see `src/routes/`).

## Routing
- The application uses React Router v7 for routing.
- The main router is configured in `src/App.tsx`.
- Make sure to wrap the `App` component with `BrowserRouter` in `src/main.tsx`.

## Styling
- Tailwind CSS is used for all styling. See `tailwind.config.js` and `src/index.css` for customizations.
- Dark mode is enabled with the `class` strategy in the Tailwind config.

## Linting
- ESLint is configured for code quality. Run `npm run lint` to check for issues.

## Contributing
Pull requests are welcome! Please open an issue first to discuss major changes.

## License
MIT

---

**Note:** This project is a work in progress. For questions or suggestions, please open an issue.