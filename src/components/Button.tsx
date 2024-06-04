import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useMotionValue, useSpring } from 'framer-motion';

declare module 'react' {
  interface CSSProperties {
    '--x'?: string;
    '--y'?: string;
  }
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function Button({ className, ...props }: ButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [element, setElement] = useState<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    const unsubscribeX = springX.onChange(value => {
      if (element) {
        element.style.setProperty('--x', `${value}px`);
      }
    });

    const unsubscribeY = springY.onChange(value => {
      if (element) {
        element.style.setProperty('--y', `${value}px`);
      }
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [element, springX, springY]);

  const baseClasses = 'relative text-white overflow-hidden transform-gpu transition-all ease-in-out duration-300 hover:scale-98 hover:shadow-md inline-flex items-center min-w-[108px] md:max-w-[336px] justify-center rounded-full py-4 px-8 text-lg font-semibold tracking-tight shadow-lg focus:outline-none bg-primaryGrad h-[64px]';
  const shineClasses = clsx('absolute inset-0 bg-white bg-opacity-40 pointer-events-none transition-opacity duration-300', { 'opacity-0': !isMouseOver });
  const textClasses = 'relative pointer-events-none z-20';

  return (
    <button
      ref={setElement}
      className={clsx(baseClasses, className)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className={textClasses}>{props.children}</span>
      <span className={shineClasses} style={{ background: `radial-gradient(circle 220px at var(--x) var(--y), rgba(36,250,199,0.4) 0%, rgba(36,250,199,0) 70%)` }}></span>
    </button>
  );
}