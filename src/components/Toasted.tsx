'use client'
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '@/components/HOC/ThemeContext';

const Toasted = () => {
  const { darkMode } = useTheme();

  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            fontFamily: "Cabinet Grotesk",
            alignItems: "flex-start",
            letterSpacing: "-0.025em",
            padding: "24px",
            borderRadius: "38px",
            color: darkMode ? "#FFFFFF" : "#151721",
            background: darkMode ? "rgba(13,20,25,0.8)" : "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            border: "1px solid #2AC355",
          },
        },
        error: {
          style: {
            fontFamily: "Cabinet Grotesk",
            alignItems: "flex-start",
            letterSpacing: "-0.025em",
            padding: "24px",
            borderRadius: "38px",
            color: darkMode ? "#FFFFFF" : "#151721",
            background: darkMode ? "rgba(13,20,25,0.8)" : "rgba(255,255,255,0.95)",
            backdropFilter: "blur(8px)",
            border: "1px solid #FF3257",
          },
        },
      }}
    />
  );
};

export default Toasted;