interface BulletTagProps extends React.ComponentPropsWithoutRef<'h2'> {
  bulletPoint?: boolean;
}

export function BulletTag({
  children,
  className,
  bulletPoint = true,
  ...props
}: BulletTagProps) {
  return (
    <div
      id="bulletTag"
      className="relative flex align-center bg-ice-900/60 dark:bg-ice-900/10 transition-bg duration-900 py-3 px-4 pr-5 rounded-full inline-block shadow-lg"
    >
      <div
        id="Tag"
        className="flex flex-row no-wrap justify-start items-center"
      >
        {bulletPoint && ( 
          <span className="mr-2 text-base leading-6 text-blurple-900 dark:text-blurple-500 font-medium tracking-tight self-start">
            •
          </span>
        )}
        <span className="text-base leading-6 text-blurple-900 dark:text-blurple-500 font-medium tracking-tight">
          {children}
        </span>
      </div>
    </div>
  )
}
