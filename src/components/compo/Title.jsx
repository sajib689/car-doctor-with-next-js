

const Title = ({title,subTitle,description}) => {
    return (
        <div className='text-center space-y-4'>
            <h1 className='text-primary font-bold text-xl'>{subTitle}</h1>
            <h1 className='text-5xl font-semibold'>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Title;