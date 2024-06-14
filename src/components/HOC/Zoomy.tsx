import React, { useEffect, useState, ReactNode } from 'react';
import { Controlled as OGZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTheme } from '@/components/HOC/ThemeContext';

interface ZoomyProps {
  children: ReactNode;
  wrapElement?: string;
}

const Zoomy: React.FC<ZoomyProps> = ({ children, wrapElement }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (typeof document !== 'undefined') { // Check for SSR
      document.body.style.overflow = isZoomed ? 'hidden' : 'auto';
      const css = `[data-rmiz-modal-overlay="visible"] { background-color: ${darkMode ? '#151721' : '#FFFFFF'}; }`;
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
      return () => {
        head.removeChild(style);
      };
    }
  }, [isZoomed, darkMode]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <OGZoom
        isZoomed={isZoomed}
        onZoomChange={setIsZoomed}
        swipeToUnzoomThreshold={200}
      >
        {children}
      </OGZoom>
    </div>
  );
};

export default Zoomy;