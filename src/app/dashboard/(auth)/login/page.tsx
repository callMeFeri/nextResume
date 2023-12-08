"use client";
import React, { FormEvent } from "react";

// import dotenv from "dotenv";
// dotenv.config();

import { useRouter } from "next/navigation";

import Image from "next/image";

import { useGlobalContext } from "@/app/context/AppContext";

function LogIn() {
  const { authenticated, setAuthenticated, apiUrl }: any = useGlobalContext();
  const [showLogStatus, setShowLogStatus] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const router = useRouter();

  const FetchDB = async (e: FormEvent<HTMLFormElement>) => {
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_}`,
      },
    });
    const responseData = await response.json();
    type memberType = {
      id: number;
      attributes: {
        username: string;
        email: string;
        password: string;
        id: number;
      };
    };

    responseData.data.map((member: memberType) => {
      if (
        member.attributes.email === email &&
        member.attributes.password === password
      ) {
        setShowLogStatus(true);

        setAuthenticated(true);
        localStorage.setItem("auth", JSON.stringify(true));
        localStorage.setItem(
          "currentUserInfo",
          JSON.stringify(member.attributes.username)
        );
        return;
      }
      setError(true);
    });
  };
  React.useEffect(() => {
    if (authenticated) {
      setError(false);
      setTimeout(() => router.push("../addpost"), 3000);
    }
  }, [authenticated, router]);
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-grey shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <Image
              width={500}
              height={200}
              alt=""
              src="/image-from-rawpixel-id-12204363-jpeg.jpg"
              className="w-32 mx-auto rounded-full"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>

                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-6" viewBox="0 0 32 32">
                      <path
                        fill-rule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign In with GitHub</span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm  tracking-wide font-medium transform translate-y-1/2">
                  Or sign in with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <form onSubmit={(e) => (e.preventDefault(), FetchDB(e))}>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                  />
                  <input
                    className="w-full mb-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                  />
                  {showLogStatus && (
                    <div
                      id="toast-success"
                      className="flex  items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                      role="alert"
                    >
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                      </div>
                      <div className="ml-3 text-sm font-normal">
                        You Are Now Logged In .<br /> Your Navbar Has Changed.
                        <br />
                        You Will Be Redirected Soon.
                      </div>
                      <button
                        type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success"
                        aria-label="Close"
                        onClick={() => setShowLogStatus(false)}
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  {error && (
                    <div
                      id="toast-fail"
                      className="flex  items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                      role="alert"
                    >
                      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-red-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                      </div>
                      <div className="ml-3 text-sm font-normal">
                        Wrong User Information.Please Try Again.
                      </div>
                      <button
                        type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success"
                        aria-label="Close"
                        onClick={() => setError(false)}
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <button className="ml-3">Sign In</button>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex right-0">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-[url(/lee-campbell-DtDlVpy-vvQ-unsplash.jpg)]"></div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
