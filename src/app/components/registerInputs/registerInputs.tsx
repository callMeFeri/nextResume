import React from "react";

function RegisterInputs({
  htmlFor,
  lableText,
  registerName,
  placeHolder,
}: {
  htmlFor: string;
  lableText: string;
  registerName: string;
  placeHolder: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium ">
        {lableText}
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeHolder}
        required
      />
    </div>
  );
}

export default RegisterInputs;
