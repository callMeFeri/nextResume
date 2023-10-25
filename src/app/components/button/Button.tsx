import Link from "next/link";
import React from "react";

export function Button({ text, url }: { text: string; url: string }) {
  return (
    <Link href={url}>
      <button className="text-center items-center text-black-600 text-s  cursor-pointer">
        {text}
      </button>
    </Link>
  );
}

export default Button;
