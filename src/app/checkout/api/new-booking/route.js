import { connectDb } from "@/lib/connectDb"

export const POST = async (request) => {
    const booking = await request.json();
    const db = await connectDb()
    const checkoutCollection = await db.collection('checkout')
    try {
        const result = await checkoutCollection.insertOne(booking)
        return Response.json({message: 'booking added successfully'})
    } catch (err) {
        console.error(err)
    }
}