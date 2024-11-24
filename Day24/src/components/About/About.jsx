import aboutPic from '../../assets/2.png'

const About = () => {
    return (
        <div className='flex m-20 gap-10 p-10'>
            <div className='w-1/2'>
                <img src={aboutPic} alt="" className='h-50 w-50 rounded' />
            </div>
            <div className='w-1/2'>
                <h1 className='font-bold text-3xl mb-10 mt-10'>About Of Web Development</h1>
                <p className='leading-loose text-gray-400'>Web development is the art of creating functional, engaging websites that connect brands with users. From crafting clean code to designing intuitive interfaces, it blends creativity and technology. Responsive design ensures seamless experiences across all devices. In today’s digital era, a well-built website is the cornerstone of online success.</p>
            </div>
        </div>
    );
};

export default About;