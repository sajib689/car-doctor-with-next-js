import Title from "../compo/Title";
import {services} from '../../lib/services.js';
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
   
    return (
        <div>
            <Title  title={'Our Service Area'} subTitle={'Service'} description={'the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable'}/>
        <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;