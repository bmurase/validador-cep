import React, { useState, createContext, useCallback, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  // BUSCA NO LOCALSTORAGE
  const [data, setData] = useState<User>(() => {
    const user = localStorage.getItem('@ValidadorCEP:user');

    if (user) {
      return { id: user };
    }

    return {} as User;
  });

  // LOGIN
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const user = response.data;
    
    localStorage.setItem('@ValidadorCEP:user', user.id);

    setData({ id: user.id });
  }, []);

  // LOGOUT
  const signOut = useCallback(() => {
    localStorage.removeItem('@ValidadorCEP:user');

    setData({} as User);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// HOOK DO AUTHCONTEXT
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}