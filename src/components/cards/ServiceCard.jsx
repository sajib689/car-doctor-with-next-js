import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({service}) => {
    const {_id,title,img,description,price} = service;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={img} alt='img' width={250} height={300}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0,50)}</p>
        <div className="card-actions justify-end">
          <p className='font-bold text-primary'>Price: ${price}</p>
          <Link href={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
