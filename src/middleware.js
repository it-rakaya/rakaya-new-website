import { NextResponse } from "next/server";

// Middleware function
export function middleware(req) {
  const token = req.cookies.get("token");

  // if (token && req.nextUrl.pathname === "/login") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  // if (token && req.nextUrl.pathname === "/register") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  // if (!token && req.nextUrl.pathname == "/profile") {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // return NextResponse.next();
}

export const config = {
  // matcher: ["/login", "/register", "/profile"],
};
