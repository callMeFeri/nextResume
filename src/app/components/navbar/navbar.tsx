import Link from "next/link";
import React from "react";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Login",
      url: "/dashboard/login",
    },
    {
      id: 4,
      title: "Register",
      url: "/dashboard/register",
    },
    {
      id: 5,
      title: "About",
      url: "/about",
    },
    {
      id: 6,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 7,
      title: "Blog",
      url: "/blog",
    },
  ];
  return (
    <div className="fixed top-0 w-full">
      <nav className="bg-gray-800">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <ul className="flex items-baseline space-x-4">
                  {links.map(
                    (link: { title: string; id: number; url: string }) => {
                      const { title, id, url } = link;
                      return (
                        <li
                          key={id}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          <Link href={url} className="text-yellow-600">
                            {title}
                          </Link>
                        </li>
                      );
                    }
                  )}
                  <DarkModeToggle />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
