import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { UserRole, User } from './types';
import { AuthContext } from './AuthContextDefinition';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (email: string, role: UserRole, token: string) => {
    setUser({ email, role });
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ email, role }));
  };

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }, []);

  const isTokenExpired = (token: string): boolean => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  };

  const refreshToken = useCallback(async () => {
    try {
      // Simulate token refresh logic
      const newToken = 'new-fake-jwt-token';
      setToken(newToken);
      localStorage.setItem('token', newToken);
    } catch (error) {
      console.error('Failed to refresh token:', error);
      logout();
    }
  }, [logout]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      if (isTokenExpired(storedToken)) {
        refreshToken();
      } else {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    }
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
