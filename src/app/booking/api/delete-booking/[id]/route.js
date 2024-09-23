import { connectDb } from "@/lib/connectDb"

export const DELETE = async (request, {params}) => {
    const db = await connectDb()
    const bookingCollection = db.collection('checkout')

    try {
      
        const result = await bookingCollection.deleteOne({_id: params.id})
        return Response.json({result})
    } catch (err) {
        console.error(err)
    }
}