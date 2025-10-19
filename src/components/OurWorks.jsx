import React from 'react';
import { motion } from "motion/react"
import assets from '../assets/assets';
import Title from './Title';

const OurWorks = () => {
    const workData = [
 
  {
    "id": 1,
    "title": "Mobile App Marketing",
    "description": "Creating intuitive and user-friendly mobile applications for iOS and Android.",
    "image": assets.work_mobile_app
  },
  {
    "id": 2,
    "title": "Dashboard Management",
    "description": "Developing scalable dashboard to boost maintaing your online sales easy.",
    "image": assets.work_dashboard_management
  },
   {
    "id": 3,
    "title": "Fitness App Promotion",
    "description": "We build responsive and modern websites/app tailored to your business needs.",
    "image": assets.work_fitness_app
  },
]


    return (
        <motion.div
          initial='hidden'
            whileInView='visible'
            transition={{staggerChildren:0.2}}
            viewport={{once:true}}
        
        id='our-works' className='px-4 sm:px-12 md:px-24 lg:px-24 xl:px-40 flex flex-col gap-7 items-center dark:text-white'>
            <Title title='Our latest work' description='From idea to execution with relatble strategy!'></Title>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl'>
                    {
                        workData.map((work)=>(
                            <motion.div
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:(work.id)*0.2, }}
                            viewport={{once:true}}
                            
                            key={work.id} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                                <img src={work.image} className='w-full rounded-xl' alt="" />
                                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                                <p className='w-5/6 text-sm opacity-60'>{work.description}</p>
                            </motion.div>
                        ))
                    }
            </div>
            
        </motion.div>
    );
};

export default OurWorks;