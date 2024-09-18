import NextAuth from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    providers: [
        credentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize (credentials) {
                return true;
            }
        }),
    ], 
    callbacks: {
        
    },
    pages: {
        signIn: '/login', 
    },
});

// Return the handler for both POST and GET requests
export { handler as POST, handler as GET };
