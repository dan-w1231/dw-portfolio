'use client'

import { useState } from 'react';
import { motion } from "framer-motion";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  // placeholder: string;
  type?: string;
  errors?: boolean;
  errorMessage?: string;
}
const TextArea = ({
  id,
  name,
  label,
  // placeholder,
  errors,
  errorMessage,
  ...props
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
};

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
      key="TextAreaWrapper"
      transition={{ duration: 0.2 }}
      variants={wrapperVariants}
      whileFocus="focus"
      className="flex items-center align-center p-0 box-border transition-all border-2 border-white outline-0 w-full bg-white shadow-lg text-sm rounded-[38px] pointer-events-none hover:border-2 active:border-2 hover:border-blurple active:border-blurple focus:border-blurple hover:scale-104 active:scale-102"
      >
        <motion.label 
          className="absolute block text-sm tracking-tight sm:text-lg transition-transform duration-600 px-[14px] rounded-full bg-blurple text-white border-2xl"
          htmlFor={id}
          transition={{ type:"spring", stiffness: 80, duration: 0.5 }}
          style={{ 
            translateY: isFocused || props.value ? '-38px' : '0',
            translateX: isFocused || props.value ? '-17px' : '0',
            scale: isFocused || props.value ? 0.8 : 1,
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="block pointer-events-auto leading-normal tracking-tight resize-none pl-[32px] pr-[92px] py-[23px] rounded-full w-full appearance-none outline-none text-blurple text-sm font-bold sm:text-lg p-0"
        ></textarea>
        {errors && <p className="mt-2 text-sm text-pink-600">*{errorMessage}</p>}
    </motion.div>
  );
};
export default TextArea;

