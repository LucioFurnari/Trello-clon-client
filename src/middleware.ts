import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";


export async function middleware(request: NextRequest) {
  const user = await verifyToken();
  const { pathname } = request.nextUrl;

  if (user && !pathname.startsWith('/user')) {
    // Change this for the route you want to see first in the dashboard
    return NextResponse.redirect(new URL('/user/boards', request.url));
  }

  if (!user && pathname.startsWith('/user')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/','/user'],
}