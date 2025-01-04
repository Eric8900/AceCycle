import { ZoomingImage } from '@/components/ui/zooming-image'
import { motion } from 'framer-motion'

function CallToAction() {
    return (
        <div>
            <ZoomingImage
                src='https://acecycleassets.vercel.app/about_13.jpg'
            >
                <div className='h-[70vh] w-full lg:w-[50%] md:w-[70%] sm:w-[85%] bg-green-800 p-9'>
                    <div className='h-full flex flex-col justify-between'>
                        <div>
                            <div className='xl:text-6xl text-5xl mb-3'>
                                Sustainability is key to AceCycle's mission
                            </div>
                            <a href='/about/'>
                                <motion.button
                                    className={`relative xl:px-8 xl:py-4 px-6 py-4 rounded-lg overflow-hidden group`}
                                    whileHover="hover"
                                    initial="initial"
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r from-emerald-800 to-green-600`}
                                    />
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-800`}
                                        initial={{ scale: 1.5, opacity: 0 }}
                                        variants={{
                                            hover: { scale: 1, opacity: 1 },
                                            initial: { scale: 1.5, opacity: 0 }
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <span className="relative text-white font-semibold xl:text-xl">
                                        Learn More
                                    </span>
                                </motion.button>
                            </a>
                        </div>
                        <div>
                            <div className='w-full bg-white h-[2px] mb-2'></div>
                            <div className='xl:text-lg text-left mb-6'>Our Impact</div>
                            <div className='xl:text-2xl text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem alias iste, ab reprehenderit ea nostrum id eligendi nisi voluptatum doloribus repudiandae, repellendus esse similique aut nobis obcaecati saepe excepturi.</div>
                        </div>
                    </div>
                </div>
            </ZoomingImage>
        </div>
    )
}

export default CallToAction
