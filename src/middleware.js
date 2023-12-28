import { NextResponse } from 'next/server'
import cookies from 'js-cookie'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const token = request.cookies.get('access_token');

    // console.log(token);

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}