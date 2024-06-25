import { motion, AnimatePresence, useAnimation, PanInfo } from 'framer-motion';
import React, { useRef, useState, useEffect, ReactNode, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@/components/Button';
import { useTheme } from '@/components/HOC/ThemeContext'
import { useMediaQuery } from 'react-responsive';

interface ZoomyProps {
  children: ReactNode;
  layoutId?: string;
  initialScale?: number;
}

const Zoomy: React.FC<ZoomyProps> = ({ children, initialScale }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [scale, setScale] = useState(1);
  const [zoomIntervalId, setZoomIntervalId] = useState<number | null>(null);
  const [initialY, setInitialY] = useState(0);
  const [initialDistance, setInitialDistance] = useState(0);
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(true);
  const [buttonColor, setButtonColor] = useState('bg-blurple-900');
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [animateInitialScale, setAnimateInitialScale] = useState(true);

  useEffect(() => {
    if (isOpen && initialScale !== undefined && animateInitialScale) {
      if (dragRef.current) {
        dragRef.current.style.transition = 'transform 0.3s ease';

        setTimeout(() => {
          if (scale !== initialScale) {
            setScale(initialScale);
            // console.log('initialScale set to scale');
            if (dragRef.current) {
              dragRef.current.style.transform = `scale(${initialScale})`;
              setIsAnimatingIn(true);
            }
          }
          setTimeout(() => {
            if (dragRef.current) {
              dragRef.current.style.transition = '';
            }
          }, 400);

          setAnimateInitialScale(false);
          setIsAnimatingIn(false);
          // console.log('animateInitialScale', animateInitialScale);
        }, 300);
      }
    }
  }, [isOpen, initialScale, scale, animateInitialScale]);



  // closeModal -> modal has onAnimationComplete=handleAnimationComplete -> checks if animating -> closes modal
  // 1. This doesn't work, handleAnimationComplete is never called when you click the button.

  // const closeModal = () => {
  //   setIsAnimatingOut(true);
  //   console.log('close modal called ');
  // };

  // const handleAnimationComplete = () => {
  //   console.log('handleAnimationComplete called, isAnimatingOut:', isAnimatingOut);
  //   if (isAnimatingOut) {
  //     setIsOpen(false);
  //     setIsAnimatingOut(false);
  //   }
  //   console.log('handleAnimationComplete called ');
  // };

  // 2. Working but causes image to disappear if you close modal too quick
  // const closeModal = () => {
  //   setIsAnimatingOut(true);
  //   setIsOpen(false);
  //   console.log('close modal called');
  // };

  // const handleAnimationComplete = () => {
  //   if (isOpen) { 
  //     setTimeout(() => {
  //       setIsAnimatingOut(false);
  //     }, 300);
  //   }
  //   console.log('handleAnimationComplete called');
  // };

  const openModal = () => {
    setIsOpen(true);
    setAnimateInitialScale(true);
    //This might not be necessary:
  };

  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // 2.1. Working but causes image to disappear if you close modal too quick
  const closeModal = () => {
    setIsAnimatingOut(true);
    if (!isAnimatingIn && !isAnimatingOut) {
      setTimeout(() => {
        setIsOpen(false);
        setScale(1);
      }, 100);
      // console.log('close modal called');
    }
  };
  const handleAnimationStart = () => {
    setIsAnimatingIn(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimatingIn(false);
    if (isOpen) {
      setTimeout(() => {
        setIsAnimatingOut(false);
      }, 10);
    }
    // console.log('handleAnimationComplete called');
  };


  // console.log(isAnimatingIn, isAnimatingOut)

  // const closeModal = () => {
  //   setIsAnimatingOut(true); 
  //   console.log('close modal called');

  //   // Delay state update to after the animation duration
  //   setTimeout(() => {
  //     setIsOpen(false); 
  //     setIsAnimatingOut(false);
  //   }, 705);
  // };

  // const handleAnimationComplete = () => {
  //   console.log('handleAnimationComplete called');
  //   // Adjust logic here if needed, based on the new approach
  // };

  // 4. at the end of the animation it think isOpen is still true, so this doesn't work
  // const handleAnimationComplete = () => {
  //   if (!isOpen) { // Adjusted condition to check if the modal is closed
  //       setIsAnimatingOut(false);
  //   }
  //   console.log('handleAnimationComplete called');
  // };

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

  // useEffect(() => {
  //   if (isOpen) {
  //       if (dragRef.current) {
  //         setScale(2.5);
  //       }
  //   } else {
  //     setScale(1); 
  //   }
  // }, [isOpen, isMobile]); 

  useEffect(() => {
    if (isOpen && !isMobile) {
      setTimeout(() => {
        if (dragRef.current) {
          setScale(1.01);
        }
      }, 300);
    }
  }, [isOpen, isMobile]);

  useEffect(() => {
    return () => {
      if (touchTimeout) clearTimeout(touchTimeout);
    };
  }, []);

  // useEffect(() => {
  //   if (initialScale !== undefined) {
  //     const scaleTimeout = setTimeout(() => {
  //       setScale(initialScale)
  //     }, 300); 

  //     // Cleanup function to clear the timeout
  //     return () => clearTimeout(scaleTimeout);
  //   }
  // }, [initialScale]);

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
        newScale = Math.max(0.66, Math.min(newScale, 5));
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
      if (scale > 0.65 && scale < 0.8 && wasPinching && !isAnimatingIn && !isAnimatingOut) {
        closeModal();
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
    const newScale = Math.max(0.66, Math.min(scale * Math.exp(scaleChange), 5));
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

    if (newScale > 0.65 && newScale < 0.72 && !isAnimatingIn && !isAnimatingOut) {
      setTimeout(() => {
        closeModal()
        if (modalRef.current) {
          modalRef.current.style.transform = 'scale(1)';
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isAnimatingIn && !isAnimatingOut) {
        setTimeout(() => { closeModal(); }, 300);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isAnimatingIn, isAnimatingOut, closeModal]);

  const incrementalIncreaseScale = () => {
    // setScale(scale);
    setScale(prevScale => Math.min(5, prevScale + 0.1));
  };

  const incrementalDecreaseScale = () => {
    setScale(prevScale => Math.max(0.5, prevScale - 0.1));
  };

  const startScaling = (increase = true) => {
    stopScaling();
    const id = setInterval(() => {
      if (increase) {
        incrementalIncreaseScale();
      } else {
        incrementalDecreaseScale();
      }
    }, 50) as unknown as number;
    setZoomIntervalId(id);
  };

  const stopScaling = () => {
    if (zoomIntervalId !== null) {
      clearInterval(zoomIntervalId);
      setZoomIntervalId(null);
    }
  };

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

  interface NextImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number | `${number}` | undefined;
    height?: number | `${number}` | undefined;
    fill?: boolean | undefined;
    quality?: number | `${number}` | undefined;
    priority?: boolean | undefined;
    loading?: "eager" | "lazy" | undefined;
    blurDataURL?: string | undefined;
    unoptimized?: boolean | undefined;
    layout?: string | undefined;
    objectFit?: string | undefined;
    objectPosition?: string | undefined;
    lazyBoundary?: string | undefined;
    lazyRoot?: string | undefined;
  }
  // console.log('Scale:', scale, initialScale)

  const modalImage = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="cloneWrapper"
          key="cloneWrapper"
          className="z-[101] absolute flex items-center justify-center w-full select-none"
          initial={{ opacity: 1 }}
        >
          <motion.div
            id="cloneDragContainer"
            key="cloneDragContainer"
            className="z-[99] cursor-move touch-none select-none"
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationComplete}
            ref={dragRef}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            style={{ scale, zIndex: 101 }}
            dragMomentum={false}
            dragConstraints={{
              top: constraints.top,
              bottom: constraints.bottom,
              right: constraints.right,
              left: constraints.left,
            }}
            {...(isMobile ? mobileProps : {})}
            {...(!isMobile ? nonTouchProps : {})}
          >
            {React.Children.map(children, (child) => {
              if (
                React.isValidElement(child) &&
                child.props.hasOwnProperty('layoutId')
              ) {
                const nextImage = React.Children.only(child.props.children);
                const props = nextImage.props as NextImageProps;
                if (
                  React.isValidElement(nextImage) &&
                  props.hasOwnProperty('src')
                ) {

                  const originalWidth = Number(props.width) || 0;
                  const originalHeight = Number(props.height) || 0; 
                  const aspectRatio = originalWidth / originalHeight;

                  const desiredWidth = isOpen && isMobile ? 768 : 1300;
                  const desiredHeight = Math.round(desiredWidth / aspectRatio);

                  const additionalProps = {
                    ...props,
                    width: desiredWidth,
                    height: desiredHeight,
                    // fill: true,
                    // className: `${props.className || ''} ${additionalClass}`,
                  };

                  const clonedMotionDiv = React.cloneElement(nextImage, additionalProps);
                  return React.cloneElement(child, { ...child.props }, clonedMotionDiv);
                }
              }
              return child;
            })}
            {/* {React.Children.map(children, (child) => {
              if (
                React.isValidElement(child) &&
                child.props.hasOwnProperty('layoutId')
              ) {
                const nextImage = React.Children.only(child.props.children);
                const props = nextImage.props as NextImageProps;
                if (
                  React.isValidElement(nextImage) &&
                  props.hasOwnProperty('src')
                ) {
                  // const additionalClass = isOpen && isMobile ? '!w-[900px] !h-auto' : '!w-[1200px] !h-auto !object-contain !top-[unset] !left-[unset] !right-[unset]';
                  const additionalProps = {
                    ...props,
                    // className: `${props.className || ''} ${additionalClass}`,
                  };
                  const clonedMotionDiv = React.cloneElement(nextImage, additionalProps);
                  return React.cloneElement(child, { ...child.props }, clonedMotionDiv);
                }
              }
              return child;
            })} */}
          </motion.div>

          {/* Actions Flexbox */}
          <motion.div className="fixed bottom-6 w-full flex items-center justify-between z-[9999] touch-none select-none">
            {/* Close Actions */}
            <motion.div
              className="fixed w-full h-[64px] px-6 flex flex-row items-center justify-end bottom-6 md:top-6 z-[9999] text-xl select-none"
            >
              <motion.div className="" key="301"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { type: "spring", stiffness: 70, delay: 0.3, duration: 0.4 } }}
                exit={{ scale: 0, transition: { type: "spring", stiffness: 70, duration: 0.3 } }}
                whileHover={{ scale: 0.95, y: 0 }}
                whileTap={{ scale: 0.85, y: 0 }}
              >
                <button
                  id="closeButton"
                  onClick={closeModal}
                  tabIndex={3}
                  className={`${buttonColor} relative select-none touch-none top-0 left-0 z-[999] hover:bg-blurple-700 text-ice-900 dark:text-ice-900 overflow-hidden transform-gpu transition-bg duration-200 hover:shadow-lg inline-flex items-center justify-center rounded-full text-xl font-semibold tracking-tight shadow-lg focus:outline-none w-[64px] h-[64px]`}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
            {/* Magnify Actions */}
            <motion.div
              className="fixed w-auto md:w-full align-start h-[64px] px-8 flex flex-row items-center justify-start md:justify-center gap-4 bottom-6 z-[9999] text-xl"
            >
              <motion.div className="" key="300"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { type: "spring", stiffness: 70, delay: 0.4, duration: 0.3 } }}
                exit={{ scale: 0, transition: { type: "spring", stiffness: 70, duration: 0.3 } }}
                whileHover={{ scale: 0.95, y: 0 }}
                whileTap={{ scale: 0.85, y: 0, className: "bg-blurple-500" }}
              >
                <button
                  id="decreaseScaleButton"
                  onClick={incrementalDecreaseScale}
                  onMouseDown={() => startScaling(false)}
                  onMouseUp={stopScaling}
                  onMouseLeave={stopScaling}
                  onTouchStart={() => startScaling(false)}
                  onTouchEnd={stopScaling}
                  tabIndex={2}
                  className="relative select-none touch-none border border-midnight-900 dark:border-ice-900 bg-midnight-900/5 dark:bg-midnight-900/10 backdrop-blur-[20px] text-midnight-900 dark:text-ice-900 overflow-hidden transform-gpu transition-bg duration-200 hover:shadow-lg inline-flex items-center justify-center rounded-full text-xl font-extrabold tracking-tight shadow-[0_4px_16px_rgba(15,23,42,0.16)] drop-shadow-[3px_3px_2px_rgba(15,23,42,0.08)] focus:outline-none w-[64px] h-[64px]"
                >
                  -
                </button>
              </motion.div>
              <motion.div className="" key="302"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { type: "spring", stiffness: 70, delay: 0.2, duration: 0.5 } }}
                exit={{ scale: 0, transition: { type: "spring", stiffness: 70, duration: 0.3 } }}
                whileHover={{ scale: 0.95, y: 0 }}
                whileTap={{ scale: 0.85, y: 0 }}
              >
                <button
                  id="increaseScaleButton"
                  onClick={incrementalIncreaseScale}
                  onMouseDown={() => startScaling(true)}
                  onMouseUp={stopScaling}
                  onMouseLeave={stopScaling}
                  onTouchStart={() => startScaling(true)}
                  onTouchEnd={stopScaling}
                  tabIndex={1}
                  className="relative select-none touch-none border border-midnight-900 dark:border-ice-900 bg-midnight-900/5 dark:bg-midnight-900/10 backdrop-blur-[20px] z-[999] text-midnight-900 dark:text-ice-900 overflow-hidden transform-gpu transition-bg duration-200 hover:shadow-lg inline-flex items-center justify-center rounded-full text-xl font-extrabold tracking-tight shadow-[0_4px_16px_rgba(15,23,42,0.16)] drop-shadow-[3px_3px_2px_rgba(15,23,42,0.08)] focus:outline-none w-[64px] h-[64px]"
                >
                  +
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
          {!isMobile && (
            <motion.div id="modalHelper"
              className="fixed top-8 self-center px-4 py-2 rounded-full flex justify-center items-center bg-midnight-900/10 backdrop-blur-[20px] z-[98] display-visible md:display-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <div id="modalHelper-text" className="text-base tracking-tight font-light text-center text-midnight-700 dark:text-ice-500">
                <span>scroll/pinch to zoom</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )

  const modalOverlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="blurModal"
          key="blurModal"
          ref={modalRef}
          className="flex flex-col items-center justify-center rounded-4xl overflow-hidden backdrop-blur-[14px] select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
          onWheel={handleWheel}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: overlayBackgroundColor,
            zIndex: 99,
          }}
        >
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {/* ORIGINAL IMAGE */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="ZoomyImage"
            onClick={openModal}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
            // onAnimationStart={handleAnimationStart}
            // onAnimationComplete={handleAnimationComplete}
            className="w-auto h-full select-none"
            style={{ cursor: 'pointer' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      {/* CLONED IMAGE IN MODAL */}
      {isMounted && (isOpen || isAnimatingOut) && modalRoot && ReactDOM.createPortal(
        <>
          <motion.div key="modalImageWrapper"
            className={`fixed top-0 left-0 w-full h-full z-[999] flex items-center justify-center transform-gpu select-none ${!isOpen ? 'pointer-events-none' : ''}`}
          // onAnimationStart={handleAnimationStart}
          // onAnimationComplete={handleAnimationComplete}
          >
            {modalOverlay}
            {modalImage}
          </motion.div>
        </>,
        modalRoot
      )}
    </>
  );
};

export default Zoomy;