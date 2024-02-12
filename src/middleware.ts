import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware to handle region selection and onboarding status.
 */
export async function middleware(request: NextRequest) {
  const pathname = request?.nextUrl.pathname;
  if (pathname === "/")
    return NextResponse.redirect(request.nextUrl.origin + "/home", 307);

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
