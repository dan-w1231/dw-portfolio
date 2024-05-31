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
}

const TextArea = ({
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
      style={{ borderColor }}
      transition={{ duration: 0.2 }}
      variants={wrapperVariants}
      >
        <motion.label 
          className="absolute block text-sm tracking-tight sm:text-lg transition-transform duration-600 px-[14px] rounded-full bg-blurple text-white border-2xl"
          htmlFor={id}
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
          className="block pointer-events-auto leading-normal tracking-tight resize-none pl-[32px] pr-[92px] py-[23px] rounded-full w-full appearance-none outline-none text-blurple text-sm font-bold sm:text-lg p-0"
        ></textarea>
    </motion.div>
  );
};
export default TextArea;

