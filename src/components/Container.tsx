import clsx from 'clsx'

const styles = {
  xs: 'mx-2 sm:px-6 md:max-w-2xl md:px-2 lg:px-2',
  sm: 'flex flex-col items-center mx-2 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12',
  // ORIGINALLY USING PX NOT MX ON X-AXIS
  // sm: 'flex flex-col items-center mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12',
  md: 'flex flex-col items-center mx-2 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8',
  lg: 'flex flex-col items-center px-2 xs:px-4',
}

export function Container({
  size = 'sm',
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { size?: keyof typeof styles }) {
  return <div className={clsx(styles[size], className)} {...props} />
}
