import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtected = createRouteMatcher(["/dashboard(.*)"])

export const onRequest = clerkMiddleware((auth, context) => {

    const { userId, redirectToSignIn} = auth()

    if (isProtected(context.request) && !userId ){
        return redirectToSignIn()
    }

});
