import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";


export async function middleware(request: NextRequest) {
  const user = await verifyToken();

  const { pathname } = request.nextUrl;

  if (pathname.includes('/login') || pathname.includes('/register')) {
    return NextResponse.next();
  }

  if (!user) {
    return NextResponse.redirect('/')
  }
}