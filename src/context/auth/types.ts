export type UserRole = 'student' | 'lecturer' | 'hod' | 'admin';

export interface User {
  email: string;
  role: UserRole;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, role: UserRole, token: string) => void;
  logout: () => void;
  token: string | null;
}
