'use client'

import { sendEmailAction } from "@/actions/SendEmail";
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
  const [isPending, startTransition] = useTransition();
  const [formInteracted, setFormInteracted] = useState(false);

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
    const { name, value } = e.target;
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

  const handleSubmitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form reference is null.");
      return;
    }
    const formData = new FormData(formRef.current);
    const errors = validate({
      name: values.name,
      email: values.email,
      message: values.message,
    });
    setValues({ ...values, errors })
    if (Object.keys(errors).length === 0) {
      // No valdy error, proceed

      const { errorMessage } = await sendEmailAction(formData);
      
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
      // Display validation errors
      <div className="text-red-500">
        {Object.keys(errors).map((fieldName) => (
          <p key={fieldName}>{errors[fieldName]}</p>
        ))}
      </div>
      // console.log("Validation error found on handleSubmitContactForm:", errors);
    }
  };

    // Update values when they change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));

    // Validate after every keystroke
    const errors = validate({
      name: values.name,
      email: values.email,
      message: values.message,
    });
    setValues((prevValues) => ({
      ...prevValues,
      errors,
  }));

      // Make the textarea grow in height as the user types
      e.target.style.height = 'inherit'; // Temporarily reset the height
      e.target.style.height = `${e.target.scrollHeight}px`; // Set the height to match the scrollHeight
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
            // Example for name value
            value={values.name}
            id="name"
            name="name"
            type="text"
            label="Name*"
            autoComplete="name"
            disabled={isPending}
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
            disabled={isPending}
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
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={isPending}
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
              disabled={isPending}
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