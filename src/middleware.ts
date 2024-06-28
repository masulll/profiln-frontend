import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (token && request.nextUrl.pathname.startsWith("/auth/forget/resetPass")) {
    return NextResponse.next();
  }

  if (token && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    !token &&
    !request.nextUrl.pathname.startsWith("/auth") &&
    !request.nextUrl.pathname.startsWith("/info_data") &&
    !request.nextUrl.pathname.startsWith("/my_post")
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (
    !token &&
    (request.nextUrl.pathname.startsWith("/info_data") ||
      request.nextUrl.pathname.startsWith("/my_post"))
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/", "/info_data", "/my_post/:path*"],
};
