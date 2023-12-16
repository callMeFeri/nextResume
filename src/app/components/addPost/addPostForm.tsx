import React from "react";
import AddPostFunction from "./addPostFunction";

function AddPost({ username }: { username?: string | boolean }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddPostFunction(e);
        }}
      >
        <div className="min-h-screen md:px-20 pt-20 text-center ">
          <div className=" bg-white rounded-md  px-6 py-10 max-w-2xl mx-auto shadow shadow-black">
            <h1 className="text-center text-2xl font-bold text-black mb-10">
              ADD POST
            </h1>
            <h3 className="text-black">Hi {`${username}`}</h3>
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <label
                  htmlFor="title"
                  className="text-lx font-serif text-black block"
                >
                  Title:
                </label>
                <br />
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  required
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md block"
                />
              </div>
              <div>
                <label
                  htmlFor="textmemory"
                  className="block mb-2 text-lg font-serif text-black"
                >
                  Description:
                </label>
                <textarea
                  name="textmemory"
                  rows={15}
                  required
                  placeholder="write here.."
                  className="w-full font-serif p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                />
              </div>
              {/* {addedPost && (
                <div>
                  <>
                    <div
                      className="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700"
                      role="alert"
                    >
                      <div className="flex p-4">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-4 w-4 text-green-500 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-700 dark:text-gray-400">
                            This is a success message.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              )} */}
              <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600 shadow-black shadow-sm shadow-inner  hover:bg-white hover:text-black">
                ADD POST
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
