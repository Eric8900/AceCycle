import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function RecycledCount() {
  const [count, setCount] = useState(145000);
  const { ref, inView } = useInView(); 

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (inView) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= 145600) {
            clearInterval(interval);
            return 145600;
          }
          return prevCount + 1;
        });
      }, 1);
    }
    return () => clearInterval(interval); 
  }, [inView]); 

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
          key={count}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-8xl sm:text-9xl font-extrabold bg-emerald-200 px-3 py-3 rounded-2xl"
        >
          <span className='bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent'>{count}</span>
        </motion.span>
      </motion.div>
    </div>
  );
}

export default RecycledCount;
