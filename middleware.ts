import { NextRequest, NextResponse } from "next/server";

const restrictedRoutes = ["/checkout", "/cart", "/account"];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (restrictedRoutes.includes(path)) {
    const token = req.cookies.get("authToken");

    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/cart", "/account"],
};
