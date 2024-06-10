'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import React, { ReactNode } from 'react';

const defaultTheme = 'light'; // Default theme if no preference is found

const ThemeContext = createContext({
  theme: defaultTheme,
  toggleTheme: () => {},
  darkMode: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [darkMode, setDarkMode] = useState(theme === 'dark');

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setDarkMode(newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Apply theme to document
  const applyTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement; 
    root.setAttribute('data-theme', theme); 
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  // Load theme from localStorage or OS preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || osTheme;
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setDarkMode(initialTheme === 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};