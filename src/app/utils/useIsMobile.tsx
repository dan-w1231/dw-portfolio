import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// maxWidth definition
export const useIsMobileScreen = (maxWidth = 768) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  return isMobile;
};

// Touch capability
export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice());
  }, []);

  return isTouch;
};

// Combined Touch OR maxWidth
export const useIsMobile = (maxWidth = 1024) => {
  const isMobileScreen = useIsMobileScreen(maxWidth);
  const isTouchDevice = useIsTouchDevice();

  // Return true if either condition is met
  return isMobileScreen || isTouchDevice;
};