'use client'

import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion } from "framer-motion";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  autoComplete: string;
  errors?: { [key: string]: string }; 
  value: string;
  formSubmitted: boolean;
  formInvalid: boolean;
  formAttempted: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  setFormInteracted: (value: boolean) => void;
}

const TextArea = forwardRef (({
  id,
  name,
  label,
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
}: TextAreaProps, ref) => {

  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    setTouched(true);
    setFormInteracted(true);
    onBlur(e);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const inputClasses = `relative border flex items-center align-center transition-all ease-[cubic-bezier(0.16,0.84,0.44,1)] duration-300 p-0 box-border transition-all outline-0 w-full bg-white shadow-xl  hover:shadow-lg focus:shadow-lg text-base md:text-base rounded-[38px] pointer-events-none`;

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
                transform: `scale(${isFocused ? '1' : isHovered ? '0.98' : '1'})`,
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
          id={id}
          name={name}
          rows={2}
          value={value}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="block transition-all resize-none pointer-events-auto leading-normal tracking-tight pl-[32px] pr-[88px] py-[21px] rounded-[38px] w-full max-w-[95%] appearance-none outline-none text-blurple text-base font-bold sm:text-lg p-0 h-[78px] max-h-[278px]"
        ></textarea>
    </motion.div>
  );
});
export default TextArea;

