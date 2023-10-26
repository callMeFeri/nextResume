import React from "react";
import Image from "next/image";
import Button from "../components/button/Button";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = (): JSX.Element => {
  return (
    <div className="container h-screen">
      <h1 className="text-7xl bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent pt-20">
        We Will Be Most Honored For Your Comment
      </h1>
      <div className="flex gap-25 items-center pt-10">
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
          <div className=" text-center">
            <Button text="Send" url="#" absolute={true} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
