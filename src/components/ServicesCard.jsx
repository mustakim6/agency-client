import React, { useState } from "react";
import { motion } from "motion/react"
const ServicesCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5, delay:(service.id+1)*0.2, }}
    viewport={{once:true}}
      className="relative w-full sm:w-[400px] lg:w-[450px] h-[200px] m-4 rounded-xl overflow-hidden transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Gradient glow following mouse */}
      {isHovering && (
        <div
          className="pointer-events-none absolute w-[250px] h-[200px] blur-2xl rounded-full 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 
                     opacity-70 transition-all duration-300 ease-out"
          style={{
            top: `${position.y - 125}px`,
            left: `${position.x - 125}px`,
          }}
        />
      )}

      {/* Card container */}
      <div className="relative rounded-xl p-[2px] bg-transparent w-full h-full">
        {/* Card inner content */}
        <div
          className={`relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 
                      p-6 rounded-xl border-2 transition-all duration-300 ease-out
                      ${
                        isHovering
                          ? "border-transparent"
                          : "border-gray-200 dark:border-gray-700"
                      }
                      bg-white dark:bg-gray-900 shadow-xl w-full h-full`}
        >
          {/* Icon */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-4 flex items-center justify-center">
            {service.icon ? (
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 rounded-full object-contain"
              />
            ) : (
              <span className="text-4xl"></span>
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="font-bold text-lg text-gray-800 dark:text-gray-100">
              {service.title}
            </h2>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
