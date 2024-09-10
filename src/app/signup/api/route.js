import { connectDb } from "@/lib/connectDb";
import bcrypt from "bcrypt";

export const POST =async (request) =>{
    const newUser = await request.json();
    try {
        const db = await connectDb.collection('users');
        const exist = await db.findOne({email: newUser.email});
        if(exist) {
            return Response.json({message: 'user already exists'},{status: 400})
        }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await db.insertOne(...newUser,hashPassword)
        return Response.json({message: 'user created successfully'}, {status: 200});
    } catch(error) {
    return Response.json({message: 'some error', error}, {status: 500})
    }
}