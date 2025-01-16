import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import SkeletonComponent from './SkeletonComponent';

const SkeletonList = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      const center = window.innerHeight / 2;
      let closestIndex = null;
      let minDistance = Infinity;

      // Find the closest item to the center of the viewport
      document.querySelectorAll('.skeleton-item').forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2- center);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);

      // Load more items when scrolling to the bottom
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        loadMoreItems();
      }
    };

    // Function to load more items
    const loadMoreItems = () => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 10 })]); // Add 10 more items
    };

    // Initial load
    loadMoreItems();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }}
    >
      {items.map((_, index) => (
        <motion.div
          key={index}
          className="skeleton-item" // Added class for proper selection
          initial={{ scale: 0.8 }}
          animate={{
            scale: activeIndex === index ? 1.2 : 0.9, // Scale the closest item to the center
          }}
          transition={{ duration: 0.2 }}
        >
          <SkeletonComponent />
        </motion.div>
      ))}
    </Box>
  );
};

export default SkeletonList;
