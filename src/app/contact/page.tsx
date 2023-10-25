import React from "react";
import Image from "next/image";
import Button from "../components/button/Button";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = (): JSX.Element => {
  return (
    <div className="container h-screen">
      <h1 className="text-2xl text-center top-[20%]">Lets Be In Touch</h1>
      <div className="flex gap-25 items-center pt-[20%]">
        <div className="flex-1 h-[500px] relative ">
          <Image
            src="/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
            fill={true}
            alt=""
            className="object-cover animate-move"
          />
        </div>
        <form className="flex-1 flex gap-1 flex-col">
          <input
            type="text"
            placeholder="Name"
            className="p-1 bg-transparent text-silver border-[3px] border border-white"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-1 bg-transparent text-silver border-[3px] border border-white"
          />
          <textarea
            className="p-1 bg-transparent text-silver border-[3px] border border-white"
            cols={30}
            rows={10}
            placeholder="Please write your message here.I will response as soon as possible"
          />
          <div className="max-w-[150px] border border-white ml-[45%] bg-lime-600 rounded-full min-h-10 text-center">
            <Button text="Send" url="#" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
