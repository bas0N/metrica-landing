// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NextApiRequest } from "next";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.url);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/pricing/:path*",
};
