import { ZoomingImage } from '@/components/ui/zooming-image'
import { Button } from '../ui/button'
import ShinyText from '../ui/shiny-text'

function CallToAction() {
    return (
        <div>
            <ZoomingImage
                src='https://acecycleassets.vercel.app/about_13.jpg'
            >
                <div className='rounded-xl h-[70vh] w-full lg:w-[50%] md:w-[70%] sm:w-[85%] bg-green-800 p-9'>
                    <div className='h-full flex flex-col justify-between'>
                        <div>
                            <div className='xl:text-6xl sm:text-4xl text-3xl mb-3'>
                                Sustainability is key to AceCycle's mission
                            </div>
                            <a href='/about/'>
                                <Button
                                    className='rounded-full p-5'>
                                    <ShinyText text="Learn More" speed={3} className='' />
                                </Button>
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
