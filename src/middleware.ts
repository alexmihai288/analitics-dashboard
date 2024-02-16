import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    //track analytics event
    try {
        
    } catch (error) {
      //fail silently
      console.error(error);
    }
  }

  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
