import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:['/','faq','about'],
    // debug: true
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/static/images/avatar/(.*)"
  ],
};
;