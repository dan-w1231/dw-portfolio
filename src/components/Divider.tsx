interface Props {
  className?: string;
}

export function Divider({ className }: Props) {
  return (
    <svg 
      aria-hidden="false"
      width="2" 
      height="32" 
      viewBox="0 0 2 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} >
        <path d="M1.03125 32V0" stroke="white" strokeOpacity="0.08" strokeWidth="0.5"/>
        <path d="M1.53125 32V0" stroke="black" strokeOpacity="0.12" strokeWidth="0.5"/>
    </svg>
  )
}