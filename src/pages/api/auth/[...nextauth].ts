import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

//

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        fullname: { label: "Fullname", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          fullname: string;
          password: string;
        };
        const user: any = {
          email: "email@example.com",
          fullname: "test2303",
          password: "gM123@bh",
        };
        if (user) {
          console.log(user);

          return user;
        } else {
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.providers === "credentials") {
        token.email = user.email;
      }
      if (account?.provider === "google") {
        const data = {
          name: user.name,
          email: user.email,
          image: user.image,
          type: "google",
        };
        token.email = data.email;
        token.name = data.name;
        token.image = data.image;
        token.type = data.type;
      }
      console.log({ token, account, user });

      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("name" in token) {
        session.user.name = token.name;
      }
      if ("image" in token) {
        session.user.image = token.image;
      }
      console.log(session, token);

      return session;
    },
  },
};

export default NextAuth(authOptions);
