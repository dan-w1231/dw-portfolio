'use client'

import { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import Input from './Input';
import TextArea from './TextArea';
import toast from "react-hot-toast";
import { validate } from "@/app/utils/validate";
import { Button } from '@/components/Button';
import { motion } from "framer-motion";
import Cross from '@/images/resources/cross.svg';
import Tick from '@/images/resources/tick.svg';
import Loader from 'react-loading-icons/dist/esm/components/rings'

function FieldStatus({ name, error, showMessage }: { name: string; error: string | undefined; showMessage: boolean }) {
  return (
    <motion.div 
      className="flex items-center gap-2 text-base dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, duration: 1.5 }}
      >
        <div>{ error ? <Image src={Cross} alt="Cross" /> : <Image src={Tick} alt="Tick" /> }</div>
        <span className={error ? 'text-rose-500' : ''}>{name}</span>
        {showMessage && error && error !== "Email is required" && <span className="text-rose-500 font-semibold rounded-full">{error}</span>}
    </motion.div>
  );
}

type FormValues = {
  name: string;
  email: string;
  message: string;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
};
interface FormProps {
  useContainerQuery?: boolean; 
  flexClass?: string;
}

const Form: React.FC<FormProps> = ({ flexClass, useContainerQuery, ...props }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formInteracted, setFormInteracted] = useState(false);
  const [showValidationStatus, setShowValidationStatus] = useState(false);
  const [formAttempted, setFormAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formInvalid, setIsFormInvalid] = useState(false);
  const nameInputRef = useRef<InputRef | null>(null);
  const emailInputRef = useRef<InputRef | null>(null);
  const messageInputRef = useRef<InputRef | null>(null);

  interface InputRef {
    reset: () => void;
  }
  
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message:"",
    errors: {}
  });
  

  // Delay to reset 'FormSubmitted' state after timeout, to allow for validation borders to reset.
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (formSubmitted) {
      timeoutId = setTimeout(() => {
        setFormSubmitted(false);
      }, 100);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [formSubmitted]);

  const validateForm = () => {
    const errors = validate({
      name: values.name,
      email: values.email,
      message: values.message,
    });
    setValues((prevValues) => ({
      ...prevValues,
      errors,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateForm();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // Call validate
    validateForm();
    setShowValidationStatus(true);
  };


  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Call validate
    validateForm();
    setShowValidationStatus(true);

    // Grow TextArea height based on scrollheight
    e.target.style.height = 'inherit'; // reset height
    e.target.style.height = `${e.target.scrollHeight}px`; // height increases with scrollHeight
  };

  // Function is big, split up later
  const handleSubmitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    setFormAttempted(true);
    setIsSubmitting(true);
    setFormSubmitted(false);

    const formData = new FormData(formRef.current);

  try {
    const errors = validate(values);
      setValues((prevValues) => ({
      ...prevValues,
      errors,
      }));

    if (Object.keys(errors).length === 0) {
      // No valdy error, proceed
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://dwdesign.io' 
        : 'http://localhost:3000';

      const response = await fetch(`${baseUrl}/api/SendEmail`, {
        method: 'POST',
        body: new URLSearchParams(formData as any),
      });

      let errorMessage = null;

      try {
        const data = await response.json();
        errorMessage = data.errorMessage;
      } catch (error) {
        console.error('Failed to parse response body:', error);
      }

      if (!errorMessage) {
        toast.success(
          <div>
            <span style={{ fontSize: "20px", fontWeight: 600 }}>Thanks!</span>
            <br />
              Your message has been sent.
          </div>,
          {
            duration: 5000,
            style: {
              fontWeight: "normal",
            },
          }
        );
        setIsFormInvalid(false);
        formRef.current?.reset();
        setValues({
          name: "",
          email: "",
          message: "",
          errors: {}
        });
        nameInputRef.current?.reset();
        emailInputRef.current?.reset();
        messageInputRef.current?.reset();
        setFormSubmitted(true);
        setShowValidationStatus(false);
      } else {
        toast.error(errorMessage, {duration: 5000 });
      }
    } else {
      toast.error(
        <div>
          <span style={{ fontSize: "20px", fontWeight: 600 }}>Oops :o</span>
          <br />
            Please check your inputs and try again, or contact me via email.
        </div>,
        {
          duration: 5000,
          style: {
            fontWeight: "normal",
          },
        }
      );
      setIsFormInvalid(true);
      // Display validation errors
      <div className="text-red-500">
        {Object.keys(values.errors).map((fieldName) => (
          <p key={fieldName}>{values.errors[fieldName as keyof typeof values.errors]}</p>
        ))}
      </div>
    }
  } catch (error) {
    console.error(error);
  } finally {
      setIsSubmitting(false);
  }
};

const processClasses = (classes: string, useContainerQuery?: boolean) => {
  if (!useContainerQuery) {
    return classes;
  }

  return classes
  .split(' ')
  .map((className) => {
    if (className.startsWith('xs:') || className.startsWith('sm:') || className.startsWith('md:') || className.startsWith('lg:') || className.startsWith('xl:')) {
      return '@' + className;
    }

    return className;
  })
  .join(' ');
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmitContactForm}
      className={processClasses(`relative w-full xl:absolute rounded-lg bg-transparent @container`, useContainerQuery)}
    >
      <div className={processClasses(`relative flex flex-col gap-2`, useContainerQuery)}>
      <div className={processClasses(`flex flex-col gap-2 ${flexClass}`, useContainerQuery)}>
          <Input
            value={values.name}
            id="name"
            name="name"
            type="text"
            label="Name*"
            autoComplete="name"
            disabled={isSubmitting}
            errors={values.errors}
            setFormInteracted={setFormInteracted}
            onChange={handleInputChange}
            onBlur={handleBlur}
            formSubmitted={formSubmitted}
            formInvalid={formInvalid}
            formAttempted={formAttempted}
            ref={nameInputRef}
          />
          <Input
            value={values.email}
            id="email"
            name="email"
            type="email"
            label="Email*"
            autoComplete="email"
            disabled={isSubmitting}
            errors={values.errors}
            setFormInteracted={setFormInteracted}
            onChange={handleInputChange}
            onBlur={handleBlur}
            formSubmitted={formSubmitted}
            formInvalid={formInvalid}
            formAttempted={formAttempted}
            ref={emailInputRef}
          />
        </div>
        <TextArea
          value={values.message}
          id="message"
          name="message"
          type="text"
          label="Message*"
          errors={values.errors}
          setFormInteracted={setFormInteracted}
          onChange={handleTextAreaChange}
          onBlur={handleBlur}
          formSubmitted={formSubmitted}
          formInvalid={formInvalid}
          formAttempted={formAttempted}
          disabled={isSubmitting}
          autoComplete="off"
          ref={messageInputRef}
          >
        </TextArea>
        <motion.div className="absolute bottom-2 right-2 w-auto h-auto z-[98] rounded-full"
          whileHover={{ scale: 0.98, y: 0 }}
          whileTap={{ scale: 0.95, y: 0 }}
          transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
          >
          <Button
            type="submit"
            color="primaryGrad"
            className="w-24 rounded-full bg-slate-800 px-5 py-2 ml-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : 'Send'}      
          </Button>
        </motion.div>
      </div>

        {formInteracted && showValidationStatus && (
        <div
          className="z-[99] sm:flex sm:flex-col gap-2 bg-white dark:bg-transparent dark:bg-cardGradDark dark:backdrop-blur-[140px] md:bg-opacity-80 rounded-t-[40px] rounded-b-[20px] overflow-hidden px-6 py-8 mt-2"
        >
            <FieldStatus name="Name" error={values.errors.name} showMessage={false} />
            <FieldStatus name="Email" error={values.errors.email} showMessage={true} />
            <FieldStatus name="Message" error={values.errors.message} showMessage={false} />
        </div>

        )}
    </form>
  );
}

export default Form;