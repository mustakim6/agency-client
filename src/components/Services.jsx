import React from 'react';
import { motion } from "motion/react"
import assets from '../assets/assets';
import Title from './Title';
import ServicesCard from './ServicesCard';

const Services = () => {
    const servicesData = [
  {
    "id": 1,
    "title": "Advertising",
    "description": "Reach your target audience effectively through strategic ad campaigns that boost brand awareness and conversions.",
    "icon": assets.ads_icon
  },
  {
    "id": 2,
    "title": "Marketing",
    "description": "Comprehensive marketing strategies combining creativity and data to grow your business and enhance visibility.",
    "icon": assets.marketing_icon
  },
  {
    "id": 3,
    "title": "Content Writing",
    "description": "Engaging, SEO-friendly content tailored to your audience to communicate your message and strengthen your brand.",
    "icon": assets.content_icon
  },
  {
    "id": 4,
    "title": "Social Media Management",
    "description": "Build a strong online presence through consistent branding, creative posts, and active audience engagement across all platforms.",
    "icon": assets.social_icon
  }
]

    return (
        <motion.div
           initial='hidden'
            whileInView='visible'
            transition={{staggerChildren:0.1}}
            viewport={{once:true}}
        
        id='services' className='relative flex flex-col  gap-7 dark:text-white px-4 sm:px-12 md:px-24 lg:px-24 xl:px-40 '>
    
    <img src={assets.bgImage2} alt="" className='dark:hidden absolute -top-110 -left-70 -z-1 ' />

    <Title title="How can we help?" description="From strategy to execution, we craft digital solutions that move your business ahead."></Title>

    <div className='flex flex-col md:grid grid-cols-2'>
        {
        servicesData.map((service)=>(
            <ServicesCard key={service.id} service={service}></ServicesCard>
        ))
    }
    </div>

        </motion.div>
    );
};

export default Services;