import { ZoomingImage } from '@/components/ui/zooming-image'

function CallToAction() {
    return (
        <div>
            <ZoomingImage
                src='https://acecycleassets.vercel.app/about_13.jpg'
            >
                <div className='h-[70vh] w-full lg:w-[50%] md:w-[70%] sm:w-[85%] bg-green-800 p-9'>
                    <div className='h-full flex flex-col justify-between'>
                        <div>
                            <div className='xl:text-6xl text-4xl mb-3'>
                                Sustainability is key to AceCycle's mission
                            </div>
                            <a href='/about/'>
                                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-600 bg-[linear-gradient(110deg,#15803d,45%,#16a34a,55%,#15803d)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    Learn More
                                </button>
                            </a>
                        </div>
                        <div>
                            <div className='w-full bg-white h-[2px] mb-2'></div>
                            <div className='xl:text-lg text-left mb-6'>Our Impact</div>
                            <div className='xl:text-xl sm:text-lg text-sm text-left'>From our local beginnings to our current global outreach, AceCycle has been committed to sustainability in tennis. We've kept more than 450,000 balls out of landfills, conducted multiple studies for improving the recycling efficiency of tennis balls, and repurposed them into meaningful second lives-from local tennis shops to animal shelters. With chapters in numerous states and countries, we show that environmental responsibility can be paired with community impact.</div>
                        </div>
                    </div>
                </div>
            </ZoomingImage>
        </div>
    )
}

export default CallToAction
