import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'transform-gpu transition-all ease-in-out duration-300 hover:scale-98 hover:shadow-md inline-flex min-w-[108px] md:max-w-[336px] justify-center rounded-full py-4 px-8 text-lg font-semibold tracking-tight shadow-lg focus:outline-none',
  outline:
    'inline-flex min-w-[130px] shadow-lg justify-center rounded-full py-3 px-8 items-center border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-lg font-semibold tracking-tight focus:outline-none',
}

const variantStyles = {
  solid: {
    slate: 
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900',
    blue: 
      'bg-blue-600 text-white box-border hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-blue-600',
    primaryGrad: 
      'bg-primaryGrad text-white box-border hover:from-blue-600 from-0% hover:bg-[#5768FF] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-blue-100 active:border-1 active:border-[#4756E2] disabled:opacity-30 disabled:hover:bg-blue-600',
    secondaryGrad: 
      'border border-slate-400 bg-gradient-to-t from-slate-400 from-0% via-slate-300 via-90% to-slate-200 text-midnight-900 hover:from-slate-400 from-0% hover:to-slate-300 to-100% focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-100 active:bg-blue-700 active: bg-blue-400 disabled:opacity-30 disabled:hover:bg-blue-600',
    white:
      'bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600',
  },
  outline: {
    slate:
      'border-slate-200 text-midnight-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-midnight-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent',
    blue: 
      'border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:text-blue-600/70 disabled:opacity-40 disabled:hover:border-blue-300 disabled:hover:bg-transparent',
  },
}

type VariantKey = keyof typeof variantStyles
type ColorKey<Variant extends VariantKey> =
  keyof (typeof variantStyles)[Variant]

type ButtonProps<
  Variant extends VariantKey,
  Color extends ColorKey<Variant>,
> = {
  variant?: Variant
  color?: Color
} & (
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
  | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })
)

export function Button<
  Color extends ColorKey<Variant>,
  Variant extends VariantKey = 'solid',
>({ variant, color, className, ...props }: ButtonProps<Variant, Color>) {
  variant = variant ?? ('solid' as Variant)
  color = color ?? ('gradient' as Color)

  // THIS IS HOW IT WAS
  // className = clsx(
  //   baseStyles[variant],
  //   variantStyles[variant][color],
  //   className,
  // )
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className,
  )


  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
