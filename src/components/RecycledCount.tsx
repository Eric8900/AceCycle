import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NumberTicker from './ui/number-ticker';
import partnersData from '@/data/partners.json'
import BlurIn from './ui/blur-in';

const fundingSources = [
  {
    amount: '$5,000',
    label: 'Scholarship Award',
    title: 'Champion Scholars Award',
    recipient: 'Co-founder Nishant Gadde',
    meta: 'Jordan High School \u00b7 Katy, TX',
    description:
      'Awarded for a passion for sustainability that turned into action \u2014 recognizing the millions of tennis balls discarded every year, and co-founding AceCycle to keep them out of landfills.',
    link: 'https://championenergyservices.com/scholarships/2025-champion-scholars-scholarship-winners',
    image: '/award-champion-scholars.png',
    imageAlt: 'Champion Scholars Award announcement naming Nishant Gadde as the $5,000 recipient',
  },
  {
    amount: '$750',
    label: 'Honorable Mention',
    title: 'Texas High School Ideas Challenge',
    recipient: 'McFerrin Center for Entrepreneurship',
    meta: 'Texas A&M University \u00b7 2025',
    description:
      "Awarded to Solace by AceCycle \u2014 Centennial HS, Frisco. Sponsored by Homer Gonzalez '78.",
    link: 'https://mcferrin.tamu.edu/texas-high-school-ideas-challenge-awards-13000/',
    image: '/award-mcferrin-2025.png',
    imageAlt: "McFerrin Center for Entrepreneurship 2025 Top Idea Awards list showing Solace by AceCycle's honorable mention",
  },
];


function RecycledCount() {
  const { ref } = useInView();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-100 py-[50%] sm:py-[10%]" ref={ref}>
      <div className='text-center'>
        <BlurIn once={true} margin={"-100px"} className="text-7xl font-bold mb-12 text-gray-800 text-center">
          Balls Recycled
        </BlurIn>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="!text-7xl sm:!text-9xl font-extrabold bg-emerald-200 px-3 py-3 rounded-2xl"
        >
          <span className='bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent'>
            {/* NUMBER OF BALLS RECYCLED */}
            <NumberTicker value={510000} className='inline bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent' />+
          </span>
        </motion.span>
      </div>
      {/* FUNDING RAISED */}
      <div className='text-center mt-32'>
        <BlurIn once={true} margin={"-100px"} className="text-6xl sm:text-7xl font-bold mb-12 text-gray-800 text-center">
          Funding Raised
        </BlurIn>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="!text-6xl sm:!text-8xl font-extrabold bg-emerald-200 px-3 py-3 rounded-2xl"
        >
          <span className='bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent'>
            {/* TOTAL FUNDING RAISED */}
            $<NumberTicker value={5000} className='inline bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent' />+
          </span>
        </motion.span>
        {/* FUNDING SOURCES */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {fundingSources.map((fund) => (
            <motion.div
              key={fund.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-left flex flex-col h-full"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-lime-400 to-lime-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-600">
                {fund.label}
              </span>
              <span className="mt-4 text-5xl sm:text-6xl font-extrabold leading-none bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent">
                {fund.amount}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-gray-800">{fund.title}</h3>
              <div className="my-5 h-px w-12 bg-lime-200" />
              <p className="text-base font-semibold text-gray-700">{fund.recipient}</p>
              <p className="text-sm text-gray-500">{fund.meta}</p>
              <p className="mt-4 text-base font-light text-gray-600 leading-relaxed">
                {fund.description}
              </p>
              <a
                href={fund.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/img mt-auto pt-6 block"
              >
                <div className="relative h-44 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                  <img
                    src={fund.image}
                    alt={fund.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
                <span className="mt-3 inline-block text-sm font-bold text-lime-600 transition-colors group-hover/img:text-lime-700">
                  View announcement &rarr;
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <BlurIn once={true} margin={"-100px"} className="mt-32 text-2xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-gray-700">Our Partners</BlurIn>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* PARTNERS */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8">
          {partnersData.map((partner: { href: string | undefined; imgSrc: string | undefined; alt: string | undefined; }) => (
            <a href={partner.href} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="w-80 h-40 bg-white rounded-lg shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={partner.imgSrc} alt={partner.alt} className="max-w-full max-h-full p-1" />
            </motion.div>
          </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default RecycledCount;
