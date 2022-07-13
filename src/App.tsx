import Navbar from "./layouts/navbar/Navbar"
import Sidebar from "./layouts/sidebar/Sidebar"
import Content from "./layouts/Content"
import { useTheme } from "./contexts/theme-context/ThemeContext"
import { ThemeEnum } from "./contexts/theme-context/ThemeType"

function App() {
  const { theme } = useTheme()
  const themeFromSession = window.localStorage.getItem('theme')

  return (
    <div className={themeFromSession ? themeFromSession : theme}>
      <Navbar/>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default App
