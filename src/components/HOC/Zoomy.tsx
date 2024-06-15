import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, ReactNode, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@/components/Button';
import { useTheme } from '@/components/HOC/ThemeContext'

interface ZoomyProps {
  children: ReactNode;
}

const Zoomy: React.FC<ZoomyProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById('modal-root');
    setModalRoot(root);
  }, []);
  
  const { darkMode } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const overlayBackgroundColor = darkMode ? 'rgba(21, 23, 33, 0.6' : 'rgba(255, 255, 255, 1)';

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="backdrop-blur-[140px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 70, duration: 1.2 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: overlayBackgroundColor,
            zIndex: 1000,
          }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="absolute top-6 right-6 z-[9999] text-xl"
            whileHover={{ scale: 0.98, y: 0 }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ type: "spring", stiffness: 400, duration: 0.2 }}
            >
            <Button
              onClick={() => setIsOpen(false)}
              color="primaryGrad"
              className="w-[64px] min-w-[64px] rounded-full"
            >
              ×
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.2 }}
            style={{
              position: 'relative',
              maxWidth: '100%',
              maxHeight: '100%',
              margin: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
            >
            {React.Children.map(children, child =>
              React.isValidElement(child) ? cloneElement(child, {
                className: `${child.props.className || ''} max-w-full max-h-screen object-contain pointer-events-auto`
              }) : child
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  return (
    <>
      <div onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      {isMounted && modalRoot && ReactDOM.createPortal(overlay, modalRoot)}
    </>
  );
};

export default Zoomy;