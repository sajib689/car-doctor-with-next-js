import { getServicesDetails } from "@/services/getAllServices";
import Image from "next/image";

export const getMetadata = async ({params}) => {
    
}

const Page = async ({ params }) => {
    const services = await getServicesDetails(params?.id);  
   

    return (
        <div>
           <Image src={services?.result?.img} width={1150} height={400} alt={services?.result?.title}/>
           <h1>Service Name: {services?.result?.title}</h1>
           <p>{services?.result?.description}</p>
           <p>Price: {services?.result?.price}</p>
        </div>
    );
};

export default Page;
