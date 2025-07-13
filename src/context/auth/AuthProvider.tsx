import { useState, useEffect } from 'react';
import { AuthContext } from './authContext';
import type { UserRole, User } from './types';
import type { ReactNode } from 'react';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (email: string, role: UserRole, token: string) => {
    setUser({ email, role });
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ email, role }));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
