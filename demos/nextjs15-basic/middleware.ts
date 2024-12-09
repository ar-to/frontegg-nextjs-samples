import { NextRequest, NextResponse } from 'next/server';
import { handleSessionOnEdge } from '@frontegg/nextjs/edge';

export const middleware = async (request: NextRequest) => {
  const { pathname, searchParams } = request.nextUrl;
  const headers = request.headers;

  // shouldByPassMiddleware from getSessionOnEdge was moved under the hood of handleSessionOnEdge

  // Additional logic if needed

  /**
   * Skip middleware for the homepage
   * The matcher regex below should take care of this but this is an example of how to skip middleware
   */
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next(); // Skip middleware for the homepage
  }

  /**
   * Here is a sample condition that could come in handly. 
   * Found it needed when testing 2 nextjs apps locally for SSO
   * as a path kept redirecting on the other app and I did not want to clear cache.
   */
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/about-2', request.url))
  // }

  return handleSessionOnEdge({ request, pathname, searchParams, headers });
};

export const config = {
  // works: original but matches everything including homepage which is not great UX
  // matcher: '/(.*)',

  // works: ignores specific pages that you want public
  // matcher: "/((?!about|contact|sales).{1,})", // Match all paths except the root and extra paths
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};