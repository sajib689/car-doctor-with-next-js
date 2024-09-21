import { connectDb } from "@/lib/connectDb";

export const GET = async () => {
    try {
        const db = await connectDb();
        const servicesCollection = db.collection('services');
        const result = await servicesCollection.find().toArray();
        return Response.json({ result })
    } catch (error) {
        console.error("Error fetching services:", error);
        return new Response(JSON.stringify({ message: "Failed to fetch services" }), { status: 500 });
    }
};
