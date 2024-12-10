import type { NextAuthOptions } from "next-auth";
import Frontegg from "./FrontEggNextAuthProvider";

export const authOptions: NextAuthOptions = {
  // ** Configure one or more authentication providers
  // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
  providers: [
    // ** ...add more providers here
    Frontegg({
      clientId: process.env.AUTH_FRONTEGG_ID as string,
      clientSecret: process.env.AUTH_FRONTEGG_SECRET as string,
      issuer: process.env.AUTH_FRONTEGG_ISSUER,
    }),
  ],
  // helpful to track changes during authentication flow and debug errors
  debug: true,

  // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
  session: {
    /*
     * Choose how you want to save the user session.
     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
     * If you use an `adapter` however, NextAuth default it to `database` instead.
     * You can still force a JWT session by explicitly defining `jwt`.
     * When using `database`, the session cookie will only contain a `sessionToken` value,
     * which is used to look up the session in the database.
     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
     */
    strategy: "jwt",

    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
  pages: {
    signIn: "/login",
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
  callbacks: {
    /*
     * While using `jwt` as a strategy, `jwt()` callback will be called before
     * the `session()` callback. So we have to add custom parameters in `token`
     * via `jwt()` callback to make them accessible in the `session()` callback
     */
    async jwt({ token, user }) {
      // uncomment to debug further
      // console.log("callback>twt", token);
      // console.log("callback>user", user);
      // console.log("callback>account", account);

      if (user) {
        /*
         * For adding custom parameters to user in session, we first need to add those parameters
         * in token which then will be available in the `session()` callback
         */
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }) {
      // uncomment to debug further
      // console.log("callback>session", session);

      if (session.user) {
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        session.user.name = token.name;
        // Send properties to the client, like an access_token from a provider.
        // session.accessToken = token.accessToken
      }

      return session;
    },
  },
};
