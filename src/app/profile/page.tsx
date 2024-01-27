import React from "react";
import Image from "next/image";

import { userName } from "../components/navbar/navbar";

const Page = () => (
  <div className="min-h-screen flex flex-col items-center">
    <div className="flex items-center gap-4 ">
      <div className="flex ">
        <Image
          className="w-20 h-20 rounded-full"
          src="/image-from-rawpixel-id-6039392-jpeg.jpg"
          alt="Profile Image"
          width={500}
          height={500}
        />
      </div>
      <div className="font-medium dark:text-white">
        <div>{userName}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Joined in August 2014
        </div>
      </div>
    </div>
  </div>
);

export default Page;
