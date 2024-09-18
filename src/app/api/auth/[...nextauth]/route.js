import { connectDb } from "@/lib/connectDb";
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
                const {email, password} = credentials;
                if(!email || !password) {
                    return null;
                }
                const db = connectDb()
                const currentUser =await db.collection('users').findOne({email})
                if(!currentUser){
                    return null;
                }
                const passwordMatch = bcrypt.compareSync(password, currentUser.password)
                if(!passwordMatch){
                    return null;
                }
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
