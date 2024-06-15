'use client'

import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion } from "framer-motion";
import { useTheme } from '@/components/HOC/ThemeContext'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  errors?: { [key: string]: string }; 
  value: string;
  formSubmitted: boolean;
  formInvalid: boolean;
  formAttempted: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  setFormInteracted: (value: boolean) => void;
}

const Input = forwardRef(({
  id,
  name,
  label,
  type,
  autoComplete,
  errors = {},
  value,
  formSubmitted,
  formInvalid,
  formAttempted,
  setFormInteracted,
  onChange,
  onBlur,
  ...props
}: InputProps, ref) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [touched, setTouched] = useState(false);
    const { darkMode } = useTheme();
  
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setTouched(true);
      setFormInteracted(true);
      onBlur(e);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTouched(true);
      onChange(e);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const reset = () => {
      setTouched(false);
    };

    useImperativeHandle(ref, () => ({
      reset
    }));

    const error = errors[name];
    const hasError = Boolean(error);

    let borderColor = "transparent";
    if (formAttempted) {
      if (formInvalid) {
        borderColor = hasError ? "#FF3257" : "#2AC355";
      } else {
        borderColor = "transparent";
      }
    } else if (touched) {
      borderColor = hasError ? "#FF3257" : "#2AC355";
    } else if (isFocused || isHovered) {
      borderColor = "#5768FF";
    }

    const inputClasses = `relative border transition-all ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-300 flex items-center align-center p-0 box-border transition-all outline-0 w-full bg-white dark:bg-transparent dark:bg-cardGradDark shadow-xl dark:shadow-xlD text-base rounded-full hover:shadow-lg focus:shadow-lg pointer-events-none`;

    const wrapperVariants = ({
      default: { scale: 1, y: 0 },
      focus: { scale: 1.04, y: -2 },
    })
  
  return (
    <motion.div 
      key="InputWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={inputClasses}
      style={{  borderColor,
                transform: `scale(${isFocused ? '1' : isHovered ? '0.98' : '1'})`,
                zIndex: `${isFocused ? '99' : isHovered ? '99' : '1'}`
       }}
      transition={{ duration: 0.2 }}
      variants={wrapperVariants}
      >
        <motion.label
          htmlFor={id}
          className={`absolute left-[16px] text-base tracking-tight sm:text-lg transition-transform dark:bg-transparent duration-600 px-[14px] rounded-full text-midnight-900 dark:text-ice-900 border-2xl z-[98]`}
          initial={{ x: 0, y: 0 }}
          style={{ 
            translateY: isFocused || value ? '-38px' : '0',
            translateX: isFocused || value ? '-17px' : '0',
            scale: isFocused || value ? 0.8 : 1,
            backdropFilter: isFocused || value ? 'blur(140px)' : 'none',
            backgroundColor: darkMode ? (isFocused || value ? '#20252b' : 'transparent') : (isFocused || value ? '#FFFFFF' : 'transparent'),
          }}
          transition={{ type:"spring", stiffness: 80, duration: 0.5 }}
          >
            {label}
        </motion.label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          className="block pointer-events-auto transition-all px-[32px] py-[21px] rounded-full w-full appearance-none outline-none text-blurple-900 dark:text-white text-base sm:text-base font-bold tracking-tight p-0 dark:bg-transparent"
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
        />
        {/* {hasError && <p className="mt-2 text-base text-red-600">{error}</p>} */}
    </motion.div>
  );
});
export default Input;