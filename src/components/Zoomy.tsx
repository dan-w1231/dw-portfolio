import React, { useEffect, useState, ReactNode } from 'react';
import { Controlled as OGZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ZoomyProps {
  children: ReactNode;
}

const Zoomy: React.FC<ZoomyProps> = ({ children }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (typeof document !== 'undefined') { // Check for SSR
      document.body.style.overflow = isZoomed ? 'hidden' : 'auto';
    }
  }, [isZoomed]);

  return (
    <OGZoom
      isZoomed={isZoomed}
      onZoomChange={setIsZoomed}
      swipeToUnzoomThreshold={200}
    >
      {children}
    </OGZoom>
  );
};

export default Zoomy;