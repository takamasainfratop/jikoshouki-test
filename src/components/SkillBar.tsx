import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'bg-primary', 
  delay = 0.2 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-text">{name}</span>
        <span className="text-sm font-medium text-text">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className={`h-2.5 rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : '0%' }}
          transition={{ duration: 1, ease: "easeOut", delay: delay }}
        />
      </div>
    </div>
  );
};

export default SkillBar;