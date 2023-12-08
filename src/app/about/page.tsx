import React from "react";
import Image from "next/image";
import Button from "../components/button/Button";

const About = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <div className=" items-center text-center min-h-full flex flex-col justify-center">
        <div className="w-[80%] relative min-h-[500px]">
          <Image
            fill={true}
            alt="image"
            src="/lee-campbell-DtDlVpy-vvQ-unsplash.jpg"
          />
          <div className="absolute bottom-5 pt-20 text-white">
            <h1 className="lg:text-5xl pl-2 md:text-2xl">
              Thank You For Visiting My Project!
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="item md:w-1/2 pl-2 pr-2">
            <h1 className="title">Lorem Ipsum</h1>
            <p className="font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
              laoreet id donec ultrices tincidunt arcu non. Mattis rhoncus urna
              neque viverra. A arcu cursus vitae congue. Id cursus metus aliquam
              eleifend mi. Vulputate mi sit amet mauris commodo quis imperdiet.
              Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing
              elit. Sollicitudin nibh sit amet commodo nulla facilisi nullam.
              Lacus suspendisse faucibus interdum posuere lorem ipsum. Ipsum
              nunc aliquet bibendum enim facilisis gravida neque convallis a.
              Sem nulla pharetra diam sit amet. Nunc mattis enim ut tellus
              elementum sagittis. Amet nulla facilisi morbi tempus iaculis urna
              id volutpat lacus. Tortor at risus viverra adipiscing at in tellus
              integer feugiat. Est velit egestas dui id ornare arcu odio ut sem.
              Quis lectus nulla at volutpat diam ut. Turpis nunc eget lorem
              dolor sed viverra. Dignissim sodales ut eu sem integer vitae.
            </p>
          </div>
          <div className="item md:w-1/2">
            <h1 className="title">Lorem Ipsum</h1>
            <p className="pb-5 font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
              laoreet id donec ultrices tincidunt arcu non. Mattis rhoncus urna
              neque viverra. A arcu cursus vitae congue. Id cursus metus aliquam
              eleifend mi. Vulputate mi sit amet mauris commodo quis imperdiet.
            </p>
            <div className="">
              <Button text="Contact Me" url="/contact" absolute={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
