import { NavLink } from 'react-router-dom'
import sidebarItems from './sidebarItems'

type Props = {}

const SidebarContent = (props: Props) => {
  return (
    <div className='mt-6 flex flex-wrap gap-2'>
      {sidebarItems.map((item, index) => (
        <NavLink key={index} to={item.path}
          className={'w-full flex gap-x-4 items-center p-2 mx-2 rounded-md focus:outline-none hover:bg-nav-hover'}>
          <span className='pointer-events-none'>{item.icon}</span>
          {item.title}
        </NavLink>
      ))}
    </div>
  )
}

export default SidebarContent