// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NextApiRequest } from "next";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.url);

  console.log("cookies");
  console.log(request.cookies);
  ///??????????
  // if ("appSession" in request.cookies) {
  //   console.log("redirect");
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  //if includes api in url
  //get token and attach it to the request
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
