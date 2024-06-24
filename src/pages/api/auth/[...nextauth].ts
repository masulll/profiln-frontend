// import NextAuth from "next-auth/next";
// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";
// import { loginUser } from "../v1/login";
// import { loginGoogle } from "../v1/loginGoogle";

// //

// export const authOptions: NextAuthOptions = {
//   // Configure one or more authentication providers
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         fullname: { label: "Fullname", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, fullname, password } = credentials as {
//           email: string;
//           fullname: string;
//           password: string;
//         };
//         try {
//           const user = await loginUser({
//             email: email,
//             password: password,
//           });
//           if (user) {
//             console.log(user);
//             return user;
//           } else {
//             return null;
//           }
//         } catch (error) {
//           console.error("Authorization error:", error);
//           return null;
//         }
//       },
//     }),
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     // ...add more providers here
//   ],
//   callbacks: {
//     async jwt({ token, account, profile, user }) {
//       if (account?.providers === "credentials") {
//         token.email = user.email;
//       }
//       if (account?.provider === "google") {
//         try {
//           const userData = await loginGoogle({
//             email: profile?.email,
//           });
//           token.email = userData.email;
//           token.name = userData.name;
//           token.image = userData.image;
//           token.type = "google";
//           token.accessToken = userData.token; // token dari backend Anda
//         } catch (error) {
//           console.error("Google login error:", error);
//         }
//       }
//       console.log({ token, account, user });

//       return token;
//     },
//     async session({ session, token }: any) {
//       if ("email" in token) {
//         session.user.email = token.email;
//       }
//       if ("name" in token) {
//         session.user.name = token.name;
//       }
//       if ("image" in token) {
//         session.user.image = token.image;
//       }
//       console.log(session, token);

//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);
