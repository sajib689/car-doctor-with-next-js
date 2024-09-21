import { getServicesDetails } from "@/services/getAllServices";
import Image from "next/image";

const Page = async ({ params }) => {
    const services = await getServicesDetails(params?.id);  
    console.log("Image URL:", services?.result?.img);

    return (
        <div>
           <Image src={services?.result?.img} width={850} height={850} alt={services?.result?.title}/>
           <h1>Service Name: {services?.result?.title}</h1>
           <p>{services?.result?.description}</p>
           <p>Price: {services?.result?.price}</p>
        </div>
    );
};

export default Page;
