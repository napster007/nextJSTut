import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    const response = NextResponse.next();
    const themePreference = request.cookies.get("theme");
    if (!themePreference) {
        response.cookies.set("theme", "dark", { httpOnly: true });
    }
    // return NextResponse.redirect(new URL("/", request.url));
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.rewrite(new URL("/hello", request.nextUrl));
    // }

    return response;

}

// export const config = {
//     matcher: "/profile",
// };