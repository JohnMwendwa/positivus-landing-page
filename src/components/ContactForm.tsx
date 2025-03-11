import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="relative mt-16 bg-gray px-[100px] pt-[60px] pb-20 rounded-[45px] grid grid-cols-2">
      <div>
        <form className="flex flex-col gap-6">
          <div className="mb-4">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center cursor-pointer"
                htmlFor="hi"
              >
                <input
                  name="option"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none bg-white rounded-full border border-slate-600 checked:border-slate-800 transition-all"
                  defaultChecked
                  id="hi"
                />
                <span className="absolute bg-green w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 cursor-pointer text-sm" htmlFor="hi">
                Say Hi
              </label>
            </div>
            <div className="inline-flex items-center ml-4">
              <label
                className="relative flex items-center cursor-pointer"
                htmlFor="quote"
              >
                <input
                  name="option"
                  type="radio"
                  className="peer h-5 w-5 cursor-pointer appearance-none bg-white rounded-full border border-slate-600 checked:border-slate-800 transition-all"
                  id="quote"
                />
                <span className="absolute bg-green w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label className="ml-2 cursor-pointer text-sm" htmlFor="quote">
                Get a Quote
              </label>
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="text-base">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="rounded-[14px] px-7 py-4 outline outline-1 mt-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-base">Email*</label>
            <input
              type="text"
              placeholder="Name"
              className="rounded-[14px] px-7 py-4 outline outline-1 mt-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-base">Message*</label>
            <textarea
              rows={5}
              placeholder="Name"
              className="rounded-[14px] px-7 py-4 outline outline-1 mt-2"
            />
          </div>
          <button className="bg-dark mt-4 px-9 py-5 rounded-[14px] text-white">
            Send Message
          </button>
        </form>
      </div>

      <div className="relative w-full h-full">
        <Image
          src={"/contact.png"}
          alt="decoration"
          width={360}
          height={648}
          className="absolute top-0 h-full w-full -bottom-2 -right-[330px]"
        />
      </div>
    </div>
  );
};

export default ContactForm;
