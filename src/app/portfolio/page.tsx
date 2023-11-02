import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = (): JSX.Element => {
  return (
    <div className="container pt-20 min-h-screen pt-[20%] pl-[15%]">
      <h1 className="text-5xl ml-[27%] pb-5">Choose A Choice</h1>
      <br />

      <div className="flex gap-10">
        <Link
          href="/portfolio/illustration"
          className="border border-[1px] rounded w-[300px] h-[300px] relative"
        >
          <span className="absolute right-[10px] text-3xl">Illustration</span>

          <Image
            src="/image-from-rawpixel-id-5926183-jpeg.jpg"
            width={500}
            height={10}
            alt="Ill"
            className="h-full hover:grayscale"
          />
        </Link>
        <Link
          href="/portfolio/websites"
          className="border border-[1px] rounded w-[300px] h-[300px] relative"
        >
          <span className="absolute right-[10px] text-3xl ">WebSites</span>
          <Image
            src="/image-from-rawpixel-id-6039392-jpeg.jpg"
            width={500}
            height={1000}
            alt="web"
            className="h-full hover:grayscale"
          />
        </Link>
        <Link
          href="/portfolio/applications"
          className="border border-[1px] rounded w-[300px] h-[300px] relative"
        >
          <span className="absolute right-[10px] text-3xl">Applications</span>
          <Image
            src="/image-from-rawpixel-id-8799556-original.jpg"
            width={500}
            height={1000}
            alt="app"
            className="h-full hover:grayscale"
          />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
