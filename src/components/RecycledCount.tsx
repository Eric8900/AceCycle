import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NumberTicker from './ui/number-ticker';

function RecycledCount() {
  const { ref, inView } = useInView(); 

  return (
    <div className="flex justify-center items-center h-screen bg-green-100" ref={ref}> 
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0}} 
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
          <span className='bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent'><NumberTicker value={400000} className='inline bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent'/>+</span>
        </motion.span>
      </motion.div>
    </div>
  );
}

export default RecycledCount;
