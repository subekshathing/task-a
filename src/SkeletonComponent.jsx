import { Skeleton, Box } from '@mui/material';

const SkeletonComponent = () => {
  return (
    <Box
      sx={{
        height: 280,
        p: 2,
        borderRadius: 5,
        boxShadow: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      }}
    >
      {/* Skeleton loader for the main content */}
      <Skeleton variant="rectangular" width="100%" height={150} sx={{ mb: 2, borderRadius: 3,}} animation="none" />
      
      {/* Profile section */}
      <Box display="flex" alignItems="center" gap={2}>
        <Skeleton variant="circular" width={40} height={40} animation="none" />
        <Box>
          <Skeleton variant="text" width={250} height={40} animation="none" />
          <Skeleton variant="text" width={140} height={20} animation="none" />
        </Box>
      </Box>
    </Box>
  );
};

export default SkeletonComponent;
