import Link from "next/link";
import React from "react";

export function Button({
  text,
  url,
  absolute,
}: {
  text: string;
  url: string;
  absolute: boolean;
}) {
  return (
    <Link href={url}>
      <>
        <div
          className={`group ${
            absolute && "relative"
          } inline-block focus:outline-none focus:ring`}
        >
          <span
            className={`${
              absolute && "absolute"
            } inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0`}
          ></span>

          <span
            className={`${
              absolute && "relative text-black"
            } inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest group-active:text-opacity-75`}
          >
            {text}
          </span>
        </div>
      </>
    </Link>
  );
}

export default Button;
