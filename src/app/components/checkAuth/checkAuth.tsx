function CheckAuth(auth: boolean) {
  if (auth) {
    return [
      {
        id: 1,
        title: "Home",
        url: "/",
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
        title: "Explore",
        url: "/explore",
      },
      {
        id: 8,
        title: "AddPost",
        url: "/addpost",
      },
      {
        id: 9,
        title: "Profile",
        url: "/profile",
      },
    ];
  } else {
    return [
      {
        id: 1,
        title: "Home",
        url: "/",
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
        title: "Explore",
        url: "/explore",
      },
    ];
  }
}

export default CheckAuth;
