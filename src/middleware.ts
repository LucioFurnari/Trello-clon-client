import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";


export async function middleware(request: NextRequest) {
  const user = await verifyToken();
  const { pathname } = request.nextUrl;

  if (user && !pathname.startsWith('/user')) {
    return NextResponse.redirect(new URL('/user', request.url));
  }

  if (!user && pathname.startsWith('/user')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/','/user'],
}