import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export const middleware = async (request) => {
    const cookieStore = cookies()
    const token = cookieStore.get('next-auth.session-token')

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/booking/:path*',
    ],
}
