import Button from "@/app/components/button/Button";
import Image from "next/image";
import React from "react";

function Ctegory({ params }: { params: { category: string } }) {
  return (
    <div className="min-h-screen">
      <h1 className="pt-[65px] text-6xl pl-10">{params.category}</h1>
      <div className="gap-3 mt-12 mb-25 ">
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <h1 className="text-4xl ml-20">Test Text</h1>
          <p>Describtion</p>
          <div className="max-w-[150px] border border-white bg-lime-600 rounded-full min-h-10 text-center">
            <Button text="See More" url="/" />
          </div>
        </div>
        <div className="flex-1 h-[400px] relative w-[400px] float-right mr-30">
          <Image
            className="object-cover"
            fill={true}
            alt="/"
            src="/image-from-rawpixel-id-12204363-jpeg.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Ctegory;
