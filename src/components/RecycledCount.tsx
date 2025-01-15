import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NumberTicker from './ui/number-ticker';
import partnersData from '@/data/partners.json'
import BlurIn from './ui/blur-in';

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
            <NumberTicker value={455600} className='inline bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent' />+
          </span>
        </motion.span>
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
