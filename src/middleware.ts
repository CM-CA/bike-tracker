import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/api/webhooks(.*)'
])

export const onRequest = clerkMiddleware({
  clockSkewInMs: 5000,
  signInUrl: '/sign-in',
  signUpUrl: '/sign-up',
}, (auth, context, next) => {
  const { userId, redirectToSignIn } = auth()

  // If the route is not public and user is not authenticated, redirect to sign-in
  if (!isPublicRoute(context.request) && !userId) {
    return redirectToSignIn()
  }

  return next()
})