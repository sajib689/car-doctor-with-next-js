import { connectDb } from "@/lib/connectDb";
import bcrypt from "bcrypt";
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db1 = await connectDb()
        const db = await db1.collection('users');
        const exist = await db.findOne({ email: newUser.email });
        if (exist) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const userWithHashedPassword = { ...newUser, password: hashPassword };
        
        const resp = await db.insertOne(userWithHashedPassword);
        return NextResponse.json({ message: 'User created successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Some error occurred', error }, { status: 500 });
    }
};
