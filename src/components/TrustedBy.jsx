import React from 'react';
import { motion } from "motion/react"
import { company_logos } from '../assets/assets';
const TrustedBy = () => {
    return (
        <motion.div
        initial={{opacity:0 , y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}

        
        
        className='flex flex-col sm:px-12 md:px-24 lg:px-24 xl:px-40 justify-center items-center dark:text-white/90'>
            <motion.h3
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5}}
            viewport={{once:true}}
            
            
            className='font-bold text-center text-2xl'>Trusted By leadeing Companies</motion.h3>

            <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{staggerChildren:0.1}}
            viewport={{once:true}}
            
            className='flex items-center flex-wrap  justify-center gap-4 m-4 '>
                {
                    company_logos.map((logo, idx)=> (
                        <motion.img
                        variant={{
                            hidden:{opacity:0, y:10},
                            visible:{opacity:1, y:0}
                        }}
                        transition={{duration:0.1}}
                        key={idx} src={logo} alt="" className='max-h-5 sm:max-h-6  dark:drop-shadow-xl' />
                    ))
                }
            </motion.div>
        </motion.div>
    );
};

export default TrustedBy;