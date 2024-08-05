import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXT_AUTH_SECRET,
  });
  console.log("Middleware Token:", token);

  const url = request.nextUrl;

  if (
    token &&
    (url.pathname.startsWith("/login") ||
      url.pathname.startsWith("/signup") ||
      url.pathname.startsWith("/verify"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && url.pathname.startsWith("/editor")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/editor/:path*",
    "/verify/:path*",
    "/forgot-password/:path*",
  ],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// export { default } from "next-auth/middleware";
// import { getToken } from "next-auth/jwt";
//
// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request });
//   const url = request.nextUrl;
//   console.log("Middleware workign ");
//   console.log("Token " + token);
//   // console.log(url.pathname, token, "154522262555");
//
//   if (
//     token &&
//     (url.pathname.startsWith("/login") ||
//       url.pathname.startsWith("/sign-up") ||
//       url.pathname.startsWith("/verify"))
//   ) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   // if (!token && url.pathname.startsWith("/editor")) {
//   //   console.log("redirecting to login");
//   //
//   //   return NextResponse.redirect(new URL("/login", request.url));
//   // }
// }
//
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     "/login",
//     "/sign-up",
//     "/",
//     "/editor/:path*",
//     "/verify/:path*",
//     "/forgot-password/:path*",
//   ],
// };
//
// // import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";
// // export { default } from "next-auth/middleware";
// // import { getToken } from "next-auth/jwt";
// // import { cookies, headers } from "next/headers";
// //
// // // This function can be marked `async` if using `await` inside
// // export async function middleware(request: NextRequest) {
// //   const token = await getToken({ req: request });
// //
// //   // const token = await getToken({
// //   //   req: {
// //   //     headers: Object.fromEntries(headers()),
// //   //     cookies: Object.fromEntries(
// //   //       cookies()
// //   //         .getAll()
// //   //         .map((c) => [c.name, c.value]),
// //   //     ),
// //   //   },
// //   // });
// //   const url = request.nextUrl;
// //   console.log("TOKEN : " + token);
// //   console.log(token);
// //   console.log("Middleware function working ");
// //   // // console.log(url.pathname, token, "154522262555");
// //   console.log("Url is " + url);
// //   //
// //   if (
// //     token &&
// //     (url.pathname.startsWith("/login") ||
// //       url.pathname.startsWith("/signup") ||
// //       url.pathname.startsWith("/verify"))
// //   ) {
// //     return NextResponse.redirect(new URL("/", request.url));
// //   }
// // }
// //
// // // See "Matching Paths" below to learn more
// // export const config = {
// //   matcher: [
// //     "/login",
// //     "/signup",
// //     "/",
// //     "/editor/:path*",
// //     "/verify/:path*",
// //     "/forgot-password/:path*",
// //   ],
// // };
