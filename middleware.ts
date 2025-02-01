import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { privateRoutes } from "./routes";

const { auth } = NextAuth(authConfig)

export default auth(async (req) => {
  const isLoggedIn = !!req.auth
  const { nextUrl } = req
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname)
  const isAuthRoute = nextUrl.pathname.includes('/auth')
  const isApiRoute = nextUrl.pathname.includes('/api')
  const url = 'http://localhost:3000'

  if (isApiRoute) {
    return
  }
  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(`${url}/dashboard`)
  };
  if (isAuthRoute && !isLoggedIn) {
    return
  }
  if (isPrivateRoute && !isLoggedIn) {
    return Response.redirect(`${url}/auth/login`)
  }

})


export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};