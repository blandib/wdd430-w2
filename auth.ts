import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

const HARD_CODED_USER = {
  id: "1",
  name: "User",
  email: "user@nextmail.com",
  password: "123456", // plaintext for testing (okay for tutorial)
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        if (
          credentials?.email === HARD_CODED_USER.email &&
          credentials?.password === HARD_CODED_USER.password
        ) {
          // Return user object without password
          return {
            id: HARD_CODED_USER.id,
            name: HARD_CODED_USER.name,
            email: HARD_CODED_USER.email,
          };
        }
        return null;
      },
    }),
  ],
});
