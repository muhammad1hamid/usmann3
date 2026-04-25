import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePixelTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);
};
