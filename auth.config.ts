import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // must be JWT for middleware
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isDashboard && !isLoggedIn) return false; // redirect to login
      return true;
    },
  },
  providers: [], // Credentials are added in auth.ts
} satisfies NextAuthConfig;
