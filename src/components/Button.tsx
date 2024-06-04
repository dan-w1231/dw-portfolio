import { useState } from 'react';
import clsx from 'clsx';
declare module 'react' {
  interface CSSProperties {
    '--x'?: string;
    '--y'?: string;
  }
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function Button({ className, ...props }: ButtonProps) {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setGradientPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const baseClasses = 'relative text-white overflow-hidden transform-gpu transition-all ease-in-out duration-300 hover:scale-98 hover:shadow-md inline-flex min-w-[108px] md:max-w-[336px] justify-center rounded-full py-4 px-8 text-lg font-semibold tracking-tight shadow-lg focus:outline-none bg-primaryGrad';
  const shineClasses = clsx('absolute inset-0 bg-white bg-opacity-40 pointer-events-none transition-opacity duration-300', { 'opacity-0': !isMouseOver });
  const textClasses = 'relative pointer-events-none z-20';

  return (
    <button
      className={clsx(baseClasses, className)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ '--x': `${gradientPosition.x}px`, '--y': `${gradientPosition.y}px` }}
      {...props}
    >
      <span className={textClasses}>{props.children}</span>
      <span className={shineClasses} style={{ background: `radial-gradient(circle 220px at var(--x) var(--y), rgba(36,250,199,0.4) 0%, rgba(36,250,199,0) 70%)` }}></span>
    </button>
  );
}