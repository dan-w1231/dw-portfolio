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
    });
    // e: Form event correct ?
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
        console.log("Validation errors:", errors);
        // Later set state to display errors
      }
    };

  // const handleSubmitContactForm = (formData: FormData) => {
  //   startTransition(async () => {
  //     const { errorMessage } = await sendEmailAction(formData);
  //     if (!errorMessage) {
  //       toast.success("Message sent!");
  //       formRef.current?.reset();
  //     } else {
  //       toast.error(errorMessage);
  //     }
  //   });
  // };

    // Update input values when they change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          // handleInputChange e:InputElement not compatible with text area > change
          // onChange={handleInputChange}
          disabled={isPending}
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
    </form>
  );
}

export default Form;