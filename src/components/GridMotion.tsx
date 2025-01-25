import React from 'react';
import { motion } from 'framer-motion';

interface GridMotionProps {
  items: (string | JSX.Element)[];
}

const GridMotion: React.FC<GridMotionProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="aspect-square rounded-lg overflow-hidden shadow-lg"
        >
          {typeof item === 'string' ? (
            item.startsWith('http') ? (
              <img src={item} alt="Service" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white p-4 text-center">
                {item}
              </div>
            )
          ) : (
            item
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default GridMotion;