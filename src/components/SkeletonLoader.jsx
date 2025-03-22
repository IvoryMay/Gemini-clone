import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-2/4 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-2/4 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
};

export default SkeletonLoader;
