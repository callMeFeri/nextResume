import React from "react";
import Image from "next/image";
import Button from "../components/button/Button";
const About = (): JSX.Element => {
  return (
    <div className="min-h-screen pb-20">
      <div className="pt-20 items-center text-center min-h-full">
        <div className="w-[80%] relative h-[500px] left-[10%]">
          <Image
            fill={true}
            alt="image"
            src="/lee-campbell-DtDlVpy-vvQ-unsplash.jpg"
            className="grayscale"
          />
          <div className="absolute bottom-5 left-5 pt-20 text-white">
            <h1 className="imgTitle text-5xl">
              Thank You For Visiting My Project!
            </h1>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="item">
            <h1 className="title">lorem ipsum</h1>
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
          <div className="item">
            <h1 className="title">lorem ipsum</h1>
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
