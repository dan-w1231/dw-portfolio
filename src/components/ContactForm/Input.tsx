'use client'

import { useState } from 'react';
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  autoComplete: string;
  // placeholder: string;
  errors?: { [key: string]: string }; 
  errorMessage?: string;
}

const Input = ({
  id,
  name,
  label,
  autoComplete,
  // placeholder,
  errors = {}, // Use an object with string keys
  errorMessage = "",
  ...props
}: InputProps) => {
    console.log("Input component rerendered with errors:", errors);
    
    const [isFocused, setIsFocused] = useState(false);
  
      const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
    };

    // I can define a class that will apply a red border on validation error
    const inputClasses = `flex items-center align-center p-0 box-border transition-all border-2 border-white outline-0 w-full bg-white shadow-lg text-sm rounded-full pointer-events-none hover:border-2 active:border-2 hover:border-blurple active:border-blurple focus:border-blurple hover:scale-104 active:scale-102 ${
      Object.keys(errors).length > 0 ? "border-2 border-red-500 bg-red-700" : ""
    }`;

    const wrapperVariants = ({
      default: { scale: 1, y: 0, border: '2px solid transparent' },
      focus: { 
        scale: 1.04, y: -2,
        border: '2px solid #5768FF'
      },
    })
  
    const inputVariants = ({
      hover: { 
        backgroundColor: 'rgba(255,255,255,1)',
        transform: 'scale(0.98)',
         },
    })
  
  
  return (
    <motion.div 
      key="InputWrapper"
      className={inputClasses}
      transition={{ duration: 0.2 }}
      variants={wrapperVariants}
      whileFocus="focus"
      >
        <motion.label
          htmlFor={id}
          className={`absolute block text-sm tracking-tight sm:text-lg transition-transform duration-600 px-[14px] rounded-full bg-blurple text-white border-2xl`}
          initial={{ x: -10, y: 0 }}
          style={{ 
            translateY: isFocused || props.value ? '-38px' : '0',
            translateX: isFocused || props.value ? '-17px' : '0',
            scale: isFocused || props.value ? 0.8 : 1,
            // backgroundColor: isFocused || props.value ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)'
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
          className="block pointer-events-auto px-[32px] py-[23px] rounded-full w-full appearance-none outline-none text-blurple text-sm font-bold tracking-tight sm:text-lg p-0"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          // placeholder={placeholder}
        />
        {/* {errors && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>} */}
    </motion.div>
  );
};
export default Input;