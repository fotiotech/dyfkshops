import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Example usage in an API route
export default async function middleware(req: NextRequest) {
  return NextResponse.redirect('/');
}

export const config = {
  matcher: "/",
};
