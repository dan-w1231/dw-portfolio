'use client'

import { sendEmailAction } from "@/actions/SendEmail";
import { useRef, useTransition } from "react";
import toast from "react-hot-toast";


function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  const [isPending, startTransition] = useTransition();

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

  return (
    <form
      ref={formRef}
      action={handleSubmitContactForm}
      className="rounded-lg bg-slate-200/30 p-8 w-[400px]"
    >
      <h3 className="mb-8 text-center text-xl">Contact Us</h3>

      <div className="flex flex-col gap-6">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="rounded-md p-2 text-black"
          disabled={isPending}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-md p-2 text-black"
          disabled={isPending}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="rounded-md p-2 min-h-40 text-black"
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