type Props = {
  name?: string
  type?: string
  theme?: string
  className?: string
  handleClick?: () => void
}

export const Button = ({type='primary', name='Button', ...props}: Props) => {
  const checkType = (t: string) => {
    if (t === 'primary') return 'bg-btn-pry hover:bg-btn-pry_hover'
    if (t === 'secondary') return 'bg-btn-sec hover:bg-btn-sec_hover'
    if (t === 'info') return 'bg-btn-info hover:bg-btn-info_hover'
    if (t === 'warn') return 'bg-btn-warn hover:bg-btn-warn_hover'
    if (t === 'danger') return 'bg-btn-dng hover:bg-btn-dng_hover'
  }
  return (
    <button onClick={props.handleClick} className={`${checkType(type)} text-btn-main px-4 py-2 shadow-md rounded-lg leading-snug whitespace-nowrap text-base`}>
      {name}
    </button>
  )
}

export const ThemeButton = ({className, handleClick}: Props) => {
  return (
    <button onClick={handleClick} className={`${className} h-10 w-10 shadow-md rounded-full leading-snug whitespace-nowrap text-base bg-nav-main text-nav-main hover:text-nav-hover`}>
    T
    </button>
  )
}