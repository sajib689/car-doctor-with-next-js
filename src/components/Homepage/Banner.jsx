import img from '../../../public/assets/images/banner/1.jpg';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="hero-overlay bg-opacity-70"></div> {/* Optional: overlay for better text visibility */}
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-white text-center">Affordable Price For <br /> Car Servicing</h1> 
          <p className="py-6 text-white text-center">
            There are many variations of passages available, <br /> but the majority have suffered alteration in some form
          </p>
          
          <div className="flex justify-center space-x-4"> {/* Center buttons and add space between them */}
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline text-white hover:btn-primary">Latest Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
