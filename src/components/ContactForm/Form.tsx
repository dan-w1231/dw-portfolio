'use client'

import { sendEmailAction } from "@/actions/SendEmail";
import { useRef, useTransition, useState } from "react";
import Input from './Input';
import TextArea from './TextArea';
import toast from "react-hot-toast";
import { validate } from "@/app/utils/validate";
import { Button } from '@/components/Button'

function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const [values, setValues] = useState({
    name: "",
    email: "",
    message:"",
    errors: {}
  });

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
        toast.success("Message sent!");
        formRef.current?.reset();
      } else {
        toast.error(errorMessage);
      }
    } else {
      // Display validation errors
      <div className="text-red-500">
        {Object.keys(errors).map((fieldName) => (
          <p key={fieldName}>{errors[fieldName]}</p>
        ))}
      </div>
      console.log("Validation error found on handleSubmitContactForm:", errors);
      // Later set state to display errors
    }
  };

    // Update values when they change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmitContactForm} // Should I use onSubmit instead of action?
      className="rounded-lg bg-slate-200/30 p-8 w-[400px]"
    >
      <div className="relative flex flex-col gap-2">
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
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        <TextArea
          value={values.message}
          id="message"
          name="message"
          label="Message*"
          errors={values.errors}
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={isPending}
          autoComplete="off"
          >
        </TextArea>
        <Button
            type="submit"
            color="primaryGrad"
            className="absolute bottom-2 right-2 w-16 w-auto min-w-0 rounded-full bg-slate-800 px-5 py-2 ml-auto"
            disabled={isPending}
              >Send
        </Button>
      </div>
          <div className="text-red-500">
            {Object.keys(values.errors).map((fieldName: string) => (
              <p key={fieldName}>{(values.errors as Record<string, string>)[fieldName]}</p>
            ))}
        </div>
    </form>
  );
}

export default Form;