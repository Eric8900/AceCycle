import { Marquee } from './ui/marquee';

const CallToAction = () => {
    const tennisRow = ["https://acecycleassets.vercel.app/about_4.jpg", "https://acecycleassets.vercel.app/about_3.jpg", "https://acecycleassets.vercel.app/about_6.jpg", "https://acecycleassets.vercel.app/about_2.jpg"];

    return (
        <div className='flex justify-center items-center w-full my-32'>
            <div className="flex justify-center items-center relative ring-1 ring-gray-300 w-[90%] sm:w-[70%] md:w-[65%] lg:w-[50%] overflow-hidden bg-white rounded-xl p-12">
                {/* Animated rows */}
                <div className="absolute rotate-[35deg] space-y-5 w-max">
                    <Marquee className="[--duration:30s]">
                        {tennisRow.map((url, i) => (
                            <img key={`image-${i}`} src={url} className='max-w-44 max-h-44 object-cover rounded-lg' />
                        ))}
                    </Marquee>
                    <Marquee reverse className="[--duration:35s]">
                        {tennisRow.map((url, i) => (
                            <img key={`image-${i}`} src={url} className='max-w-44 max-h-44 object-cover rounded-lg' />
                        ))}
                    </Marquee>
                    <Marquee className="[--duration:33s]">
                        {tennisRow.map((url, i) => (
                            <img key={`image-${i}`} src={url} className='max-w-44 max-h-44 object-cover rounded-lg' />
                        ))}
                    </Marquee>
                    <Marquee reverse className="[--duration:38s]">
                        {tennisRow.map((url, i) => (
                            <img key={`image-${i}`} src={url} className='max-w-44 max-h-44 object-cover rounded-lg' />
                        ))}
                    </Marquee>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

                {/* Content */}
                <div className="flex flex-col items-center justify-center relative z-10 text-center">
                    <div className="mb-6 p-4 backdrop-blur-sm rounded-full shadow-lg ring-1 ring-gray-300">
                        <img src='AceCycleLogo.png' className='w-[2.7rem] h-10' />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Start a Chapter.</h2>
                    <p className="text-lg mb-8">One email away from making a real difference in your tennis community.</p>
                    <a 
                    href='mailto:nishantg2706@gmail.com?subject=AceCycle%3A%20Creating%20a%20New%20Chapter%20in%20%5BName%20Your%20City%5D%2C%20%5BName%20Your%20State%5D&body=Hello%2C%0A%0AI%20would%20like%20to%20learn%20more%20about%20creating%20a%20new%20chapter%20for%20AceCycle.%20Could%20you%20please%20provide%20more%20information%20regarding%20how%20to%20get%20started%3F%20%0A%0AThank%20you!' 
                    className='text-lime-500 hover:text-lime-600'>
                        <button className="bg-lime-400 text-black hover:text-white px-8 py-3 rounded-full font-medium hover:bg-lime-700 transition-colors">
                            Email Us →
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
