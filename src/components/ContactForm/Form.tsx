'use client'

// import { sendEmailAction } from "@/pages/api/SendEmail";
import { useRef, useTransition, useState } from "react";
import Image from 'next/image'
import Input from './Input';
import TextArea from './TextArea';
import toast from "react-hot-toast";
import { validate } from "@/app/utils/validate";
import { Button } from '@/components/Button';
import { motion } from "framer-motion";
import Cross from '@/images/resources/cross.svg';
import Tick from '@/images/resources/tick.svg';

function FieldStatus({ name, error, showMessage }: { name: string; error: string | undefined; showMessage: boolean }) {
  return (
    <motion.div 
      className="flex items-center gap-2 text-base"
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

function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formInteracted, setFormInteracted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message:"",
    errors: {}
  });

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
    // This might cause form to validate twice on submit?
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
  };


  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Call validate
    validateForm();

    // Grow TextArea height based on scrollheight
    e.target.style.height = 'inherit'; // reset height
    e.target.style.height = `${e.target.scrollHeight}px`; // height increases with scrollHeight
  };

  const handleSubmitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

  try {
    validateForm();

    if (Object.keys(values.errors).length === 0) {
      // No valdy error, proceed
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://dwdesign-five.vercel.app' 
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
        toast.success("Your message sent successfully!", { duration: 6000 });
        formRef.current?.reset();
        setValues({
          name: "",
          email: "",
          message: "",
          errors: {}
        });
      } else {
        toast.error(errorMessage, {duration: 6000 });
      }
    } else {
      toast.error("Please check what you've input.", {duration: 5000 });
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

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmitContactForm}
      className="relative xl:absolute rounded-lg bg-transparent w-full sm:w-auto"
    >
      <div className="relative flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2">
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
          />
        </div>
        <TextArea
          value={values.message}
          id="message"
          name="message"
          type="submit"
          label="Message*"
          errors={values.errors}
          setFormInteracted={setFormInteracted}
          onChange={handleTextAreaChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          autoComplete="off"
          >
        </TextArea>
        <motion.div className="absolute bottom-2 right-2 w-auto h-auto z-[98]"
          whileHover={{ scale: 1.05, y: 0 }}
          whileTap={{ scale: 0.95, y: 0 }}
          transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
          >
          <Button
              type="submit"
              color="primaryGrad"
              className="w-24 rounded-full bg-slate-800 px-5 py-2 ml-auto"
              disabled={isSubmitting}
                >Send
          </Button>
        </motion.div>
      </div>

        {formInteracted && (
        
        <motion.div 
          className="z-[99] sm:flex sm:flex-col gap-2 bg-white bg-opacity-100 md:bg-opacity-80 rounded-t-[40px] rounded-b-[20px] overflow-hidden px-6 py-8 mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, duration: 1.5 }}
        >
            <FieldStatus name="Name" error={values.errors.name} showMessage={false} />
            <FieldStatus name="Email" error={values.errors.email} showMessage={true} />
            <FieldStatus name="Message" error={values.errors.message} showMessage={false} />
        </motion.div>

        )}
    </form>
  );
}

export default Form;