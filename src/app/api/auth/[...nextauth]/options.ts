// import NextAuth from "next-auth";

// const options = {
//   providers: [],
//   database: "http://localhost:1337/api/user-info",
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     session: async (session:any, user:any) => {
//       session.jwt = user.jwt;
//       session.id = user.id;
//       return Promise.resolve(session);
//     },
//     jwt: async (token:any, user:any, account:any) => {
//       const isSignIn = user ? true : false;
//       if (isSignIn) {
//         const response = await fetch(
//           "http://localhost:1337/api/user-info",
//          { headers:{Autorization:`Bearer ${process.env.NEXT_PUBLIC_}`}}
//         );
//         const data = await response.json();
//         token.jwt = data.jwt;
//         token.id = data.user.id;
//       }
//       return Promise.resolve(token);
//     },
//   },
// };

// const Auth = (req:any, res:any) =>
//   NextAuth(req, res, options);

// export default options;