'use client'
import { useState } from 'react';
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  autoComplete: string;
  // placeholder: string;
  error?: boolean;
  errorMessage?: string;
}
const Input = ({
  id,
  name,
  label,
  autoComplete,
  // placeholder,
  error = false,
  errorMessage = "",
  ...props
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
  
      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
    };

  return (
    <motion.div 
      key="Input"
      className="block w-full bg-white text-sm rounded-full border-gray-400 py-6 pl-8 pr-8 focus:border-gray-500 mb-2"
      transition={{ duration: 0.2 }}
      >
        <motion.label
          htmlFor={id}
          className={`absolute block text-sm tracking-tight sm:text-lg text-midnight-900 transition-transform duration-600`}
          initial={{ x: 0, y: 0 }}
          style={{ 
            translateY: isFocused || props.value ? '-40px' : '0',
            scale: isFocused ? 0.98 : 1
          }}
          transition={{ type:"spring", stiffness: 80, duration: 0.5 }}
          >
            {label}
        </motion.label>
        <input
          {...props}
          type="text"
          id={id}
          name={name}
          className="block w-full text-sm font-bold tracking-tight sm:text-lg p-0"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          // placeholder={placeholder}
        />
        {error && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
    </motion.div>
  );
};
export default Input;