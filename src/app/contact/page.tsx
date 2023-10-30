"use client";
import Image from "next/image";

import Button from "../components/button/Button";
import { useGlobalContext } from "../context/AppContext";
const Contact = (): JSX.Element => {
  const { mode }: any = useGlobalContext();
  return (
    <div className="container h-screen">
      <h1 className="text-6xl bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent pt-20">
        We Will Be Honored For Your Comment
      </h1>
      <div className="flex gap-25 items-center pt-20">
        <div className="flex-1 h-[500px] relative ">
          <Image
            src="/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
            fill={true}
            alt=""
            className="object-cover animate-move"
          />
        </div>
        <form className="flex-1 flex gap-1 flex-col">
          <h1 className="text-4xl mb-5">Write your comment down here:</h1>
          <input
            type="text"
            placeholder="Name"
            className={`p-1 bg-transparent text-silver border-[3px] border${
              mode === "dark" ? " border-white" : "border-black"
            } `}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            className={`p-1 bg-transparent text-silver border-[3px] border${
              mode === "dark" ? " border-white" : "border-black"
            } `}
          />
          <br />
          <textarea
            className={`p-1 bg-transparent text-silver border-[3px] border${
              mode === "dark" ? " border-white" : "border-black"
            } `}
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
