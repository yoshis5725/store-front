import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import {NextResponse} from "next/server";

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about']);
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
    const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;

    if (!isPublicRoute(req))
        auth().protect();

    if (isAdminRoute(req) && !isAdminUser)
        return NextResponse.redirect(new URL('/', req.url));
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};