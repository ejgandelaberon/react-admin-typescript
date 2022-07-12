import Navbar from "./layouts/navbar/Navbar"
import Sidebar from "./layouts/sidebar/Sidebar"
import Content from "./layouts/Content"
import { useTheme } from "./contexts/theme-context/ThemeContext"

function App() {
  const {theme} = useTheme()
  // const theme = 'theme-test'

  return (
    <div className={theme}>
      <Navbar/>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default App
