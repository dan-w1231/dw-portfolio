'use client'

import { sendEmailAction } from "@/actions/SendEmail";
import { useRef, useTransition, useState } from "react";
import Input from './Input';
import TextArea from './TextArea';
import toast from "react-hot-toast";
import validate from '@/app/utils/validate'


function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

    // Initialize state for input values
    const [values, setValues] = useState({
      name: "",
      email: "",
      message:"",
      // Add other input fields here
    });

  const handleSubmitContactForm = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await sendEmailAction(formData);
      if (!errorMessage) {
        toast.success("Message sent!");
        formRef.current?.reset();
      } else {
        toast.error(errorMessage);
      }
    });
  };

    // Update input values when they change
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

  return (
    <form
      ref={formRef}
      action={handleSubmitContactForm} // Should I use onSubmit instead of action?
      className="rounded-lg bg-slate-200/30 p-8 w-[400px]"
    >
      <div className="flex flex-col gap-6">
        <Input
          // Example for name value
          value={values.name}
          id="name"
          name="name"
          type="text"
          label="Name"
          autoComplete="name"
          onChange={handleInputChange}
          disabled={isPending}
        />
        <Input
        // Example for name value
         value={values.email}
          id="email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          onChange={handleInputChange}
          disabled={isPending}
        />
        <TextArea
          id="message"
          name="message"
          label="message"
          onChange={handleInputChange}
          disabled={isPending}
        />
        <button
          type="submit"
          className="w-48 rounded-lg bg-slate-800 py-2 ml-auto"
          disabled={isPending}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default Form;