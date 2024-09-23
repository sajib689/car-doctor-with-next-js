import { connectDb } from "@/lib/connectDb"
import { ObjectId } from "mongodb"

export const DELETE = async (request, {params}) => {
    const db = await connectDb()
    const bookingCollection = db.collection('checkout')

    try {
      
        const result = await bookingCollection.deleteOne({_id: new ObjectId(params.id)})
        return Response.json({result})
    } catch (err) {
        console.error(err)
    }
}