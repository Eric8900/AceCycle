import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NumberTicker from './ui/number-ticker';

function RecycledCount() {
  const { ref, inView } = useInView();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-100 py-[50%] sm:py-0" ref={ref}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-7xl font-bold mb-12 text-gray-800">
          Balls Recycled
        </h2>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="!text-7xl sm:!text-9xl font-extrabold bg-emerald-200 px-3 py-3 rounded-2xl"
        >
          <span className='bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent'>
            <NumberTicker value={450000} className='inline bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent'/>+
          </span>
        </motion.span>
      </motion.div>
      
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-gray-700 mt-[10%]">Our Partners</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <motion.div
            className="w-80 h-40 bg-white rounded-lg shadow-md flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://acecycleassets.vercel.app/tennis_express.png" alt="Tennis Express" className="max-w-full max-h-full" />
          </motion.div>
          <motion.div
            className="w-80 h-40 bg-white rounded-lg shadow-md flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://acecycleassets.vercel.app/austin_humane_society.jpg" alt="Austin Humane Center" className="max-w-full max-h-full" />
          </motion.div>
          <motion.div
            className="w-80 h-40 bg-white rounded-lg shadow-md flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://acecycleassets.vercel.app/tennis_now.webp" alt="Tennis Now" className="max-w-full max-h-full p-1" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default RecycledCount;