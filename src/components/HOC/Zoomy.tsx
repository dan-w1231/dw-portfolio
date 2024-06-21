import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import React, { useRef, useState, useEffect, ReactNode, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@/components/Button';
import { useTheme } from '@/components/HOC/ThemeContext'
import { useMediaQuery } from 'react-responsive';

interface ZoomyProps {
  children: ReactNode;
  layoutId?: string;
}

const Zoomy: React.FC<ZoomyProps> = ({ children, layoutId }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [scale, setScale] = useState(1);
  const [initialY, setInitialY] = useState(0);
  const [initialDistance, setInitialDistance] = useState(0);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(true);
  const [buttonColor, setButtonColor] = useState('bg-blurple-900');
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { darkMode } = useTheme();
  const overlayBackgroundColor = darkMode ? 'rgba(21, 23, 33, 0.6)' : 'rgba(225,212,222,0.6)';
  let touchTimeout: number | null = null;
  let lastDistance: number | null = null;

  const isMobileQuery = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    //removed isMobileQuery
    // setIsMobile(isMobileQuery || isTouchDevice());
    setIsMobile(isTouchDevice());
  }, [isMobileQuery]);

  useEffect(() => {
    if (dragRef.current && modalRef.current && modalRef.current.parentNode instanceof Element) {
      const draggableSize = dragRef.current.getBoundingClientRect();
      const modalSize = modalRef.current.parentNode.getBoundingClientRect();
  
      const extendedConstraints = {
        left: -(modalSize.width - draggableSize.width) / 2 - draggableSize.width * 0.7,
        right: (modalSize.width - draggableSize.width) / 2 + draggableSize.width * 0.7,
        top: -(draggableSize.height * 0.7),
        bottom: (modalSize.height + (draggableSize.height * 0.7)),
      };
  
      setConstraints(extendedConstraints);
    }
  }, [dragRef.current, modalRef.current]);

  useEffect(() => {
    if (isOpen && !isMobile) {
      setTimeout(() => {
        if (dragRef.current) {
          dragRef.current.style.transform = 'scale(1.01)';
          setScale(1.01);
        }
      }, 200);
    }
  }, [isOpen, isMobile]); 

  useEffect(() => {
    return () => {
      if (touchTimeout) clearTimeout(touchTimeout);
    };
  }, []);

  useEffect(() => {
    const root = document.getElementById('modal-root');
    setModalRoot(root);
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

  const getDistanceBetweenTouches = (touches: TouchList) => {
    if (touches.length < 2) {
      return 0;
    }
    const [touch1, touch2] = [touches[0], touches[1]];
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touches = event.touches;
    if (touches.length === 1) {
      // event.preventDefault();
      setInitialY(touches[0].clientY);
    } else if (touches.length === 2) {
      const distance = getDistanceBetweenTouches(touches as unknown as TouchList);
      setInitialDistance(distance);
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touches = event.touches;
    const minModalScale = 0.85;
    if (touches.length === 1) {
      setIsDraggingEnabled(true);
    } else if (touches.length === 2) {
      setIsDraggingEnabled(false);
      if (touchTimeout) clearTimeout(touchTimeout);
        const distance = getDistanceBetweenTouches(touches as unknown as TouchList);
        if (lastDistance !== null) { // Check if there's a previous distance to compare with
          const distanceChange = distance - lastDistance;
          const sensitivity = 0.01;
          let newScale = scale * Math.exp(distanceChange * sensitivity);
          newScale = Math.max(0.66, Math.min(newScale, 3));
          setScale(newScale);

          if (newScale >= 0.66 && newScale <= 0.8) {
            if (modalRef.current) {
              const modalScale = 1 - ((0.8 - newScale) * (1 - minModalScale) / (0.8 - 0.66));
              modalRef.current.style.transform = `scale(${modalScale})`;
            }
          } else if (newScale > 0.8) {
            if (modalRef.current) {
              modalRef.current.style.transform = 'scale(1)';
            }
          }
        }
        lastDistance = distance;
    } else {
      lastDistance = null;
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touches = event.touches;
    setIsDraggingEnabled(true);
    if (touchTimeout) clearTimeout(touchTimeout);
    if (event.touches.length < 1) {
      setInitialY(0); // Reset initial Y position
    }

    const wasPinching = event.changedTouches.length > 1 || touches.length > 0;

    setTimeout(() => {
      if (scale > 0.65 && scale < 0.8 && wasPinching) {
        setIsOpen(false);
        if (modalRef.current) {
          modalRef.current.style.transform = 'scale(1)';
        }
      }
    }, 100);

    // if (touches.length === 1) {
    // }
  };
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const minModalScale = 0.85;
    const sensitivity = 0.0007;
    const scaleChange = event.deltaY * -sensitivity;
    const newScale = Math.max(0.66, Math.min(scale * Math.exp(scaleChange), 3));
    setScale(newScale);
    setConstraints;
  
    if (newScale >= 0.66 && newScale <= 0.8) {
      if (modalRef.current) {
        const modalScale = 1 - ((0.8 - newScale) * (1 - minModalScale) / (0.8 - 0.66));
        modalRef.current.style.transform = `scale(${modalScale})`;
      }
    } else if (newScale > 0.8) {
      if (modalRef.current) {
        modalRef.current.style.transform = 'scale(1)';
      }
    }
  
    if (newScale > 0.65 && newScale < 0.72) {
      setTimeout(() => {
        setIsOpen(false);
        if (modalRef.current) {
          modalRef.current.style.transform = 'scale(1)';
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
  
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const mobileProps = {
    ...(isDraggingEnabled ? { drag: true } : {}),
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };

  const nonTouchProps = {
    drag: true,
    onWheel: handleWheel,
  };

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="blurModal"
          ref={modalRef}
          className="flex flex-col items-center justify-center rounded-4xl md:rounded-none overflow-hidden backdrop-blur-[16px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
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
          // {...(!isMobile ? { onClick: () => setIsOpen(false) } : {})}
        >
          {!isMobile && (
            <motion.div id="modalTopbar" className="absolute bottom-6 px-4 py-2 rounded-full flex justify-between items-center bg-midnight-900 z-[999] display-visible md:display-none">
              <div id="modalTopbar-text" className="text-base tracking-tight font-light text-center text-ice-500">
                <span>Scroll to zoom</span>
              </div>
            </motion.div>
          )}

          <motion.div
            className="absolute flex md:justify-center bottom-6 md:bottom-[unset] md:top-6 md:right-6 z-[9999] text-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { type: "spring", stiffness: 400, delay: 0.3, duration: 0.5 } }}
            whileHover={{ scale: 0.95, y: 0 }}
            whileTap={{ scale: 0.85, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 0.3 }}
          >
            <button
              id="closeButton"
              onClick={() => setIsOpen(false)}
              className={`${buttonColor} relative hover:bg-blurple-700 text-ice-900 overflow-hidden transform-gpu transition-bg duration-200 hover:shadow-lg inline-flex items-center justify-center rounded-full text-lg font-semibold tracking-tight shadow-lg focus:outline-none w-[64px] h-[64px]`}
            >
              ×
            </button>
          </motion.div>
          <motion.div
            id="cloneWrapper"
            className="absolute top-0 left-0 flex items-center justify-center w-full h-screen"
            initial={{ scale: 0.25, y: -200, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70, duration: 1.2 }}
            >
            <motion.div
              id="cloneDragContainer"
              className="cursor-move"
              ref={dragRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 70, duration: 1.2 }}
              style={{scale}}
              dragMomentum={false}
              // dragElastic={0.9}
              dragConstraints={{
                top: constraints.top,
                bottom: constraints.bottom,
                right: constraints.right,
                left: constraints.left,
              }}
              {...(isMobile ? mobileProps : {})}
              {...(!isMobile ? nonTouchProps : {})}
              >
              {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                  const element = child as React.ReactElement<any>;
                  const propsWithLayoutId = {
                    id: "imageClone",
                    ...element.props,
                    // layoutId: layoutId,
                    className: `${element.props.className || ''} max-w-full max-h-full object-contain flex items-center justify-center`
                  };
                  return (
                    <motion.div key="uniqueKey"
                      layoutId={layoutId} 
                      // ref={imageRef} 
                      className="w-full h-full flex items-center justify-center"
                      >
                      {React.cloneElement(element, propsWithLayoutId)}
                    </motion.div>
                  );
                }
                return child;
              })}
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
  return (
    <>
      <div onClick={() => setIsOpen(true)} style={{ height: '100%', width: '100%', cursor: 'pointer' }}>
        {children}
      </div>
      {isMounted && modalRoot && ReactDOM.createPortal(overlay, modalRoot)}
    </>
  );
};

export default Zoomy;