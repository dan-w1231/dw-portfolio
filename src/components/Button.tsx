import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useMotionValue, useSpring } from 'framer-motion';

declare module 'react' {
  interface CSSProperties {
    '--x'?: string;
    '--y'?: string;
  }
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & { variant?: 'primary' | 'secondary' };

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
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

  const baseClasses = 'relative overflow-hidden transform-gpu transition-all ease-in-out duration-300 hover:shadow-lg inline-flex items-center min-w-[108px] md:max-w-[248px] justify-center rounded-full py-4 px-8 text-lg font-semibold tracking-tight shadow-lg focus:outline-none h-[64px]';
  const primaryClasses = 'bg-primaryGrad text-white';
  const secondaryClasses = 'bg-white/60 hover:bg-white/90 text-blurple border-2 border-blurple';

  const shineBaseClasses = clsx('absolute inset-0 bg-white bg-opacity-40 pointer-events-none transition-opacity duration-300', { 'opacity-0': !isMouseOver });
  // If primary button use primary, if secondary button use secondary
  const shinePrimaryClasses = 'radial-gradient(circle 220px at var(--x) var(--y), rgba(36,250,199,0.4) 0%, rgba(36,250,199,0))'
  const shineSecondaryClasses = 'radial-gradient(circle 100px at var(--x) var(--y), rgba(168, 147, 255, 0.6) 0%, rgba(255, 216, 157, 0.6))';

  const textClasses = 'relative pointer-events-none z-20';

  return (
    <button
      ref={setElement}
      className={clsx(baseClasses, variant === 'primary' ? primaryClasses : secondaryClasses, className)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className={textClasses}>{props.children}</span>
      <span className={shineBaseClasses} style={{ background: variant === 'primary' ? shinePrimaryClasses : shineSecondaryClasses }}></span>
    </button>
  );
}