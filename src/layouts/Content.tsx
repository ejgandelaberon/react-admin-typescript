import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Reports from '../pages/Reports'
import Settings from '../pages/Settings'

type Props = {}

const Content = (props: Props) => {
  return (
    <div className="fixed h-[calc(100vh-72px)] w-[calc(100vw-240px)] right-0 bottom-0">
      <div className="m-8 p-8 h-[calc(100%-64px)] w-[calc(100%-62px)] border-dashed border-[10px] border-nav-main rounded-lg">
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='reports' element={<Reports/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Content