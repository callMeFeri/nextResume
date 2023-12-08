import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen text-center bg-neutral-600 max-h-15">
      <div className="container text-neutral-800 dark:text-neutral-200 text-center mx-auto">
        <div className="text-center items-center text-black">
          <p className="mx-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
            ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
            repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
            sint!
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center text-center text-neutral-700 dark:text-neutral-200">
        <a
          className="text-neutral-800 dark:text-neutral-400 mx-2"
          href="https://www.twitter.com"
        >
          <Image
            src="/5282551_tweet_twitter_twitter logo_icon.svg"
            alt=""
            width={20}
            height={20}
            className="mr-1"
          />
        </a>
        <a
          className="text-neutral-800 dark:text-neutral-400 mx-2"
          href="https://www.twitter.com"
        >
          <Image
            src="/5282544_camera_instagram_social media_social network_instagram logo_icon.svg"
            alt=""
            width={20}
            height={20}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
