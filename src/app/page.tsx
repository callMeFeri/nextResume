import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { Button } from "./components/button/Button";

type Users = {
  id: number;
  title: string;
  albumId: number;
  url: string;
  thumbnailUrl: string;
};

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center gap-25 pl-4">
        <div className="flex-1 flex-col gap-12">
          <h1 className="text-7xl bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent pl-2 pb-1">
            Wellcome to my first next js project
          </h1>
          <p className="pl-7 pt-4">
            wellcome to my very first next js website.
            <br />I trully hope you deeply enjoy it!
          </p>
          <div className="pl-7 pt-4">
            <div className="w-[150px] h-8 bg-lime-900 items-center text-center pt-1 border rounded-full animate-scale">
              <Button text="See My Work" url="/portfolio" />
            </div>
          </div>
        </div>
        <div className="h-screen">
          <Image
            src="/ben-kolde-bs2Ba7t69mM-unsplash.jpg"
            className=""
            width={700}
            height={400}
            alt="photo"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
