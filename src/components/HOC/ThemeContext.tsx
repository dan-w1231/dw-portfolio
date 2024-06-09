import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
  theme: 'light', // Default theme
  toggleTheme: () => {}, // Placeholder function
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined') {
    if (localStorage.theme) return localStorage.theme as 'dark' | 'light';
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  }
  return 'light';
};

const saveTheme = (theme: 'dark' | 'light'): void => {
  localStorage.theme = theme;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const LightDarkToggle: React.FC<{children: ReactNode}> = ({ children }) => {
  // const [theme, setTheme] = useState<'dark' | 'light'>('light'); // Default to light theme
  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme() === 'dark');

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
  //   if (storedTheme) {
  //     setTheme(storedTheme);
  //     document.documentElement.classList.add(storedTheme);
  //   }
  // }, []);

  // const toggleTheme = (): void => {
  //   const newTheme = theme === 'dark' ? 'light' : 'dark';
  //   setTheme(newTheme);
  //   saveTheme(newTheme);
  // };

  useEffect(() => {
    saveTheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);