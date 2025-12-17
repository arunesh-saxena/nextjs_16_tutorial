import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();
    const themePreference = request.cookies.get('theme');
    if(!themePreference) {
        response.cookies.set('theme', 'light');
    };

    response.headers.set('customer-header', 'customer-header-value');
    return response;


    // return NextResponse.redirect(new URL('/', request.url));

    // if (request.nextUrl.pathname === '/profile') {
    //     // return NextResponse.redirect(new URL('/about', request.url));
    //     return NextResponse.rewrite(new URL('/about', request.url));
    // }
};


// export const config = {
//     matcher: '/profile'
// }