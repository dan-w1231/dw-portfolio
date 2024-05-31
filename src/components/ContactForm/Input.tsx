'use client'

import { useState } from 'react';
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  autoComplete: string;
  errors?: { [key: string]: string }; 
  errorMessage?: string;
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  name,
  label,
  autoComplete,
  errors = {},
  errorMessage = "",
  value,
  onChange,
  onBlur,
  ...props
}: InputProps) => {
    console.log("Input component rerendered with errors:", errors);
    
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [touched, setTouched] = useState(false);
    const [values, setValues] = useState({
      name: "",
      email: "",
      message:"",
      errors: {}
    });
  
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setTouched(true);
      onBlur(e);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const error = errors[name];
    const hasError = Boolean(error);
    const hasNoErrors = Object.keys(errors).length === 0;

    let borderColor = "transparent";
      if (touched) {
        borderColor = hasError ? "red" : "green";
    }
      if (isFocused || isHovered) {
        borderColor = "#5768FF";
    }

    const inputClasses = `border-2 flex items-center align-center p-0 box-border transition-all outline-0 w-full bg-white shadow-lg text-sm rounded-full pointer-events-none`;
    // const inputClasses = `flex items-center align-center p-0 box-border transition-all outline-0 w-full bg-white shadow-lg text-sm rounded-full pointer-events-none hover:border-2 active:border-2 hover:border-blurple active:border-blurple focus:border-blurple hover:scale-104 active:scale-102 ${error ? ` border-2 border-${borderColor}` : ` border-2 border-${borderColor}`}`;

    const wrapperVariants = ({
      default: { scale: 1, y: 0 },
      focus: { scale: 1.04, y: -2 },
    })
  
    // const inputVariants = ({
    //   hover: { 
    //     backgroundColor: 'rgba(255,255,255,1)',
    //     transform: 'scale(0.98)',
    //      },
    // })
  
  
  return (
    <motion.div 
      key="InputWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={inputClasses}
      style={{ borderColor }}
      transition={{ duration: 0.2 }}
      variants={wrapperVariants}
      >
        <motion.label
          htmlFor={id}
          className={`absolute block text-sm tracking-tight sm:text-lg transition-transform duration-600 px-[14px] rounded-full bg-blurple text-white border-2xl`}
          initial={{ x: -10, y: 0 }}
          style={{ 
            translateY: isFocused || value ? '-38px' : '0',
            translateX: isFocused || value ? '-17px' : '0',
            scale: isFocused || value ? 0.8 : 1,
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
          value={value}
          className="block pointer-events-auto px-[32px] py-[23px] rounded-full w-full appearance-none outline-none text-blurple text-sm font-bold tracking-tight sm:text-lg p-0"
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
        />
        {/* {hasError && <p className="mt-2 text-sm text-red-600">{error}</p>} */}
    </motion.div>
  );
};
export default Input;