import React from "react";
import { motion } from "motion/react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-15 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* footer top with 2 column/div */}
      <div className="flex justify-between lg:items-center max-lg:flex-col  gap-10 ">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay:0.2 }}
          viewport={{ once: true }}

          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt=""
            className="w-32 sm:w-44"
          />
          <p className="max-w-md">
            From strategy to execution , we craft digital solutions which will
            boost your business.
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-works">
                Our works
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#connect">
                Contact US
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.2 }}
          viewport={{ once: true }}       
        
        className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="mt-2 mb-6 text-sm">
            The latest news, articles and resources sent to your inbox weekly.
          </p>
          <div className="flex gap-1">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="p-3 w-full  text-sm outline rounded dark:text-gray-200 bg-transparent border-gray-300 dark:border-gray-500"
            />
            <button className="px-6 py-2 bg-primary text-white rounded">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* footer bottom */}

      <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 0.6, delay:0.5}}
          viewport={{ once: true }}     
      
      
      className="pb-6 flex text-sm text-gray-500 justify-center  items-center sm:justify-between gap-4 flex-wrap ">
        <p>Copyright 2025 &copy; agency.io - All Right Reserved.</p>
        <div className="flex items-center justify-center gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
