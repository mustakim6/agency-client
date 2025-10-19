import React from 'react';
import { motion } from "motion/react"
import assets from '../assets/assets';

const Hero = () => {
    return (
        <div id='hero' className='flex flex-col items-center gap-6 py-16 px-4 sm:px-12 md:px-24 lg:px-24 xl:px-40 overflow-hidden text-gray-600  text-center w-full dark:text-white'>

            <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.3}}
            viewport={{once:true}}//to display the animation once

            className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                <img className='w-20' src={assets.group_profile}></img>
                <p className='text-sm font-medium'>Trusted By 100k people+</p>
            </motion.div>

            <motion.h1
            initial={{opacity:0, y:40}}//The element’s starting state (before animation starts).
            whileInView={{opacity:1, y:0}}//The target/final state to which it animates.
            transition={{duration:0.6, delay:0.4}}//Controls how the animation behaves (speed, easing, delay, etc.).
            viewport={{once:true}}//to display the animation once

            className=' text-2xl sm:text-5xl md:text-7xl  font-semibold max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>Digital</span>  impact.</motion.h1>

            <motion.p
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.3}}
            viewport={{once:true}}
            className='text-sm sm:text-lg font-medium dark:text-white/75 max-w-4/5 sm:max-w-lg'>Create meaningful connections and turning big ideas into interactive digital experiences </motion.p>

            <motion.div
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6, delay:0.8}}
            viewport={{once:true}}
            className='relative'>
                <img src={assets.hero_img} alt="" className='w-full max-w-6xl' />
                <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
            </motion.div>
            
        </div>
    );
};

export default Hero;