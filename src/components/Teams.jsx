import React from 'react';
import { motion } from "motion/react"
import Title from './Title';
import  { teamData } from '../assets/assets';

const Teams = () => {
    return (
        <motion.div
           initial='hidden'
            whileInView='visible'
            
            viewport={{once:true}}        
        
        className='flex flex-col items-center gap-7 dark:text-white px-4 sm:px-12 md:px-24 lg:px-24 xl:px-40 pt-30'>
            <Title title="Meet the team" description='A passionate team of digital expart dedicated to your brand success.'></Title>

            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4'>
                    {
                        teamData.map((team, idx)=>(
                            <motion.div
                                initial={{opacity:0, y:20}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.4, delay:idx*0.1, }}
                                viewport={{once:true}}
                            key={idx} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-500'>

                                <img src={team.image} alt="" className='w-12 h-12 rounded-full' />
                                <div className='flex-1'>
                                    <h3 className='font-bold text-sm'>{team.name}</h3>
                                    <p className='text-xs opacity-60'>{team.title}</p>
                                </div>

                            </motion.div>
                        ))
                    }
            </div>
            
        </motion.div>
    );
};

export default Teams;