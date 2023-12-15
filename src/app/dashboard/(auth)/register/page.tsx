"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { signUpSchema, TSignUpSchema } from "@/schema/schema";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useGlobalContext } from "@/app/context/AppContext";

export default function Register() {
  const router = useRouter();

  const { apiUrl }: { apiUrl?: string } = useGlobalContext();

  const [showTerms, setShowTerms] = useState<boolean>(false);
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);

  const premission = localStorage.getItem("premission")
    ? localStorage.getItem("premission")
    : "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  useEffect(() => {
    if (registerStatus) {
      setTimeout(() => router.push("../dashboard/login"), 1000);
    }
  }, [registerStatus, router]);
  if (!localStorage.getItem("nav")) {
    return (
      <div className="min-h-screen">
        <h1 className="text-7xl bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent pl-[20%] pb-1 pt-20">
          ThankYou For Trusting Us
        </h1>
        <form
          className="min-h-[100%] pb-[70px]"
          onSubmit={handleSubmit(
            async ({ confirmPassword, firstname, lastname, ...data }) => {
              const usreData = {
                username: data.username,
                email: data.email,
                password: data.password,
              };

              try {
                const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_}/register`,
                  usreData
                );

                // Handle success.
                console.log("Well done!");
                localStorage.setItem(
                  "User profile",
                  JSON.stringify(response.data.user.username)
                );
                localStorage.setItem(
                  "User token",
                  JSON.stringify(response.data.jwt)
                );
                setRegisterStatus(true);
                router.push("/addpost");
              } catch (error) {
                // Handle error.
                console.log("An error occurred:", error);
              }
              //this part is unneccessary

              // if (response.errors) {
              //   const errors = response.errors;
              //   (
              //     [
              //       "email",
              //       "password",
              //       "firstname",
              //       "lastname",
              //       "username",
              //       "userId",
              //     ] as const
              //   ).forEach((errorKey) => {
              //     if (errors[errorKey]) {
              //       setError(errorKey, {
              //         type: "server",
              //         message: errors[errorKey],
              //       });
              //     }
              //   });
              // }
            }
          )}
        >
          <div className="grid gap-6 mb-6 md:grid-cols-2 pt-20 pl-5 pr-5">
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium "
              >
                First name
              </label>
              <input
                {...register("firstname")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="peter"
                required
              />
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium "
              >
                Last name
              </label>
              <input
                {...register("userId")}
                type="hidden"
                value={JSON.stringify(new Date().toISOString())}
                name="userId"
              />
              <input
                {...register("lastname")}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Parker"
                required
              />
            </div>
          </div>
          <div className="mb-6 pl-5 pr-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
              Email address
            </label>
            <input
              {...register("email")}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="peterparker@company.com"
              required
            />
          </div>
          <div className="mb-6 pl-5 pr-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium "
            >
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="peterparker2000"
              required
            />
          </div>
          <div className="mb-6 pl-5 pr-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium "
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-6 pl-5 pr-5">
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium "
            >
              Confirm password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
            {errors.confirmPassword && (
              <span className="text-red-600">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="flex items-start mb-6 pl-5 pr-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
                checked={!showTerms}
              />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium ">
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline "
                onClick={() => setShowTerms(!showTerms)}
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          {showTerms && (
            <section className="rounded-3xl shadow-2xl">
              <div className="p-8 text-center sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                  Your order is on the way
                </p>

                <h6 className="mt-6 text-l font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Velit laoreet id donec ultrices tincidunt arcu non. Mattis
                  rhoncus urna neque viverra. A arcu cursus vitae congue. Id
                  cursus metus aliquam eleifend mi. Vulputate mi sit amet mauris
                  commodo quis imperdiet. Interdum posuere lorem ipsum dolor sit
                  amet consectetur adipiscing elit. Sollicitudin nibh sit amet
                  commodo nulla facilisi nullam.
                </h6>

                <a
                  className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
                  href="#"
                  onClick={() => setShowTerms(!showTerms)}
                >
                  I Am Agree With Terms
                </a>
              </div>
            </section>
          )}
          {registerStatus && (
            <div className="pl-[40%] pb-5">
              <div
                id="toast-default"
                className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-[rgb(124,252,0)] text-black rounded-lg shadow text-black"
                role="alert"
              >
                <div className="inline-flex items-center  justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                    />
                  </svg>
                  <span className="sr-only">Fire icon</span>
                </div>
                <div className="ml-3 text-sm font-normal text-black">
                  Succecfully registered.Please wait a second to redirect...
                </div>
                <button
                  onClick={() => setRegisterStatus(false)}
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-default"
                  aria-label="Close"
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
            </div>
          )}{" "}
          <div className="text-center w-30 pb-20">
            <>
              <button
                type="submit"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  {isSubmitting ? "Submiting..." : "REGISTER"}
                </span>
              </button>
            </>
          </div>
        </form>
      </div>
    );
  }
  router.push("/");
}
