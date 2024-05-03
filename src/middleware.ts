import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./helpers/middlewares/withAuth";

// const allowedOrigins = ['https://acme.com', 'https://my-app.org']

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(middleware, ["/"]);

// export const config = {
//   matcher: ["/"],
// };
