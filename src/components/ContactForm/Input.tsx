'use client'

import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion } from "framer-motion";

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

    const inputClasses = `relative border transition-all flex items-center align-center p-0 box-border transition-all outline-0 w-full bg-white shadow-lg text-base rounded-full focus:box-shadow-xl pointer-events-none`;

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
                transform: `scale(${isFocused ? '1.01' : isHovered ? '1.01' : '1'})`,
                zIndex: `${isFocused ? '99' : isHovered ? '99' : '1'}`
       }}
      transition={{ duration: 0.2 }}
      variants={wrapperVariants}
      >
        <motion.label
          htmlFor={id}
          className={`absolute left-[16px] text-base tracking-tight sm:text-lg transition-transform duration-600 px-[14px] rounded-full bg-white bg-opacity-50 backdrop-blur text-midnight-900 border-2xl`}
          initial={{ x: 0, y: 0 }}
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
          type={type}
          id={id}
          name={name}
          value={value}
          className="block pointer-events-auto transition-all px-[32px] py-[21px] rounded-full w-full appearance-none outline-none text-blurple text-base sm:text-base font-bold tracking-tight  p-0"
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