import React from "react";
import AddPostFunction from "./addPostFunction";
import { useGlobalContext } from "@/app/context/AppContext";
import AddPostToast from "./addPostToast";
import Image from "next/image";

function AddPost({ username }: { username?: string | boolean }) {
  const {
    postAdded,
    setPostAdded,
  }: {
    postAdded?: boolean;
    setPostAdded: React.Dispatch<React.SetStateAction<boolean>>;
  } = useGlobalContext();
  return (
    <div>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          AddPostFunction({ e, setPostAdded });
          (e.target as HTMLFormElement).text.value = "";
          (e.target as HTMLFormElement).textmemory.value = "";
        }}
      >
        <div className="min-h-screen md:px-20 pt-20 text-center items-center justify-center">
          <div className=" bg-white rounded-md  px-6 py-10 max-w-2xl mx-auto shadow shadow-black">
            <h1 className="text-center text-2xl font-bold text-black mb-10">
              ADD POST
            </h1>
            <h3 className="text-xl font-bold">
              <div className="text-black"> HI</div>{" "}
              <div className="text-red-700">{`${username}`}</div>
            </h3>
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
                  name="text"
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

              {postAdded && (
                <div className="pl-[25%]">
                  {" "}
                  <AddPostToast />
                </div>
              )}

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
