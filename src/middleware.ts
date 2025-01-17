import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const response = NextResponse.next()

	// Add security headers
	const headers = response.headers
	
	// HSTS
	headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
	
	// XSS Protection
	headers.set('X-XSS-Protection', '1; mode=block')
	
	// Content Security Policy
	headers.set(
		'Content-Security-Policy',
		"default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
	)
	
	// Prevent MIME type sniffing
	headers.set('X-Content-Type-Options', 'nosniff')
	
	// Referrer Policy
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
	
	// Frame Options
	headers.set('X-Frame-Options', 'DENY')
	
	// Permissions Policy
	headers.set(
		'Permissions-Policy',
		'camera=(), microphone=(), geolocation=(), interest-cohort=()'
	)

	return response
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
}