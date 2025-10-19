import React from 'react';
import { motion } from "motion/react"
import Title from './Title';
import assets from '../assets/assets';

const ContactUs = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{staggerChildren:0.2}}
            viewport={{once:true}}       
        id='connect' className='flex flex-col items-center gap-7 px-4 sm:px-12 md:px-24 lg:px-24 xl:px-40 pt-30 dark:text-white'>

            <Title title='Reach out to us' description='From the ideas to execution we craft digital solution that move your business forward.'></Title>

            <motion.form
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5, delay:0.4}}
            viewport={{once:true}}            
            
          className=' grid sm:grid-cols-2 gap-3 sm:gap-5 w-full max-w-2xl'>

                <div>
                    <p className=' font-medium mb-2 text-sm'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="" />
                        <input type="text" name="" id="" placeholder='Enter your name' required className='w-full p-3 text-sm outline-none'/>
                    </div>
                </div>
                <div>
                    <p className=' font-medium mb-2 text-sm'>Email</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="" />
                        <input type="email" name="" id="" placeholder='Enter your email' required className='w-full p-3 text-sm outline-none'/>
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='text-sm mb-2 font-medium'>Message</p>
                    <textarea name="" id="" rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'></textarea>

                </div>

                <button type="submit" className='max-w-[140px]  flex items-center  justify-center gap-2 bg-primary text-white text-md px-2 py-2 rounded-full cursor-pointer hover:scale-105 transition-all  '>
                    Submit 
                    <img src={assets.arrow_icon} alt="" className='w-4 font-bold '/> 
                </button>

            </motion.form>
            
        </motion.div>
    );
};

export default ContactUs;