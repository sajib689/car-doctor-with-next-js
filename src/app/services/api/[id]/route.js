import { connectDb } from "@/lib/connectDb"
export const GET = async (request,{params}) => {
    const db = await connectDb()
    const servicesCollection =await db.collection('services')
    try {
        const result = await servicesCollection.findOne({ _id: params.id })
        return Response.json({result})
    } catch (err) {
        console.error(err)
    }
}