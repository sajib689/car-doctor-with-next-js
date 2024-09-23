import { connectDb } from "@/lib/connectDb"


export const GET = async (request, {params}) => {
    const db = await connectDb()
    const checkoutCollection = await db.collection('checkout')
    try {
        const result = await checkoutCollection.find({email: params.email}).toArray()
       return Response.json({result})
    } catch (err) {
        console.error(err)
    }
}