// taken from https://authjs.dev/getting-started/installation
// used next sample for more control
// export { auth as middleware } from "@/auth"

// initially taken from https://authjs.dev/getting-started/session-management/protecting?framework=express#nextjs-middleware
import { auth } from "@/auth";
import { NextResponse } from "next/server";


export default auth((req) => {

  /**
   * Here is a sample condition that could come in handly.
   * Found it needed when testing 2 nextjs apps locally for SSO
   * as a path kept redirecting on the other app and I did not want to clear cache.
   */
  if (req.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', req.url))
  }

  // taken from docs but not needed for now
  // if (!req.auth && req.nextUrl.pathname !== "/login") {
  //   const newUrl = new URL("/login", req.nextUrl.origin);
  //   return Response.redirect(newUrl);
  // }
});
