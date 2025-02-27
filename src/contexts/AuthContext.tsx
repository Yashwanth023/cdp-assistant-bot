
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in when component mounts
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Get users from local storage
    const usersStr = localStorage.getItem('users') || '[]';
    const users = JSON.parse(usersStr);
    
    // Find the user with matching email and password
    const foundUser = users.find((u: any) => 
      u.email === email && u.password === password
    );
    
    if (!foundUser) {
      throw new Error('Invalid email or password');
    }
    
    // Remove password before storing in state
    const { password: _, ...userWithoutPassword } = foundUser;
    
    // Save user to local storage and state
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    setIsAuthenticated(true);
  };

  const signup = async (username: string, email: string, password: string) => {
    // Get existing users from local storage
    const usersStr = localStorage.getItem('users') || '[]';
    const users = JSON.parse(usersStr);
    
    // Check if email already exists
    if (users.some((u: any) => u.email === email)) {
      throw new Error('Email already exists');
    }
    
    // Create new user
    const newUser = {
      id: Math.random().toString(36).substring(2, 15),
      username,
      email,
      password
    };
    
    // Add new user to users array
    users.push(newUser);
    
    // Save updated users array to local storage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Automatically log in the new user
    const { password: _, ...userWithoutPassword } = newUser;
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    setUser(userWithoutPassword);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
