import React from 'react';
import { motion } from "motion/react"
const Title = ({title, description }) => {
    return (
        <div className=' flex flex-col items-center justify-center my-16'>

        <motion.h2
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.5}}
            
        className='text-3xl  sm:text-5xl font-medium'>{title}</motion.h2>

        <motion.p
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.4, delay:0.2}}
            
            className='max-w-lg my-2 text-center dark:text-white/70 mb-6'>{description}</motion.p>

            
        </div>
    );
};

export default Title;