"use client";
import React, { useState } from "react";

import { signUpSchema, DataForm } from "@/schema/schema";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const [showTerms, setShowTerms] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<DataForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<DataForm> = async (formData) => {
    const response = await fetch("/api/signup", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      return;
    }
    const responseData = await response.json();

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      }
      if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      }
      if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      }
      if (errors.firstName) {
        setError("firstName", {
          type: "server",
          message: errors.firstName,
        });
      }
      if (errors.lastName) {
        setError("lastName", {
          type: "server",
          message: errors.lastName,
        });
      }
    }
  };

  return (
    <div className="h-full pb-[90px]">
      <h1 className="text-7xl bg-gradient-to-b from-green-800 to-blue-300 bg-clip-text text-transparent pl-[20%] pb-1 pt-20">
        ThankYou For Trusting Us
      </h1>
      <form
        className="min-h-[100%] pb-[70px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2 pt-20  pl-5 pr-5">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium "
            >
              First name
            </label>
            <input
              {...register("firstName")}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Peter"
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
              {...register("lastName")}
              type="text"
              id="last_name"
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
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="peterparker@company.com"
            required
          />
        </div>
        <div className="mb-6 pl-5 pr-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium ">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
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
            id="confirm_password"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <div className="pl-[47%] w-30">
          <>
            <div className="group relative inline-block focus:outline-none focus:ring">
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className=" absolute relative text-black inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest group-active:text-opacity-75">
                <button type="submit"> REGISTER</button>
              </span>
            </div>
          </>
        </div>
      </form>
    </div>
  );
}

export default Register;
