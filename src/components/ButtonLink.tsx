import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useMotionValue, useSpring } from 'framer-motion';

declare module 'react' {
  interface CSSProperties {
    '--x'?: string;
    '--y'?: string;
  }
}

type ButtonLinkProps = React.ComponentPropsWithoutRef<'a'> & { href: string, target?: string, variant?: 'primary' | 'secondary' };

export function ButtonLink({ className, href, target, variant = 'primary', ...props }: ButtonLinkProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement|HTMLAnchorElement>) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    const unsubscribeX = springX.on("change", value => {
      if (element) {
        element.style.setProperty('--x', `${value}px`);
      }
    });
  
    const unsubscribeY = springY.on("change", value => {
      if (element) {
        element.style.setProperty('--y', `${value}px`);
      }
    });
  
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [element, springX, springY]);

  const baseClasses = 'relative overflow-hidden transform-gpu transition-all ease-in-out duration-300 hover:scale-98 hover:shadow-lg inline-flex min-w-[108px] md:max-w-[248px] justify-center rounded-full text-lg font-semibold tracking-tight shadow-xl dark:shadow-xlD focus:outline-none h-[64px]';
  const primaryClasses = 'bg-primaryGrad text-white';
  const secondaryClasses = 'bg-white/10 dark:transparent dark:bg-midnight-900/20 hover:bg-white/20 text-blurple-900 border active:border-2 border-blurple-900 h-[64px] rounded-full backdrop-blur-[100px]';

  const shineBaseClasses = clsx('absolute inset-0 bg-white bg-opacity-40 pointer-events-none transition-opacity duration-300', { 'opacity-0': !isMouseOver });
  // If primary button use primary, if secondary button use secondary
  const shinePrimaryClasses = 'radial-gradient(circle 220px at var(--x) var(--y), rgba(36,250,199,0.4) 0%, rgba(36,250,199,0))'
  const shineSecondaryClasses = 'radial-gradient(circle 100px at var(--x) var(--y), rgba(4, 30, 255, 0.2) 0%, rgba(4, 30, 255, 0))';

  const textClasses = 'relative pointer-events-none w-full h-full flex items-center justify-center z-20';

  return (
    <div
      ref={setElement}
      className={clsx(baseClasses, variant === 'primary' ? primaryClasses : secondaryClasses, className)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} target={target} className="w-full h-full">
        <span className={textClasses}>{props.children}</span>
        <span className={shineBaseClasses} style={{ background: variant === 'primary' ? shinePrimaryClasses : shineSecondaryClasses }}></span>
      </Link>
    </div>
  );
}