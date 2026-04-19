import React from 'react';
import { Loader2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-navy-dark">
      <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
    </div>
  );
};

export default PageLoader;
