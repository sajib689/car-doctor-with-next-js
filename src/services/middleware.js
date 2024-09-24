import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async (request) => {
    const token = await cookies(request).get('next-auth.session-token')
    if(!token) {
        return NextResponse.redirect(new URL('/login'))
    }
}

export const config = {
    matcher: [

    ]
}