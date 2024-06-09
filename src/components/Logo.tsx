interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <svg 
    aria-hidden="true"
    width="50" 
    height="23" 
    viewBox="0 0 50 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className} >
      <path fill="currentColor"
            d="m22.608 9.2 1.63 5.537h.828l3.125-9.712h-1.869V0h7.629l5.27 14.737 3.331-9.712h-1.175V0H49.147l-7.782 22.672h-4.29L31.899 8.364H31.5l-4.933 14.308H22.37l-2.022-6.311 2.26-7.16Z" />
      <path fill="currentColor"
            fillRule="evenodd"
            d="M1.758 5.151v17.777h9.865c6.349 0 12.796-6.202 11.038-13.528C20.902 2.075 15.237.22 11.623.22H0V5.15h1.758Zm4.933-.584v13.918h3.565c3.79 0 7.318-2.003 7.318-7.257 0-4.981-4.242-6.661-7.318-6.661H6.69Z"
            clipRule="evenodd" />
    </svg>
  )
}
