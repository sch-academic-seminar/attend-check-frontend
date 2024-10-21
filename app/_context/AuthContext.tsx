'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../_types/entity';


interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
export const useAuth = () => {
=======
export const useAuth : any = () => {
>>>>>>> 28e2b78 (Initial commit or update project)
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};