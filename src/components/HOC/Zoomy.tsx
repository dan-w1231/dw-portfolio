import React, { useEffect, useState, ReactNode } from 'react';
import { Controlled as OGZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTheme } from '@/components/HOC/ThemeContext';

interface ZoomyProps {
  children: ReactNode;
}

const Zoomy: React.FC<ZoomyProps> = ({ children }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (typeof document !== 'undefined') { // Check for SSR
      document.body.style.overflow = isZoomed ? 'hidden' : 'auto';
      const css = `[data-rmiz-modal-overlay="visible"] { background-color: ${darkMode ? '#151721' : '#FFFFFF'}; }`;
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
      return () => {
        head.removeChild(style);
      };
    }
  }, [isZoomed, darkMode]);

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