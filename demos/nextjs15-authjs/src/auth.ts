import NextAuth from "next-auth";
import Frontegg from "@/providers/FrontEggNextAuthProvider";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Frontegg({
      clientId: process.env.AUTH_FRONTEGG_ID as string,
      clientSecret: process.env.AUTH_FRONTEGG_SECRET as string,
      issuer: process.env.AUTH_FRONTEGG_ISSUER,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
});
