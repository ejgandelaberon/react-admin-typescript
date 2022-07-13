import { ThemeButton } from '../components/buttons/Button'
import Toolbar from '../components/Toolbar'
import { useTheme } from '../contexts/theme-context/ThemeContext'
import { ThemeEnum } from "../contexts/theme-context/ThemeType"

type Props = {}

const Settings = (props: Props) => {
  const {restoreDefault, updateTheme} = useTheme()
  return (
    <>
      <Toolbar pageName='Settings'/>
      <div className='flex flex-row items-center gap-2'>
        <header className='font-semibold'>Theme Selector:</header>
        <div className='flex flex-wrap gap-2'>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.DARK_ORANGE)} className={ThemeEnum.DARK_ORANGE}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.RED)} className={ThemeEnum.RED}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.EMERALD)} className={ThemeEnum.EMERALD}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.PASTEL)} className={ThemeEnum.PASTEL}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.NEON)} className={ThemeEnum.NEON}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.GOLD)} className={ThemeEnum.GOLD}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.VINTAGE)} className={ThemeEnum.VINTAGE}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.DARK)} className={ThemeEnum.DARK}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.COLD)} className={ThemeEnum.COLD}/>
          <ThemeButton handleClick={() => updateTheme(ThemeEnum.SAKURA)} className={ThemeEnum.SAKURA}/>
          {/* <ThemeButton handleClick={() => updateTheme('theme-test')} className={'theme-test'}/> */}
        </div>
      </div>
    </>
  )
}

export default Settings