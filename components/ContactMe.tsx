import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:maheechy96@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}  (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 tracking-[20px] uppercase text-grey-500 text-xl md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="underline decoration-[#2146C7]/50 text-2xl md:text-4xl font-semibold text-center">
          Let us Talk
        </h4>

        <div className="space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#2146C7]" />
            <p className="text-base md:text-2xl">+019283745</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#2146C7]" />
            <p className="text-base md:text-2xl">maheechy962gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#2146C7]" />
            <p className="text-base md:text-2xl">
              Thikana Tower, Nayasarak, Sylhet, Bangladesh{" "}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto w-[95%] md:w-fit"
        >
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            name=""
            id=""
          ></textarea>
          <button
            type="submit"
            className="bg-[#2146C7] py-2 px-6 md:py-5 md:px-10 rounded-md font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
