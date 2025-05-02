import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  subtitle, 
  period, 
  description,
  index
}) => {
  return (
    <motion.div 
      className="relative pl-8 sm:pl-12 py-6 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 sm:left-0 h-full w-[2px] bg-primary-light group-last:h-6"></div>
      
      {/* Timeline circle */}
      <div className="absolute left-[-8px] sm:left-[-8px] top-7 h-4 w-4 rounded-full border-2 border-primary bg-white"></div>
      
      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-primary-dark mb-1">{title}</h3>
        <p className="text-lg font-medium text-gray-700 mb-1">{subtitle}</p>
        <p className="text-sm text-gray-500 mb-3">{period}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;