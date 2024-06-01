'use client'

import { useState } from 'react';
import { motion } from "framer-motion";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  autoComplete: string;
  errors?: { [key: string]: string }; 
  errorMessage?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  setFormInteracted: (value: boolean) => void;
}

const TextArea = ({
  id,
  name,
  label,
  autoComplete,
  errors = {},
  errorMessage = "",
  value,
  setFormInteracted,
  onChange,
  onBlur,
  ...props
}: TextAreaProps) => {

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

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    setTouched(true);
    setFormInteracted(true);
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
      borderColor = hasError ? "#FF3257" : "#2AC355";
  }
    if (isFocused || isHovered) {
      borderColor = "#5768FF";
  }

  const inputClasses = `relative border flex items-center align-center transition-all p-0 box-border transition-all outline-0 w-full bg-white shadow-lg text-base md:text-base rounded-[38px] pointer-events-none`;

  const wrapperVariants = ({
    default: { scale: 1, y: 0 },
    focus: { scale: 1.04, y: -2 },
  })

  return (
    <motion.div 
      key="TextAreaWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={inputClasses}
      style={{  borderColor,
                transform: `scale(${isFocused ? '1.01' : isHovered ? '1.01' : '1'})`,
                zIndex: `${isFocused ? '97' : isHovered ? '97' : '1'}`
      }}
      transition={{ duration: 0.2 }}
      variants={wrapperVariants}
      >
        <motion.label 
          className="absolute top-4 left-[16px] block text-base tracking-tight sm:text-lg transition-transform duration-600 px-[14px] rounded-full bg-white bg-opacity-50 backdrop-blur text-midnight-900 border-2xl"
          htmlFor={id}
          initial={{ x: 0, y: 6 }}
          transition={{ type:"spring", stiffness: 80, duration: 0.5 }}
          style={{ 
            translateY: isFocused || value ? '-38px' : '0',
            translateX: isFocused || value ? '-17px' : '0',
            scale: isFocused || value ? 0.8 : 1,
            // backgroundColor: isFocused || props.value ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)'
          }}
          >
          {label}
        </motion.label>
        <textarea
          {...props}
          id={id}
          name={name}
          rows={2}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          // onChange={handleInputChange}
          className="block transition-all pointer-events-auto leading-normal tracking-tight pl-[32px] pr-[88px] py-[21px] rounded-[38px] w-full max-w-[95%] appearance-none outline-none text-blurple text-base font-bold sm:text-lg p-0 h-[78px] max-h-[278px]"
        ></textarea>
    </motion.div>
  );
};
export default TextArea;

