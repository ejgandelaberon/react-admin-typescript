import { ThemeButton } from '../components/buttons/Button'
import Toolbar from '../components/Toolbar'
import { useTheme } from '../contexts/theme-context/ThemeContext'

type Props = {}

const Settings = (props: Props) => {
  const {defaultTheme, redTheme, emeraldTheme} = useTheme()
  return (
    <>
      <Toolbar pageName='Settings'/>
      <div className='flex flex-row items-center gap-2'>
        <header className='font-semibold'>Theme Selector:</header>
        <div className='flex gap-2'>
          <ThemeButton handleClick={defaultTheme} className={'theme-dark-orange'}/>
          <ThemeButton handleClick={redTheme} className={'theme-red'}/>
          <ThemeButton handleClick={emeraldTheme} className={'theme-emerald'}/>
        </div>
      </div>
    </>
  )
}

export default Settings